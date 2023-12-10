<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView } from 'vue-router'
import { useRouter } from 'vue-router';
import useAuthStore from './stores/auth';
const store = useAuthStore()
const { logout } = store
//Pour la reactivite des getters, on utilise storeToRefs
const { loggedInUser } = storeToRefs(store)

const router = useRouter()
</script>

<template>
  <div></div>
  <header>

  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">
        <img src="./assets/logo_school.jpg" height="80" width="80" alt="Logo" />
      </RouterLink>
      
      <div class="collapse navbar-collapse" id="navbarNavContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown" @mouseover="showDropdown" @mouseleave="hideDropdown">
            <RouterLink class="nav-link dropdown-toggle" to="/utilisateurs" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Utilisateurs
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/utilisateurs/ajout">Ajouter utilisateur</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/utilisateurs/details/:id">Détails utilisateur</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/utilisateurs/mise-a-jour/:id">Modifier utilisateur</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/utilisateurs">Liste d'utilisateurs</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link dropdown-toggle" to="/roles" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Roles
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/roles/ajout">Ajouter role</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/roles/details/:id">Détails role</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/roles/mise-a-jour/:id">Modifier role</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/roles">Liste de roles</a></li>            </ul>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link dropdown-toggle" to="/programmes" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Programmes
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/programmes/ajout">Ajouter programme</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/programmes/details/:id">Détails programme</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/programmes/mise-a-jour/:id">Modifier programme</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/programmes">Liste de programmes</a></li>            </ul>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link dropdown-toggle" to="/cours" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Cours
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/cours/ajout">Ajouter cours</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/cours/details/:id">Détails cours</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/cours/mise-a-jour/:id">Modifier cours</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/cours">Liste de cours</a></li>            
            </ul>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link dropdown-toggle" to="/horaires" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Horaires
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/horaires/ajout">Ajouter horaire</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/horaires/details/:id">Détails horaire</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/horaires/mise-a-jour/:id">Modifier horaire</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/horaires">Liste de horaires</a></li>            </ul>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link dropdown-toggle" to="/examens" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Examens
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/examens/ajout">Ajouter examen</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/examens/details/:id">Détails examen</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/examens/mise-a-jour/:id">Modifier examen</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/examens">Liste d'examens</a></li>            </ul>
          </li>
          <li class="nav-item dropdown">
            <RouterLink class="nav-link dropdown-toggle" to="/bulletins" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Bulletins
            </RouterLink>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><RouterLink class="dropdown-item" to="/bulletins/ajout">Ajouter bulletin</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/bulletins/details/:id">Détails bulletin</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><RouterLink class="dropdown-item" to="/bulletins/mise-a-jour/:id">Modifier bulletin</RouterLink></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/bulletins">Liste de bulletins</a></li>            </ul>
          </li>
        </ul>
        <div class="d-flex align-items-center gx-20">
            <div v-if="loggedInUser?.id">Bienvenu {{ loggedInUser.prenom + ' ' + loggedInUser.nom }}</div>
            <button v-else @click="router.push('/login')" class="btn btn-outline-success">Login</button>
            <button v-if="loggedInUser?.id" @click="logout" class="btn btn-danger">Logout</button>
          </div>
      </div>
    </div>
  </nav>
</header>
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

.navbar{
  background-color: rgb(198, 207, 240);
}
</style>

