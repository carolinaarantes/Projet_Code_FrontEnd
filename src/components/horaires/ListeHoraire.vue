<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID de l'horaire</th>
                <th>Jour de la semaine</th>
                <th>Horaire de debut</th>
                <th>Horaire de fin</th>
            </tr>
        </thead>
        <tbody>
            <Horaire v-for="time in horaires.Horaires" :key="time.id" :horaire="time" @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAjouterHoraire">Ajouter un horaire</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount, defineProps } from 'vue';
import useHoraire from '../../services/serviceHoraire.js'
import { useRouter } from 'vue-router';
import useAuthStore from '../../stores/auth';
import Horaire from './Horaire.vue'
import { storeToRefs } from 'pinia';

const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const router = useRouter()
const horaires = ref({Horaires:[]})
const { listeHoraires, supprimerHoraire } = useHoraire()

onBeforeMount(() => {

    listeHoraires().then(data => {

        horaires.value = data

        console.log('Liste horaire', data)
    })

})

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

    }).catch((error) => {
      console.error("Erreur lors de la suppression de l'horaire:", error);
    });
}

const allerAjouterHoraire = () => {
    router.push('/horaires/ajout')
}

</script>

<style lang="scss" scoped>

</style>