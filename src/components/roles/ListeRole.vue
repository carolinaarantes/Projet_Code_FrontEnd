<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
                <th>Date de naissance</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <Etudiant v-for="student in etudiants" :key="student.id" :etudiant="student" @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAJouterEtudiant">Ajouter un etudiant</button>
</template>

<script setup>
    import { ref, reactive } from 'vue';

    const etudiants = ref([])
import useEtudiant from '../../services/serviceEtudiant.js'
import { useRouter } from 'vue-router'
const router = useRouter()

const { getEtudiants, supprimerEtudiant } = useEtudiant()
onBeforeMount(() => {

    getEtudiants().then(data => {
        etudiants.value = data

        console.log('Liste etudiant', data)
    })


})
import Etudiant from './Etudiant.vue';

const supprimer = (id) => {
    console.log('emits', id)
    supprimerEtudiant(id).then((data) => {
        console.log('suppression', data)
        getEtudiants().then(data => {
            etudiants.value = data

            console.log('Liste etudiant', data)
        }).catch(err => {
            console.log(err.message)
        })

    })

}

const allerAJouterEtudiant = () => {
    router.push('/ajout')
}
    
</script>

<style lang="scss" scoped>

</style>