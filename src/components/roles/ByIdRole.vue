<template>
    <div>
        <p>Role</p>
        <div>Categorie: {{ role.categorie }}</div>
    </div>
</template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';

// Recuperer les variable de chemin
import { useRoute } from 'vue-router';
const route = useRoute()
console.log('route', route)
const { id } = route.params 

// Fonction/Service qui permet de recuperer un role depuis la base de donnees
import useRole from '../../services/serviceRole';

const { getRoleById } = useRole()

const role = ref({})

onBeforeMount(() => {

    if (id)
        getRoleById(id).then((data) => {
            console.log('Role', data)
            role.value = data
        }).catch(err => console.log('Detail role', err))

})

</script>

<style lang="scss" scoped></style>