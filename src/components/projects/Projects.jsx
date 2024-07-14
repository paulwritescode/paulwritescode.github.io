import React from "react";

function Projects() {
  return (
    <>
      <div>
        <h1 className="text-base">Projects</h1>
        <p className="flex py-2 space-x-2 text-xl ">
          <div className="flex flex-col p-2 bg-slate-50/5 w-[250px] rounded-xl">
            <span>Fleet</span>
            <span className="text-base">A telematics system</span>
          </div>
          <div className="flex flex-col p-2 bg-slate-50/5 w-[250px] rounded-xl">
            <span>FutureHive Smart Solution</span>
            <span className="text-base">
              This is an e-commerce website to handle sales
            </span>
          </div>
          <div className="flex flex-col p-2 bg-slate-50/5 w-[250px] rounded-xl">
            <span>Name Project</span>
            <span className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              recusandae non nihil dicta et ipsum voluptates amet quisquam
              molestiae blanditiis? Dolor dolore dicta totam quisquam maxime ut
              labore, a tenetur!
            </span>
          </div>
        </p>
      </div>
    </>
  );
}

export default Projects;
