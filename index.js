import express from "express";
import databaseAtlas from "./src/database/database.js";
import routerUser from "./src/routes/routes.user.js";
import routerProdutos from "./src/routes/routes.produtos.js";
import routerConsumer from "./src/routes/routes.consumer.js";
import routerAuth from "./src/routes/routes.auth.js";
import dotenv from "dotenv";
dotenv.config();
databaseAtlas();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/add", routerConsumer);
app.use("/remove", routerConsumer);

app.use("/login", routerAuth);

app.use("/user", routerUser);
app.use("/findby", routerUser);
app.use("/findall", routerUser);
app.use("/delete", routerUser);
app.use("/rename", routerUser);

app.use("/create", routerProdutos);
app.use("/findall", routerProdutos);
app.use("/findid", routerProdutos);
app.use("/rename", routerProdutos);
app.use("/search", routerProdutos);
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
