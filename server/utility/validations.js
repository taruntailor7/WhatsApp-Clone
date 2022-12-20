import { sendError,sendResponse } from "../utility/index.js";

export const validateCreateUser = async(req,res,next) => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        phoneNumer: yup.number().required(),
        password: yup.string().required(),
        profilePic: yup.string(),
    });
    await validate(schema, req.body, res, next);
}

const validate = async (schema, reqData, res, next) => {
    try {
        await schema.validate(reqData,{abortEarly: false});
        next();
    } catch (err) {
        const errors = e.inner.map(({path,message,value})=>({
            path,message,value
        }))
        sendError(res,errors,"Invalid Request");
    }
} 

export const validateLogin = async(req,res,next) => {
    const schema = yup.object().shape({
        phoneNumer: yup.number().required(),
        password: yup.string().required(),
    });
    await validate(schema, req.body, res, next);
}

export const validateCreateChannel = async(req,res,next) => {
    const schema = yup.object().shape({
        
    });
    await validate(schema, req.body, res, next);
}

export const validateSearchUser = async(req,res,next) => {
    const schema = yup.object().shape({
        phone: yup.number().required(),
    });
    await validate(schema, req.body, res, next);
}


export const validateGetChannelList = async(req,res,next) => {
    const schema = yup.object().shape({
        userId: yup.number().required(),
    });
    await validate(schema, req.body, res, next);
}

export const validateAddMessage = async(req,res,next) => {
    const schema = yup.object().shape({
        phoneNumer: yup.number().required(),
        password: yup.string().required(),
    });
    await validate(schema, req.body, res, next);
}


