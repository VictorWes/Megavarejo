import jwt from "jsonwebtoken";
import cadastroClientesMega from "../model/Cadastrocliente.js";
const loginService = (email) =>
  cadastroClientesMega.findOne({ email: email }).select("+password");

const generateToken = (id) =>
  jwt.sign({ id: id }, process.env.MD_HASH, {
    expiresIn: 86400,
  });

export default { generateToken, loginService };
