<template>
    <div>
        <form @submit.prevent="mettreAJour" style="height: 15vw; margin-left: 10vw;">
            <div class="mb-3">
                <label for="moyenne" class="form-label" style="margin-top: 2vw;">Moyenne</label>
                <input v-model="bulletin.moyenne" type="text" class="form-control" id="moyenne" style="width: 40vw;">
            </div>            
            <button type="submit" class="btn btn-primary" style="margin-left: 5vw;">Mettre a jour</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const { id } = route.params

const router = useRouter()
const bulletin = ref({})

import useBulletin from '../../services/serviceBulletin';
const { getBulletinById, updateBulletin } = useBulletin()

onBeforeMount(() => {
    if (id) getBulletinById(id).then(data => {
        bulletin.value = data
    }).catch(err => console.log('erreur mise a jour', err))
})

const mettreAJour = () => {
    updateBulletin(id, bulletin.value).then(() => {
        router.push('/')
    }).catch(err => console.log('Probleme lors de la mise a jour', err))
}
</script>

<style lang="scss" scoped></style>