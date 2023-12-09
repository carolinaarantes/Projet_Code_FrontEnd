// Importer axios
import axios from 'axios'

// Creation des composables

const useHoraire = () =>{

    const listeHoraires = async()=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/horaires`)
    
        return resultat.data.data
    }

    const ajouterHoraire = async(horaire)=>{
        const resultat = await axios.post(`${import.meta.env.VITE_BASE_URL}/horaires`, horaire)

        return resultat.data.data
    }

    const getHoraireById = async (id)=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/horaires/${id}`)
    
        return resultat.data.data
    }

    const supprimerHoraire = async (id)=>{

        const resultat = await axios.delete(`${import.meta.env.VITE_BASE_URL}/horaires/${id}`)
    
        return resultat.data.data
    }

    const updateHoraire = async (id, horaire) => {
        const resultat = await axios.put(`${import.meta.env.VITE_BASE_URL}/horaires/${id}`, horaire)
            return resultat.data.data
        
    }

    return{listeHoraires, ajouterHoraire, getHoraireById, supprimerHoraire, updateHoraire}
}

export default useHoraire