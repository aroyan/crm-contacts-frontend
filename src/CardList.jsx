import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

const CardList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  // If you add data to array dependency in useEffect, it'll return a infinite loop

  const getUsers = () => {
    fetch(import.meta.env.VITE_API_URL, {
      mode: "cors",
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="max-w-4xl overflow-x-auto shadow-md sm:rounded-lg mt-8 mb-16">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Address
            </th>
            <th scope="col" className="px-6 py-3">
              Age
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
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
