<template>
    <div>
        <form @submit.prevent="soumettre" style="height: 35vw; margin-left: 10vw;">
            <div class="mb-3">
                <label for="matiere" class="form-label" style="margin-top: 2vw;">Matière</label>
                <input v-model="examen.matiere" type="text" class="form-control" id="matiere" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="date_examen" class="form-label">Date de l'examen</label>
                <input v-model="examen.date_examen" type="date" class="form-control" id="date_examen" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="horaire_de_debut" class="form-label">Horaire de début</label>
                <input v-model="examen.horaire_de_debut" type="time" class="form-control" id="horaire_de_debut" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="horaire_de_fin" class="form-label">Horaire de fin</label>
                <input v-model="examen.horaire_de_fin" type="time" class="form-control" id="horaire_de_fin" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="salle_examen" class="form-label">Salle d'examen</label>
                <input v-model="examen.salle_examen" type="text" class="form-control" id="salle_examen" style="width: 40vw;">
            </div>
            <button type="submit" class="btn btn-primary" style="margin-left: 5vw;">Ajouter</button>
        </form>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useExamen from '../../services/serviceExamen';
const router = useRouter()
const { ajouterExamen } = useExamen()

const examen = ref({
    matiere: '',
    date_examen: '',
    horaire_de_debut: '',
    horaire_de_fin: '',
    salle_examen: ''
})

const soumettre = () => {
    console.log('examen', examen.value)
    ajouterExamen(examen.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout de l'examen", err))
}
</script>

<style lang="scss" scoped></style>