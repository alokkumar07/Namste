import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


const Error = () => {
  const err = useRouteError();
  console.log(err);
  
  return (
    <div className="flex flex-col justify-center gap-6 items-center mt-32 align-middle p-6">
      <h1 className="font-extrabold text-transparent text-8xl lg:text-9xl bg-clip-text bg-gradient-to-r from-[#f12711] to-[#f5af19]">Oops!!!</h1>
      <h1 className="font-bold text-2xl lg:text-3xl">Something Went Wrong </h1>
        <h2 className="font-bold text-2xl lg:text-3xl ">{err.status + " : " + err.statusText}</h2>
      <div>
       <Link to="/">
       <h3 className="bg-[#FC8019] text-white py-2 px-5 rounded-lg"> Click here to go to home page..</h3>
        </Link>
    </div>
    </div>
  );
};

export default Error;