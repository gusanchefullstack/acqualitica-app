import express from "express";

const customerRoutes = express.Router();

customerRoutes.get("/", (req, res) => {
  res.json({
    message: "Get all resources"
  })
})
customerRoutes.get("/:id", (req, res) => {
  res.json({
    message: "Get single resource"
  })
})
customerRoutes.post("/", (req, res) => {
  res.json({
    message: "Create single resource"
  })
})
customerRoutes.patch("/:id", (req, res) => {
  res.json({
    message: "Update single resource"
  })
})
customerRoutes.delete("/:id", (req, res) => {
  res.json({
    message: "Delete single resource"
  })
})

export default customerRoutes;
