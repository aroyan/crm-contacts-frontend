import React, { useState } from "react";

const CardItem = ({ _id, firstName, lastName, email, address, age }) => {
  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_API_URL}/${_id}`, {
      method: "DELETE",
      mode: "cors",
    }).then((res) => {
      res.json().then((res) => console.log(res));
    });
  };

  return (
    <tr
      className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
      key={_id}
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        {firstName} {lastName}
      </th>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{address}</td>
      <td className="px-6 py-4">{age}</td>
      <td className="px-6 py-4 text-right">
        <a
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          onClick={handleDelete}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default CardItem;
