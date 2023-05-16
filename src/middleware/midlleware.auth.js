import jwt from "jsonwebtoken";
import findByIdUserService from "../service/service.user.js";
const authorizationMidlleware =  (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.send(401);
    }

    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.send(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.send(401);
    }

    jwt.verify(
      token,
      "26dd8ab4926d5083ebc8940df82aed92",
      async (error, decoded) => {
        if (error) {
          return res.status(401).send({ message: "Token invalid" });
        }
        const user = await findByIdUserService.findByIdUserService(decoded.id);

        if (!user || !user.id) {
          return res.status(401).send({ message: "Token invalid" });
        }

        req.userId = user.id;

        return next();
      }
    );
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

export {authorizationMidlleware}