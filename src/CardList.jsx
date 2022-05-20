import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers()
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  }, [data.length]);

  const getUsers = () => {
    return fetch(import.meta.env.VITE_API_URL, {
      mode: "cors",
      method: "GET",
    });
  };

  // If you add data to array dependency in useEffect, it'll return a infinite loop

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Age</th>
            <th scope="col">
              <span>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <CardItem
              key={item._id}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              address={item.address}
              age={item.age}
              _id={item._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CardList;
