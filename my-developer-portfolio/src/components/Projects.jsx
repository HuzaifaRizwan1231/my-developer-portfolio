import React from "react";
import { Link } from "react-router-dom";
import RFC from "../projects/RFC";
import ShaheenSuperStore from "../projects/ShaheenSuperStore";

export default function Projects(props) {

  const {projectsRef} = props;
  return (
    <>
      <div ref={projectsRef} className="projects-section container-fluid">
        <h2 className="text-center">PROJECTS</h2>
        <div className="row gap-4">
          
          <RFC/>
          <ShaheenSuperStore/>
        </div>
      </div>
    </>
  );
}
