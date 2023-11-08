import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllCustomers = async () => {
  try {
    const allCustomers = await prisma.customer.findMany();
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
    });
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
