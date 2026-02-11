import { useState } from 'react';
import { updateEmail } from '../services/api';

const UpdateEmail = () => {
    const [formData, setFormData] = useState({ userId: '', newEmail: '' });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateEmail(formData);
            setMessage('Email updated successfully!');
        } catch (error) {
            setMessage('Failed to update email.');
        }
    };

    return (
        <div className="form-container">
            <h2>Update Email</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="number" onChange={(e) => setFormData({...formData, userId: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>New Email</label>
                    <input type="email" onChange={(e) => setFormData({...formData, newEmail: e.target.value})} required />
                </div>
                <button type="submit">Update</button>
            </form>
            {message && <div className="message success">{message}</div>}
        </div>
    );
};

export default UpdateEmail;