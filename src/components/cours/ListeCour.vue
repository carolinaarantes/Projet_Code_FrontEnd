<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID du cour</th>
                <th>Nom du cour</th>
                <th>Salle de classe</th>
                <th>Nombre de crédits</th>
            </tr>
        </thead>
        <tbody>
            <Cour v-for="courUtilisateur in cours.Cours" :key="courUtilisateur.id" :cour="courUtilisateur"
                @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAJouterCour">Ajouter un cours</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import useCour from '../../services/serviceCour.js'
import { useRouter } from 'vue-router';
import useAuthStore from '../../stores/auth';
import Cour from './Cour.vue';
import { storeToRefs } from 'pinia';

const cours = ref({ Cours: [] })
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

    }).catch((error) => {
      console.error('Erreur lors de la suppression du cours:', error);
    });
}

const allerAJouterCour = () => {

    router.push('/cours/ajout')
}


</script>

<style lang="scss" scoped></style>