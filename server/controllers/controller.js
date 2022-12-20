import userModel from "../models/users.model.js";
import channelModel from "../models/channels.model.js";

export const createUser = async(req, res)=>{
    const userObj = new userModel(req.body);
    await userObj.saveData();
    sendResponse(res, userObj, "User added successfully", true, 200);
}

export const loginUser = async(req, res)=>{
    return res.send("createdUser");
}

export const createChannel = async(req, res)=>{
    return res.send("createdUser");
}

export const getChannelList = async(req, res)=>{
    return res.send("createdUser");
}

export const searchUser = async(req, res)=>{
    return res.send("createdUser");
}

export const sendMessage = async(req, res)=>{
    return res.send("createdUser");
}
