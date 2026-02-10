import { useState } from "react";
import { addUser } from "../api/userApi";

function Register() {
  const [user, setUser] = useState({
    name: "",
    emailId: "",
    age: "",
    gender: "MALE",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      await addUser(user);
      alert("User registered successfully");
    } catch (err) {
      alert("Registration failed");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Register User</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="emailId" placeholder="Email" onChange={handleChange} />
      <input name="age" placeholder="Age" onChange={handleChange} />

      <select name="gender" onChange={handleChange}>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
      </select>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
