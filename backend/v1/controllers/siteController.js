import siteService from "../services/siteService.js";

const getAllSites = async (req, res, next) => {
  try {
    const allSites = await siteService.getAllSites();
    res.json({
      result: "Ok",
      data: { items: allSites.length, sites: allSites },
    });
  } catch (error) {
    next(error);
  }
};

const getSingleSite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const site = await siteService.getSingleSite(id);
    res.json({
      result: "Ok",
      data: site,
    });
  } catch (error) {
    next(error);
  }
};

const createSite = async (req, res, next) => {
  try {
    const siteData = req.body;
    const createdSite = await siteService.createSite(siteData);
    res.status(201).json({
      result: "Ok",
      data: createdSite,
    });
  } catch (error) {
    next(error);
  }
};

const updateSite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const siteData = req.body;
    const updatedSite = await siteService.updateSite(
      id,
      siteData
    );
    res.json({
      result: "Ok",
      data: updatedSite,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSite = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSite = await siteService.deleteSite(id);
    res.json({
      result: "Ok",
      data: deletedSite,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllSites,
  getSingleSite,
  createSite,
  updateSite,
  deleteSite,
};
