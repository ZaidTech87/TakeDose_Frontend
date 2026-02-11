import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// User APIs
export const addUser = (userData) => api.post('/user/addUser', userData);
export const getVaccinationDate = (userId) => api.get(`/user/vaccinationDate?userId=${userId}`);
export const updateEmail = (data) => api.put('/user/updateEmail', data);
export const getUserById = (emailId) => api.get(`/user/getUserById?emailId=${emailId}`);

// Doctor APIs
export const addDoctor = (doctorData) => api.post('/doctor/addDoctor', doctorData);
export const associateDoctor = (data) => api.post('/doctor/associateWithCenter', data);

// Dose APIs
export const giveDose1 = (doseId, userId) => api.post(`/dose/giveDose1?doseId=${doseId}&userId=${userId}`);

// Appointment APIs
export const bookAppointment = (appointmentData) => api.post('/appointment/book', appointmentData);

// Center APIs
export const addCenter = (centerData) => api.post('/vaccination/add', centerData);

export default api;