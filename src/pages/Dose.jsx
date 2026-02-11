import { useState } from "react";
import { giveDose } from "../api/doseApi";

function Dose() {
  const [formData, setFormData] = useState({
    doseId: "",
    userId: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "userId" ? parseInt(value) || "" : value
    });
  };

  // Give dose
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await giveDose(formData.doseId, formData.userId);
      setMessage(`✓ ${response.data}`);
      setFormData({
        doseId: "",
        userId: ""
      });
    } catch (error) {
      setMessage(`✗ Error: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>💉 Administer Dose</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="doseId"
          placeholder="Dose ID"
          value={formData.doseId}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Giving..." : "Give Dose"}
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

export default Dose;