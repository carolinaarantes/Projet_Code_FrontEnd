<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID de l'examen</th>
                <th>Matière</th>
                <th>Date de l'examen</th>
                <th>Horaire de début</th>
                <th>Horaire de fin</th>
                <th>Salle d'examen</th>
            </tr>
        </thead>
        <tbody>
            <Examen v-for="examenUtilisateur in examens.Examens" :key="examenUtilisateur.id" :examen="examenUtilisateur"
                @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAJouterExamen">Ajouter un examen</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import useAuthStore from '../../stores/auth';
import { storeToRefs } from 'pinia';
import useExamen from '../../services/serviceExamen.js'
import { useRouter } from 'vue-router'
import Examen from './Examen.vue';

const examens = ref({Examens:[]})
const router = useRouter()
const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const { listeExamens, supprimerExamen } = useExamen()


onBeforeMount(() => {

    listeExamens().then(data => {

        examens.value = data

        console.log("Liste d'examen", data)
    })
})


const supprimer = (id) => {

    console.log('emits', id)

    supprimerExamen(id).then((data) => {

        console.log('suppression', data)

        listeExamens().then(data => {

            examens.value = data

            console.log("Liste d'examen", data)

        }).catch(err => {

            console.log(err.message)
        })

    }).catch((error) => {
      console.error("Erreur lors de la suppression de l'examen:", error);
    });

}

const allerAJouterExamen = () => {
    
    router.push('/examens/ajout')
}


</script>

<style lang="scss" scoped></style>