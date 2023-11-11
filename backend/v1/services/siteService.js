import Site from "../database/siteDAL.js";

const getAllSites = async () => {
  try {
    const allSites = await Site.getAllSites();
    return allSites;
  } catch (error) {
    throw error;
  }
};

const getSingleSite = async (siteId) => {
  try {
    const site = await Site.getSingleSite(siteId);
    return site;
  } catch (error) {
    throw error;
  }
};

const createSite = async (data) => {
  try {
    const site = await Site.createSite(data);
    return site;
  } catch (error) {
    throw error;
  }
};

const updateSite = async (siteId, data) => {
  try {
    const updatedSite = await Site.updateSite(siteId, data);
    return updatedSite;
  } catch (error) {
    throw error;
  }
};

const deleteSite = async (siteId) => {
  try {
    const deletedSite = await Site.deleteSite(siteId);
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
