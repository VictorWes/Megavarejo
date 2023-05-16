import createUserService from "../service/service.user.js";
import renameUserService from "../service/service.user.js";
import findByIdUserService from "../service/service.user.js";
import findAllUserService from "../service/service.user.js";
import deleteUserService from "../service/service.user.js";
import mongoose from "mongoose";
const cadastroCliente = async (req, res) => {
  try {
    let { primeiroNome, email, password } = req.body;

    if (!primeiroNome || !email || !password) {
      res
        .status(400)
        .send({ message: "Por favor preencha o campo corretamente cadastro" });
    }

    const criarCadastro = await createUserService.createUserService(req.body);

    if (!criarCadastro) {
      return res.status(400).send({ message: "Erro ao criar usuario" });
    }
    res.status(200).send(criarCadastro);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const findUserIdController = async (req, res) => {
  try {
    let { id } = req.params;

    const findId = await findByIdUserService.findByIdUserService(id);
    res.status(200).send(findId);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const findallUsersController = async (req, res) => {
  try {
    const findAllUsers = await findAllUserService.findAllUserService();

    if (findAllUsers.length > 0) {
      res.status(200).send(findAllUsers);
    } else {
      res.status(400).send("Não existe nenhum usuario cadastrado");
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const deleteUserController = async (req, res) => {
  try {
    let { id } = req.params;

    const findId = await findByIdUserService.findByIdUserService(id);
    await deleteUserService.deleteUserService(id);
    return res.status(200).send({ message: "Usuario deletado com sucesso" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

const renameUserController = async (req, res) => {
  try {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "ID não é valido" });
    }
    const findId = await findByIdUserService.findByIdUserService(id);
    if (!findId) {
      return res.status(400).send({ message: "Usuario não encontrado" });
    }
    let { primeiroNome, email, password } = req.body;

    if (!primeiroNome && !email && !password) {
      res
        .status(400)
        .send({ message: "Por favor preencha o campo corretamente" });
    }

    await renameUserService.renameUserService(
      id,
      primeiroNome,
      email,
      password
    );
    res.status(200).send({ message: "Usuario atualizado" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export default {
  cadastroCliente,
  findUserIdController,
  findallUsersController,
  deleteUserController,
  renameUserController,
};
