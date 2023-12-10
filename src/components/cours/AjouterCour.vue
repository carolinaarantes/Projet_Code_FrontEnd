<template>
    <div>
        <form @submit.prevent="soumettre" style="height: 27vw; margin-left: 10vw;">
            <div class="mb-3">
                <label for="nom_du_cour" class="form-label" style="margin-top: 2vw;">Nom du cours</label>
                <input v-model="cour.nom_du_cour" type="text" class="form-control" id="nom_du_cour" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="salle_du_cours" class="form-label">Salle de cours</label>
                <input v-model="cour.salle_du_cours" type="text" class="form-control" id="salle_du_cours" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="credits" class="form-label">Credits</label>
                <input v-model="cour.credits" type="text" class="form-control" id="credits" style="width: 40vw;">
            </div>
            
            <button type="submit" class="btn btn-primary" style="margin-left: 5vw;">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useCour from '../../services/serviceCour';
const router = useRouter()
const { ajouterCour } = useCour()

const cour = ref({
    nom_du_cour: '',
    salle_du_cours: '',
    credits: ''    
})

const soumettre = () => {
    console.log('cour', cour.value)
    ajouterCour(cour.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout du cours", err))
}
</script>

<style lang="scss" scoped></style>