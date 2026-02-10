import { bookAppointment } from "../api/appointmentApi";
import { useState } from "react";

function BookAppointment() {
  const [data, setData] = useState({
    userId: "",
    doctorId: "",
    vaccinationCenterId: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBook = async () => {
    try {
      await bookAppointment(data);
      alert("Appointment booked!");
    } catch (e) {
      alert("Booking failed");
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <input name="userId" placeholder="User ID" onChange={handleChange} />
      <input name="doctorId" placeholder="Doctor ID" onChange={handleChange} />
      <input
        name="vaccinationCenterId"
        placeholder="Center ID"
        onChange={handleChange}
      />

      <button onClick={handleBook}>Book</button>
    </div>
  );
}

export default BookAppointment;
