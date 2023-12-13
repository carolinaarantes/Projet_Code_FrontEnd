<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>ID du bulletin</th>
                <th>Moyenne</th>                
            </tr>
        </thead>
        <tbody>
            <Bulletin v-for="bulletinUtilisateur in bulletins.Bulletins" :key="bulletinUtilisateur.id" :bulletin="bulletinUtilisateur" @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAJouterBulletin">Ajouter un bulletin</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
import useBulletin from '../../services/serviceBulletin.js'
import { useRouter } from 'vue-router';
import useAuthStore from '../../stores/auth';
import Bulletin from './Bulletin.vue'
import { storeToRefs } from 'pinia';

const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const router = useRouter()
const bulletins = ref({Bulletins:[]})
const { listeBulletins, supprimerBulletin } = useBulletin()


onBeforeMount(() => {

    listeBulletins().then(data => {

        bulletins.value = data

        console.log('Liste de bulletin', data)
    })


})

const supprimer = (id) => {

    console.log('emits', id)

    supprimerBulletin(id).then((data) => {

        console.log('suppression', data)

        listeBulletins().then(data => {

            bulletins.value = data

            console.log('Liste de bulletin', data)

        }).catch(err => {

            console.log(err.message)
        })

    }).catch((error) => {
      console.error("Erreur lors de la suppression de l'examen:", error);
    });

}

const allerAJouterBulletin = () => {
    router.push('/bulletins/ajout')
}


</script>

<style lang="scss" scoped></style>