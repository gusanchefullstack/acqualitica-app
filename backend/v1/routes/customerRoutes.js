import express from "express";
import customerController from "../controllers/customerController.js";
import { inputErrorHandler } from "../middleware/inputErrorsHandler.js";
import { body, param } from "express-validator";

const customerRoutes = express.Router();

customerRoutes.get("/", customerController.getAllCustomers);
customerRoutes.get(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  inputErrorHandler,
  customerController.getSingleCustomer
);
customerRoutes.post(
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
  inputErrorHandler,
  customerController.createCustomer
);
customerRoutes.patch(
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
  customerController.updateCustomer
);
customerRoutes.delete(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  inputErrorHandler,
  customerController.deleteCustomer
);

export default customerRoutes;
