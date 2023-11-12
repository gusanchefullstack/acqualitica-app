import express from "express";
import boardController from "../controllers/boardController.js";
import { inputErrorHandler } from "../middleware/inputErrorsHandler.js";
import { body, param } from "express-validator";

const boardRoutes = express.Router();

boardRoutes.get("/", boardController.getAllBoards);
boardRoutes.get(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  inputErrorHandler,
  boardController.getSingleBoard
);
boardRoutes.post(
  "/",
  body("name")
    .notEmpty()
    .withMessage("Missing value")
    .isString()
    .withMessage("Invalid type")
    .isLength({ min: 3, max: 255 })
    .withMessage("Invalid length (3-255) characters")
    .trim(),
  body("pointId")
    .notEmpty()
    .withMessage("Missing value")
    .isUUID()
    .withMessage("Invalid type"),
  inputErrorHandler,
  boardController.createBoard
);
boardRoutes.patch(
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
  boardController.updateBoard
);
boardRoutes.delete(
  "/:id",
  param("id").isUUID().withMessage("Invalid Id"),
  inputErrorHandler,
  boardController.deleteBoard
);

export default boardRoutes;
