<template>
  <div class="role-container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="header-cell">Id</th>
          <th class="header-cell">Categorie</th>
        </tr>
      </thead>
      <tbody v-if="roles && roles.length">
        <Role v-for="unRole in roles" :key="unRole.id" :role="unRole"/>
          <td>{{ role.id }}</td>
          <td>{{ role.categorie }}</td>
          <td>
            <button @click="supprimer(role.id)">Supprimer</button>
          </td>       
      </tbody>
      <tr v-else>
        <td colspan="3">Loading roles...</td>
      </tr>
    </table>
    <button :disabled="loggedInUser?.id" class="btn btn-primary"
      :class="[loggedInUser?.id ? 'btn-secondary' : 'btn btn-primary']" @click="allerAjouterRole">
      Ajouter un role
    </button>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { ref, reactive, defineProps, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router'
import useRole from '../../services/serviceRole.js'
import useAuthStore from '../../stores/auth';
import Role from './Role.vue'


const store = useAuthStore()
const { loggedInUser } = storeToRefs(store)
const router = useRouter()
const { role } = defineProps(['role']);

const { listeRoles, supprimerRole } = useRole()

const roles = ref([]);

onBeforeMount(async () => {
  try {
    const data = await listeRoles();
    console.log('Liste role', data);
    roles.value = data
    console.log('Liste role', roles.value);
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
});

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

const afficherListeRoles = async () => {
  try {
    const roles = await listeRoles();
    console.log('List of roles:', roles);
  } catch (error) {
    console.error('Error fetching roles:', error);
  }
};

afficherListeRoles();

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