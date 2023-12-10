// Importer axios
//import axios from 'axios'

import frontAPI from "./axiosAPI"

// Creation des composables

const useUtilisateur = () =>{

    const listeUtilisateurs = async()=>{
        const resultat = await frontAPI.get(`/utilisateurs`)
    
        return resultat.data.data
    }

    const ajouterUtilisateur = async(utilisateur)=>{
        const resultat = await frontAPI.post(`/utilisateurs/ajout`, utilisateur)

        return resultat.data.data
    }

    const getUtilisateurById = async (id)=>{
        const resultat = await frontAPI.get(`/utilisateurs/${id}`)
    
        return resultat.data.data
    }

    const supprimerUtilisateur = async (id)=>{

        const resultat = await frontAPI.delete(`/utilisateurs/${id}`)
    
        return resultat.data.data
    }

    const updateUtilisateur = async (id, utilisateur) => {
        const resultat = await frontAPI.put(`/utilisateurs/${id}`, utilisateur)
            return resultat.data.data
        
    }

    return{listeUtilisateurs, ajouterUtilisateur, getUtilisateurById, supprimerUtilisateur, updateUtilisateur}
}

export default useUtilisateur