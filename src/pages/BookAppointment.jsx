import { useState } from 'react';
import { bookAppointment } from '../services/api';

const BookAppointment = () => {
    const [formData, setFormData] = useState({ userId: '', doctorId: '', centerId: '' });
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await bookAppointment(formData);
            setMessage('Appointment booked successfully!');
            setIsError(false);
        } catch (error) {
            setMessage('Booking failed.');
            setIsError(true);
        }
    };

    return (
        <div className="form-container">
            <h2>Book Appointment</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="number" onChange={(e) => setFormData({...formData, userId: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Doctor ID</label>
                    <input type="number" onChange={(e) => setFormData({...formData, doctorId: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Center ID</label>
                    <input type="number" onChange={(e) => setFormData({...formData, centerId: e.target.value})} required />
                </div>
                <button type="submit">Book Now</button>
            </form>
            {message && <div className={`message ${isError ? 'error' : 'success'}`}>{message}</div>}
        </div>
    );
};

export default BookAppointment;