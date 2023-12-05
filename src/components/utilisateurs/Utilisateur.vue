<template>
    <tr>
        <td>
            {{ utilisateur.prenom }}
        </td>
        <td>
            {{ utilisateur.nom }}
        </td>
        <td>
            {{ utilisateur.email }}
        </td>
        <td>
            {{ utilisateur.dateDeNaissance }}
        </td>
        <td><button @click="allerADetail" class="btn btn-primary">Details</button>
            <button @click="allerAMiseAJour" class="btn btn-success">Editer</button>
            <button class="btn btn-danger" @click="gererSuppression"> Supprimer</button>
        </td>
    </tr>
</template>

<script setup>
import { ref, reactive } from 'vue';

//Importer le module qui permet la reidrection vers une autre page
import { useRouter } from 'vue-router';
const router=useRouter()

const props = defineProps({
    etudiant: {
        type: Object,
        default: () => ({
            id: '',
            nom: 'test',
            prenom: 'test',
            email: 'test',
            dateDeNaissance: 'test'
        })
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton ici")
    console.log("ID ici", props.etudiant.id)
    emit('supprimer', props.etudiant.id)

}

// La fonction pour la redirection vers la page Detail
const allerADetail=()=>{
    router.push(`/details/${props.etudiant.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour=()=>{
    router.push(`/mise-a-jour/${props.etudiant.id}`)
}

</script>

<style scoped></style>