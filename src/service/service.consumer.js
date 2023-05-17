import Cadastrocliente from "../model/Cadastrocliente.js";
import cadastroClientesMega from "../model/Cadastrocliente.js";

const findbyidTesteConsumer = (idProduto) =>
  cadastroClientesMega.findById(idProduto);

const addCarrinhoService = (
  idProduto,
  userId,
  nomeProduto,
  categoria,
  fabricadoPor,
  validadeProduto,
  quantidade,
  preco,
  promocao
) => {
  const idProdutoInCarr = Math.floor(Date.now() * Math.random()).toString(36);
  return cadastroClientesMega.findOneAndUpdate(
    { _id: idProduto },
    {
      $push: {
        produtos: {
          idProdutoInCarr,
          userId,
          nomeProduto,
          categoria,
          fabricadoPor,
          validadeProduto,
          quantidade,
          preco,
          promocao,
          created: new Date(),
        },
      },
    }
  );
};

const removeProdutoCar = (idProduto, idProdutoInCarr) =>
  Cadastrocliente.findOneAndUpdate(
    { _id: idProduto },
    { $pull: { produtos: { idProdutoInCarr } } }
  );

export default { addCarrinhoService, findbyidTesteConsumer, removeProdutoCar };
