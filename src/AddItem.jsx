import React, { useState, useEffect } from "react";

export const AddItem = () => {
  const [hide, setHide] = useState(true);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newAge, setNewAge] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: newFirstName,
        lastName: newLastName,
        email: newEmail,
        address: newAddress,
        age: newAge,
      }),
    }).then(() => console.log("contact added"));
  };

  return (
    <div>
      <h2 onClick={() => setHide(!hide)}>Add Contact</h2>
      {hide && (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              <input
                type="number"
                placeholder="Age"
                value={newAge}
                onChange={(e) => setNewAge(e.target.value)}
              />
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddItem;
