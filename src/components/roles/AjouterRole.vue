<template>
    <div>
        <form @submit.prevent="soumettre" id="role-form">
            <div class="mb-3">
                <label for="categorie" class="form-label" id="label-categorie">Categorie</label>
                <input v-model="role.categorie" type="text" class="form-control" id="categorie" required>
            </div>

            <button type="submit" class="btn btn-primary" id="role-submit-btn">Ajouter</button>

            <div v-if="!estConnecte" id="non-connecte-message-container">
                <div id="non-connecte-message-box">
                    <p>Vous n'êtes pas connecté</p>
                </div>
            </div>
            
            <div v-if="!peuxAccederProfil" id="non-admin-message-container">
                <div id="non-admin-message-box">
                    <p>Vous n'êtes pas administrateur donc vous n'avez pas accès à la création d'un role.</p>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useRole from '../../services/serviceRole';

const router = useRouter();
const { ajouterRole } = useRole();
const utilisateur = ref({});
const isAdmin = ref(true);
const peuxAccederProfil = ref(true);

const role = ref({
    categorie: '',
})

const soumettre = () => {
    console.log('role', role.value)

    isAdmin.value = utilisateur.value.role === 'administration';
    peuxAccederProfil.value = isAdmin.value;

    ajouterRole(role.value).then(() => {
        router.push('/')
        role.value.categorie = '';
    }).catch(err => console.log("Probleme lors de l'ajout du role", err))
}
</script>

<style scoped>
#role-form {
    height: 13vw;
    margin-left: 10vw;
}

#categorie {
    width: 40vw;
}

#role-submit-btn {
    margin-left: 5vw;
}

#label-categorie {
    margin-top: 2vw;
}

#non-admin-message-container {
    margin-top: 1em;
    margin-left: 10em;
    margin-right: 10em;
}

#non-admin-message-box {
    background-color: white;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#non-admin-message-box p {
    margin: 0;
    color: red; 
}
#non-connecte-message-container {
    margin-top: 1em;
    margin-left: 10em;
    margin-right: 10em;
}

#non-connecte-message-box{
    background-color: white;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
#non-connecte-message-box p {
    margin: 0;
    color: red; 
}

</style>