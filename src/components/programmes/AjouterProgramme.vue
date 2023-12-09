<template>
    <div>
        <form @submit.prevent="soumettre">
            <div class="mb-3">
                <label for="nomDuProgramme" class="form-label">Nom du programme</label>
                <input v-model="programme.nomDuProgramme" type="text" class="form-control" id="nomDuProgramme">
            </div>
            <div class="mb-3">
                <label for="dateDeDebut" class="form-label">Date de debut</label>
                <input v-model="programme.dateDeDebut" type="text" class="form-control" id="dateDeDebut">
            </div>
            <div class="mb-3">
                <label for="dateDeFin" class="form-label">Date de fin</label>
                <input v-model="programme.dateDeFin" type="text" class="form-control" id="dateDeFin">
            </div>
           
            <button type="submit" class="btn btn-primary">Ajouter</button>
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