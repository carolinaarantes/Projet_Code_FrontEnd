<template>
    <div>
        <form @submit.prevent="soumettre" style="height: 25vw; margin-left: 10vw;">
            <div class="mb-3">
                <label for="nomDuProgramme" class="form-label" style="margin-top: 2vw;">Nom du programme</label>
                <input v-model="programme.nomDuProgramme" type="text" class="form-control" id="nomDuProgramme" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="dateDeDebut" class="form-label">Date de debut</label>
                <input v-model="programme.dateDeDebut" type="date" class="form-control" id="dateDeDebut" style="width: 40vw;">
            </div>
            <div class="mb-3">
                <label for="dateDeFin" class="form-label">Date de fin</label>
                <input v-model="programme.dateDeFin" type="date" class="form-control" id="dateDeFin" style="width: 40vw;">
            </div>
           
            <button type="submit" class="btn btn-primary" style="margin-left: 5vw;">Ajouter</button>
        </form>
    </div>
</template>/

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import useProgramme from '../../services/serviceProgramme';
const router = useRouter()
const { ajouterProgramme } = useProgramme()

const programme = ref({
    nomDuProgramme: '',
    dateDeDebut: '',
    dateDeFin: '',
})

const soumettre = () => {
    console.log('programme', programme.value)
    ajouterProgramme(programme.value).then(() => {
        router.push('/')
    }).catch(err => console.log("Probleme lors de l'ajout du programme", err))
}
</script>

<style lang="scss" scoped></style>