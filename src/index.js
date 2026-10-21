import mongoose from "mongoose";
import dns from "dns"
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"])

const MONGODB_URI = process.env.MONGODB_URI;

const PORT = process.env.PORT || 3000;

mongoose.connect(MONGODB_URI).then(() => {
  console.log("Conectado a MongoDB!!!!")

  app.listen(PORT, () => {
    console.log(`Server funcionando en puerto ${PORT}`);
  });
}).catch((error) => {
  console.log(error)
})


