<template>
    <div>
      <h1>Supprimer l'utilisateur {{ utilisateur.nom }} {{ utilisateur.prenom }}</h1>
      <p>Êtes-vous sûr de vouloir supprimer cet utilisateur?</p>
      <button @click="confirmerSuppression" class="btn btn-danger">Confirmer la suppression</button>
      <button @click="annulerSuppression" class="btn btn-secondary">Annuler</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import useUtilisateur from '../../services/serviceUtilisateur';
  
  const router = useRouter();
  const { getUtilisateurById, supprimerUtilisateur } = useUtilisateur();
  const utilisateur = ref({});
  
  const confirmerSuppression = () => {
    supprimerUtilisateur(utilisateur.value.id)
      .then(() => {
        router.push('/utilisateurs');
      })
      .catch((err) => {
        console.error('Erreur lors de la suppression de l`utilisateur', err);
      });
  };
  
  const annulerSuppression = () => {
    router.push('/utilisateurs');
  };
  
  onBeforeMount(() => {
    getUtilisateurById(route.params.id)
      .then((data) => {
        utilisateur.value = data;
      })
      .catch((err) => {
        console.error('Erreur lors de la récupération de l\'utilisateur', err);
      });
  });
  </script>
  