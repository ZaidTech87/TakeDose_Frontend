import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h1 style={{textAlign: 'center', color: '#2563eb'}}>Welcome to Vaccination Portal</h1>
            <div className="dashboard-grid">
                <Link to="/add-user" className="card"><h3>Add User</h3></Link>
                <Link to="/get-user" className="card"><h3>Search User</h3></Link>
                <Link to="/update-email" className="card"><h3>Update Email</h3></Link>
                <Link to="/vaccination-date" className="card"><h3>Check Date</h3></Link>
                <Link to="/add-doctor" className="card"><h3>Add Doctor</h3></Link>
                <Link to="/associate-doctor" className="card"><h3>Associate Doctor</h3></Link>
                <Link to="/add-center" className="card"><h3>Add Center</h3></Link>
                <Link to="/book-appointment" className="card"><h3>Book Appointment</h3></Link>
                <Link to="/give-dose" className="card"><h3>Administer Dose</h3></Link>
            </div>
        </div>
    );
};

export default Home;