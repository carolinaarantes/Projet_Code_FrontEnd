<template>
    <div class="detail">
        <h1 style="margin-left: 5vw;">Programme</h1> 
        <div style="margin-left: 5vw;">Nom du programme: {{ programme.nomDuProgramme }}</div>
        <div style="margin-left: 5vw;">Date de debut: {{ programme.dateDeDebut }}</div>
        <div style="margin-left: 5vw;">Date de fin: {{ programme.dateDeFin }}</div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';

// Recuperer les variable de chemin
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('route', route)
const { id } = route.params

// Fonction/Service qui permet de recuperer un programme depuis la base de donnees
import useProgramme from '../../services/serviceProgramme';

const { getProgrammeById } = useProgramme()

const programme = ref({})

onBeforeMount(() => {

    if (id)
    getProgrammeById(id).then((data) => {
            console.log('programme', data)
            programme.value = data
        }).catch(err => console.log('Detail programme', err))

})

</script>

<style lang="scss" scoped></style>