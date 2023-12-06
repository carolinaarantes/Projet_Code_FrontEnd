<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Nom du programme</th>
                <th>Date de debut</th>
                <th>Date de fin</th>
            </tr>
        </thead>
        <tbody>
            <Programme v-for="calendar in programmes" :key="calendar.id" :programme="calendar" @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAjouterProgramme">Ajouter un programme</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
const programmes = ref([])
import useProgramme from '../../services/serviceProgramme.js'
const router = useRouter()

const { listeProgrammes, supprimerProgramme } = useProgramme()
onBeforeMount(() => {

    listeProgrammes().then(data => {
        progtammes.value = data

        console.log('Liste programme', data)
    })

})
import Programme from './Programme.vue'

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

    })
}

const allerAjouterProgramme = () => {
    router.push('/ajout')
}

</script>

<style lang="scss" scoped>

</style>