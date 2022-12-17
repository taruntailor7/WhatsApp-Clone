import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type: 'string', default: ''},
    phoneNumber : {type: 'string', default:""},
    password : {type: 'string', default:""},
    profilePic : {type: 'string', default:""},
    addedOn : {type: 'string', default:Date.now()}
});

userSchema.method({
    saveData: async function(){
        return this.save();
    }
})

userSchema.static({
    findData: function(findObj){
        return this.find(findObj);
    },
    findOneData: function(findObj){
        return this.findOne(findObj);
    },
    findOneAndUpdateData: function(findObj, updateObj){
        return this.findOneAndUpdate(findObj, updateObj, {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true
        });
    },
})

const userModel = mongoose.model("wc-user", userSchema)
export default userModel