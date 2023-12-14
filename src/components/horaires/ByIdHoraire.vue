<template>
    <form class="detail_user">
                <div class="row mb-2">
                    <label for="userId" class="col-md-2" style="white-space: nowrap; margin-left: 2vw;">Entrez l'ID de l'horaire à rechercher:</label>
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
        <h1 style="margin-left: 5vw; margin-top: 2vw;">Horaire</h1> 
        <div style="margin-left: 5vw;">Jour de la semaine: {{ horaire.jourDeSemaine }}</div>
        <div style="margin-left: 5vw;">Horaire de debut: {{ horaire.horaireDeDebut }}</div>
        <div style="margin-left: 5vw;">Horaire de fin: {{ horaire.horaireDeFin }}</div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
// Recuperer les variable de chemin
import { useRoute } from 'vue-router';
// Fonction/Service qui permet de recuperer un horaire depuis la base de donnees
import useHoraire from '../../services/serviceHoraire';


const route = useRoute()
console.log('route', route)
const { id } = route.params
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

<style >


</style>