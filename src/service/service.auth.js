import jwt from "jsonwebtoken";
import cadastroClientesMega from "../model/Cadastrocliente.js";
const loginService = (email) =>
  cadastroClientesMega.findOne({ email: email }).select("+password");

const generateToken = (id) =>
  jwt.sign({ id: id }, "26dd8ab4926d5083ebc8940df82aed92", {
    expiresIn: 86400,
  });

export default { generateToken, loginService };
