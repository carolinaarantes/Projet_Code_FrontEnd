<template>
    <tr>
        <td>
            {{ programme.nomDuProgramme }}
        </td>
        <td>
            {{ programme.dateDeDebut }}
        </td>
        <td>
            {{ programme.dateDeFin }}
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
    programme: {
        type: Object,
        default: () => ({
            id: '',
            nomDuProgramme:'',
            dateDeDebut: 'test',
            dateDeFin: 'test',            
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
const allerADetail=()=>{
    router.push(`/details/${props.programme.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour=()=>{
    router.push(`/mise-a-jour/${props.programme.id}`)
}
    
</script>

<style lang="scss" scoped>

</style>