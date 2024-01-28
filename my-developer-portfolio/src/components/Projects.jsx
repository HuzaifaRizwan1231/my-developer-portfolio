import React from 'react'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <>
        <div className="projects-section container">
            <div className="row">
                <div className="col-md-6">
                    <ProjectItem cardImageClass="rfc-img" title="RFC" description="Heavy restaurant menu app" websiteLink="https://restaurant-menu-app-frontend.vercel.app/" seeMoreLink="/restaurantMenuApp"/>
                </div>

                <div className="col-md-6">
                    <ProjectItem cardImageClass="rfc-img" title="RFC" description="Heavy restaurant menu app" websiteLink="#"/>
                </div>

                <div className="col-md-6">
                    <ProjectItem cardImageClass="rfc-img" title="RFC" description="Heavy restaurant menu app" websiteLink="#"/>
                </div>

                <div className="col-md-6">
                    <ProjectItem cardImageClass="rfc-img" title="RFC" description="Heavy restaurant menu app" websiteLink="#"/>
                </div>
                
            </div>

        </div>
    </>
  )
}
