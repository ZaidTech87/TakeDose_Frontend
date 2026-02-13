import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import UpdateEmail from './pages/UpdateEmail';
import GetUser from './pages/GetUser';
import VaccinationDate from './pages/VaccinationDate';
import AddDoctor from './pages/AddDoctor';
import AssociateDoctor from './pages/AssociateDoctor';
import AddCenter from './pages/AddCenter';
import BookAppointment from './pages/BookAppointment';
import GiveDose from './pages/GiveDose';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import LogOut from './pages/LogOut';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/update-email" element={<UpdateEmail />} />
        <Route path="/get-user" element={<GetUser />} />
        <Route path="/vaccination-date" element={<VaccinationDate />} />
        <Route path="/add-doctor" element={<AddDoctor />} />
        <Route path="/associate-doctor" element={<AssociateDoctor />} />
        <Route path="/add-center" element={<AddCenter />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/give-dose" element={<GiveDose />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogOut />} />
      </Routes>
    </Router>
  );
}

export default App;