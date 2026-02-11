import { useState } from 'react';
import { getVaccinationDate } from '../services/api';

const VaccinationDate = () => {
    const [userId, setUserId] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await getVaccinationDate(userId);
            setDate(response.data); // Assuming response is a string or date object
        } catch (error) {
            setDate('Could not fetch date.');
        }
    };

    return (
        <div className="form-container">
            <h2>Check Vaccination Date</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>User ID</label>
                    <input type="number" value={userId} onChange={(e) => setUserId(e.target.value)} required />
                </div>
                <button type="submit">Check</button>
            </form>
            {date && <div className="message success">Date: {date}</div>}
        </div>
    );
};

export default VaccinationDate;