import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://frozen-coast-92380.herokuapp.com/api/contacts/${id}`
      );
      const result = await response.json();
      setData(result);
    })();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h1>{data._id}</h1>
          <p>{data.createdAt}</p>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}

export default Detail;
