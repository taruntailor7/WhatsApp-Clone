import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
    name : {type: 'string', default: ''},
    phoneNumber : {type: 'string', default:""},
    password : {type: 'string', default:""},
    profilePic : {type: 'string', default:""},
    addedOn : {type: 'string', default:Date.now()}
});

channelSchema.method({
    saveData: async function(){
        return this.save();
    }
})

channelSchema.static({
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

const userModel = mongoose.model("wc-channel", channelSchema)
export default userModel