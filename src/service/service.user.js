import cadastroClientesMega from "../model/Cadastrocliente.js";

const createUserService = (body) => cadastroClientesMega.create(body);
const findByIdUserService = (id) => cadastroClientesMega.findById(id);
const findAllUserService = () => cadastroClientesMega.find();
const renameUserService = (id, primeiroNome, email, password) =>
  cadastroClientesMega.findOneAndUpdate(
    { _id: id },
    {
      primeiroNome,
      email,
      password,
    }
  );

const deleteUserService = (id) =>
  cadastroClientesMega.findOneAndDelete({ _id: id });

export default {
  createUserService,
  renameUserService,
  findByIdUserService,
  findAllUserService,
  deleteUserService,
};
