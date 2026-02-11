import { useState, useEffect } from "react";
import API from "../api/axiosConfig";

function User() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", age: "" });

  const fetchUsers = async () => {
    const res = await API.get("/user");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/user", form);
    fetchUsers();
  };

  return (
    <div>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" />
        <input name="age" placeholder="Age" />
        <button>Add</button>
      </form>

      {users.map((u) => (
        <p key={u.id}>{u.name} - {u.age}</p>
      ))}
    </div>
  );
}

export default User;
