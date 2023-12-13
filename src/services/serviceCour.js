// Importer axios
import axios from 'axios'

// Creation des composables

const useCour = () =>{
   
    const listeCours = async () => {
        try {
            const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/cours`)
            const cours = resultat.data;
            console.log('Liste des cours:', cours);
            return cours;
        } catch (error) {
            console.error('Erreur lors de la récupération des cours:', error);
            throw error;
        }
    };

    const ajouterCour = async(cour)=>{
        const resultat = await axios.post(`${import.meta.env.VITE_BASE_URL}/cours`, cour)

        return resultat.data.data
    }

    const getCourById = async (id)=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/cours/${id}`)
    
        return resultat.data.data
    }

    const supprimerCour = async (id)=>{

        const resultat = await axios.delete(`${import.meta.env.VITE_BASE_URL}/cours/${id}`)
    
        return resultat.data.data
    }

    const updateCour = async (id, cour) => {
        const resultat = await axios.put(`${import.meta.env.VITE_BASE_URL}/cours/${id}`, cour)
            return resultat.data.data
        
    }

    return{listeCours, ajouterCour, getCourById, supprimerCour, updateCour}
}

export default useCour