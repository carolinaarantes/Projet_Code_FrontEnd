<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="nom" class="form-label">Jour de la semaine</label>
                <input v-model="horaire.jourDeSemaine" type="text" class="form-control" id="jourDeSemaine">
            </div>
            <div class="mb-3">
                <label for="nom" class="form-label">Horaire de debut</label>
                <input v-model="horaire.horaireDeDebut" type="text" class="form-control" id="horaireDeDebut">
            </div>
            <div class="mb-3">
                <label for="prenom" class="form-label">Horaire de fin</label>
                <input v-model="horaire.horaireDeFin" type="text" class="form-control" id="horaireDeFin">
            </div>
           
            <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useHoraire from '../../services/serviceHoraire';
const router = useRouter()
const { ajouterHoraire } = useHoraire()

const horaire = ref({
    jourDeSemaine: '',
    horaireDeDebut: '',
    horaireDeFin: '',
})

const soumettre = () => {
    console.log('horaire', horaire.value)
    ajouterHoraire(horaire.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout", err))
}
</script>

<style lang="scss" scoped></style>