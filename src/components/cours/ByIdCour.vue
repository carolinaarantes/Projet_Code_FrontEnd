<template>
    <div class="detail">
        <h1 style="margin-left: 5vw;">Cours de {{ cour.nom_du_cour }}</h1>
        <div style="margin-left: 5vw;">Salle de cours: {{ cour.salle_du_cours }}</div>
        <div style="margin-left: 5vw;">Crédits: {{ cour.credits }}</div>

    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';

// Recuperer les variable de chemin
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('route', route)
const { id } = route.params

// Fonction/Service qui permet de recuperer un etudiant depuis la base de donnees
import useCour from '../../services/serviceCour';

const { getCourById } = useCour()

const cour = ref({})

onBeforeMount(() => {

    if (id)
        getCourById(id).then((data) => {
            console.log('Cour', data)
            cour.value = data
        }).catch(err => console.log('Detail du cour', err))

})

</script>

<style lang="scss" scoped></style>