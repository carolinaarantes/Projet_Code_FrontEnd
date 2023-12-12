<template>
    <form class="detail_user">
                <div class="row mb-2">
                    <label for="userId" class="col-md-2" style="white-space: nowrap; margin-left: 2vw;">Entrez l'ID de l'examen à rechercher:</label>
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
        <h1 style="margin-left: 5vw; margin-top: 2vw;">L'examen {{ examen.matiere }}</h1>
        <div style="margin-left: 5vw;">Date de l'examen: {{ examen.date_examen }}</div>
        <div style="margin-left: 5vw;">Horaire de début: {{ examen.horaire_de_debut }}</div>
        <div style="margin-left: 5vw;">Horaire de fin: {{ examen.horaire_de_fin }}</div>
        <div style="margin-left: 5vw;">Salle d'examen: {{ examen.salle_examen }}</div>

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
import useExamen from '../../services/serviceExamen';

const { getExamenById } = useExamen()

const examen = ref({})

onBeforeMount(() => {

    if (id)
        getExamenById(id).then((data) => {
            console.log('Examen', data)
            examen.value = data
        }).catch(err => console.log("Detail de l'examen", err))

})

</script>

<style lang="scss" scoped></style>