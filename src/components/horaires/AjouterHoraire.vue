<template>
    <div class="form">
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="jourDeSemaine" class="form-label">Jour de la semaine</label>
                <select v-model="horaire.jourDeSemaine" type="text" class="form-control" id="jourDeSemaine">
                    <option value="" disabled selected>Sélectionnez un jour de semaine</option>
                    <option value="Lundi">Lundi</option>
                    <option value="Mardi">Mardi</option>
                    <option value="Mercredi">Mercredi</option>
                    <option value="Jeudi">Jeudi</option>
                    <option value="Vendredi">Vendredi</option>
                    <option value="Samedi">Samedi</option>
                    <option value="Dimanche">Dimanche</option>
                </select>
                </div>
            <div class="mb-3">
                <label for="horaireDeDebut" class="form-label">Horaire de debut</label>
                <input v-model="horaire.horaireDeDebut" type="time" class="form-control" id="horaireDeDebut">
            </div>
            <div class="mb-3">
                <label for="horaireDeFin" class="form-label">Horaire de fin</label>
                <input v-model="horaire.horaireDeFin" type="time" class="form-control" id="horaireDeFin">
            </div>
           
            <button type="submit" class="btn btn-primary">Ajouter</button>

            <div v-if="!estConnecte" id="non-connecte-message-container">
                <div id="non-connecte-message-box">
                    <p>Vous n'êtes pas connecté</p>
                </div>
            </div>

            <div v-if="!peuxAccederProfil" id="non-admin-message-container">
                <div id="non-admin-message-box">
                    <p>Vous n'êtes pas administrateur donc vous n'avez pas accès à la création d'un bulletin.</p>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useHoraire from '../../services/serviceHoraire';
const router = useRouter()
const { ajouterHoraire } = useHoraire()
const utilisateur = ref({});
const isAdmin = ref(true);
const peuxAccederProfil = ref(true);

const horaire = ref({
    jourDeSemaine: '',
    horaireDeDebut: '',
    horaireDeFin: '',
})

const soumettre = () => {
    console.log('horaire', horaire.value)

    isAdmin.value = utilisateur.value.role === 'administration';
    peuxAccederProfil.value = isAdmin.value;

    ajouterHoraire(horaire.value).then(() => {
        router.push('/')
        horaire.value.jourDeSemaine = '';
        horaire.value.horaireDeDebut = '';
        horaire.value.horaireDeFin = '';
        console.log("Horaire ajouté avec succès!");
    }).catch(err => console.log("Probleme lors de l'ajout de l'horaire", err))
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