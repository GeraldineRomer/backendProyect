const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate")

const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    country: String,
    department: String,
    municipality: String,
    document_type: String,
    document: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: String,
    avatar: String,
    role: String,
    active: Boolean
});
UserSchema.plugin(mongoosePaginate);
const User = mongoose.model("User", UserSchema);

module.exports = User;