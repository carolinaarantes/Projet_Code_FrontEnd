<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Nom du cour</th>
                <th>Salle de classe</th>
                <th>Nombre de crédits</th>
            </tr>
        </thead>
        <tbody>
            <Cour v-for="courUtilisateur in cours" :key="courUtilisateur.id" :cours="courUtilisateur"
                @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAJouterCour">Ajouter un cour</button>
</template>

<script setup>
import { ref, reactive } from 'vue';

const cours = ref([])
import useCour from '../services/serviceCour'
import { useRouter } from 'vue-router'
const router = useRouter()

const { getCourById, supprimerCour } = useCour()
onBeforeMount(() => {

    getCourById().then(data => {
        cours.value = data
        console.log('Liste de cours', data)
    })


})
import Cour from './Cour.vue';

const supprimer = (id) => {
    console.log('emits', id)
    supprimerCour(id).then((data) => {
        console.log('suppression', data)
        getCourById().then(data => {
            cours.value = data

            console.log('Liste de cours', data)
        }).catch(err => {
            console.log(err.message)
        })

    })
}

const allerAJouterCour = () => {
    router.push('/ajout')
}


</script>

<style lang="scss" scoped></style>