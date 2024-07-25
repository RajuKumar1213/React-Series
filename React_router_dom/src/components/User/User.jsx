import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const {userId } = useParams();
  return (
    <div
      className="text-center bg-slate-800 text-white text-xl p-2"
    >
      User : {userId}
    </div>
  );
}

export default User;
