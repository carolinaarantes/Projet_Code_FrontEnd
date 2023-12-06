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
const router = useRouter()

const { listeHoraires, supprimerHoraire } = useHoraire()
onBeforeMount(() => {

    listeHoraires().then(data => {
        horaires.value = data

        console.log('Liste horaire', data)
    })

})
import Horaire from './Horaire.vue'

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
    router.push('/ajout')
}

</script>

<style lang="scss" scoped>

</style>