<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Jour de la semaine</th>
                <th>Horaire de debut</th>
                <th>Horaire de fin</th>
            </tr>
        </thead>
        <tbody>
            <horaire v-for="time in horaires" :key="time.id" :horaire="time" @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAjouterHoraire">Ajouter un horaire</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
const horaires = ref([])
import useHoraire from '../../services/serviceHoraire.js'
import { useRouter } from 'vue-router';
import useAuthStore from '../../stores/auth';
const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const router = useRouter()

const { listeHoraires, supprimerHoraire } = useHoraire()
onBeforeMount(() => {

    listeHoraires().then(data => {
        horaires.value = data

        console.log('Liste horaire', data)
    })

})
import Horaire from './Horaire.vue'
import { storeToRefs } from 'pinia';


const supprimer = (id) => {
    console.log('emits', id)
    supprimerHoraire(id).then((data) => {
        console.log('suppression', data)
        listeHoraires().then(data => {
            horaires.value = data

            console.log('Liste horaires', data)
        }).catch(err => {
            console.log(err.message)
        })

    })
}

const allerAjouterHoraire = () => {
    router.push('/horaires/ajout')
}

</script>

<style lang="scss" scoped>

</style>