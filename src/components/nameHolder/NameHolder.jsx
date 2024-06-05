import React from "react";

function NameHolder() {
  return (
    <>
      <div className="flex items-center flex-col space-y-1">
        <div className="text-white/50 flex flex-col items-center uppercase tex-base bg-white/5 py-1 hover:bg-white/20 scale-100 ease-in-out transform duration-300 delay-75 hover:scale-105 rounded-md w-max px-7 hover:text-white text-sm">
          <div>Kinyatti Paul</div>
        </div>
        <div className="text-xs flex space-x-2 uppercase text-white/50 ">
          <span className="hover:text-white delay-75 duration-300 ease-in-out">
            one
          </span>
          <span> | </span>
          <span className="hover:text-white delay-75 duration-300 ease-in-out">
            Two
          </span>
        </div>
      </div>
    </>
  );
}

export default NameHolder;
