<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID utilisateur</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Date de naissance</th>
                <th>Telephone</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <Utilisateur v-for="user in utilisateurs.Utilisateurs" :key="user.id" :utilisateur="user"
                @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAJouterUtilisateur">Ajouter un utilisateur</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount, defineProps } from 'vue';
import useUtilisateur from '../../services/serviceUtilisateur.js';
import { useRouter } from 'vue-router';
import useAuthStore from '../../stores/auth';
import Utilisateur from './Utilisateur.vue';
import { storeToRefs } from 'pinia';

const utilisateurs = ref({ Utilisateurs: [] })
const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const router = useRouter()
const { listeUtilisateurs, supprimerUtilisateur } = useUtilisateur()

onBeforeMount(() => {

    listeUtilisateurs().then(data => {

        utilisateurs.value = data

        console.log('Liste utilisateur', data)
    })
})


const supprimer = (id) => {

    console.log('emits', id)

    supprimerUtilisateur(id).then((data) => {

        console.log('suppression', data)

        listeUtilisateurs().then(data => {

            utilisateurs.value = data

            console.log('Liste utilisateur', data)

        }).catch(err => {
            console.log(err.message)
        })

    }).catch((error) => {
        console.error("Erreur lors de la suppression de l'utilisateur:", error);
    });

}

const allerAJouterUtilisateur = () => {
    router.push('/utilisateurs/ajout')
}
</script>

<style lang="scss" scoped></style>