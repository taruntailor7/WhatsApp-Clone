import { sendError } from "../utility/index.js";
import * as yup from "yup";

export const validateCreateUser = async(req,res,next) => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        profilePic: yup.string(),
    });
    await validate(schema, req.body, res, next);
}

const validate = async (schema, reqData, res, next) => {
    try {
        await schema.validate(reqData,{abortEarly: false});
        next();
    } catch (err) {
        const errors = err.inner.map(({path,message,value})=>({
            path,message,value
        }))
        sendError(res,errors,"Invalid Request");
    }
} 

// export const validateLogin = async(req,res,next) => {
//     const schema = yup.object().shape({
//         phoneNumber: yup.number().required(),
//         password: yup.string().required(),
//     });
//     await validate(schema, req.body, res, next);
// }

export const validateAddChannel = async(req,res,next) => {
    const schema = yup.object().shape({
        channelUsers: yup.array().of(
            yup.object().shape({
                name: yup.string().required(),
                _id: yup.string().required(),
                profilePic: yup.string(),
            })
        )
        .length(2)
        .required(),
    });
    await validate(schema, req.body, res, next);
}

export const validateSearchUser = async(req,res,next) => {
    const schema = yup.object().shape({
        email: yup.string().required(),
    });
    await validate(schema, req.query, res, next);
}


export const validateChannels = async(req,res,next) => {
    const schema = yup.object().shape({
        userId: yup.string().required(),
    });
    await validate(schema, req.query, res, next);
}

export const validateAddMessage = async(req,res,next) => {
    const schema = yup.object().shape({
        channelId: yup.string().required(),
        messages: yup.object().shape({
            senderID: yup.string().required(),
            message: yup.string().required(),
        })
    });
    await validate(schema, req.body, res, next);
}


