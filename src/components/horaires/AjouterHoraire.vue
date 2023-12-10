<template>
    <div>
        <form @submit.prevent="soumettre" style="height: 27vw; margin-left: 10vw;">
            <div class="mb-3">
                <label for="jourDeSemaine" class="form-label" style="margin-top: 2vw;">Jour de la semaine</label>
                <select v-model="horaire.jourDeSemaine" type="text" class="form-control" id="jourDeSemaine" style="width: 40vw;">
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
                <input v-model="horaire.horaireDeDebut" type="time" class="form-control" id="horaireDeDebut" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="horaireDeFin" class="form-label">Horaire de fin</label>
                <input v-model="horaire.horaireDeFin" type="time" class="form-control" id="horaireDeFin" style="width: 40vw;">
            </div>
           
            <button type="submit" class="btn btn-primary" style="margin-left: 5vw;">Ajouter</button>
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
    }).catch(err => console.log("Probleme lors de l'ajout de l'horaire", err))
}
</script>

<style lang="scss" scoped></style>