import { useState } from 'react';
import { addUser } from '../services/api';

const AddUser = () => {
    const [formData, setFormData] = useState({ name: '', email: '', age: '', gender: '' });
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addUser(formData);
            setMessage('User added successfully!');
            setIsError(false);
        } catch (error) {
            setMessage('Failed to add user. ' + error.message);
            setIsError(true);
        }
    };

    return (
        <div className="form-container">
            <h2>Register User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" onChange={(e) => setFormData({...formData, name: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={(e) => setFormData({...formData, email: e.target.value})} required />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" onChange={(e) => setFormData({...formData, age: e.target.value})} required />
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
            {message && <div className={`message ${isError ? 'error' : 'success'}`}>{message}</div>}
        </div>
    );
};

export default AddUser;