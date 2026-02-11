import api from "./axiosConfig";

// POST /dose/giveDose1
export const giveDose = (doseId, userId) => {
  return api.post("/dose/giveDose1", null, {
    params: { doseId, userId }
  });
};