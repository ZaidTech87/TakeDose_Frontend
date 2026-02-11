import { useState } from 'react';
import { associateDoctor } from '../services/api';

const AssociateDoctor = () => {
    const [formData, setFormData] = useState({ doctorId: '', centerId: '' });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await associateDoctor(formData);
            setMessage('Doctor associated with center successfully!');
        } catch (error) {
            setMessage('Association failed.');
        }
    };

    return (
        <div className="form-container">
            <h2>Associate Doctor with Center</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Doctor ID</label>
                    <input type="number" onChange={(e) => setFormData({...formData, doctorId: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Center ID</label>
                    <input type="number" onChange={(e) => setFormData({...formData, centerId: e.target.value})} required />
                </div>
                <button type="submit">Associate</button>
            </form>
            {message && <div className="message success">{message}</div>}
        </div>
    );
};

export default AssociateDoctor;