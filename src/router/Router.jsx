import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// import pages
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import ResumeLanding from "../components/resume/ResumeLanding";
import Main from "../layout/Main";
import Home from "../pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />}>
      <Route index element={<Home />} />
      <Route path="resume" element={<ResumeLanding />}>
        <Route path="education" element={<Education />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
      </Route>
    </Route>
  )
);
