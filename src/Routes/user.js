const express = require("express");
const UserController = require("../Controllers/user");
const api = express.Router();

api.post("/user", UserController.createUser);
api.get("/user/me", UserController.getMe);
api.get("/users", UserController.getUsers);
api.patch("/user/:id",UserController.updateUser);
api.delete("/user/:id", UserController.deleteUser);

module.exports = api;
