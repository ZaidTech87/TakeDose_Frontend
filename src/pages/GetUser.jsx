import { useState } from 'react';
import { getUserById } from '../services/api';

const GetUser = () => {
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await getUserById(email);
            setUser(response.data);
            setError('');
        } catch (err) {
            setError('User not found');
            setUser(null);
        }
    };

    return (
        <div className="form-container">
            <h2>Find User</h2>
            <form onSubmit={handleSearch}>
                <div className="form-group">
                    <label>Email ID</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <button type="submit">Search</button>
            </form>
            
            {error && <div className="message error">{error}</div>}
            
            {user && (
                <div className="message success" style={{textAlign:'left'}}>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Age:</strong> {user.age}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                    <p><strong>ID:</strong> {user.userId || user.id}</p>
                </div>
            )}
        </div>
    );
};

export default GetUser;