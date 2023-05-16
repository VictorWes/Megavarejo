import bcrypt from "bcrypt";
import loginService from "../service/service.auth.js";
import generateToken from "../service/service.auth.js";

const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    const user = await loginService.loginService(email);

    if (!user) {
      return res.status(400).send({ message: " Usario ou senha invalido" });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(400).send({ message: "Usuario ou senha invalido" });
    }

    const token = generateToken.generateToken(user.id);

    res.status(200).send({ token });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};



export default { loginUser };
