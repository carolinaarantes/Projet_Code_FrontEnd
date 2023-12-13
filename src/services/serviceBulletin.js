// Importer axios
import axios from 'axios'

// Creation des composables

const useBulletin = () =>{

    const listeBulletins = async()=>{
        try {
            const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/bulletins`)
            const bulletins = resultat.data;
            console.log('Liste des bulletins:', bulletins);
            return bulletins;
        } catch (error) {
            console.error('Erreur lors de la récupération des bulletins:', error);
            throw error;
        }
    }

    const ajouterBulletin = async(bulletin)=>{
        const resultat = await axios.post(`${import.meta.env.VITE_BASE_URL}/bulletins`, bulletin)

        return resultat.data.data
    }

    const getBulletinById = async (id)=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/bulletins/${id}`)
    
        return resultat.data.data
    }

    const supprimerBulletin = async (id)=>{

        const resultat = await axios.delete(`${import.meta.env.VITE_BASE_URL}/bulletins/${id}`)
    
        return resultat.data.data
    }

    const updateBulletin = async (id, bulletin) => {
        const resultat = await axios.put(`${import.meta.env.VITE_BASE_URL}/bulletins/${id}`, bulletin)
            return resultat.data.data
        
    }

    return{listeBulletins, ajouterBulletin, getBulletinById, supprimerBulletin, updateBulletin}
}

export default useBulletin