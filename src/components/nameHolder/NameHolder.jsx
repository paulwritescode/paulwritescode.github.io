import { Tooltip } from "@mui/material";
import React, { useState } from "react";

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
        <div className="py-2 text-4xl text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl lg:text-7xl min-h-vh w-max px-7">
          <div className="flex space-x-2">
            <Tooltip
              title="Light Mode"
              arrow
              placement="top"
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
              placement="top"
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
        <div className="flex items-center space-x-1 text-sm text-gray-700 lowercase dark:text-gray-300 sm:text-base md:text-lg lg:text-xl">
          <span className="px-5 py-1 duration-300 ease-in-out delay-75 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700">
            <Tooltip
              title="Simple and Stupid"
              arrow
              placement="left"
              {...alwaysVisibleTooltipProps}
            >
              <span>KISS</span>
            </Tooltip>
          </span>
          <span> | </span>
          <span className="px-5 py-1 duration-300 ease-in-out delay-75 rounded-xl hover:bg-neutral-200 dark:hover:bg-neutral-700">
            <Tooltip
              title="Pictorial"
              arrow
              placement="right"
              {...alwaysVisibleTooltipProps}
            >
              <span>pictorial</span>
            </Tooltip>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NameHolder;
