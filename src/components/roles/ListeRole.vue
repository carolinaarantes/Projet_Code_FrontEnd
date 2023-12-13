<template>
  <div class="role-container">
    <table class="table table-striped">
      <thead>
        <tr>
          <th class="header-cell">ID du role</th>
          <th class="header-cell">Categorie</th>
        </tr>
      </thead>
      <tbody>
        <Role v-for="unRole in roles.Roles" :key="unRole.id" :role="unRole" />
      </tbody>
    </table>
    <button class="btn btn-primary" @click="allerAjouterRole">Ajouter un role</button>    
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
const roles = ref({ Roles: [] });


onBeforeMount(() => {

  listeRoles().then(data => {

    roles.value = data

    console.log('Liste role', data);

  });

});

const supprimer = (id) => {

  console.log('emits', id)

  supprimerRole(id).then((data) => {

    console.log('suppression', data)

    listeRoles().then(data => {

      roles.value = data

      console.log('Liste roles', data)

    }).catch(err => {

      console.log(err.message)

    })

  }).catch((error) => {
    console.error("Erreur lors de la suppression du role:", error);
  });
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