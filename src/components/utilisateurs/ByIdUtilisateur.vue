<template>
    <div>
        <!-- Zone de recherche -->
        <div>
            <form class="d-flex" role="search">
                <label for="userId">Entrez l'ID de l'utilisateur à rechercher:</label>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button @click="rechercherProfil" class="btn btn-primary">Rechercher</button>
            </form>
        </div>

        <!-- Affichage du profil -->
        <div v-if="utilisateur">
            <img v-if="utilisateur.photo" :src="utilisateur.photo" alt="Profile Photo" width="80" height="80" />
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>

            <div>
                <div v-if="!peuxAccederProfil">
                    <p>Vous n'avez pas le droit de voir ce profil.</p>
                </div>
                <div v-else>
                    <h1>Profil de {{ utilisateur.nom }} {{ utilisateur.prenom }}</h1>
                    <p>Biographie</p>
                    <div>Email: {{ utilisateur.email }}</div>
                    <div>Telephone: {{ utilisateur.telephone }}</div>
                    <div>Date de naissance: {{ utilisateur.dateDeNaissance }}</div>
                </div>
            </div>
        </div>
        <div>
            <button class="btn btn-primary">Modifier</button>
            <button class="btn btn-primary">Supprimer</button>
        </div>
        
        <!-- Message d'erreur pour utilisateur non connecté -->
        <div >
            <p></p>
        </div>
        <div v-if="!utilisateurEstConnecter" class="alert alert-warning" role="alert">
           <p>Veuillez vous connecter pour accéder à cette fonctionnalité.</p> 
            <a href="/login" class="alert-link">Se connecter</a>
        </div>
    <div class="detail">
        <h1 style="margin-left: 5vw;">Profil de {{ utilisateur.photo }} {{ utilisateur.nom }} {{ utilisateur.prenom }}</h1> <!--avec photo?-->
        <p style="margin-left: 5vw;">Biographie</p>        
        <div style="margin-left: 5vw;">Email: {{ utilisateur.email }}</div>
        <div style="margin-left: 5vw;">Telephone: {{ utilisateur.telephone }}</div>
        <div style="margin-left: 5vw;">Date de naissance: {{ utilisateur.dateDeNaissance }}</div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount, computed } from 'vue';

// Recuperer les variable de chemin
import { useRoute } from 'vue-router';

// Fonction/Service qui permet de recuperer un utilisateur depuis la base de donnees
import useUtilisateur from '../../services/serviceUtilisateur';

const route = useRoute()
const { id } = route.params
const utilisateur = ref({})
const isAdmin = ref(true);
const peuxAccederProfil = ref(true);
const userId = ref(''); // Nouveau champ pour l'ID de l'utilisateur

const { getUtilisateurById } = useUtilisateur()

const rechercherProfil = async () => {
   /* if (!estAuthentifier()) {
        return
    }*/

    try {
        const data = await getUtilisateurById(userId.value);
        utilisateur.value = data;
        isAdmin.value = utilisateur.value.role === 'administration';
        peuxAccederProfil.value = isAdmin.value;
    } catch (err) {
        console.error('Erreur pendant la recherche du profil', err);
    }
};

const allerUpdateUtilisateur = async()=>{

}

onBeforeMount(() => {
    if (id) {
        rechercherProfil();
    }
});

//const utilisateurEstConnecter = computed(() => estAuthentifier());

</script>


<style scoped></style>