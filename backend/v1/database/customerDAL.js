import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCustomers = async () => {
  try {
    const allCustomers = await prisma.customer.findMany();
    await prisma.$disconnect();
    return allCustomers;
  } catch (error) {
    throw error;
  }
};

const getSingleCustomer = async (customerId) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        id: customerId,
      },
      include: {
        sites: {
          select: {
            name: true,
            address: true,
            city: true,
            state: true,
            country: true,
            phone: true,
          },
        },
      },
    });
    await prisma.$disconnect();
    return customer;
  } catch (error) {
    throw error;
  }
};

const createCustomer = async (obj) => {
  try {
    const { name, address, city, state, country, phone } = obj;
    const newCustomer = await prisma.customer.create({
      data: {
        name,
        address,
        city,
        state,
        country,
        phone,
      },
    });
    await prisma.$disconnect();
    return newCustomer;
  } catch (error) {
    throw error;
  }
};

const updateCustomer = async (customerId, obj) => {
  try {
    const updatedCustomer = await prisma.customer.update({
      where: {
        id: customerId,
      },
      data: {
        ...obj,
      },
    });
    await prisma.$disconnect();
    return updatedCustomer;
  } catch (error) {
    throw error;
  }
};

const deleteCustomer = async (customerId) => {
  try {
    const deletedCustomer = await prisma.customer.delete({
      where: {
        id: customerId,
      },
    });
    await prisma.$disconnect();
    return deletedCustomer;
  } catch (error) {
    throw error;
  }
};

export default {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
