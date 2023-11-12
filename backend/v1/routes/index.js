import express from "express";
import customerRoutes from "./customerRoutes.js";
import siteRoutes from "./siteRoutes.js";
import pointRoutes from "./pointRoutes.js";
import boardRoutes from "./boardRoutes.js";
import sensorRoutes from "./sensorRoutes.js";

const appV1Router = express.Router();

appV1Router.use("/customers", customerRoutes);
appV1Router.use("/sites", siteRoutes);
appV1Router.use("/points", pointRoutes);
appV1Router.use("/boards", boardRoutes);
appV1Router.use("/sensors", sensorRoutes);

export default appV1Router;
