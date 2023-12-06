<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Matière</th>
                <th>Date de l'examen</th>
                <th>Horaire de début</th>
                <th>Horaire de fin</th>
                <th>Salle d'examen</th>
            </tr>
        </thead>
        <tbody>
            <Examen v-for="examenUtilisateur in examens" :key="examenUtilisateur.id" :examens="examenUtilisateur"
                @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAJouterExamen">Ajouter un examen</button>
</template>

<script setup>
import { ref, reactive } from 'vue';

const examens = ref([])
import useExamen from '../services/serviceExamen'
import { useRouter } from 'vue-router'
const router = useRouter()

const { getExamenById, supprimerExamen } = useExamen()
onBeforeMount(() => {

    getExamenById().then(data => {
        examens.value = data

        console.log("Liste d'examen", data)
    })


})
import Examen from './Examen.vue';

const supprimer = (id) => {
    console.log('emits', id)
    supprimerExamen(id).then((data) => {
        console.log('suppression', data)
        getExamenById().then(data => {
            examens.value = data

            console.log("Liste d'examen", data)
        }).catch(err => {
            console.log(err.message)
        })

    })

}

const allerAJouterExamen = () => {
    router.push('/ajout')
}


</script>

<style lang="scss" scoped></style>