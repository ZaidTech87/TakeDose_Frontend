import { useState } from "react";
import { updateEmail } from "../api/userApi";

function UpdateEmail() {
  const [data, setData] = useState({
    userId: "",
    newEmail: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await updateEmail(data);
    alert("Email updated");
  };

  return (
    <div>
      <h2>Update Email</h2>
      <input name="userId" placeholder="User ID" onChange={handleChange} />
      <input name="newEmail" placeholder="New Email" onChange={handleChange} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateEmail;
