import React from "react";

import { FingerPrintIcon } from "@heroicons/react/24/solid";
import NameHolder from "../components/nameHolder/NameHolder";
function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen p-10 space-y-5 ">
        <div></div>
        <NameHolder />
        <div className="flex items-center justify-center mt-2 text-xs ">
          <FingerPrintIcon className="w-5 h-5 mr-1 " />
          manqiqode
        </div>
      </div>
    </>
  );
}

export default Home;
