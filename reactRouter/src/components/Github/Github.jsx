import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/zakariyabombaywala")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-center bg-gray-600 text-white text-3xl p-4 m-4">
      Github Profile : {data.name}
      <img
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
        className="rounded-lg"
      />
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch(
    "https://api.github.com/users/zakariyabombaywala"
  );
  return response.json();
};
