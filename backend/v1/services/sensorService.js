import Sensor from "../database/sensorDAL.js";

const getAllSensors = async () => {
  try {
    const allSensors = await Sensor.getAllSensors();
    return allSensors;
  } catch (error) {
    throw error;
  }
};

const getSingleSensor = async (sensorId) => {
  try {
    const sensor = await Sensor.getSingleSensor(sensorId);
    return sensor;
  } catch (error) {
    throw error;
  }
};

const createSensor = async (data) => {
  try {
    const sensor = await Sensor.createSensor(data);
    return sensor;
  } catch (error) {
    throw error;
  }
};

const updateSensor = async (sensorId, data) => {
  try {
    const updatedSensor = await Sensor.updateSensor(sensorId, data);
    return updatedSensor;
  } catch (error) {
    throw error;
  }
};

const deleteSensor = async (sensorId) => {
  try {
    const deletedSensor = await Sensor.deleteSensor(sensorId);
    return deletedSensor;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllSensors,
  getSingleSensor,
  createSensor,
  updateSensor,
  deleteSensor,
};
