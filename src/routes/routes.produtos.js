import { Router } from "express";
import createProdutoController from "../controller/controller.produtos.js"
import findAllProdutosController from "../controller/controller.produtos.js"
import findByIdProdutoController from "../controller/controller.produtos.js"
import changeInformationController from "../controller/controller.produtos.js"
import searchInformationsProduController from "../controller/controller.produtos.js"
import {authorizationMidlleware} from "../middleware/midlleware.auth.js"
const routerProdutos = Router();

routerProdutos.get("/produtos", searchInformationsProduController.searchInformationsProduController)
routerProdutos.post("/produtos", authorizationMidlleware, createProdutoController.createProdutoController)
routerProdutos.get("/produtos", findAllProdutosController.findAllProdutosController)
routerProdutos.get("/produto/:id", findByIdProdutoController.findByIdProdutoController)
routerProdutos.patch("/produto/:id", changeInformationController.changeInformationController)

export default routerProdutos