<template>
    <div class="detail">
        <h1 class="detail-title">Role</h1>
        
            <div class="detail-info">Categorie: {{ role.categorie }}</div>        

        <form class="detail_user">
            <div class="row mb-2">
                <label for="userId" class="col-md-2">Entrez l'ID de l'utilisateur à rechercher:</label>
            </div>
            <div class="row mb-2">
                <div class="col-md-6">
                    <input class="form-control me-2" id="barRechercheRole" type="search" placeholder="Search" aria-label="Search">
                </div>
                <div class="col-md-4">
                    <button @click="rechercherProfil" class="btn btn-primary">Rechercher</button>
                </div>
            </div>
        </form>

        <div v-if="error" class="error-message">{{ error }}</div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import useRole from '../../services/serviceRole';

const { getRoleById } = useRole();
const route = useRoute();
const { id } = route.params;

const role = ref({});
const telechargement = ref(false);
const error = ref(null);

onBeforeMount(async () => {
    if (id) {
        telechargement.value = true;

        try {
            const data = await getRoleById(id);
            console.log('Role ', data);
            role.value = data;
        } catch (err) {
            console.log('Detail role ', err);
            error.value = 'Echec du telechargement des details du role.';
        } finally {
            telechargement.value = false;
        }
    }
});
</script>

<style lang="scss" scoped>
.detail {
    margin-left: 5vw;
}

.detail-title {
    margin-left: 5vw;
}

.loading-message {
    margin-left: 5vw;
}

.detail-info {
    margin-left: 5vw;
}

.error-message {
    margin-left: 5vw;
}

.detail_user {
    margin-left: 5vw;
    margin-top: 5vh;  /* Adjusted margin-top value for responsiveness */
}
</style>
