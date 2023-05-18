import mongoose from "mongoose";

const databaseAtlas = () => {
  console.log("Aguarde por favor, estamos connectando ao banco de dados");
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo conectado"))
    .catch((error) => console.log(error));
};

export default databaseAtlas;
