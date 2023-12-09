<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="matiere" class="form-label">Matière</label>
                <input v-model="examen.matiere" type="text" class="form-control" id="matiere">
            </div>
            <div class="mb-3">
                <label for="date_examen" class="form-label">Date de l'examen</label>
                <input v-model="examen.date_examen" type="date" class="form-control" id="date_examen">
            </div>
            <div class="mb-3">
                <label for="horaire_de_debut" class="form-label">Horaire de début</label>
                <input v-model="examen.horaire_de_debut" type="date" class="form-control" id="horaire_de_debut">
            </div>

            <div class="mb-3">
                <label for="horaire_de_fin" class="form-label">Horaire de fin</label>
                <input v-model="examen.horaire_de_fin" type="date" class="form-control" id="horaire_de_fin">
            </div>
            <div class="mb-3">
                <label for="salle_examen" class="form-label">Salle d'examen</label>
                <input v-model="examen.salle_examen" type="text" class="form-control" id="salle_examen">
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
const examen = ref({})

import useExamen from '../../services/serviceExamen';
const { getExamenById, updateExamen } = useExamen()

onBeforeMount(() => {
    if (id) getExamenById(id).then(data => {
        examen.value = data
    }).catch(err => console.log("Erreur de recherche de l'examen", err))
})

const mettreAJour = () => {
    updateExamen(id, examen.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de la mise a jour de l'examen", err))
}
</script>

<style lang="scss" scoped></style>