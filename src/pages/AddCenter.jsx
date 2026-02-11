import { useState } from 'react';
import { addCenter } from '../services/api';

const AddCenter = () => {
    const [formData, setFormData] = useState({ centerName: '', address: '', centerType: '' });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addCenter(formData);
            setMessage('Vaccination Center added successfully!');
        } catch (error) {
            setMessage('Failed to add center.');
        }
    };

    return (
        <div className="form-container">
            <h2>Add Vaccination Center</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Center Name</label>
                    <input type="text" onChange={(e) => setFormData({...formData, centerName: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" onChange={(e) => setFormData({...formData, address: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Center Type</label>
                    <select onChange={(e) => setFormData({...formData, centerType: e.target.value})}>
                        <option value="">Select</option>
                        <option value="GOVT">Government</option>
                        <option value="PRIVATE">Private</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
            {message && <div className="message success">{message}</div>}
        </div>
    );
};

export default AddCenter;