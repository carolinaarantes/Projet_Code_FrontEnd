<template>
    <table class="table table-striped"> <!--maintenir le meme nom de class qu'utilisateur?-->
        <thead>
            <tr>
                <th>Categorie</th>
            </tr>
        </thead>
        <tbody>
            <Role v-for="role in roles" :key="role.id" :roles="role" @supprimer="supprimer" />
        </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAjouterRole">Ajouter un role</button>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
const roles = ref([])
import useRole from '../../services/serviceRole.js'
import { useRouter } from 'vue-router';
import useAuthStore from '../../stores/auth';
const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const router = useRouter()

const { listeRoles, supprimerRole } = useRole()
onBeforeMount(() => {

    listeRoles().then(data => {
        roles.value = data

        console.log('Liste role', data)
    })

})
import Role from './Role.vue'
import { storeToRefs } from 'pinia';


const supprimer = (id) => {
    console.log('emits', id)
    supprimerRole(id).then((data) => {
        console.log('suppression', data)
        listeRoles().then(data => {
            roles.value = data

            console.log('Liste role', data)
        }).catch(err => {
            console.log(err.message)
        })

    })
}

const allerAjouterRole = () => {
    router.push('/roles/ajout')
}

</script>

<style lang="scss" scoped>

</style>