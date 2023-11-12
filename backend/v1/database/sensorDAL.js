import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllSensors = async () => {
  try {
    const allSensors = await prisma.sensor.findMany({});
    await prisma.$disconnect();
    return allSensors;
  } catch (error) {
    throw error;
  }
};

const getSingleSensor = async (sensorId) => {
  try {
    const sensor = await prisma.sensor.findUnique({
      where: {
        id: sensorId,
      },
    });
    await prisma.$disconnect();
    return sensor;
  } catch (error) {
    throw error;
  }
};

const createSensor = async (obj) => {
  try {
    const { name, boardId } = obj;
    const createdSensor = await prisma.sensor.create({
      data: {
        name,
        boardId,
      },
    });
    await prisma.$disconnect();
    return createdSensor;
  } catch (error) {
    throw error;
  }
};

const updateSensor = async (sensorId, obj) => {
  try {
    const updatedSensor = await prisma.sensor.update({
      where: {
        id: sensorId,
      },
      data: {
        ...obj,
      },
    });
    await prisma.$disconnect();
    return updatedSensor;
  } catch (error) {
    throw error;
  }
};

const deleteSensor = async (sensorId) => {
  try {
    const deletedSensor = await prisma.sensor.delete({
      where: {
        id: sensorId,
      },
    });
    await prisma.$disconnect();
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
