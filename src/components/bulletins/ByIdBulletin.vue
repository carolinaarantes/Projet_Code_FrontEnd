<template>
    <div class="detail">
        <h1 style="margin-left: 5vw;">Bulletin</h1> 
        <p style="margin-left: 5vw;">La moyenne du bulletin est: {{ bulletin.moyenne }} </p>       
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
import useBulletin from '../../services/serviceBulletin';

const { getBulletinById } = useBulletin()

const bulletin = ref({})

onBeforeMount(() => {

    if (id)
    getBulletinById(id).then((data) => {
            console.log('Bulletin', data)
            bulletin.value = data
        }).catch(err => console.log('Detail du bulletin', err))

})

</script>

<style lang="scss" scoped></style>