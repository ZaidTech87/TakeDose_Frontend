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
      </Routes>
    </Router>
  );
}

export default App;