<template>
    <div>
        <h1>Profil de {{ etudiant.nom }} {{ etudiant.prenom }}</h1>
        <p>Biographie</p>
        <div>Email: {{ etudiant.email }}</div>
        <div>Date de naissance: {{ etudiant.dateDeNaissance }}</div>

    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';

// Recuperer les variable de chemin
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('route', route)
const { id } = route.params

// Fonction/Service qui permet de recuperer un etudiant depuis la base de donnees
import useEtudiant from '../../services/serviceEtudiant';

const { getEtudiantById } = useEtudiant()

const etudiant = ref({})

onBeforeMount(() => {

    if (id)
        getEtudiantById(id).then((data) => {
            console.log('Etudiant', data)
            etudiant.value = data
        }).catch(err => console.log('Detail etudiant', err))

})

</script>

<style lang="scss" scoped></style>