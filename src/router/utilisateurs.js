import { createRouter, createWebHistory } from 'vue-router'
import ListeUtilisateur from '../components/utilisateurs/ListeUtilisateur.vue'
import ByIdUtilisateur from '../components/utilisateurs/ByIdUtilisateur.vue'
import AjouterUtilisateur from '../components/utilisateurs/AjouterUtilisateur.vue'
import UpdateUtilisateur from '../components/utilisateurs/UpdateUtilisateur.vue'
import SupprimerUtilisateur from '../components/utilisateurs/SupprimerUtilisateur.vue'
import Login from '../components/auth/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/utilisateurs',
      name: 'utilisateurs-liste', //'home'
      component: ListeUtilisateur
    },
    {
      path: '/utilisateurs/details/:id',
      name: 'details-details',
      component: ByIdUtilisateur
    },
    {
      path: '/utilisateurs/ajout',
      name: 'ajout-utilisateur',
      component: AjouterUtilisateur
    },
    {
      path: '/utilisateurs/mise-a-jour/:id',
      name: 'mise-a-jour-utilisteur',
      component: UpdateUtilisateur
    },   
    {
      path: '/utilisateurs/suprimmer/:id',
      name: 'supprimer-utilisateur',
      component: SupprimerUtilisateur
    }, 
    {
      path: '/login',
      name: 'login',
      component: Login
      
    },
  ]
})


export default router
