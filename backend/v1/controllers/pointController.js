import pointService from "../services/pointService.js";

const getAllPoints = async (req, res, next) => {
  try {
    const allPoints = await pointService.getAllPoints();
    res.json({
      result: "Ok",
      data: { items: allPoints.length, points: allPoints },
    });
  } catch (error) {
    next(error);
  }
};

const getSinglePoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const point = await pointService.getSinglePoint(id);
    res.json({
      result: "Ok",
      data: point,
    });
  } catch (error) {
    next(error);
  }
};

const createPoint = async (req, res, next) => {
  try {
    const pointData = req.body;
    const createdPoint = await pointService.createPoint(pointData);
    res.status(201).json({
      result: "Ok",
      data: createdPoint,
    });
  } catch (error) {
    next(error);
  }
};

const updatePoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const pointData = req.body;
    const updatedPoint = await pointService.updatePoint(id, pointData);
    res.json({
      result: "Ok",
      data: updatedPoint,
    });
  } catch (error) {
    next(error);
  }
};

const deletePoint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPoint = await pointService.deletePoint(id);
    res.json({
      result: "Ok",
      data: deletedPoint,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllPoints,
  getSinglePoint,
  createPoint,
  updatePoint,
  deletePoint,
};
