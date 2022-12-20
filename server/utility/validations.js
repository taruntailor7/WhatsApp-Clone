export const validateCreateUser = async(req,res,next) => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        phoneNumer: yup.number().required(),
        password: yup.string().required(),
        profilePic: yup.string(),
    });
}

// export const validateUser = async(req,res,next) => {

// }

// export const validateUser = async(req,res,next) => {

// }

// export const validateUser = async(req,res,next) => {

// }

// export const validateUser = async(req,res,next) => {

// }