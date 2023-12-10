import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

import ListeUtilisateur from '../components/utilisateurs/ListeUtilisateur.vue'
import ByIdUtilisateur from '../components/utilisateurs/ByIdUtilisateur.vue'
import AjouterUtilisateur from '../components/utilisateurs/AjouterUtilisateur.vue'
import UpdateUtilisateur from '../components/utilisateurs/UpdateUtilisateur.vue'
import SupprimerUtilisateur from '../components/utilisateurs/SupprimerUtilisateur.vue'
import Login from '../components/auth/Login.vue'

import ListeRole from '../components/roles/ListeRole.vue'
import ByIdRole from '../components/roles/ByIdRole.vue'
import AjouterRole from '../components/roles/AjouterRole.vue'
import UpdateRole from '../components/roles/UpdateRole.vue'
import SupprimerRole from '../components/roles/SupprimerRole.vue'

import ListeProgramme from '../components/programmes/ListeProgramme.vue'
import ByIdProgramme from '../components/programmes/ByIdProgramme.vue'
import AjouterProgramme from '../components/programmes/AjouterProgramme.vue'
import UpdateProgramme from '../components/programmes/UpdateProgramme.vue'
import SupprimerProgramme from '../components/programmes/SupprimerProgramme.vue'

import ListeHoraire from '../components/horaires/ListeHoraire.vue'
import ByIdHoraire from '../components/horaires/ByIdHoraire.vue'
import AjouterHoraire from '../components/horaires/AjouterHoraire.vue'
import UpdateHoraire from '../components/horaires/UpdateHoraire.vue'
import SupprimerHoraire from '../components/horaires/SupprimerHoraire.vue'

import ListeExamen from '../components/examens/ListeExamen.vue'
import ByIdExamen from '../components/examens/ByIdExamen.vue'
import AjouterExamen from '../components/examens/AjouterExamen.vue'
import UpdateExamen from '../components/examens/UpdateExamen.vue'
import SupprimerExamen from '../components/examens/SupprimerExamen.vue'

import ListeCour from '../components/cours/ListeCour.vue'
import ByIdCour from '../components/cours/ByIdCour.vue'
import AjouterCour from '../components/cours/AjouterCour.vue'
import UpdateCour from '../components/cours/UpdateCour.vue'
import SupprimerCour from '../components/cours/SupprimerCour.vue'

import ListeBulletin from '../components/bulletins/ListeBulletin.vue'
import ByIdBulletin from '../components/bulletins/ByIdBulletin.vue'
import AjouterBulletin from '../components/bulletins/AjouterBulletin.vue'
import UpdateBulletin from '../components/bulletins/UpdateBulletin.vue'
import SupprimerBulletin from '../components/bulletins/SupprimerBulletin.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/utilisateurs',
      name: 'home-utilisateur',
      component: ListeUtilisateur
    },
    {
      path: '/utilisateurs/details/:id',
      name: 'details-utilisateur',
      component: ByIdUtilisateur
    },
    {
      path: '/utilisateurs/ajout',
      name: 'ajout-utilisateur',
      component: AjouterUtilisateur
    },
    {
      path: '/utilisateurs/mise-a-jour/:id',
      name: 'mise-a-jour-utilisateur',
      component: UpdateUtilisateur
    },   
    {
      path: '/utilisateurs/supprimer/:id',
      name: 'supprimer-utilisateur',
      component: SupprimerUtilisateur
    }, 
    {
      /*path: '/login',
      name: 'login',
      component: Login*/
      
    },

    {
      path: '/roles',
      name: 'home-role',
      component: ListeRole
    },
    {
      path: '/roles/details/:id',
      name: 'details-role',
      component: ByIdRole
    },
    {
      path: '/roles/ajout',
      name: 'ajout-role',
      component: AjouterRole
    },
    {
      path: '/roles/mise-a-jour/:id',
      name: 'mise-a-jour-role',
      component: UpdateRole
    },   
    {
      path: '/roles/suprimmer/:id',
      name: 'supprimer-role',
      component: SupprimerRole
    }, 

    {
      path: '/programmes',
      name: 'home-programme',
      component: ListeProgramme
    },
    {
      path: '/programmes/details/:id',
      name: 'details-programme',
      component: ByIdProgramme
    },
    {
      path: '/programmes/ajout',
      name: 'ajout-programme',
      component: AjouterProgramme
    },
    {
      path: '/programmes/mise-a-jour/:id',
      name: 'mise-a-jour-programme',
      component: UpdateProgramme
    },   
    {
      path: '/programmes/suprimmer/:id',
      name: 'supprimer-programme',
      component: SupprimerProgramme
    },


    {
      path: '/horaires',
      name: 'home-horaire',
      component: ListeHoraire
    },
    {
      path: '/horaires/details/:id',
      name: 'details-horaire',
      component: ByIdHoraire
    },
    {
      path: '/horaires/ajout',
      name: 'ajout-horaire',
      component: AjouterHoraire
    },
    {
      path: '/horaires/mise-a-jour/:id',
      name: 'mise-a-jour-horaire',
      component: UpdateHoraire
    },   
    {
      path: '/horaires/supprimmer/:id',
      name: 'supprimer-horaire',
      component: SupprimerHoraire
    },


    {
      path: '/examens',
      name: 'home-examen',
      component: ListeExamen
    },
    {
      path: '/examens/details/:id',
      name: 'details-examen',
      component: ByIdExamen
    },
    {
      path: '/examens/ajout',
      name: 'ajout-examen',
      component: AjouterExamen
    },
    {
      path: '/examens/mise-a-jour/:id',
      name: 'mise-a-jour-examen',
      component: UpdateExamen
    },   
    {
      path: '/examens/supprimmer/:id',
      name: 'supprimer-examen',
      component: SupprimerExamen
    },


    {
      path: '/cours',
      name: 'home-cour',
      component: ListeCour
    },
    {
      path: '/cours/details/:id',
      name: 'details-cour',
      component: ByIdCour
    },
    {
      path: '/cours/ajout',
      name: 'ajout-cour',
      component: AjouterCour
    },
    {
      path: '/cours/mise-a-jour/:id',
      name: 'mise-a-jour-cour',
      component: UpdateCour
    },   
    {
      path: '/cours/supprimmer/:id',
      name: 'supprimer-cour',
      component: SupprimerCour
    },

    {
      path: '/bulletins',
      name: 'home-bulletin',
      component: ListeBulletin
    },
    {
      path: '/bulletins/details/:id',
      name: 'details-bulletin',
      component: ByIdBulletin
    },
    {
      path: '/bulletins/ajout',
      name: 'ajout-bulletin',
      component: AjouterBulletin
    },
    {
      path: '/bulletins/mise-a-jour/:id',
      name: 'mise-a-jour-bulletin',
      component: UpdateBulletin
    },   
    {
      path: '/bulletins/supprimmer/:id',
      name: 'supprimer-bulletin',
      component: SupprimerBulletin
    },

  ]
})

// Liste des routes non protegees
import useAuthStore from '../stores/auth'
const routeOuvertes = ['login', 'ajout']

/*router.beforeEach((to, from, next) => {
  const { getToken: token } = useAuthStore()
  if (routeOuvertes.includes(to.name.toLowerCase()) && token) next({ name: 'home' })
  if (!routeOuvertes.includes(to.name.toLowerCase()) && !token) next({ name: 'login' })
  else next()
})*/


export default router
