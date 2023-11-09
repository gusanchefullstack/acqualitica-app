import Customer from "../database/customerDAL.js";

const getAllCustomers = async () => {
  try {
    const allCustomers = await Customer.getAllCustomers();
    return allCustomers;
  } catch (error) {
    throw error;
  }
};

const getSingleCustomer = async (customerId) => {
  try {
    const customer = await Customer.getSingleCustomer(customerId);
    return customer;
  } catch (error) {
    throw error;
  }
};

const createCustomer = async (data) => {
  try {
    const customer = await Customer.createCustomer(data);
    return customer;
  } catch (error) {
    throw error;
  }
};

const updateCustomer = async (customerId, data) => {
  try {
    const updatedCustomer = await Customer.updateCustomer(customerId, data);
    return updatedCustomer;
  } catch (error) {
    throw error;
  }
};

const deleteCustomer = async (customerId) => {
  try {
    const deletedCustomer = await Customer.deleteCustomer(customerId);
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
