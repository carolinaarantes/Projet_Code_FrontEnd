<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID du programme</th>
                <th>Nom du programme</th>
                <th>Date de debut</th>
                <th>Date de fin</th>
            </tr>
        </thead>
        <tbody>
            <Programme v-for="calendar in programmes.Programmes" :key="calendar.id" :programme="calendar" @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAjouterProgramme">Ajouter un programme</button>
</template>

<script setup>
import { ref, reactive, defineProps, onBeforeMount } from 'vue';
import useProgramme from '../../services/serviceProgramme.js'
import { useRouter } from 'vue-router';
import useAuthStore from '../../stores/auth';
import Programme from './Programme.vue'
import { storeToRefs } from 'pinia';

const programmes = ref({Programmes:[]})
const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const router = useRouter()
const { programme } = defineProps(['programme']);
const { listeProgrammes, supprimerProgramme } = useProgramme()


onBeforeMount(() => {

    listeProgrammes().then(data => {

        programmes.value = data

        console.log('Liste programme', data)
    })

})


const supprimer = (id) => {

    console.log('emits', id)

    supprimerProgramme(id).then((data) => {

        console.log('suppression', data)

        listeProgrammes().then(data => {

            programmes.value = data

            console.log('Liste programmes', data)

        }).catch(err => {

            console.log(err.message)
        })

    }).catch((error) => {
    console.error("Erreur lors de la suppression du programme:", error);
  });
}

const allerAjouterProgramme = () => {
    router.push('programmes/ajout')
}

</script>

<style scoped>

</style>