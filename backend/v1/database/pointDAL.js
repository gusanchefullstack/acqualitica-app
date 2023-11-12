import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllPoints = async () => {
  try {
    const allPoints = await prisma.point.findMany({});
    await prisma.$disconnect();
    return allPoints;
  } catch (error) {
    throw error;
  }
};

const getSinglePoint = async (pointId) => {
  try {
    const point = await prisma.point.findUnique({
      where: {
        id: pointId,
      },
      include: {
        boards: {
          select: {
            name: true,
            id: true,
          },
        },
      },
    });
    await prisma.$disconnect();
    return point;
  } catch (error) {
    throw error;
  }
};

const createPoint = async (obj) => {
  try {
    const { name, latlng, siteId } = obj;
    const createdPoint = await prisma.point.create({
      data: {
        name,
        latlng,
        siteId,
      },
    });
    await prisma.$disconnect();
    return createdPoint;
  } catch (error) {
    throw error;
  }
};

const updatePoint = async (pointId, obj) => {
  try {
    const updatedPoint = await prisma.point.update({
      where: {
        id: pointId,
      },
      data: {
        ...obj,
      },
    });
    await prisma.$disconnect();
    return updatedPoint;
  } catch (error) {
    throw error;
  }
};

const deletePoint = async (pointId) => {
  try {
    const deletedPoint = await prisma.point.delete({
      where: {
        id: pointId,
      },
    });
    await prisma.$disconnect();
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
