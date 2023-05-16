import cadastroProdutosMega from "../model/Produtos.js";

const createNewProdutoService = (body) => cadastroProdutosMega.create(body);
const findAllProdutosService = () => cadastroProdutosMega.find();
const findByIdProdutoService = (id) => cadastroProdutosMega.findById(id);
const changeInformationService = (
  id,
  nomeProduto,
  categoria,
  fabricadoPor,
  validadeProduto,
  quantidade,
  preco,
  promocao
) =>
  cadastroProdutosMega.findOneAndUpdate(
    { _id: id },
    {
      nomeProduto,
      categoria,
      fabricadoPor,
      validadeProduto,
      quantidade,
      preco,
      promocao,
    }
  );

const searchInformationsProductService = (nomeProduto) =>
cadastroProdutosMega
  .find({ nomeProduto: { $regex: `${nomeProduto || ""}`, $options: "i" } })

export default {
  createNewProdutoService,
  findAllProdutosService,
  findByIdProdutoService,
  changeInformationService,
  searchInformationsProductService,
};
