<template>
    <tr>
        <td>
            {{ programme.id }}
        </td>
        <td>
            {{ programme.nom_du_programme }}
        </td>
        <td>
            {{ programme.date_de_debut }}
        </td>
        <td>
            {{ programme.date_de_fin }}
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

//********** */ ICI IL FAUT METTRE LES MEMES NOMS QUE DANS LA BASE DE DONNEE SINON CA NE CHARGE PAS LES DONNEES ***************/
const props = defineProps({
    programme: {
        type: Object,
        default: () => ({
            id: 'test',
            nom_du_programme: 'test',
            date_de_debut: 'test',
            date_de_fin: 'test',
        })
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton ici")
    console.log("ID ici", props.programme.id)
    emit('supprimer', props.programme.id)
}

// La fonction pour la redirection vers la page Detail
const allerADetail = () => {
    router.push(`/details/${props.programme.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour = () => {
    router.push(`/mise-a-jour/${props.programme.id}`)
}

</script>

<style lang="scss" scoped></style>