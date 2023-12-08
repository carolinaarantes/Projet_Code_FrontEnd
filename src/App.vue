<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Page D'acceuil</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Créer un compte</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login" to="">Login</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Utilisateurs
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/ajout">Ajouter utilisateur</a></li>
              <li><a class="dropdown-item" href="/details/:id">Détails utilisateur</a></li>
              <li><a class="dropdown-item" href="/mise-a-jour/:id">Mise à jour utilisateur</a></li>
              <li><a class="dropdown-item" href="/suprimmer/:id">Supprimer utilisateur</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Roles
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/ajout">Ajouter role</a></li>
              <li><a class="dropdown-item" href="#">Détails role</a></li>
              <li><a class="dropdown-item" href="#">Modifier role</a></li>
              <li><a class="dropdown-item" href="#">Supprimer role</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Programmes
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/ajout">Ajouter programme</a></li>
              <li><a class="dropdown-item" href="#">Détails programme</a></li>
              <li><a class="dropdown-item" href="#">Modifier programme</a></li>
              <li><a class="dropdown-item" href="#">Supprimer programme</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cours
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/ajout">Ajouter cour</a></li>
              <li><a class="dropdown-item" href="#">Détails cour</a></li>
              <li><a class="dropdown-item" href="#">Modifier cour</a></li>
              <li><a class="dropdown-item" href="#">Supprimer cour</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Horaires
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/ajout">Ajouter horaire</a></li>
              <li><a class="dropdown-item" href="#">Détails horaire</a></li>
              <li><a class="dropdown-item" href="#">Modifier horaire</a></li>
              <li><a class="dropdown-item" href="#">Supprimer horaire</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Examens
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/ajout">Ajouter examen</a></li>
              <li><a class="dropdown-item" href="#">Détails examen</a></li>
              <li><a class="dropdown-item" href="#">Modifier examen</a></li>
              <li><a class="dropdown-item" href="#">Supprimer examen</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bulletins
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/ajout">Ajouter bulletin</a></li>
              <li><a class="dropdown-item" href="#">Détails bulletin</a></li>
              <li><a class="dropdown-item" href="#">Modifier bulletin</a></li>
              <li><a class="dropdown-item" href="#">Supprimer bulletin</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div>
    <RouterView/>
  </div>
</template>

<style scoped>

</style>
