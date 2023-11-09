import express from "express";
import customerRoutes from "./customerRoutes.js";
const appV1Router = express.Router();

appV1Router.use("/customers", customerRoutes);

export default appV1Router;
