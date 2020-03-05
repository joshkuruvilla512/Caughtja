const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserSchema = new mongoose.Schema({
  Email: { type: String,
    unique: true,
    required: true
},
password: {
    type: String,
    required: true
}
})
UserSchema.pre('save', function(next){
    if (this.isModified("password")){
        // Encript their password
       return bcrypt.genSalt(12).then(salt => {
         return   bcrypt.hash(this.password, salt).then(hash =>{
               this.password = hash;
            })
        }).catch(err => {
            console.log("ERROR",err);
        })
    } else {
        return Promise.resolve();
    }
})
UserSchema.methods.checkPassword = function(password){
    return bcrypt.compare(password, this.password);
}
const User = mongoose.model("User", UserSchema);
module.exports = User;

