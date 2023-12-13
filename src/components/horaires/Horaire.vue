<template>
    <tr>
        <td>
            {{ horaire.id }}
        </td>
        <td>
            {{ horaire.jour_de_semaine }}
        </td>
        <td>
            {{ horaire.horaire_de_debut }}
        </td>
        <td>
            {{ horaire.horaire_de_fin }}
        </td>

        <td><button @click="allerADetail" class="btn btn-primary">Details</button>
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
    horaire: {
        type: Object,
        default: () => ({
            id: '',
            jour_de_semaine: '',
            horaire_de_debut: 'test',
            horaire_de_fin: 'test',
        })
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton ici")
    console.log("ID ici", props.horaire.id)
    emit('supprimer', props.horaire.id)
}

// La fonction pour la redirection vers la page Detail
const allerADetail = () => {
    router.push(`/details/${props.horaire.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour = () => {
    router.push(`/mise-a-jour/${props.horaire.id}`)
}

</script>

<style scoped></style>