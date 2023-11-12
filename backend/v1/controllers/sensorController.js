import sensorService from "../services/sensorService.js";

const getAllSensors = async (req, res, next) => {
  try {
    const allSensors = await sensorService.getAllSensors();
    res.json({
      result: "Ok",
      data: { items: allSensors.length, sensors: allSensors },
    });
  } catch (error) {
    next(error);
  }
};

const getSingleSensor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sensor = await sensorService.getSingleSensor(id);
    res.json({
      result: "Ok",
      data: sensor,
    });
  } catch (error) {
    next(error);
  }
};

const createSensor = async (req, res, next) => {
  try {
    const sensorData = req.body;
    const createdSensor = await sensorService.createSensor(sensorData);
    res.status(201).json({
      result: "Ok",
      data: createdSensor,
    });
  } catch (error) {
    next(error);
  }
};

const updateSensor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const sensorData = req.body;
    const updatedSensor = await sensorService.updateSensor(id, sensorData);
    res.json({
      result: "Ok",
      data: updatedSensor,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSensor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSensor = await sensorService.deleteSensor(id);
    res.json({
      result: "Ok",
      data: deletedSensor,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllSensors,
  getSingleSensor,
  createSensor,
  updateSensor,
  deleteSensor,
};
