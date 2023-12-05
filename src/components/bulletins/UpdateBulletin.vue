<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="nom" class="form-label">Nom</label>
                <input v-model="etudiant.nom" type="text" class="form-control" id="nom">
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Prenom</label>
                <input v-model="etudiant.prenom" type="text" class="form-control" id="prenom">
            </div>
            <div class="mb-3">
                <label for="naissance" class="form-label">Date de naissance</label>
                <input v-model="etudiant.dateDeNaissance" type="date" class="form-control" id="naissance">
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input v-model="etudiant.email" type="email" class="form-control" id="email">
            </div>
            <div class="mb-3">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input v-model="etudiant.motDePasse" type="password" class="form-control" id="mdp">
            </div>
            <button type="submit" class="btn btn-primary">Mettre a jour</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const { id } = route.params

const router = useRouter()
const etudiant = ref({})

import useEtudiant from '../../services/serviceEtudiant';
const { getEtudiantById, mettreAJourEtudiant } = useEtudiant()

onBeforeMount(() => {
    if (id) getEtudiantById(id).then(data => {
        etudiant.value = data
    }).catch(err => console.log('erreur mise a jour', err))
})

const mettreAJour = () => {
    mettreAJourEtudiant(id, etudiant.value).then(() => {
        router.push('/')
    }).catch(err => console.log('Probleme lors de la mise a jour', err))
}
</script>

<style lang="scss" scoped></style>