import userModel from "../models/users.model.js";
import channelModel from "../models/channels.model.js";
import {sendResponse, sendError} from "../utility/index.js"

export const createUser = async(req, res)=>{
    const userObj = new userModel(req.body);
    const isUserExist = await userModel.findOneData({
        email: userObj.email,
    });
    if(isUserExist){
        return sendError(res,{},"User already exists");
    }
    await userObj.saveData();
    sendResponse(res, userObj, "User added successfully", true, 200);
}

export const loginUser = async(req, res)=>{
    const requestData = req.body;
    const isUserExist = await userModel.findOneData({
        email: requestData.email
    });
    if(!isUserExist){
        return sendError(res,{},"Invalid credentials");
    }
    sendResponse(res, isUserExist, "User logged in successfully", true, 200);
}

export const createChannel = async(req, res)=>{

    const channelUsers = req.body.channelUsers;
    const firstUser = channelUsers[0];
    const secondUser = channelUsers[1];
    let isChannelAlreadyExist = fasle;
    let ChannelModel;

    const channelList = await channelModel.findData({
        "channelUsers.email":firstUser.email,
    });

    if(channelList && channelList.length){
        channelList.forEach((channel)=>{
            isChannelAlreadyExist = channel.channelUsers.find(
                (user)=> user.email === secondUser.email
            );
            if(isChannelAlreadyExist){
                ChannelModel = channel
            };
        });
    }

    if(isChannelAlreadyExist){
        return sendResponse(res, ChannelModel, "Channel already exist", true, 200);
    }

    ChannelModel = new channelModel(req.body);
    await ChannelModel.saveData();
    sendResponse(res, channel, "Channel created successfully", true, 200);
}

export const getChannelList = async(req, res)=>{
    const requestData = req.query;
    const channelList = await channelModel.findData({
        "channelUsers.email": await requestData.email,
    });
    sendResponse(res, channelList, "Channel list fetched", true, 200);
}

export const searchUser = async(req, res)=>{
    const requestData = req.query
    const isUserExist = await userModel.findOneData({
        email: requestData.email
    });
    if(!isUserExist){
        return sendError(res,{},"No user found");
    }
    sendResponse(res, isUserExist, "User found successfully", true, 200); 
}

export const sendMessage = async(req, res)=>{
    const requestData = req.body;
    await channelModel.findOneAndUpdateData(
        {_id:requestData.channelId},
        {$push: {messages:requestData.messages}}
    );
    sendResponse(res, {}, "Message sent successfully", true, 200); 
}
