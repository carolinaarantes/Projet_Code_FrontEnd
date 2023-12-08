<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="photo" class="form-label">Photo</label>
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
                <input v-model="utilisateur.dateNaissance" type="date" class="form-control" id="naissance">
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
                <input v-model="utilisateur.motPasse" type="password" class="form-control" id="mdp">
            </div>
            <button type="submit" class="btn btn-primary" @click="soumettre">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useUtilisateur from '../../services/serviceUtilisateur';
const router = useRouter()
const { ajouterUtilisateur } = useUtilisateur()

const utilisateur = ref({
    photo: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    telephone: '',
    email: '',
    motDePasse: ''
})

const soumettre = () => {
    console.log('utilisateur', utilisateur.value)
    ajouterUtilisateur(utilisateur.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Problème lors de l'ajout de l'utilisateur", err))
}
</script>

<style lang="scss" scoped></style>