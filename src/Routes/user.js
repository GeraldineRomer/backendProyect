const express = require("express");
const UserController = require("../Controllers/user");
const middleware_authentication = require("../Middlewares/authenticated");
const User = require("../Models/user");


const api = express.Router();

api.post(
    "/new"
    [middleware_authentication.ensureAuth, md_upload],
    UserController.createUser
);
api.get("/",UserController.getUsers);
api.get("/:id",UserController.getUser);
api.put(
    "/:id",
    [middleware_authentication.ensureAuth, md_upload],
    UserController.updateUser
);
api.delete(
    "/:id",
    [middleware_authentication.ensureAuth],
    UserController.deleteUser
);
module.exports = api;