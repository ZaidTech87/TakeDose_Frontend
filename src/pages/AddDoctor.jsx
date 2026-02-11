import { useState } from 'react';
import { addDoctor } from '../services/api';

const AddDoctor = () => {
    const [formData, setFormData] = useState({ name: '', age: '', email: '', gender: '' });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoctor(formData);
            setMessage('Doctor added successfully!');
        } catch (error) {
            setMessage('Failed to add doctor.');
        }
    };

    return (
        <div className="form-container">
            <h2>Add Doctor</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" onChange={(e) => setFormData({...formData, age: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <select onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                        <option value="">Select</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <div className="message success">{message}</div>}
        </div>
    );
};

export default AddDoctor;