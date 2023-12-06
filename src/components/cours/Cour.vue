<template>
    <tr>
        <td>
            {{ cour.nom_du_cour }}
        </td>
        <td>
            {{ cour.salle_du_cours }}
        </td>
        <td>
            {{ cour.credits }}
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
    cour: {
        type: Object,
        default: () => ({
            nom_du_cour: 'test',
            salle_du_cours: 'test',
            credits: 'test',
          
        })
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton ici")
    console.log("ID ici", props.cour.id)
    emit('supprimer', props.cour.id)

}

// La fonction pour la redirection vers la page Detail
const allerADetail=()=>{
    router.push(`/details/${props.cour.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour=()=>{
    router.push(`/mise-a-jour/${props.cour.id}`)
}

</script>

<style scoped></style>