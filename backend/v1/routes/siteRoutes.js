import express from "express";
import siteController from "../controllers/siteController.js";
import { inputErrorHandler } from "../middleware/inputErrorsHandler.js";
import { body, param } from "express-validator";

const siteRoutes = express.Router();

siteRoutes.get("/", siteController.getAllSites);
siteRoutes.get(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  inputErrorHandler,
  siteController.getSingleSite
);
siteRoutes.post(
  "/",
  body("name")
    .notEmpty()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("address")
    .notEmpty()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("city")
    .notEmpty()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("state")
    .notEmpty()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("country")
    .notEmpty()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("phone")
    .notEmpty()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 7, max: 50 })
    .withMessage("Invalid length (7-255) characters")
    .trim(),
  body("customerId")
    .notEmpty()
    .withMessage("Missing value")
    .isUUID()
    .withMessage("Invalid type"),
  inputErrorHandler,
  siteController.createSite
);
siteRoutes.patch(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  body("name")
    .optional()
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("address")
    .optional()
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("city")
    .optional()
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("state")
    .optional()
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("country")
    .optional()
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("phone")
    .optional()
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 7, max: 50 })
    .withMessage("Invalid length (7-255) characters")
    .trim(),
  inputErrorHandler,
  siteController.updateSite
);
siteRoutes.delete(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  inputErrorHandler,
  siteController.deleteSite
);

export default siteRoutes;
