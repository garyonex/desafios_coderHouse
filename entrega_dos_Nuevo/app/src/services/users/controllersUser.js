import axios from 'axios'

const baseUrl ='http://localhost:8080/login'

export default login = async (credentias) => {
    const { data } = await axios.post(baseUrl, credentias)
    return data
}

export default registerUser = async (data) => {
    const result = await axios.post(baseUrl, data)
    return result.then((res) => res.data)
}