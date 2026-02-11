import { useState } from "react";
import { addVaccinationCenter } from "../api/vaccinationApi";

function VaccinationCenter() {
  const [formData, setFormData] = useState({
    centreName: "",
    openingTime: "09:00",
    closingTime: "17:00",
    address: "",
    doseCapacity: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "doseCapacity" ? parseInt(value) || "" : value
    });
  };

  // Add vaccination center
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await addVaccinationCenter(formData);
      setMessage(`✓ ${response.data}`);
      setFormData({
        centreName: "",
        openingTime: "09:00",
        closingTime: "17:00",
        address: "",
        doseCapacity: ""
      });
    } catch (error) {
      setMessage(`✗ Error: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>🏥 Vaccination Center Management</h1>

      <h2>Add New Vaccination Center</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="centreName"
          placeholder="Center Name"
          value={formData.centreName}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="openingTime"
          value={formData.openingTime}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="closingTime"
          value={formData.closingTime}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="doseCapacity"
          placeholder="Dose Capacity"
          value={formData.doseCapacity}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Center"}
        </button>
      </form>

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

export default VaccinationCenter;