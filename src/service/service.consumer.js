import consumerCarrinho from "../model/Consumer.js";

const addCarrinhoService = (idProduto, userId) =>
  consumerCarrinho.findOneAndUpdate(
    { _id: idProduto},
    { $push: { produtos: { userId, created: new Date() } } }
  );

export default { addCarrinhoService };
