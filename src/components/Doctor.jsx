import { useState } from "react";
import { addDoctor, associateDoctor } from "../api/doctorApi";

function Doctor() {
  const [doctorForm, setDoctorForm] = useState({
    name: "",
    age: "",
    gender: "MALE",
    emailId: ""
  });

  const [associateForm, setAssociateForm] = useState({
    doctorId: "",
    centerId: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle doctor form input
  const handleDoctorChange = (e) => {
    const { name, value } = e.target;
    setDoctorForm({
      ...doctorForm,
      [name]: name === "age" ? parseInt(value) || "" : value
    });
  };

  // Handle associate form input
  const handleAssociateChange = (e) => {
    const { name, value } = e.target;
    setAssociateForm({
      ...associateForm,
      [name]: parseInt(value) || ""
    });
  };

  // Add new doctor
  const handleAddDoctor = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await addDoctor(doctorForm);
      setMessage(`✓ Doctor added successfully! ${response.data}`);
      setDoctorForm({
        name: "",
        age: "",
        gender: "MALE",
        emailId: ""
      });
    } catch (error) {
      setMessage(`✗ Error: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Associate doctor with center
  const handleAssociate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await associateDoctor(associateForm);
      setMessage(`✓ ${response.data}`);
      setAssociateForm({
        doctorId: "",
        centerId: ""
      });
    } catch (error) {
      setMessage(`✗ Error: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>👨‍⚕️ Doctor Management</h1>

      <div style={{ marginBottom: "30px" }}>
        <h2>Add New Doctor</h2>
        <form onSubmit={handleAddDoctor}>
          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={doctorForm.name}
            onChange={handleDoctorChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={doctorForm.age}
            onChange={handleDoctorChange}
            required
          />
          <select name="gender" value={doctorForm.gender} onChange={handleDoctorChange}>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
          <input
            type="email"
            name="emailId"
            placeholder="Email ID"
            value={doctorForm.emailId}
            onChange={handleDoctorChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Doctor"}
          </button>
        </form>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2>Associate Doctor with Vaccination Center</h2>
        <form onSubmit={handleAssociate}>
          <input
            type="number"
            name="doctorId"
            placeholder="Doctor ID"
            value={associateForm.doctorId}
            onChange={handleAssociateChange}
            required
          />
          <input
            type="number"
            name="centerId"
            placeholder="Vaccination Center ID"
            value={associateForm.centerId}
            onChange={handleAssociateChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Associating..." : "Associate"}
          </button>
        </form>
      </div>

      {message && (
        <div
          style={{
            padding: "10px",
            marginTop: "20px",
            backgroundColor: message.includes("✓") ? "#c8e6c9" : "#ffcdd2",
            color: message.includes("✓") ? "#2e7d32" : "#c62828",
            borderRadius: "5px",
            textAlign: "center"
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default Doctor;