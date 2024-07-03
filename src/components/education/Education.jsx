import React from "react";

function Education() {
  return (
    <>
      <div className="p-4">
        <div className="pb-4 mb-4 border-b">
          <h1 className="text-3xl font-bold text-emerald-400">
            B.Sc. Computer Science
          </h1>
          <h2 className="mt-1 text-base font-semibold">
            Dedan Kimathi University of Technology
          </h2>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Core Skills</h3>
          <ul className="pl-4 list-disc list-inside">
            <li>Data Structures and Algorithms</li>
            <li>Object-Oriented Programming</li>
            <li>Database Design</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">Specialized Fields</h3>
          <ul className="pl-4 list-disc list-inside">
            <li>Internet Applications Development</li>
            <li>Android Development</li>
            <li>System Analysis</li>
            <li>Human-Computer Interaction</li>
            <li>Introduction to Machine Learning and AI</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-semibold">
            Leadership, Teamwork, and Collaboration
          </h3>
          <p>
            Throughout my education, I developed essential soft skills such as
            leadership, teamwork, and collaboration, which have been invaluable
            in both academic and professional settings.
          </p>
        </div>
      </div>
    </>
  );
}

export default Education;
