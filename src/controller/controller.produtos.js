import createNewProdutoService from "../service/service.produtos.js";
import findAllProdutosService from "../service/service.produtos.js";
import findByIdProdutoService from "../service/service.produtos.js";
import changeInformationService from "../service/service.produtos.js";
import searchInformationsProductService from "../service/service.produtos.js";
const createProdutoController = async (req, res) => {
  try {
    let {
      nomeProduto,
      categoria,
      fabricadoPor,
      validadeProduto,
      quantidade,
      preco,
      promocao,
    } = req.body;

    if (
      !nomeProduto ||
      !categoria ||
      !fabricadoPor ||
      !validadeProduto ||
      !quantidade ||
      !preco ||
      !promocao
    ) {
      res
        .status(400)
        .send({ message: "Por favor preencha os campos corretamente" });
    }

    const createProdutos =
      await createNewProdutoService.createNewProdutoService(req.body);

    res.status(200).send(createProdutos);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const findAllProdutosController = async (req, res) => {
  try {
    let { id } = req.params;

    const findAllProdutos = await findAllProdutosService.findAllProdutosService(
      id
    );
    res.status(200).send(findAllProdutos);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const findByIdProdutoController = async (req, res) => {
  try {
    let { id } = req.params;

    const findById = await findByIdProdutoService.findByIdProdutoService(id);

    res.status(200).send(findById);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const changeInformationController = async (req, res) => {
  try {
    let { id } = req.params;

    const findById = await findByIdProdutoService.findByIdProdutoService(id);

    let {
      nomeProduto,
      categoria,
      fabricadoPor,
      validadeProduto,
      quantidade,
      preco,
      promocao,
    } = req.body;

    if (
      !nomeProduto &&
      !categoria &&
      !fabricadoPor &&
      !validadeProduto &&
      !quantidade &&
      !preco &&
      !promocao
    ) {
      res
        .status(400)
        .send({ message: "Por favor preencha o campo corretamente" });
    }

    const changeInformationProduto =
      await changeInformationService.changeInformationService(
        id,
        nomeProduto,
        categoria,
        fabricadoPor,
        validadeProduto,
        quantidade,
        preco,
        promocao
      );

    res.status(200).send({ message: "Produto atualizado com sucesso" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const searchInformationsProduController = async (req, res) => {
  try {
    const { nomeProduto } = req.query;

    const produto = await searchInformationsProductService.searchInformationsProductService(nomeProduto);

    if (produto.length === 0) {
      return res
        .status(400)
        .send({ message: "Não foi possivel localizar nenhum produto!" });
    }

    return res.send({
      produtos: produto.map((item) => ({
        id: item._id,
        nomeProduto: item.nomeProduto,
        categoria: item.categoria,
        fabricadoPor: item.fabricadoPor,
        validadeProduto: item.validadeProduto,
        quantidade: item.quantidade,
        preco: item.preco,
        promocao: item.promocao,
      })),
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
export default {
  createProdutoController,
  findAllProdutosController,
  findByIdProdutoController,
  changeInformationController,
  searchInformationsProduController,
};
