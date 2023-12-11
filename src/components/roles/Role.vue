<template>
    <tr>
        <td>{{ role.id }}</td>
        <td>{{ role.categorie }}</td>
        <td>
            <button @click="allerADetail" class="btn btn-primary">Details</button>
            <button @click="allerAMiseAJour" class="btn btn-success">Editer</button>
            <button class="btn btn-danger" @click="gererSuppression"> Supprimer</button>
        </td>
    </tr>
</template>

<script setup>
import { ref, reactive, defineProps, defineEmits } from 'vue';
//Importer le module qui permet la reidrection vers une autre page
import { useRouter } from 'vue-router';

const router = useRouter()

const props = defineProps({
    role: {
        type: Object,
        default: () => ({id: '',categorie: '',})
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton supprimer clicker")
    console.log("ID : ", props.role.id)
    emit('supprimer', props.role.id)
}

// La fonction pour la redirection vers la page Detail
const allerADetail = () => {
    router.push(`/details/${props.role.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour = () => {
    router.push(`/mise-a-jour/${props.role.id}`)
}

</script>

<style lang="scss" scoped></style>