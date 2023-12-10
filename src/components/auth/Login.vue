<template>
    <div class="wrapper">
        <form @submit.prevent="connecter">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input :style="{ border: errors.email ? '2px red solid' : '' }" v-model="loginInfo.email" type="email"
                    class="form-control" id="email">
                <div class="text-danger pb-2" v-if="errors.email">{{ errors.email }}</div>
            </div>
            <div class="mb-3">
                <label for="mdp" class="form-label">Mot de passe</label>
                <input :style="{ border: errors.motPasse ? '2px red solid' : '' }" v-model="loginInfo.motPasse"
                    type="password" class="form-control" id="mdp">
                <div class="text-danger pb-2" v-if="errors.motPasse">{{ errors.motPasse }}</div>
            </div>
            <div class="d-flex align-items-center">
                <button type="submit" class="btn btn-primary">Se connecter</button>
                <div>
                    <button type="submit" class="btn btn-primary">
                        <RouterLink to="/utilisateurs/ajout">Se créer un compte</RouterLink>
                    </button>

                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import useAuth from '../../services/serviceAuthentification'

const router = useRouter()
const { login } = useAuth()

const loginInfo = ref({
    email: '',
    motPasse: ''
})

// Variable pour stocker les erreurs de validations des champs
const errors = ref({
    email: '',
    motPasse: ''
})

const connecter = () => {
    console.log('login', loginInfo.value)

    //Ne pas connecter si les champs ne sont pas valide
    if (!valider(loginInfo.value)) return

    login(loginInfo.value.email, loginInfo.value.motPasse).then((data) => {
        console.log('utilisateur', data)
        router.push('/')
    }).catch(err => {
        console.log("Probleme lors de la connection", err)

        //En cas d'erreurs au backend, recuper les erreurs provenant du backend et les afficher sur le formulaire
        const backendErrors = err.response.data.errors
        //Creer un objet pour mettre les erreurs du backend dans le meme format que la variable errors (declares plus haut)
        const backendError = {}

        for (let error of backendErrors) {
            backendError[error.path] = error.msg
        }

        // Copier les erreurs du backend mises en forme dans la variable errors
        errors.value = { ...errors.value, ...backendError }

    })
}

//Regex utilisees dans la validation-- on peut aussi utiliser des simples if else
const mdpRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

//Fonction pour verifier que tout le formulaire est valide
const valider = loginInfo => {

    //Validation de chaque champ pour afficher le bon message en cas d'erreur
    for (let champ in loginInfo) {
        validerChamp(champ, loginInfo)
    }

    if (!mdpRegex.test(loginInfo.motPasse) || !emailRegex.test(loginInfo.email))
        return false
    return true
}

//Fonction utiliser pour valider un champ donne
const validerChamp = (champ, loginInfo) => {
    switch (champ) {
        case 'motPasse':
            if (!mdpRegex.test(loginInfo[champ])) {
                errors.value[champ] = 'Le mot de passe est invalide !'
            }
            break
        case 'email':
            if (!emailRegex.test(loginInfo[champ])) {
                errors.value[champ] = "L'email est invalide ! "
            }
            break
    }
}

//Voir les erreurs de validation en temps reel
watchEffect(()=>{
    errors.value.email=''
    if(loginInfo.value.email != '' && !emailRegex.test(loginInfo.value.email)){
        errors.value.email = "Email incorrect"
        return
    }
    errors.value.motPasse =''
    if(loginInfo.value.motPasse != '' && !mdpRegex.test(loginInfo.value.motPasse)){
        errors.value.motPasse = "Mot de passe incorrect"
        return
    }
})
</script>

<style scoped>
.btn-primary {
    margin-right: 1rem;
}

a {
    text-decoration: none;
    color: white;
}
</style>