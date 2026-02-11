import api from "./axiosConfig";

// POST /doctor/addDoctor
export const addDoctor = (doctor) => {
  return api.post("/doctor/addDoctor", doctor);
};

// POST /doctor/associateWithCenter
export const associateDoctor = (data) => {
  return api.post("/doctor/associateWithCenter", data);
};