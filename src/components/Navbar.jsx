import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-brand">TakeDose</Link>
            <div className="nav-links">
                <Link to="/add-user" className="nav-link">Add User</Link>
                <Link to="/book-appointment" className="nav-link">Book Appointment</Link>
                <Link to="/add-doctor" className="nav-link">Add Doctor</Link>
                <Link to="/add-center" className="nav-link">Add Center</Link>
                <Link to="/give-dose" className="nav-link">Give Dose</Link>
            </div>
        </nav>
    );
};

export default Navbar;