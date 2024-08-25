import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects(props) {
  const { projectsRef } = props;
  return (
    <>
      <div ref={projectsRef} className="projects-section container-fluid">
        <h2 className="text-center">PROJECTS</h2>
        <div className="row gap-4">
          {/* Route Mate */}
          <ProjectItem
            name="Route Mate"
            description="An Interactive Car Pooling App to Find Companions for Daily Commuters having Similar Routes."
            techUsed={[
              "mysql",
              "expressjs",
              "react",
              "nodejs",
              "tailwindcss",
              "mapbox",
              "jwt",
            ]}
            contributors={[]}
            links={[
              {
                name: "Code",
                url: "https://github.com/HuzaifaRizwan1231/route-mate",
                imageClass: "fa-brands fa-github",
              },
              {
                name: "Live Demo",
                url: "https://route-mate.vercel.app/",
                imageClass: "fa-solid fa-link",
              },
            ]}
            liveSite="https://route-mate.vercel.app/"
            image="route-mate.jpg"
            invert={false}
          />
          {/* Shaheen Super Store */}
          <ProjectItem
            name="Shaheen Super Store"
            description="An e-commerce site for browsing and purchasing products, with an admin panel for management."
            techUsed={["mysql", "php", "html", "css", "javascript"]}
            contributors={[]}
            links={[
              {
                name: "Code",
                url: "https://github.com/HuzaifaRizwan1231/shaheen-super-store",
                imageClass: "fa-brands fa-github",
              },
              {
                name: "Live Demo",
                url: "https://shaheen-super-store.infinityfreeapp.com/",
                imageClass: "fa-solid fa-link",
              },
            ]}
            liveSite="https://shaheen-super-store.infinityfreeapp.com/"
            image="shaheen.jpg"
            invert={true}
          />
          {/* RFC */}
          <ProjectItem
            name="Restaurant App"
            description="A Delightful Restaurant Menu App that Offers a Variety of
                    Food Options."
            techUsed={["mysql", "expressjs", "react", "nodejs", "tailwindcss"]}
            contributors={[]}
            links={[
              {
                name: "Code",
                url: "https://github.com/HuzaifaRizwan1231/RestaurantMenuApp",
                imageClass: "fa-brands fa-github",
              },
              {
                name: "Live Demo",
                url: "https://restaurant-menu-app-frontend.vercel.app/",
                imageClass: "fa-solid fa-link",
              },
            ]}
            liveSite="https://restaurant-menu-app-frontend.vercel.app/"
            image="rfcimage1.jpg"
            invert={false}
          />

          {/* FleetO */}
          <ProjectItem
            name="FleetO"
            description="A Comprehensive Fleet Management App to Manage Drivers and Their Assignments."
            techUsed={["java", "xml", "mysql", "expressjs", "nodejs"]}
            contributors={[
              {
                contributor_image:
                  "https://avatars.githubusercontent.com/u/109590443?v=4",
                contributor_github_link:
                  "https://github.com/MuhammadHashirWaqass",
              },
            ]}
            links={[
              {
                name: "Code",
                url: "https://github.com/MuhammadHashirWaqass/FleetO",
                imageClass: "fa-brands fa-github",
              },
              {
                name: "APK File",
                url: "https://drive.google.com/file/d/1csCQ-ez77L7tP_sqblx6EVEPD9Pb6wUD/view",
                imageClass: "fa-brands fa-android",
              },
            ]}
            liveSite="https://drive.google.com/file/d/1csCQ-ez77L7tP_sqblx6EVEPD9Pb6wUD/view"
            image="fleeto.jpg"
            invert={true}
          />

          {/* eCafe */}
          <ProjectItem
            name="eCafe"
            description="Online store to order eatables for a local café with different panels for admin, manager and clerk."
            techUsed={[
              "mysql",
              "java",
              "spring-boot",
              "thymeleaf",
              "bootstrap",
            ]}
            contributors={[
              {
                contributor_image:
                  "https://avatars.githubusercontent.com/u/131664477?v=4",
                contributor_github_link: "https://github.com/MuhammadUmar7831",
              },
              {
                contributor_image:
                  "https://avatars.githubusercontent.com/u/144957322?v=4",
                contributor_github_link: "https://github.com/D-Soft08",
              },
            ]}
            links={[
              {
                name: "Code",
                url: "https://github.com/HuzaifaRizwan1231/eCafe",
                imageClass: "fa-brands fa-github",
              },
              {
                name: "YouTube Link",
                url: "https://www.youtube.com/watch/3waglUa5Ako",
                imageClass: "fa-brands fa-youtube",
              },
            ]}
            liveSite="https://www.youtube.com/watch/3waglUa5Ako"
            image="eCafe.jpg"
            invert={false}
          />
        </div>
      </div>
    </>
  );
}
