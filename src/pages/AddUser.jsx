import { useState } from 'react';
import { addUser } from '../services/api';

const AddUser = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobileNo: '',
        age: '',
        gender: ''
    });

    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Sending Data:", formData); // Debug

        try {
            await addUser(formData);

            setMessage('User added successfully!');
            setIsError(false);

            // Reset form
            setFormData({
                name: '',
                emailId: '',
                mobileNo: '',
                age: '',
                gender: ''
            });

        } catch (error) {
            const errorMsg =
                error.response?.data ||
                error.message ||
                "Something went wrong";

            setMessage(errorMsg);
            setIsError(true);
        }
    };

    return (
        <div className="form-container">
            <h2>Register User</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="emailId"
                        value={formData.emailId}
                        onChange={(e) =>
                            setFormData({ ...formData, emailId: e.target.value })
                        }
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Mobile No</label>
                    <input
                        type="number"
                        value={formData.mobileNo}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                mobileNo: Number(e.target.value)
                            })
                        }
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="number"
                        value={formData.age}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                age: Number(e.target.value)
                            })
                        }
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <select
                        value={formData.gender}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                gender: e.target.value
                            })
                        }
                        required
                    >
                        <option value="">Select</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                </div>

                <button type="submit">Submit</button>

            </form>

            {message && (
                <div className={`message ${isError ? 'error' : 'success'}`}>
                    {message}
                </div>
            )}
        </div>
    );
};

export default AddUser;
