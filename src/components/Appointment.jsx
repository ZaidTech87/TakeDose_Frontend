import { useState } from "react";
import { bookAppointment } from "../api/appointmentApi";

function Appointment() {
  const [formData, setFormData] = useState({
    docId: "",
    userId: "",
    appointmentDate: "",
    appointmentTime: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: (name === "docId" || name === "userId") ? parseInt(value) || "" : value
    });
  };

  // Book appointment
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await bookAppointment(formData);
      setMessage(`✓ Appointment booked successfully!\n${response.data}`);
      setFormData({
        docId: "",
        userId: "",
        appointmentDate: "",
        appointmentTime: ""
      });
    } catch (error) {
      setMessage(`✗ Error: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>📅 Book Appointment</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="userId"
          placeholder="User ID"
          value={formData.userId}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="docId"
          placeholder="Doctor ID"
          value={formData.docId}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="appointmentDate"
          value={formData.appointmentDate}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="appointmentTime"
          value={formData.appointmentTime}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Booking..." : "Book Appointment"}
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
            textAlign: "center",
            whiteSpace: "pre-wrap"
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default Appointment;