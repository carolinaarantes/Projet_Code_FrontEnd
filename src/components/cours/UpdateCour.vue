<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="nom_du_cour" class="form-label">Nom du cour</label>
                <input v-model="cour.nom_du_cour" type="text" class="form-control" id="nom_du_cour">
            </div>
            <div class="mb-3">
                <label for="salle_du_cours" class="form-label">Salle de cours</label>
                <input v-model="cour.salle_du_cours" type="text" class="form-control" id="salle_du_cours">
            </div>
            <div class="mb-3">
                <label for="credits" class="form-label">Credits</label>
                <input v-model="cour.credits" type="text" class="form-control" id="credits">
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
const cours = ref({})

import useCour from '../services/serviceCour';
const { getCourById, updateCour } = useCour()

onBeforeMount(() => {
    if (id) getCourById(id).then(data => {
        cours.value = data
    }).catch(err => console.log('Erreur avec la recherche du cour', err))
})

const mettreAJour = () => {
    updateCour(id, cours.value).then(() => {
        router.push('/')
    }).catch(err => console.log('Probleme lors de la mise a jour du cour', err))
}
</script>

<style lang="scss" scoped></style>