// Importer axios
import axios from 'axios'

// Creation des composables

const useBulletin = () =>{

    const listeBulletins = async()=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/bulletins`)
    
        return resultat.data.data
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