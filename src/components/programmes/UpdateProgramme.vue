<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="nomDuProgramme" class="form-label">Nom du programme</label>
                <input v-model="programme.nomDuProgramme" type="text" class="form-control" id="nomDuProgramme">
            </div>
            <div class="mb-3">
                <label for="dateDeDebut" class="form-label">Date de debut</label>
                <input v-model="programme.dateDeDebut" type="text" class="form-control" id="dateDeDebut">
            </div>
            <div class="mb-3">
                <label for="dateDeFin" class="form-label">Date de fin</label>
                <input v-model="programme.dateDeFin" type="text" class="form-control" id="dateDeFin">
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
const programme = ref({})

import useProgramme from '../../services/serviceProgramme';
const { getProgrammeById, updateProgramme } = useProgramme()

onBeforeMount(() => {
    if (id) getProgrammeById(id).then(data => {
        programme.value = data
    }).catch(err => console.log("Erreur de recherche du programme", err))
})

const mettreAJour = () => {
    updateProgramme(id, programme.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de la mise a jour du programme", err))
}
</script>

<style lang="scss" scoped></style>