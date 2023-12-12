<template>
    <form class="detail_user">
                <div class="row mb-2">
                    <label for="userId" class="col-md-2" style="white-space: nowrap; margin-left: 2vw;">Entrez l'ID du programme à rechercher:</label>
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
        <h1 style="margin-left: 5vw; margin-top: 2vw;">Programme</h1> 
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