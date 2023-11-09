import customerService from "../services/customerService.js";

//to-do Change Status Code in catch exception handling

const getAllCustomers = async (req, res, next) => {
  try {
    const allCustomers = await customerService.getAllCustomers();
    res.json({
      result: "Ok",
      data: { items: allCustomers.length, customers: allCustomers },
    });
  } catch (error) {
    next(error);
  }
};

const getSingleCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await customerService.getSingleCustomer(id);
    res.json({
      result: "Ok",
      data: customer,
    });
  } catch (error) {
    next(error);
  }
};

const createCustomer = async (req, res, next) => {
  try {
    const customerData = req.body;
    const createdCustomer = await customerService.createCustomer(customerData);
    res.status(201).json({
      result: "Ok",
      data: createdCustomer,
    });
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customerData = req.body;
    const updatedCustomer = await customerService.updateCustomer(
      id,
      customerData
    );
    res.json({
      result: "Ok",
      data: updatedCustomer,
    });
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedCustomer = await customerService.deleteCustomer(id);
    res.json({
      result: "Ok",
      data: deletedCustomer,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
