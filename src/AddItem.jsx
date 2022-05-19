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
    <div className="w-full text-gray-200 flex justify-center mt-4 flex-wrap">
      <h2
        className="font-bold cursor-pointer bg-blue-500 p-3 rounded-md"
        onClick={() => setHide(!hide)}
      >
        Add Contact
      </h2>
      {hide && (
        <div className="w-full flex justify-center mt-4">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap flex-col max-w-md gap-2">
              <input
                type="text"
                className="form-input bg-gray-100 rounded-md border-transparent text-gray-800"
                placeholder="First Name"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                className="form-input bg-gray-100 rounded-md border-transparent text-gray-800"
                placeholder="Last Name"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                required
              />
              <input
                type="email"
                className="form-input bg-gray-100 rounded-md border-transparent text-gray-800"
                placeholder="Email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
              />
              <input
                type="text"
                className="form-input bg-gray-100 rounded-md border-transparent text-gray-800"
                placeholder="Address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
              <input
                type="number"
                className="form-input bg-gray-100 rounded-md border-transparent text-gray-800"
                placeholder="Age"
                value={newAge}
                onChange={(e) => setNewAge(e.target.value)}
              />
              <button
                type="submit"
                className="py-3 px-5 bg-blue-600 rounded-lg"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AddItem;
