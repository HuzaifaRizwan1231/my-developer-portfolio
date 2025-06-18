import { projects } from "../data/projects";
import ProjectItem from "./ProjectItem";

export default function Projects(props) {
  const { projectsRef } = props;
  return (
    <>
      <div ref={projectsRef} className="projects-section container-fluid">
        <h2 className="text-center">PROJECTS</h2>
        <div className="row gap-4">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              {...project}
              invert={index % 2 === 1 ? true : false}
            />
          ))}
        </div>
      </div>
    </>
  );
}
