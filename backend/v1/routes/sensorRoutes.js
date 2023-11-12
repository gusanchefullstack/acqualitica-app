import express from "express";
import sensorController from "../controllers/sensorController.js";
import { inputErrorHandler } from "../middleware/inputErrorsHandler.js";
import { body, param } from "express-validator";

const sensorRoutes = express.Router();

sensorRoutes.get("/", sensorController.getAllSensors);
sensorRoutes.get(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  inputErrorHandler,
  sensorController.getSingleSensor
);
sensorRoutes.post(
  "/",
  body("name")
    .notEmpty()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("boardId")
    .notEmpty()
    .withMessage("Missing value")
    .isUUID()
    .withMessage("Invalid type"),
  inputErrorHandler,
  sensorController.createSensor
);
sensorRoutes.patch(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  body("name")
    .optional()
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  inputErrorHandler,
  sensorController.updateSensor
);
sensorRoutes.delete(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  inputErrorHandler,
  sensorController.deleteSensor
);

export default sensorRoutes;
