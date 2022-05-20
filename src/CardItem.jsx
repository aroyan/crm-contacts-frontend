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
    <tr key={_id}>
      <th scope="row">
        {firstName} {lastName}
      </th>
      <td>{email}</td>
      <td>{address}</td>
      <td>{age}</td>
      <td>
        <a onClick={handleDelete}>Delete</a>
      </td>
    </tr>
  );
};

export default CardItem;
