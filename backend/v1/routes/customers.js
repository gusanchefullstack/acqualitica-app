import express from "express";
import customerController from "../controllers/customer.js";

const customerRoutes = express.Router();

customerRoutes.get("/", customerController.getAllCustomers);
customerRoutes.get("/:id", customerController.getSingleCustomer);
customerRoutes.post("/", customerController.createCustomer);
customerRoutes.patch("/:id", customerController.updateCustomer);
customerRoutes.delete("/:id", customerController.deleteCustomer);

export default customerRoutes;
