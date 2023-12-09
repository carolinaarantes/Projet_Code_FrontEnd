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
import { ref, reactive } from 'vue';

const bulletin = ref([])
import useBulletin from '../../services/serviceBulletin'
import { useRouter } from 'vue-router'
const router = useRouter()

const { ByIdBulletin, supprimerBulletin } = useBulletin()
onBeforeMount(() => {

    ByIdBulletin().then(data => {
        bulletin.value = data

        console.log('Liste de bulletin', data)
    })


})
import Bulletin from './Bulletin.vue';

const supprimer = (id) => {
    console.log('emits', id)
    supprimerBulletin(id).then((data) => {
        console.log('suppression', data)
        ByIdBulletin().then(data => {
            bulletin.value = data

            console.log('Liste de bulletin', data)
        }).catch(err => {
            console.log(err.message)
        })

    })

}

const allerAJouterBulletin = () => {
    router.push('/ajout')
}


</script>

<style lang="scss" scoped></style>