<template>
    <div class="form">
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="jourDeSemaine" class="form-label">Jour de la semaine</label>
                <select v-model="horaire.jourDeSemaine" type="text" class="form-control" id="jourDeSemaine">
                    <option value="Lundi">Lundi</option>
                    <option value="Mardi">Mardi</option>
                    <option value="Mercredi">Mercredi</option>
                    <option value="Jeudi">Jeudi</option>
                    <option value="Vendredi">Vendredi</option>
                    <option value="Samedi">Samedi</option>
                    <option value="Dimanche">Dimanche</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="horaireDeDebut" class="form-label">Horaire de debut</label>
                <input v-model="horaire.horaireDeDebut" type="time" class="form-control" id="horaireDeDebut">
            </div>
            <div class="mb-3">
                <label for="horaireDeFin" class="form-label">Horaire de fin</label>
                <input v-model="horaire.horaireDeFin" type="time" class="form-control" id="horaireDeFin">
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
    }).catch(err => console.log("Erreur de recherche de horaire", err))
})

const mettreAJour = () => {
    updateHoraire(id, horaire.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de la mise a jour de l`horaire", err))
}
</script>

<style lang="scss" scoped></style>