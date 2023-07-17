const mongoose = require('mongoose');
const userobj = {
    username: String,
    email: String
}
const userSchema = mongoose.Schema(userobj)
const userModel = mongoose.model("user", userSchema)
module.exports = { userModel }