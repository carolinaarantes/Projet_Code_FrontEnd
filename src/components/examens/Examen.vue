<template>
    <tr>
        <td>
            {{ examen.id }}
        </td>
        <td>
            {{ examen.matiere }}
        </td>
        <td>
            {{ examen.date_examen }}
        </td>
        <td>
            {{ examen.horaire_de_debut }}
        </td>
        <td>
            {{ examen.horaire_de_fin }}
        </td>
        <td>
            {{ examen.salle_examen }}
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
const router=useRouter()

const props = defineProps({
    examen: {
        type: Object,
        default: () => ({
            id:'test',
            matiere: 'test',
            date_examen: 'test',
            horaire_de_debut: 'test',
            horaire_de_fin:'test',
            salle_examen:'test'
          
        })
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton ici")
    console.log("ID ici", props.examen.id)
    emit('supprimer', props.examen.id)

}

// La fonction pour la redirection vers la page Detail
const allerADetail=()=>{
    router.push(`/details/${props.examen.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour=()=>{
    router.push(`/mise-a-jour/${props.examen.id}`)
}

</script>

<style scoped></style>