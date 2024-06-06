import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects(props) {
  const { projectsRef } = props;
  return (
    <>
      <div ref={projectsRef} className="projects-section container-fluid">
        <h2 className="text-center">PROJECTS</h2>
        <div className="row gap-4">
          {/* RFC */}
          <ProjectItem
            name="Restaurant App"
            description="A Delightful Restaurant Menu App that Offers a Variety of
                    Food Options."
            techUsed={["mysql", "expressjs", "react", "nodejs", "tailwindcss"]}
            code="https://github.com/HuzaifaRizwan1231/RestaurantMenuApp"
            liveSite="https://restaurant-menu-app-frontend.vercel.app/"
            image="rfcimage1.jpg"
            invert={false}
          />
          {/* Shaheen Super Store */}
          <ProjectItem
            name="Shaheen Super Store"
            description="An e-commerce site for browsing and purchasing products, with an admin panel for management."
            techUsed={["mysql", "php", "html", "css", "javascript"]}
            code="https://github.com/HuzaifaRizwan1231/shaheen-super-store"
            liveSite="http://shaheen-super-store.infinityfreeapp.com/"
            image="shaheen.jpg"
            invert={true}
          />
        </div>
      </div>
    </>
  );
}
