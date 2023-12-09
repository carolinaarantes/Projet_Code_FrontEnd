<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="categorie" class="form-label">Categorie</label>
                <input v-model="role.categorie" type="text" class="form-control" id="categorie">
            </div>

            <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useRole from '../../services/serviceRole';
const router = useRouter()
const { ajouterRole } = useRole()

const role = ref({
    categorie: '',
})

const soumettre = () => {
    console.log('role', role.value)
    ajouterRole(role.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout du role", err))
}
</script>

<style lang="scss" scoped></style>