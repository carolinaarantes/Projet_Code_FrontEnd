<template>
    <tr>
        <td>
            {{ utilisateur.photo }}
        </td>
        <td>
            {{ utilisateur.nom }}
        </td>
        <td>
            {{ utilisateur.prenom }}
        </td>
        <td>
            {{ utilisateur.dateDeNaissance }}
        </td>
        <td>
            {{ utilisateur.telephone }}
        </td>
        <td>
            {{ utilisateur.email }}
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
    utilisateur: {
        type: Object,
        default: () => ({
            id: '',
            photo:'',
            nom: 'test',
            prenom: 'test',
            dateDeNaissance: 'test',
            telephone: 'test',
            email: 'test',            
        })
    }
})

const emit = defineEmits(['supprimer', 'editer'])

const gererSuppression = () => {
    console.log("Bouton ici")
    console.log("ID ici", props.utilisateur.id)
    emit('supprimer', props.utilisateur.id)
}

// La fonction pour la redirection vers la page Detail
const allerADetail=()=>{
    router.push(`/details/${props.utilisateur.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour=()=>{
    router.push(`/mise-a-jour/${props.utilisateur.id}`)
}
    
</script>

<style lang="scss" scoped>

</style>