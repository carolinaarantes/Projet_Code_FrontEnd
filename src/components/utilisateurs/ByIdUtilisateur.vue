<template>
    <div>
        <!-- Zone de recherche -->        
            <form class="detail_user" style="margin-top: -4vw;">
                <div class="row mb-2">
                    <label for="userId" class="col-md-2" style="white-space: nowrap; margin-left: 2vw;">Entrez l'ID de l'utilisateur à rechercher:</label>
                </div>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style="margin-left: 2vw;">
                    </div>
                    <div class="col-md-4">
                        <button @click="rechercherProfil" class="btn btn-primary" style="margin-left: 2vw;">Rechercher</button>
                    </div>
                </div>
            </form>     


        <!-- Affichage du profil -->
        <div v-if="utilisateur" style="margin-left: 2vw;">
            <img v-if="utilisateur.photo" :src="utilisateur.photo" alt="Profile Photo" width="80" height="80" />
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"
                class="bi bi-person-circle" viewBox="0 0 16 16" style="margin-top: 2vw;">
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
            <button class="btn btn-primary" style="margin-right: 2vw; margin-left: 2vw; margin-top: 1vw;">Modifier</button>
            <button class="btn btn-primary" style="margin-top: 1vw; margin-left: 2vw;">Supprimer</button>
        </div>
        
        <!-- Message d'erreur pour utilisateur non connecté -->
        <div >
            <p></p>
        </div>
        <div v-if="!utilisateurEstConnecter" class="alert alert-warning" role="alert">
           <p>Veuillez vous connecter pour accéder à cette fonctionnalité.</p> 
            <a href="/login" class="alert-link">Se connecter</a>
        </div>
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