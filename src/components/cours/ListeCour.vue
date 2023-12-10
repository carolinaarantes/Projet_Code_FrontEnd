<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Nom du cours</th>
                <th>Salle de classe</th>
                <th>Nombre de crédits</th>
            </tr>
        </thead>
        <tbody>
            <Cour v-for="courUtilisateur in cours" :key="courUtilisateur.id" :cours="courUtilisateur"
                @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAJouterCour">Ajouter un cours</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
const cours = ref([])
import useCour from '../../services/serviceCour.js'
import { useRouter } from 'vue-router';
import useAuthStore from '../../stores/auth';
const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const router = useRouter()

const { listeCours, supprimerCour } = useCour()
onBeforeMount(() => {

    listeCours().then(data => {
        cours.value = data
        console.log('Liste de cours', data)
    })


})
import Cour from './Cour.vue';
import { storeToRefs } from 'pinia';


const supprimer = (id) => {
    console.log('emits', id)
    supprimerCour(id).then((data) => {
        console.log('suppression', data)
        listeCours().then(data => {
            cours.value = data

            console.log('Liste de cours', data)
        }).catch(err => {
            console.log(err.message)
        })

    })
}

const allerAJouterCour = () => {
    router.push('/cours/ajout')
}


</script>

<style lang="scss" scoped></style>