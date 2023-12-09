// Importer axios
import axios from 'axios'

// Creation des composables

const useRole = () =>{

    const listeRoles = async()=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/roles`)
    
        return resultat.data.data
    }

    const ajouterRole = async(role)=>{
        const resultat = await axios.post(`${import.meta.env.VITE_BASE_URL}/roles`, role)

        return resultat.data.data
    }

    const getRoleById = async (id)=>{
        const resultat = await axios.get(`${import.meta.env.VITE_BASE_URL}/roles/${id}`)
    
        return resultat.data.data
    }

    const supprimerRole = async (id)=>{

        const resultat = await axios.delete(`${import.meta.env.VITE_BASE_URL}/roles/${id}`)
    
        return resultat.data.data
    }
    
    const updateRole = async (id, role) => {
        const resultat = await axios.put(`${import.meta.env.VITE_BASE_URL}/roles/${id}`, role)
            return resultat.data.data
        
    }

    return{listeRoles, ajouterRole, getRoleById, supprimerRole, updateRole}
}

export default useRole