// Importer axios
import axios from 'axios'

// Creation des composables

const useUtilisateur = () =>{

    const listeUtilisateurs = async()=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/utilisateurs`)
    
        return resultat.data.data
    }

    const ajouterUtilisateur = async(utilisateur)=>{
        const resultat = await axios.post(`${import.meta.env.VITE_BASE_URL}/utilisateurs`, utilisateur)

        return resultat.data.data
    }

    const getUtilisateurById = async (id)=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${id}`)
    
        return resultat.data.data
    }

    const supprimerUtilisateur = async ()=>{

        const resultat = await axios.delete(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${id}`)
    
        return resultat.data.data
    }

    const updateUtilisateur = async (id, utilisateur) => {
        const resultat = await axios.put(`${import.meta.env.VITE_BASE_URL}/utilisateurs/${id}`, utilisateur)
            return resultat.data.data
        
    }

    return{listeUtilisateurs, ajouterUtilisateur, getUtilisateurById, supprimerUtilisateur, updateUtilisateur}
}

export default useUtilisateur