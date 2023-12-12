<template>
    <form class="detail_user">
                <div class="row mb-2">
                    <label for="userId" class="col-md-2" style="white-space: nowrap; margin-left: 2vw;">Entrez l'ID du cours à rechercher:</label>
                </div>
                <div class="row mb-2">
                    <div class="col-md-6">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style="margin-left: 2vw;">
                    </div>
                    <div class="col-md-4">
                        <button @click="rechercherProfil" class="btn btn-primary" style="margin-left: 2vw;">Rechercher</button>
                    </div>
                </div>
            </form>  

    <div>
        <h1 style="margin-left: 5vw; margin-top: 2vw;">Cours de {{ cour.nom_du_cour }}</h1>
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