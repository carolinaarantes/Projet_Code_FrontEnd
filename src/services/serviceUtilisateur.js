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
        try{

            const roleDetail = await axios.get(`/api/roles/${utilisateur.roles}`)
            const utilisateurPayload = {
                ...utilisateur,
                roles:roleDetail.data                
            };

            const resultat = await frontAPI.post(`/utilisateurs/ajout`, utilisateurPayload)
            return resultat.data
        }
        catch(error){
            throw error;
        }
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