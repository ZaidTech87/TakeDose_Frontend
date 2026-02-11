import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: 20, background: "#1976d2" }}>
      <Link to="/doctor">Doctor</Link> |{" "}
      <Link to="/user">User</Link> |{" "}
      <Link to="/dose">Dose</Link> |{" "}
      <Link to="/center">Vaccination Center</Link> |{" "}
      <Link to="/appointment">Appointment</Link>
    </nav>
  );
}

export default Navbar;
