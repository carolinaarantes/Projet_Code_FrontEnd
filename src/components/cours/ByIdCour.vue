<template>
    <div>
      <form class="detail_user">
        <div class="row mb-2">
          <label for="courId" class="col-md-2" style="white-space: nowrap; margin-left: 2vw;">
            Entrez l'ID du cours à rechercher:
          </label>
        </div>
        <div class="row mb-2">
          <div class="col-md-6">
            <input v-model="rechercheID" class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style="margin-left: 2vw;">
          </div>
          <div class="col-md-4">
            <button @click="rechercherCour" class="btn btn-primary" style="margin-left: 2vw;">Rechercher</button>
          </div>
        </div>
      </form>
  
      <div v-if="cours.Cours && cours.Cours.length > 0">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID du cour</th>
              <th>Nom du cour</th>
              <th>Salle de classe</th>
              <th>Nombre de crédits</th>
            </tr>
          </thead>
          <tbody>
            <!-- Display details of the searched course -->
            <tr v-if="cours.Cours[0]">
              <td>{{ cours.Cours[0].id }}</td>
              <td>{{ cours.Cours[0].nom_du_cours }}</td>
              <td>{{ cours.Cours[0].salle_de_classe }}</td>
              <td>{{ cours.Cours[0].nombre_de_credits }}</td>
              <!-- Add more columns if needed -->
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" @click="allerAJouterCour">
          Ajouter un cours
        </button>
      </div>
      <div v-else>
        <p>Aucun cours trouvé</p>
      </div>
    </div>
  </template>

<script setup>
import { ref, reactive, onBeforeMount } from 'vue';
// Recuperer les variable de chemin
import { useRoute, useRouter } from 'vue-router';
// Fonction/Service qui permet de recuperer un etudiant depuis la base de donnees
import useCour from '../../services/serviceCour';

const cours = ref({ Cours: [] });
const { getCourById } = useCour()
const route = useRoute()
const router = useRouter();
console.log('route', route)
const { id } = route.params
const rechercheID = ref('');


const rechercherCour = () => {
  // Check if rechercheID.value is not empty and is a positive integer
  if (!rechercheID.value || !/^\d+$/.test(rechercheID.value)) {
    console.error('Erreur ! Vous devez entrer un ID valide');
    return;
  }

  getCourById(rechercheID.value)
    .then(data => {
      cours.value = { Cours: [data] };
      console.log('Cours recherché:', data);
    })
    .catch(err => {
      console.error('Erreur lors de la recherche du cours:', err);
    });
};

onBeforeMount(() => {

  if (id) {

    getCourById(id).then((data) => {

      console.log('Cour', data);

      cours.value = data;

    }).catch(err => console.log('Détail du cours', err));
  }
});

</script>

<style lang="scss" scoped></style>