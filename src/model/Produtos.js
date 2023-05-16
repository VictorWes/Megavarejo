import mongoose from "mongoose";

const cadastroProdutosMega = mongoose.Schema({
  nomeProduto: {
    type: String,
    require: true,
  },

  //ex: Laticinio, frios, carnes
  categoria: {
    type: String,
    require: true,
  },
  fabricadoPor: {
    type: String,
    require: true,
  },
  validadeProduto: {
    type: String,
    require: true,
  },
  quantidade: {
    type: String,
    require: true,
  },
  preco: {
    type: String,
    require: true,
  },
  promocao: {
    type: String,
  },
});

export default mongoose.model("Produtos Cadastrados", cadastroProdutosMega);
