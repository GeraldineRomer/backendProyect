const mongoose = require("mongoose");

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

module.exports = mongoose.model("User",UserSchema);
