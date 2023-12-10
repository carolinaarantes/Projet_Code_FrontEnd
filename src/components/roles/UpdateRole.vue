<template>
    <div>
        <form @submit.prevent="mettreAJour" style="height: 15vw; margin-left: 10vw;">
            <div class="mb-3">
                <label for="categorie" class="form-label" style="margin-top: 2vw;">Categorie</label>
                <input v-model="role.categorie" type="text" class="form-control" id="categorie" style="width: 40vw;">
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
const role = ref({})

import useRole from '../../services/serviceRole';
const { getRoleById, updateRole } = useRole()

onBeforeMount(() => {
    if (id) getRoleById(id).then(data => {
        role.value = data
    }).catch(err => console.log("Erreur de recherche de role", err))
})

const mettreAJour = () => {
    updateRole(id, role.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de la mise a jour du role", err))
}
</script>

<style lang="scss" scoped></style>