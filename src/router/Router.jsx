import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import pages
import ResumeLanding from "../components/resume/ResumeLanding";
import Main from "../layout/Main";
import Home from "../pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<Home />} />
      <Route path="resume" element={<ResumeLanding />} />
    </Route>
  )
);
