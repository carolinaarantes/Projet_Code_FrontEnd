<template>
    <div class="detail">
        <h1 style="margin-left: 5vw;">Profil de {{ utilisateur.photo }} {{ utilisateur.nom }} {{ utilisateur.prenom }}</h1> <!--avec photo?-->
        <p style="margin-left: 5vw;">Biographie</p>        
        <div style="margin-left: 5vw;">Email: {{ utilisateur.email }}</div>
        <div style="margin-left: 5vw;">Telephone: {{ utilisateur.telephone }}</div>
        <div style="margin-left: 5vw;">Date de naissance: {{ utilisateur.dateDeNaissance }}</div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';

// Recuperer les variable de chemin
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('route', route)
const { id } = route.params

// Fonction/Service qui permet de recuperer un utilisateur depuis la base de donnees
import useUtilisateur from '../../services/serviceUtilisateur';

const { getUtilisateurById } = useUtilisateur()

const utilisateur = ref({})

onBeforeMount(() => {

    if (id)
        getUtilisateurById(id).then((data) => {
            console.log('Utilisateur', data)
            utilisateur.value = data
        }).catch(err => console.log('Detail utilisateur', err))

})

</script>

<style lang="scss" scoped>
</style>