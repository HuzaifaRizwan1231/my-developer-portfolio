import React from 'react'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <>
        <div className="projects-section container">
            <h1 className='text-center'>My Work</h1>
            <div className="row">
                <div className="col-md-6 col-12">
                    <ProjectItem cardImageClass="rfc-img" title="RFC" description="A Delightful Restaurant Menu App that Offers a Variety of Food Options" websiteLink="https://restaurant-menu-app-frontend.vercel.app/" seeMoreLink="/restaurantMenuApp"/>
                </div>
                

               {/* Add Project here with all info */}
                
            </div>

        </div>
    </>
  )
}
