import axios from "axios"

const baseUrl = "http://localhost:3050";

export const createUser = async (userData) =>{
    await axios.post(`${baseUrl}/user`,userData)
}

export const searchUser = async (email) =>{
    await axios.get(`${baseUrl}/search-user?email=${email}`)
    
}