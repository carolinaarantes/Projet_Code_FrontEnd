<template>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Moyenne</th>                
            </tr>
        </thead>
        <tbody>
            <Bulletin v-for="bulletinUtilisateur in bulletin" :key="bulletinUtilisateur.id" :bulletin="bulletinUtilisateur" @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAJouterBulletin">Ajouter un bulletin</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
const bulletins = ref([])
import useBulletin from '../../services/serviceBulletin.js'
import { useRouter } from 'vue-router';
import useAuthStore from '../../stores/auth';
const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const router = useRouter()

const { listeBulletins, supprimerBulletin } = useBulletin()
onBeforeMount(() => {

    listeBulletins().then(data => {
        bulletin.value = data

        console.log('Liste de bulletin', data)
    })


})
import Bulletin from './Bulletin.vue';
import { storeToRefs } from 'pinia';


const supprimer = (id) => {
    console.log('emits', id)
    supprimerBulletin(id).then((data) => {
        console.log('suppression', data)
        listeBulletins().then(data => {
            bulletin.value = data

            console.log('Liste de bulletin', data)
        }).catch(err => {
            console.log(err.message)
        })

    })

}

const allerAJouterBulletin = () => {
    router.push('/bulletins/ajout')
}


</script>

<style lang="scss" scoped></style>