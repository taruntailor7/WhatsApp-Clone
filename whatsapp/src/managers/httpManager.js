import axios from "axios"

const baseUrl = "http://localhost:3050";

export const createUser = async (userData) =>{
    return await axios.post(`${baseUrl}/user`,userData);
}

export const searchUser = async (email) =>{
    return await axios.get(`${baseUrl}/search-user?email=${email}`);
}