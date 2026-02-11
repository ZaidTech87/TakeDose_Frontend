import api from "./axiosConfig";

export const bookAppointment = (data) => {
  return api.post("/appointment/book", data);
};

export const getAppointments = () => {
  return api.get("/appointment/getAll");
};
