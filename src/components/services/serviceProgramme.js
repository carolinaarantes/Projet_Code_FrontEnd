// Importer axios
import axios from 'axios'

// Creation des composables

const useProgramme = () =>{

    const listeProgrammes = async()=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/programmes`)
    
        return resultat.data.data
    }

    const ajouterProgramme = async(programme)=>{
        const resultat = await axios.post(`${import.meta.env.VITE_BASE_URL}/programmes`, programme)

        return resultat.data.data
    }

    const getProgrammeById = async (id)=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/programmes/${id}`)
    
        return resultat.data.data
    }

    const supprimerProgramme = async ()=>{

        const resultat = await axios.delete(`${import.meta.env.VITE_BASE_URL}/programmes/${id}`)
    
        return resultat.data.data
    }
    
    const updateProgramme = async (id, programme) => {
        const resultat = await axios.put(`${import.meta.env.VITE_BASE_URL}/programmes/${id}`, programme)
            return resultat.data.data
        
    }

    return{listeProgrammes, ajouterProgramme, getProgrammeById, supprimerProgramme, updateProgramme}
}

export default useProgramme