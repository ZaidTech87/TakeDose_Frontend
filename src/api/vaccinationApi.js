import api from "./axiosConfig";

// POST /vaccination/add
export const addVaccinationCenter = (center) => {
  return api.post("/vaccination/add", center);
};