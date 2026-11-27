import "dotenv/config";
import express from "express";
import router from "./src/routes.js";

const app = express();

app.use(express.json());

app.use("/api/books", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
