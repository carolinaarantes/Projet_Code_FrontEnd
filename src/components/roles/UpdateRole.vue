<template>
    <div>
        <form @submit.prevent="mettreAJour">
            <div class="mb-3">
                <label for="nom" class="form-label">Categorie</label>
                <input v-model="role.categorie" type="text" class="form-control" id="categorie">
            </div>
            
            <button type="submit" class="btn btn-primary">Mettre a jour</button>
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
    }).catch(err => console.log('erreur mise a jour', err))
})

const mettreAJour = () => {
    updateRole(id, role.value).then(() => {
        router.push('/')
    }).catch(err => console.log('Probleme lors de la mise a jour', err))
}
</script>

<style lang="scss" scoped></style>