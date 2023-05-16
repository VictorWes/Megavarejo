import cadastroCliente from "../controller/controller.user.js";
import findUserIdController from "../controller/controller.user.js";
import findallUsersController from "../controller/controller.user.js";
import deleteUserController from "../controller/controller.user.js"
import renameUserController from "../controller/controller.user.js"
import { Router } from "express";

const routerUser = Router();

routerUser.post("/create", cadastroCliente.cadastroCliente);
routerUser.patch("/user/:id", renameUserController.renameUserController)
routerUser.get("/userid/:id", findUserIdController.findUserIdController);
routerUser.get("/users", findallUsersController.findallUsersController);
routerUser.delete("/user/:id", deleteUserController.deleteUserController)
export default routerUser;
