import { useState } from "react";
import { getUserByEmail } from "../api/userApi";

function SearchUser() {
  const [emailId, setEmailId] = useState("");
  const [user, setUser] = useState(null);

  const search = async () => {
    const res = await getUserByEmail(emailId);
    setUser(res.data);
  };

  return (
    <div>
      <h2>Find User</h2>
      <input onChange={(e) => setEmailId(e.target.value)} />
      <button onClick={search}>Search</button>

      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.emailId}</p>
        </div>
      )}
    </div>
  );
}

export default SearchUser;
