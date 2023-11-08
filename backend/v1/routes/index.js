import express from "express";
import customerRoutes from "./customers.js";
const appV1Router = express.Router();

appV1Router.use("/customers", customerRoutes);

export default appV1Router;
