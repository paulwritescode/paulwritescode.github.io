import { DocumentArrowDownIcon, PhotoIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NameHolder() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleToLightMode = () => setIsDarkMode(false);
  const toggleToDarkMode = () => setIsDarkMode(true);

  const alwaysVisibleTooltipProps = {
    PopperProps: {
      modifiers: [
        {
          name: "flip",
          enabled: false,
        },
        {
          name: "preventOverflow",
          enabled: false,
        },
        {
          name: "hide",
          enabled: false,
        },
      ],
      style: { pointerEvents: "none" },
    },
    open: true,
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="flex flex-col items-center space-y-5">
        <div className="py-2 text-4xl dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl min-h-vh w-max px-7">
          <div className="flex space-x-2">
            <Tooltip
              title="Light Mode"
              arrow
              placement="left"
              {...alwaysVisibleTooltipProps}
            >
              <button
                onClick={toggleToLightMode}
                className="focus:outline-none"
              >
                Kinyatti
              </button>
            </Tooltip>
            <Tooltip
              title="Dark Mode"
              arrow
              placement="right"
              {...alwaysVisibleTooltipProps}
            >
              <button
                onClick={toggleToDarkMode}
                className="font-bold focus:outline-none"
              >
                Paul
              </button>
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col items-center text-sm lowercase md:flex-row sm:text-base md:text-lg lg:text-xl">
          <Link
            to={"resume"}
            className="px-5 py-1 duration-300 ease-in-out delay-75 rounded-lg hover:bg-slate-50/10 "
          >
            <Tooltip
              title="Keep it Simple and Stupid"
              arrow
              placement="left"
              {...alwaysVisibleTooltipProps}
            >
              <span className="flex items-center">
                <DocumentArrowDownIcon className="w-5 h-5" />
                resume
              </span>
            </Tooltip>
          </Link>
          <span> | </span>
          <Link
            to={""}
            className="px-5 py-1 duration-300 ease-in-out delay-75 rounded-lg hover:bg-slate-50/10"
          >
            <Tooltip
              title="seeing is believing"
              arrow
              placement="right"
              {...alwaysVisibleTooltipProps}
            >
              <span className="flex items-center">
                <PhotoIcon className="w-5 h-5 mr-1" />
                pictorial
              </span>
            </Tooltip>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NameHolder;
