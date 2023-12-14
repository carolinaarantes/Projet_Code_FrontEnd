<template>
    <div class="form">
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="nomDuProgramme" class="form-label">Nom du programme</label>
                <input v-model="programme.nomDuProgramme" type="text" class="form-control" id="nomDuProgramme">
            </div>
            <div class="mb-3">
                <label for="dateDeDebut" class="form-label">Date de debut</label>
                <input v-model="programme.dateDeDebut" type="date" class="form-control" id="dateDeDebut">
            </div>
            <div class="mb-3">
                <label for="dateDeFin" class="form-label">Date de fin</label>
                <input v-model="programme.dateDeFin" type="date" class="form-control" id="dateDeFin">
            </div>
           
            <button type="submit" class="btn btn-primary">Ajouter</button>

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
</template>/

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useProgramme from '../../services/serviceProgramme';
const router = useRouter()
const { ajouterProgramme } = useProgramme()
const utilisateur = ref({});
const isAdmin = ref(true);
const peuxAccederProfil = ref(true);

const programme = ref({
    nomDuProgramme: '',
    dateDeDebut: '',
    dateDeFin: '',
})

const soumettre = () => {
    console.log('programme', programme.value)

    isAdmin.value = utilisateur.value.role === 'administration';
    peuxAccederProfil.value = isAdmin.value;
    
    ajouterProgramme(programme.value).then(() => {
        router.push('/')
        programme.value.nomDuProgramme = '';
        programme.value.dateDeDebut = '';
        programme.value.dateDeFin = '';
        console.log("Programme ajouté avec succès!");
    }).catch(err => console.log("Probleme lors de l'ajout du programme", err))
}
</script>


<style lang="scss" scoped>
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