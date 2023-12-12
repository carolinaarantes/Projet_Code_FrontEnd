// Importer axios
import axios from 'axios'

const useAuth = () => {

    const login = async (email, motPasse) => {
        try{
            const resultat = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, { email, motPasse })
            return resultat.data
        }
        catch(error){
            console.error('Login error:', error);
            throw error; // Rethrow the error to propagate it to the caller
        }
        
    }
    return { login }
}
export default useAuth