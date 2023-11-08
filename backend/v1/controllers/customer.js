import customerService from "../services/customer.js";

const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await customerService.getAllCustomers();
    res.json({
      result: "Ok",
      data: allCustomers,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ result: "Failed", data: { error: error?.message || error } });
  }
};

const getSingleCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await customerService.getSingleCustomer(id);
    res.json({
      result: "Ok",
      data: customer,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ result: "Failed", data: { error: error?.message || error } });
  }
};

const createCustomer = async (req, res) => {
  try {
    const customerData = req.body;
    const createdCustomer = await customerService.createCustomer(customerData);
    res.json({
      result: "Ok",
      data: createdCustomer,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ result: "Failed", data: { error: error?.message || error } });
  }
};

const updateCustomer = async (req, res) => {
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
    res
      .status(error?.status || 500)
      .json({ result: "Failed", data: { error: error?.message || error } });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCustomer = await customerService.deleteCustomer(id);
    res.json({
      result: "Ok",
      data: deletedCustomer,
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ result: "Failed", data: { error: error?.message || error } });
  }
};

export default {
  getAllCustomers,
  getSingleCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
