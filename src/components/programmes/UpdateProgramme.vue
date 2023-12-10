<template>
    <div>
        <form @submit.prevent="mettreAJour" style="height: 27vw; margin-left: 10vw;">
            <div class="mb-3">
                <label for="nomDuProgramme" class="form-label" style="margin-top: 2vw;">Nom du programme</label>
                <input v-model="programme.nomDuProgramme" type="text" class="form-control" id="nomDuProgramme" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="dateDeDebut" class="form-label">Date de debut</label>
                <input v-model="programme.dateDeDebut" type="date" class="form-control" id="dateDeDebut" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="dateDeFin" class="form-label">Date de fin</label>
                <input v-model="programme.dateDeFin" type="date" class="form-control" id="dateDeFin" style="width: 40vw;">
            </div>
            
            <button type="submit" class="btn btn-primary" style="margin-left: 5vw;">Mettre a jour</button>
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