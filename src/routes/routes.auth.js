import { Router } from "express";
import loginUser from "../controller/controller.coNsumer.js";

const routerAuth = Router();

routerAuth.post("/auth", loginUser.loginUser);

export default routerAuth;
