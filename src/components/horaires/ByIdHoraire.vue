<template>
    <div>
        <h1>Horaire</h1> 
        <div>Jour de la semaine: {{ horaire.jourDeSemaine }}</div>
        <div>Horaire de debut: {{ horaire.horaireDeDebut }}</div>
        <div>Horaire de fin: {{ horaire.horaireDeFin }}</div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';

// Recuperer les variable de chemin
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('route', route)
const { id } = route.params

// Fonction/Service qui permet de recuperer un horaire depuis la base de donnees
import useHoraire from '../../services/serviceHoraire';

const { getHoraireById } = useHoraire()

const horaire = ref({})

onBeforeMount(() => {

    if (id)
    getHoraireById(id).then((data) => {
            console.log('horaire', data)
            horaire.value = data
        }).catch(err => console.log('Detail horaire', err))

})

</script>

<style lang="scss" scoped></style>