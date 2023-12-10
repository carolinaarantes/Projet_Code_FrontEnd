<template>
    <div>
        <form @submit.prevent="soumettre" class="form-container" id="bulletin-form">
            <div class="mb-3">
                <label for="moyenne" class="form-label" id="label-moyenne">Moyenne</label>
                <input :style="{ border: error.moyenne ? '2px solid red' : '', outline: 'none' }" type="text" class="form-control" v-model="bulletin.moyenne" id="moyenneInput" required>
                <div v-if="error.moyenne" class="error-message">{{ error.moyenne }}</div>
            </div>

            <button type="submit" class="btn btn-primary" id="role-submit-btn">Ajouter</button>

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
import { ref, reactive, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import useBulletin from '../../services/serviceBulletin';

const router = useRouter()
const { ajouterBulletin } = useBulletin()
const utilisateur = ref({});
const isAdmin = ref(true);
const peuxAccederProfil = ref(true);

const bulletin = ref({
    moyenne: ''
})

const error = ref({
    moyenne: ''
})

const moyenneRegex = /^\d+(\.\d{0,2})?$/

//Fonction pour verifier que tout le formulaire est valide
const valider = bulletin => {

//Validation de chaque champ pour afficher le bon message en cas d'erreur
for (let champ in bulletin) {
    validerChamp(champ, bulletin)
}

if (bulletin.moyenne !== '' && !moyenneRegex.test(bulletin.moyenne)) {
    return false;
  }
  return true;
};

//Fonction utiliser pour valider un champ donne
const validerChamp = (champ, bulletin) => {
  switch (champ) {
    case 'moyenne':
      if (bulletin[champ] !== '' && !moyenneRegex.test(bulletin[champ])) {
        error.value[champ] = 'La moyenne doit être un nombre decimal ne contenant aucune lettre.';
      } else {
        error.value[champ] = '';
      }
      break;
  }
};


// Voir les erreurs de validation en temps reel
watchEffect(() => {
  validerChamp('moyenne', bulletin.value);
});

const soumettre = () => {

    console.log('bulletin', bulletin.value)

    isAdmin.value = utilisateur.value.role === 'administration';
    peuxAccederProfil.value = isAdmin.value;

    //Ne pas soumettre le formulaire si tous les champs ne sont pas valides
    if (!valider(bulletin.value)) return
    
    ajouterBulletin(bulletin.value).then(() => {
        router.push('/')

    }).catch(err => {
        console.log("Problème lors de l'ajout du bulletin", err)

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
        error.value = { ...error.value, ...backendError }

    })
}
</script>

<style scoped>
.form-container {
    height: 17vw;
    margin-left: 10vw;
}

#label-moyenne {
    width: 40vw;
    margin-top: 2vw;
}

.error-message {
  color: red;
  margin-top: 0.5vw;
}

#moyenneInput {
    width:  40vw;
    box-sizing: border-box;
}

.btn-primary{
    margin-left: 5vw;
    margin-top: 1em;
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
