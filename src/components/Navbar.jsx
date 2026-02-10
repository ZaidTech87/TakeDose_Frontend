import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#1976d2",
      padding: "15px",
      display: "flex",
      gap: "20px"
    }}>
      <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
      <Link to="/book" style={{ color: "white" }}>Book Appointment</Link>
      <Link to="/appointments" style={{ color: "white" }}>My Appointments</Link>
    </nav>
  );
}

export default Navbar;
