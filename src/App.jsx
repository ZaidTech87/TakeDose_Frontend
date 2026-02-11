import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Doctor from "./pages/Doctor";
import User from "./pages/User";
import Dose from "./pages/Dose";
import VaccinationCenter from "./pages/VaccinationCenter";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/user" element={<User />} />
        <Route path="/dose" element={<Dose />} />
        <Route path="/center" element={<VaccinationCenter />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </>
  );
}

export default App;
