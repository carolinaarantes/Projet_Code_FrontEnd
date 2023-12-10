<template>
    <div class="role-container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="header-cell">Id</th>
            <th class="header-cell">Categorie</th>
            <td>{{ role && role.categorie }}</td>
          </tr>
        </thead>
        <tbody>
          <Role v-for="role in roles" :key="role.id" :roles="role" @supprimer="supprimer" />
        </tbody>
      </table>
      <button
        :disabled="loggedInUser?.id"
        class="btn btn-primary"
        :class="[loggedInUser?.id ? 'btn-secondary' : 'btn btn-primary']"
        @click="allerAjouterRole"
      >
        Ajouter un role
      </button>
    </div>
  </template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, reactive, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'
import useRole from '../../services/serviceRole.js'


import useAuthStore from '../../stores/auth';
const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const router = useRouter()


const roles = ref([])

const { role } = defineProps(['role']);

const { listeRoles, supprimerRole } = useRole()

onBeforeMount(async () => {
    try {
        const data = await listeRoles();
        console.log('Liste role', data);
        roles.value = data;
    } catch (error) {
        console.error('Error fetching roles:', error);
    }
});
import Role from './Role.vue'



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

<style scoped>
.role-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.header-cell {
  color: black;
}

</style>