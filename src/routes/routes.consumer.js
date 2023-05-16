import { Router } from "express";
import addCarrinhoController from "../controller/controller.coNsumer.js";
const routerConsumer = Router();

routerConsumer.patch(
  "/carrinho/:id",
  addCarrinhoController.addCarrinhoController
);

export default routerConsumer;
