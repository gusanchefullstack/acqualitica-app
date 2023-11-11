import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllSites = async () => {
  try {
    const allSites = await prisma.site.findMany({});
    await prisma.$disconnect();
    return allSites;
  } catch (error) {
    throw error;
  }
};

const getSingleSite = async (siteId) => {
  try {
    const site = await prisma.site.findUnique({
      where: {
        id: siteId,
      },
    });
    await prisma.$disconnect();
    return site;
  } catch (error) {
    throw error;
  }
};

const createSite = async (obj) => {
  try {
    const { name, address, city, state, country, phone, customerId } = obj;
    const createdSite = await prisma.site.create({
      data: {
        name,
        address,
        city,
        state,
        country,
        phone,
        customerId,
      },
    });
    await prisma.$disconnect();
    return createdSite;
  } catch (error) {
    throw error;
  }
};

const updateSite = async (siteId, obj) => {
  try {
    const updatedSite = await prisma.site.update({
      where: {
        id: siteId,
      },
      data: {
        ...obj,
      },
    });
    await prisma.$disconnect();
    return updatedSite;
  } catch (error) {
    throw error;
  }
};

const deleteSite = async (siteId) => {
  try {
    const deletedSite = await prisma.site.delete({
      where: {
        id: siteId,
      },
    });
    await prisma.$disconnect();
    return deletedSite;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllSites,
  getSingleSite,
  createSite,
  updateSite,
  deleteSite,
};
