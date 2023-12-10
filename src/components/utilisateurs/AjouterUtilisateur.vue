<template>
    <div>
        <form @submit.prevent="soumettre" style="height: 45vw; margin-left: 10vw;">
            <div class="mb-3">
                <label for="photo" class="form-label" style="margin-top: 2vw;">Photo</label>
                <input v-model="utilisateur.photo" type="text" class="form-control" id="photo" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input v-model="utilisateur.nom" type="text" class="form-control" id="nom" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Prenom</label>
                <input v-model="utilisateur.prenom" type="text" class="form-control" id="prenom" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="naissance" class="form-label">Date de naissance</label>
                <input v-model="utilisateur.dateNaissance" type="date" class="form-control" id="naissance" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="telephone" class="form-label">Telephone</label>
                <input v-model="utilisateur.telephone" type="tel" class="form-control" id="telephone" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="utilisateur.email" type="email" class="form-control" id="email" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input v-model="utilisateur.motPasse" type="password" class="form-control" id="mdp" style="width: 40vw;">
            </div>
            <button type="submit" class="btn btn-primary" style="margin-left: 5vw;" @click="soumettre">Ajouter</button>
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
    motPasse: ''
})

const soumettre = () => {
    console.log('utilisateur', utilisateur.value)
    ajouterUtilisateur(utilisateur.value).then(() => {
        router.push('/utilisateurs')
    }).catch(err => console.log("Problème lors de l'ajout de l'utilisateur", err))
}
</script>

<style lang="scss" scoped>

</style>