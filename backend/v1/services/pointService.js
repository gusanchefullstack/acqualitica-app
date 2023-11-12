import Point from "../database/pointDAL.js";

const getAllPoints = async () => {
  try {
    const allPoints = await Point.getAllPoints();
    return allPoints;
  } catch (error) {
    throw error;
  }
};

const getSinglePoint = async (pointId) => {
  try {
    const point = await Point.getSinglePoint(pointId);
    return point;
  } catch (error) {
    throw error;
  }
};

const createPoint = async (data) => {
  try {
    const point = await Point.createPoint(data);
    return point;
  } catch (error) {
    throw error;
  }
};

const updatePoint = async (pointId, data) => {
  try {
    const updatedPoint = await Point.updatePoint(pointId, data);
    return updatedPoint;
  } catch (error) {
    throw error;
  }
};

const deletePoint = async (pointId) => {
  try {
    const deletedPoint = await Point.deletePoint(pointId);
    return deletedPoint;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllPoints,
  getSinglePoint,
  createPoint,
  updatePoint,
  deletePoint,
};
