import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();

  //   const [data, setData] = useState({});
  //   useEffect(() => {

  //     //  USING AXIOS

  //     //    async function fetchGitData(){
  //     //         const data = await axios("https://api.github.com/users/RajuKumar1213")
  //     //         console.log(typeof data.data)
  //     //     }
  //     //     fetchGitData()

  //     // USING FETCH API

  //     fetch("https://api.github.com/users/RajuKumar1213")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="bg-slate-800 text-white text-center text-2xl p-3">
      <h2> Github followers : {data.following}</h2>
      <img
        className="grid grid-cols-3 place-items-center h-60"
        src={data.avatar_url}
        alt=""
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await axios("https://api.github.com/users/RajuKumar1213")
    return response.data;
};
