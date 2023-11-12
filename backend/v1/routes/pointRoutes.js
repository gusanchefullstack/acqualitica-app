import express from "express";
import pointController from "../controllers/pointController.js";
import { inputErrorHandler } from "../middleware/inputErrorsHandler.js";
import { body, param } from "express-validator";

const pointRoutes = express.Router();

pointRoutes.get("/", pointController.getAllPoints);
pointRoutes.get(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  inputErrorHandler,
  pointController.getSinglePoint
);
pointRoutes.post(
  "/",
  body("name")
    .notEmpty()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("latlng")
    .notEmpty()
    .withMessage("Missing value")
    .isLatLong()
    .withMessage("Invalid type. Must be: lat,lng")
    .trim(),
  body("siteId")
    .notEmpty()
    .withMessage("Missing value")
    .isUUID()
    .withMessage("Invalid type"),
  inputErrorHandler,
  pointController.createPoint
);
pointRoutes.patch(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  body("name")
    .optional()
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("latlng")
    .optional()
    .isLatLong()
    .withMessage("Invalid type. Must be: lat,lng")
    .trim(),
  inputErrorHandler,
  pointController.updatePoint
);
pointRoutes.delete(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  inputErrorHandler,
  pointController.deletePoint
);

export default pointRoutes;
