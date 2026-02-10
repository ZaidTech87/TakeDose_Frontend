import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#1976d2" }}>
      <Link to="/dashboard" style={{ color: "white", marginRight: 10 }}>
        Dashboard
      </Link>
      <Link to="/book" style={{ color: "white", marginRight: 10 }}>
        Book Appointment
      </Link>
      <Link to="/appointments" style={{ color: "white" }}>
        My Appointments
      </Link>
    </nav>
  );
}

export default Navbar;
