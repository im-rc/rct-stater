import { useState } from "react";

function UserForm() {
  const [username, setUsername] = useState("");

  const handler = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <p>{username}</p>
      <input
        onChange={(e) => handler(e)}
        value={username}
        placeholder="username"
      />
    </div>
  );
}

export default UserForm;
