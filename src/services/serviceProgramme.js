// Importer axios
import axios from 'axios'

// Creation des composables

const useProgramme = () =>{

    const listeProgrammes = async()=>{
        try {
            const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/programmes`)
            const programmes = resultat.data;
            console.log('Liste des cours:', programmes);
            return programmes;
        } catch (error) {
            console.error('Erreur lors de la récupération des cours:', error);
            throw error;
        } 
    }

    const ajouterProgramme = async(programme)=>{
        const resultat = await axios.post(`${import.meta.env.VITE_BASE_URL}/programmes`, programme)

        return resultat.data.data
    }

    const getProgrammeById = async (id)=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/programmes/${id}`)
    
        return resultat.data.data
    }

    const supprimerProgramme = async (id)=>{

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