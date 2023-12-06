<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="nom" class="form-label">Jour de la semaine</label>
                <input v-model="horaire.jourDeSemaine" type="text" class="form-control" id="jourDeSemaine">
            </div>
            <div class="mb-3">
                <label for="nom" class="form-label">Horaire de debut</label>
                <input v-model="horaire.horaireDeDebut" type="text" class="form-control" id="horaireDeDebut">
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Horaire de fin</label>
                <input v-model="horaire.horaireDeFin" type="text" class="form-control" id="horaireDeFin">
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
const horaire = ref({})

import useHoraire from '../../services/serviceHoraire';
const { getHoraireById, updateHoraire } = useHoraire()

onBeforeMount(() => {
    if (id) getHoraireById(id).then(data => {
        horaire.value = data
    }).catch(err => console.log('erreur mise a jour', err))
})

const mettreAJour = () => {
    updateHoraire(id, horaire.value).then(() => {
        router.push('/')
    }).catch(err => console.log('Probleme lors de la mise a jour', err))
}
</script>

<style lang="scss" scoped></style>