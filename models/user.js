const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    bills:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bills'
    },
    role:{
        type:String,
        require:true
    }

})

const user = mongoose.model('user',userSchema);
module.exports = user