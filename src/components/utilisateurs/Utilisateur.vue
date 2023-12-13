<template>
    <tr>
        <td>
            {{ utilisateur.id }}<!--La photo on va juste la montrer dans le detail de l'utilisateur dans un div au top de la page -->
        </td>
        
        <td>
            {{ utilisateur.nom }}
        </td>
        <td>
            {{ utilisateur.prenom }}
        </td>
        <td>
            {{ utilisateur.dateNaissance }}
        </td>
        <td>
            {{ utilisateur.numeroTelephone }}
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
            dateNaissance: 'test',
            numeroTelephone: 'test',
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
    router.push(`/utilisateurs/details/${props.utilisateur.id}`)
}

// La fonction pour la redirection vers la page Detail
const allerAMiseAJour=()=>{
    router.push(`/utilisateurs/${props.utilisateur.id}`)
}
    
</script>

<style lang="scss" scoped>

</style>