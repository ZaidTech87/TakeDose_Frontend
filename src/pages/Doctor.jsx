// import { useState, useEffect } from "react";
// import API from "../api/axiosConfig";

// function Doctor() {
//   const [doctors, setDoctors] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     specialization: ""
//   });

//   // GET ALL DOCTORS
//   const fetchDoctors = async () => {
//     const res = await API.get("/doctor");
//     setDoctors(res.data);
//   };

//   useEffect(() => {
//     fetchDoctors();
//   }, []);

//   // HANDLE INPUT
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ADD DOCTOR (POST)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await API.post("/doctor", form);
//     fetchDoctors();
//   };

//   // UPDATE DOCTOR (PUT)
//   const updateDoctor = async (id) => {
//     await API.put(`/doctor/${id}`, form);
//     fetchDoctors();
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Doctor Management</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Doctor Name"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="specialization"
//           placeholder="Specialization"
//           onChange={handleChange}
//         />
//         <button type="submit">Add Doctor</button>
//       </form>

//       <h3>Doctor List</h3>
//       <ul>
//         {doctors.map((doc) => (
//           <li key={doc.id}>
//             {doc.name} - {doc.specialization}
//             <button onClick={() => updateDoctor(doc.id)}>
//               Update
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Doctor;
