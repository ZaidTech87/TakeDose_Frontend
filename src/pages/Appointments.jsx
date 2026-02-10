import { useEffect, useState } from "react";
import { getAppointments } from "../api/appointmentApi";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    getAppointments().then((res) => setAppointments(res.data));
  }, []);

  return (
    <div>
      <h2>Appointments</h2>
      {appointments.map((a) => (
        <div key={a.id}>
          <p>User: {a.user?.name}</p>
          <p>Doctor: {a.doctor?.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Appointments;
