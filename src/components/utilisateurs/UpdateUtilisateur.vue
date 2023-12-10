<template>
    <div>
        <form @submit.prevent="mettreAJour" style="height: 45vw; margin-left: 10vw;">
            <div class="mb-3">
                <label for="photo" class="form-label" style="margin-top: 2vw;">Photo</label>
                <input v-model="utilisateur.photo" type="text" class="form-control" id="photo">
            </div>
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input v-model="utilisateur.nom" type="text" class="form-control" id="nom">
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Prenom</label>
                <input v-model="utilisateur.prenom" type="text" class="form-control" id="prenom">
            </div>
            <div class="mb-3">
                <label for="naissance" class="form-label">Date de naissance</label>
                <input v-model="utilisateur.dateDeNaissance" type="date" class="form-control" id="naissance">
            </div>
            <div class="mb-3">
                <label for="telephone" class="form-label">Telephone</label>
                <input v-model="utilisateur.telephone" type="tel" class="form-control" id="telephone">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="utilisateur.email" type="email" class="form-control" id="email">
            </div>
            <div class="mb-3">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input v-model="utilisateur.motDePasse" type="password" class="form-control" id="mdp">
            </div>
            <button type="submit" class="btn btn-primary" style="margin-left: 5vw;">Mettre a jour</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const { id } = route.params

const router = useRouter()
const utilisateur = ref({})

// Variable pour stocker les erreurs de validations des champs
const errors = ref({
    nom: '',
    prenom: '',
    dateDeNaissance: '',
    telephone:'',
    email: '',
    motDePasse: ''
})

import useUtilisateur from '../../services/serviceUtilisateur';
const { getUtiliateurById, updateUtilisateur } = useUtilisateur()

onBeforeMount(() => {
    if (id) getUtilisateurById(id).then(data => {
        utilisateur.value = data
    }).catch(err => console.log("Erreur de recherche de l'utilisateur", err))
})

const mettreAJour = () => {

    //Ne pas soumettre le formulaire si tous les champs ne sont pas valides
    if(!valider(utilisateur.value)) return
    updateUtilisateur(id, utilisateur.value).then(() => {
        router.push('/utilisateurs/')
    }).catch(err => console.log("Probleme lors de la mise a jour de l'utilisateur", err))

}
</script>

<style lang="scss" scoped></style>