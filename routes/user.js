const express = require("express");
const UserController = require("../controllers/user");
const middleware_authentication = require("../middlewares/authenticated");
const multiparty = require("connect-multiparty");

const md_upload = multiparty({ uploadDir: "../Upload/userAvatar"});
const api = express.Router();

api.post("/user", [middleware_authentication.asureAuth] , UserController.createUser);
api.get("/user/me", UserController.getMe);
api.get("/users", UserController.getUsers);
api.patch("/user/:id", [middleware_authentication.asureAuth] , UserController.updateUser);
api.delete("/user/:id", [middleware_authentication.asureAuth] , UserController.deleteUser);

module.exports = api;
