import api from "./axiosConfig";

// POST /user/addUser
export const addUser = (user) => {
  return api.post("/user/addUser", user);
};

// GET /user/vaccinationDate?userId=
export const getVaccinationDate = (userId) => {
  return api.get(`/user/vaccinationDate?userId=${userId}`);
};

// PUT /user/updateEmail
export const updateEmail = (data) => {
  return api.put("/user/updateEmail", data);
};

// GET /user/getUserById?emailId=
export const getUserByEmail = (emailId) => {
  return api.get(`/user/getUserById?emailId=${emailId}`);
};
