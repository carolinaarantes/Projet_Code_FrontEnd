<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div></div>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">          
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Utilisateurs
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/utilisateurs/ajout">Ajouter utilisateur</a></li>
              <li><a class="dropdown-item" href="/utilisateurs/details/:id">Détails utilisateur</a></li>
              <li><a class="dropdown-item" href="/utilisateurs/mise-a-jour/:id">Mise à jour utilisateur</a></li>
              <li><a class="dropdown-item" href="/utilisateurs">Liste utilisateurs</a></li>
              <li><a class="dropdown-item" href="/utilisateurs/supprimmer/:id">Supprimer utilisateur</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Roles
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/roles/ajout">Ajouter role</a></li>
              <li><a class="dropdown-item" href="/roles/details/:id">Détails role</a></li>
              <li><a class="dropdown-item" href="/roles/mise-a-jour/:id">Modifier role</a></li>
              <li><a class="dropdown-item" href="/roles/supprimmer/:id">Supprimer role</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Programmes
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/programmes/ajout">Ajouter programme</a></li>
              <li><a class="dropdown-item" href="/programmes/details/:id">Détails programme</a></li>
              <li><a class="dropdown-item" href="/programmes/mise-a-jour/:id">Modifier programme</a></li>
              <li><a class="dropdown-item" href="/programmes/supprimmer/:id">Supprimer programme</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cours
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/cours/ajout">Ajouter cour</a></li>
              <li><a class="dropdown-item" href="/cours/details/:id">Détails cour</a></li>
              <li><a class="dropdown-item" href="/cours/mise-a-jour/:id">Modifier cour</a></li>
              <li><a class="dropdown-item" href="/cours/supprimmer/:id">Supprimer cour</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Horaires
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/horaires/ajout">Ajouter horaire</a></li>
              <li><a class="dropdown-item" href="/horaires/details/:id">Détails horaire</a></li>
              <li><a class="dropdown-item" href="/horaires/mise-a-jour/:id">Modifier horaire</a></li>
              <li><a class="dropdown-item" href="/horaires/supprimmer/:id">Supprimer horaire</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Examens
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/examens/ajout">Ajouter examen</a></li>
              <li><a class="dropdown-item" href="/examens/details/:id">Détails examen</a></li>
              <li><a class="dropdown-item" href="/examens/mise-a-jour/:id">Modifier examen</a></li>
              <li><a class="dropdown-item" href="/examens/supprimmer/:id">Supprimer examen</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bulletins
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/bulletins/ajout">Ajouter bulletin</a></li>
              <li><a class="dropdown-item" href="/bulletins/details/:id">Détails bulletin</a></li>
              <li><a class="dropdown-item" href="/bulletins/mise-a-jour/:id">Modifier bulletin</a></li>
              <li><a class="dropdown-item" href="/bulletins/supprimmer/:id">Supprimer bulletin</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="content-container">
    <RouterView/>
  </div>
</template>

<style scoped>
.bg-body-tertiary {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  top: 0;   
  
}
.content-container {
  margin-top: 70px;
  padding: 20px;  
}


</style>
