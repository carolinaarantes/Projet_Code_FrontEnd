<template>
    <div class="form">
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="matiere" class="form-label">Matière</label>
                <input :style="{ border: errors.matiere ? '2px red solid' : '' }" v-model="examen.matiere" type="text"
                    class="form-control" id="matiere">
                <div class="text-danger pb-2" v-if="errors.matiere">{{ errors.matiere }}</div>
            </div>

            <div class="mb-3">
                <label for="date_examen" class="form-label">Date de l'examen</label>
                <input :style="{ border: errors.date_examen ? '2px red solid' : '' }" v-model="examen.date_examen"
                    type="text" class="form-control" id="date_examen" placeholder="YYYY-MM-DD">
                <div class="text-danger pb-2" v-if="errors.date_examen">{{ errors.date_examen }}</div>
            </div>

            <div class="mb-3">
                <label for="horaire_de_debut" class="form-label">Horaire de début</label>
                <input :style="{ border: errors.horaire_de_debut ? '2px red solid' : '' }" v-model="examen.horaire_de_debut"
                    type="text" class="form-control" id="horaire_de_debut" placeholder="HH:MM:SS">
                <div class="text-danger pb-2" v-if="errors.horaire_de_debut">{{ errors.horaire_de_debut }}</div>
            </div>

            <div class="mb-3">
                <label for="horaire_de_fin" class="form-label">Horaire de fin</label>
                <input :style="{ border: errors.horaire_de_fin ? '2px red solid' : '' }" v-model="examen.horaire_de_fin"
                    type="text" class="form-control" id="horaire_de_fin" placeholder="HH:MM:SS">
                <div class="text-danger pb-2" v-if="errors.horaire_de_fin">{{ errors.horaire_de_fin }}</div>
            </div>

            <div class="mb-3">
                <label for="salle_examen" class="form-label">Salle d'examen</label>
                <input :style="{ border: errors.salle_examen ? '2px red solid' : '' }" v-model="examen.salle_examen"
                    type="text" class="form-control" id="salle_examen">
                <div class="text-danger pb-2" v-if="errors.salle_examen">{{ errors.salle_examen }}</div>
            </div>

            <div class="mb-3">
                <label for="cour" class="form-label">Cours</label>
                <select v-model="examen.cour" class="form-select" id="cour">
                    <option value="" disabled selected>Sélectionnez un cour</option>
                    <option v-for="cours in coursFromDatabase" :key="cours.id" :value="cours.id">{{ cours.nom_du_cours }}</option>
                </select>
                <div class="text-danger pb-2" v-if="errors.cour">{{ errors.cour }}</div>
            </div>

            <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import useExamen from '../../services/serviceExamen';
import useCour from '../../services/serviceCour'
import axios from 'axios';


const router = useRouter()
const { ajouterExamen } = useExamen()
const {listeCours} = useCour()

const coursFromDatabase = ref([]);

const examen = ref({
    matiere: '',
    date_examen: '',
    horaire_de_debut: '',
    horaire_de_fin: '',
    salle_examen: ''
})

// Variable pour stocker les erreurs de validations des champs
const errors = ref({
    matiere: '',
    date_examen: '',
    horaire_de_debut: '',
    horaire_de_fin: '',
    salle_examen: ''
});

const soumettre = () => {

    console.log('examen', examen.value)

    //Ne pas soumettre le formulaire si tous les champs ne sont pas valides
    if (!valider(examen.value)) return

    ajouterExamen(examen.value).then(() => {

        router.push('/')

    }).catch(err => {
        console.log("Probleme lors de l'ajout de l'examen", err)

        //En cas d'erreurs au backend, recuperer les erreurs provenant du backend et les afficher sur le formulaire
        const backendErrors = err.response.data.errors
        //Creer un objet pour mettre les erreurs du backend dans le meme format que la variable errors (declares plus haut)
        const backendError = {}

        if (Array.isArray(backendErrors)) {
            for (let error of backendErrors) {
                backendError[error.path] = error.msg;
            }
        } else {

            console.error("Backend errors format is not as expected:", backendErrors);
        }
        // Copier les erreurs du backend mises en forme dans la variable errors
        errors.value = { ...errors.value, ...backendError }

    })
}

//Regex utilisees dans la validation
// Verifier si la date est valide - format "YYYY-MM-DD"
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
// Format "HH:MM:SS" 
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;

//Fonction pour verifier que tout le formulaire est valide
const valider = examen => {

//Validation de chaque champ pour afficher le bon message en cas d'erreur
for (let champ in examen) {
    validerChamp(champ, examen)
}

if (!dateRegex.test(examen.date_examen) ||
    !timeRegex.test(examen.horaire_de_debut) ||
    !timeRegex.test(examen.horaire_de_fin)) {
    return false
}
return true
}

// Fonction utiliser pour valider un champ donne
const validerChamp = (champ, examen) => {
    switch (champ) {
        case 'matiere':
        case 'salle_examen':
            if (!nomRegex.test(examen[champ])) {
                errors.value[champ] = `${champ} est invalide !`;
            }
            break;
        case 'date_examen':
            if (!dateRegex.test(examen[champ])) {
                errors.value[champ] = 'Le format de la date doit être YYYY-MM-DD';
            }
            break;
        case 'horaire_de_debut':
        case 'horaire_de_fin':
            if (!timeRegex.test(examen[champ])) {
                errors.value[champ] = 'Le format de l\'horaire doit être HH:MM:SS';
            }
            break;
            case 'cour':
            if (!examen[champ]) {
                errors.value[champ] = 'Le champ "Cours" est obligatoire';
            } else {
                errors.value[champ] = ''; // Réinitialiser l'erreur si le champ est valide
            }
            break;    
    }
};

// Voir les erreurs de validation en temps réel
watchEffect(() => {
    errors.value.matiere = '';
    if (examen.value.matiere !== '' && !nomRegex.test(examen.value.matiere)) {
        errors.value.matiere = "Le nom de la matière est invalide !";
    }

    errors.value.date_examen = '';
    if (examen.value.date_examen !== '' && !dateRegex.test(examen.value.date_examen)) {
        errors.value.date_examen = "La date de l'examen est invalide !";
    }

    errors.value.horaire_de_debut = '';
    if (examen.value.horaire_de_debut !== '' && !timeRegex.test(examen.value.horaire_de_debut)) {
        errors.value.horaire_de_debut = "L'horaire de début est invalide !";
    }

    errors.value.horaire_de_fin = '';
    if (examen.value.horaire_de_fin !== '' && !timeRegex.test(examen.value.horaire_de_fin)) {
        errors.value.horaire_de_fin = "L'horaire de fin est invalide !";
    }

    errors.value.salle_examen = '';
    if (examen.value.salle_examen !== '' && !nomRegex.test(examen.value.salle_examen)) {
        errors.value.salle_examen = "Le nom de la salle d'examen est invalide !";
    }

    errors.value.cour = '';
    if (!examen.value.cour) {
        errors.value.cour = 'Le champ "Cours" est obligatoire';
    }
});

// Fonction pour charger les rôles depuis la base de données
const chargerCours = async () => {
    try {
        const coursList = await listeCours();
        console.log('Valeur de coursList:', coursList);

        if (coursList) {
            coursFromDatabase.value = coursList.map(cours => cours.matiere);
        } else {
            console.error('Liste des cours indéfinie.');
        }
    } catch (error) {
        console.error('Erreur lors du chargement des cours', error);
    }
};

// Charger les données au moment du montage du composant
onMounted(async () => {
    await chargerCours();
   
});

</script>

<style lang="scss" scoped></style>