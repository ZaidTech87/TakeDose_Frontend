import { useState } from 'react';
import { giveDose1 } from '../services/api';

const GiveDose = () => {
    const [doseId, setDoseId] = useState('');
    const [userId, setUserId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await giveDose1(doseId, userId);
            setMessage('Dose administered successfully!');
        } catch (error) {
            setMessage('Failed to administer dose.');
        }
    };

    return (
        <div className="form-container">
            <h2>Give Dose 1</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Dose ID</label>
                    <input type="text" value={doseId} onChange={(e) => setDoseId(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} required />
                </div>
                <button type="submit">Administer</button>
            </form>
            {message && <div className="message success">{message}</div>}
        </div>
    );
};

export default GiveDose;