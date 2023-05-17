import mongoose from "mongoose";
import bcrypt from "bcrypt";
const cadastroClientesMega = new mongoose.Schema({
  primeiroNome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  produtos: {
    type: Array,
    required: true,
    select: false
  },
});

cadastroClientesMega.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

export default mongoose.model("Clientes Cadastrados", cadastroClientesMega);
