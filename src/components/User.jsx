import { useState } from "react";
import { addUser, getUserByEmail, updateEmail } from "../api/userApi";

function User() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    emailId: "",
    gender: "MALE",
    mobileNo: ""
  });

  const [updateFormData, setUpdateFormData] = useState({
    userId: "",
    newEmailId: ""
  });

  const [searchEmail, setSearchEmail] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "age" ? parseInt(value) || "" : value
    });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateFormData({
      ...updateFormData,
      [name]: name === "userId" ? parseInt(value) || "" : value
    });
  };

  // Add new user
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await addUser(formData);
      setMessage(`✓ User registered successfully! User ID: ${response.data.userId}`);
      setFormData({
        name: "",
        age: "",
        emailId: "",
        gender: "MALE",
        mobileNo: ""
      });
    } catch (error) {
      setMessage(`✗ Error: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Search user by email
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setUserInfo(null);

    try {
      const response = await getUserByEmail(searchEmail);
      setUserInfo(response.data);
      setMessage("✓ User found!");
    } catch (error) {
      setMessage(`✗ User not found: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Update email
  const handleUpdateEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await updateEmail(updateFormData);
      setMessage(`✓ ${response.data}`);
      setUpdateFormData({
        userId: "",
        newEmailId: ""
      });
    } catch (error) {
      setMessage(`✗ Error: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <h1>👥 User Management</h1>

      <div style={{ marginBottom: "30px" }}>
        <h2>Register New User</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="emailId"
            placeholder="Email ID"
            value={formData.emailId}
            onChange={handleChange}
            required
          />
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHER">Other</option>
          </select>
          <input
            type="tel"
            name="mobileNo"
            placeholder="Mobile Number"
            value={formData.mobileNo}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register User"}
          </button>
        </form>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2>Search User by Email</h2>
        <form onSubmit={handleSearch}>
          <input
            type="email"
            placeholder="Enter email to search"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {userInfo && (
          <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#e3f2fd", borderRadius: "5px" }}>
            <h3>User Details</h3>
            <p><strong>ID:</strong> {userInfo.userId}</p>
            <p><strong>Name:</strong> {userInfo.name}</p>
            <p><strong>Age:</strong> {userInfo.age}</p>
            <p><strong>Email:</strong> {userInfo.emailId}</p>
            <p><strong>Gender:</strong> {userInfo.gender}</p>
            <p><strong>Mobile:</strong> {userInfo.mobileNo}</p>
          </div>
        )}
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2>Update Email</h2>
        <form onSubmit={handleUpdateEmail}>
          <input
            type="number"
            name="userId"
            placeholder="User ID"
            value={updateFormData.userId}
            onChange={handleUpdateChange}
            required
          />
          <input
            type="email"
            name="newEmailId"
            placeholder="New Email ID"
            value={updateFormData.newEmailId}
            onChange={handleUpdateChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Updating..." : "Update Email"}
          </button>
        </form>
      </div>

      {message && (
        <div
          style={{
            padding: "10px",
            marginTop: "20px",
            backgroundColor: message.includes("✓") ? "#c8e6c9" : "#ffcdd2",
            color: message.includes("✓") ? "#2e7d32" : "#c62828",
            borderRadius: "5px",
            textAlign: "center"
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}

export default User;