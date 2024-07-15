import {
  AcademicCapIcon,
  BriefcaseIcon,
  FingerPrintIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Link, Outlet } from "react-router-dom";

function ResumeLanding() {
  return (
    <>
      <div className="flex items-center justify-center h-screen gap-10 p-4 w-max ">
        <div className="flex flex-col items-center justify-center h-screen p-4 lowercase w-max">
          <div className="flex flex-col gap-4">
            <Link
              to={"/"}
              className="flex items-center justify-end px-2 text-base"
            >
              <HomeIcon className="w-5 h-5 mr-2" />
              <p>home</p>
            </Link>
            <Link
              to={"education"}
              className="flex flex-col items-end p-12 text-2xl font-bold w-[250px] bg-slate-50/5 rounded-2xl hover:bg-slate-50/10 focus:border-r "
            >
              <AcademicCapIcon className="w-10 h-10 " />
              <p>Education</p>
            </Link>

            <Link
              to={"projects"}
              className="flex flex-col items-end p-12 text-2xl font-bold bg-slate-50/5 rounded-2xl w-[250px] hover:bg-slate-50/10 focus:border-r"
            >
              <FingerPrintIcon className="w-10 h-10 " />
              <p>Projects</p>
            </Link>

            <Link
              to={"experience"}
              className="flex flex-col items-end p-12 text-2xl font-bold w-[250px] bg-slate-50/5 rounded-2xl hover:bg-slate-50/10 focus:border-r"
            >
              <BriefcaseIcon className="w-10 h-10 " />
              <p>Experience</p>
            </Link>
            <div className="flex flex-col items-end p-12 text-2xl font-bold w-[250px] bg-slate-50/5 rounded-2xl hover:bg-slate-50/10 focus:border-r">
            <a target="_blank" href="https://profile.codersrank.io/user/paulwritescode/">View my full resume</a>
            </div> 
          </div>
        </div>
        <div>
          <div>
            <a target="_blank" href="https://profile.codersrank.io/user/paulwritescode/">View my full resume</a>
            </div>          <Outlet />
        </div>
      </div>
    </>
  );
}

export default ResumeLanding;
