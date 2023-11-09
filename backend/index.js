import express from "express";
import config from "./config.js";
import appV1Router from "./v1/routes/index.js";
import errorHandler from "./v1/middleware/errorHandler.js";

const app = express();
const PORT = config.EXPRESS_PORT;

app.use(express.json());

app.use("/api/v1", appV1Router);

app.use(errorHandler.logError);
app.use(errorHandler.prismaErrors);

app.listen(PORT, () => {
  console.log(`Acqualitica App running on port ${PORT}`);
});
