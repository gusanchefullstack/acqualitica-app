import express from "express";
import customerRoutes from "./customerRoutes.js";
import siteRoutes from "./siteRoutes.js";
const appV1Router = express.Router();

appV1Router.use("/customers", customerRoutes);
appV1Router.use("/sites", siteRoutes);

export default appV1Router;
