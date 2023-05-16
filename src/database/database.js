import mongoose from "mongoose";

const databaseAtlas = () => {
  console.log("Aguarde por favor, estamos connectando ao banco de dados");
  mongoose
    .connect(
      "mongodb+srv://megavarejo:drago200@megavarejo.tutalsl.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Mongo conectado"))
    .catch((error) => console.log(error));
};

export default databaseAtlas;
