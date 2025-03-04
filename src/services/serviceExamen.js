// Importer axios
import axios from 'axios'

// Creation des composables

const useExamen = () =>{

    const listeExamens = async()=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/examens`)
    
        return resultat.data.data
    }

    const ajouterExamen = async(examen)=>{
        const resultat = await axios.post(`${import.meta.env.VITE_BASE_URL}/examens`, examen)

        return resultat.data.data
    }

    const getExamenById = async (id)=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/examens/${id}`)
    
        return resultat.data.data
    }

    const supprimerExamen = async (id)=>{

        const resultat = await axios.delete(`${import.meta.env.VITE_BASE_URL}/examens/${id}`)
    
        return resultat.data.data
    }

    const updateExamen = async (id, examen) => {
        const resultat = await axios.put(`${import.meta.env.VITE_BASE_URL}/examens/${id}`, examen)
            return resultat.data.data
        
    }

    return{listeExamens, ajouterExamen, getExamenById, supprimerExamen, updateExamen}
}

export default useExamen