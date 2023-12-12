<template>
    <form class="detail_user">
                <div class="row mb-2">
                    <label for="userId" class="col-md-2" style="white-space: nowrap; margin-left: 2vw;">Entrez l'ID du bulletin à rechercher:</label>
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
        <h1 style="margin-left: 5vw; margin-top: 2vw;">Bulletin</h1> 
        <p style="margin-left: 5vw;">La moyenne du bulletin est: {{ bulletin.moyenne }} </p>       
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
import useBulletin from '../../services/serviceBulletin';

const { getBulletinById } = useBulletin()

const bulletin = ref({})

onBeforeMount(() => {

    if (id)
    getBulletinById(id).then((data) => {
            console.log('Bulletin', data)
            bulletin.value = data
        }).catch(err => console.log('Detail du bulletin', err))

})

</script>

<style lang="scss" scoped></style>