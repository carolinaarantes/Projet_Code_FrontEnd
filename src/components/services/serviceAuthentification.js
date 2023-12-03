// Importer axios
import axios from 'axios'

const useAuth = () => {
    const login = async (email, motDePasse) => {
        const resultat = await axios.post(`${import.meta.env.VITE_BASE_URL}/login`, { email, motDePasse })
        return resultat.data
    }
    return { login }
}
export default useAuth