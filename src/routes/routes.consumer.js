import { Router } from "express";
import addCarrinhoController from "../controller/controller.coNsumer.js";
import { authorizationMidlleware } from "../middleware/midlleware.auth.js";
import removerProductController from "../controller/controller.coNsumer.js"
const routerConsumer = Router();


routerConsumer.patch(
  "/carrinho/:id",
  authorizationMidlleware,
  addCarrinhoController.addCarrinhoController
);

routerConsumer.patch("/carrinho/:idProduto/:idProdutoInCarr", removerProductController.removerProductController)

export default routerConsumer;
