<template>
    <tr>
        <td>
            {{ horaire.jourDeSemaine }}
        </td>
        <td>
            {{ horaire.horaireDeDebut }}
        </td>
        <td>
            {{ horaire.horaireDeFin }}
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
    horaire: {
        type: Object,
        default: () => ({
            id: '',
            jourDeSemaine:'',
            horaireDeDebut: 'test',
            horaireDeFin: 'test',            
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
const allerADetail=()=>{
    router.push(`/details/${props.horaire.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour=()=>{
    router.push(`/mise-a-jour/${props.horaire.id}`)
}
    
</script>

<style lang="scss" scoped>

</style>