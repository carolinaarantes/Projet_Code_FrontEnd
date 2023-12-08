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
      name: 'home',
      component: ListeUtilisateur
    },
    {
      path: '/details/:id',
      name: 'details',
      component: ByIdUtilisateur
    },
    {
      path: '/ajout',
      name: 'ajout',
      component: AjouterUtilisateur
    },
    {
      path: '/mise-a-jour/:id',
      name: 'mise-a-jour',
      component: UpdateUtilisateur
    },   
    {
      path: '/suprimmer/:id',
      name: 'supprimer',
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
