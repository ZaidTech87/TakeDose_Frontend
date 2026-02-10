import { useState } from "react";
import { getVaccinationDate } from "../api/userApi";

function VaccinationDate() {
  const [userId, setUserId] = useState("");
  const [date, setDate] = useState("");

  const fetchDate = async () => {
    const res = await getVaccinationDate(userId);
    setDate(res.data);
  };

  return (
    <div>
      <h2>Vaccination Date</h2>
      <input
        placeholder="User ID"
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={fetchDate}>Get Date</button>

      {date && <p>Vaccination Date: {date}</p>}
    </div>
  );
}

export default VaccinationDate;
