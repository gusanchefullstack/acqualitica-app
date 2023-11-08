import express from "express";
import config from "./config.js";
import appV1Router from "./v1/routes/index.js";

const app = express();
const PORT = config.EXPRESS_PORT;

app.use("/api/v1", appV1Router);

app.listen(PORT, () => {
  console.log(`Acqualitica App running on port ${PORT}`);
});
