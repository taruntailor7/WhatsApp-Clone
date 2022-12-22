import axios from "axios"

const baseUrl = "http://localhost:3050";

export const createUser = async (userData) =>{
    return await axios.post(`${baseUrl}/user`,userData);
}

export const searchUser = async (email) =>{
    return await axios.get(`${baseUrl}/search-user?email=${email}`);
}

export const createChannel = async (requestData) =>{
    return await axios.post(`${baseUrl}/channel`,requestData);
}

export const getChannelList = async (email) =>{
    return await axios.get(`${baseUrl}/channel-list?email=${email}`);
}

export const sendMessage = async (requestData) =>{
    return await axios.post(`${baseUrl}/message`,requestData);
}