import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom';

export default function ProjectInfo(props) {
  const [scrollToTop, setscrollToTop] = useState();
  useEffect(() => {
    setscrollToTop(window.scrollTo(0,0));
  }, [])

  

  const {projectTitle, projectDescription, websiteLink, githubLink, features, technologies,projectNameForImage} = props;

  return (
    <>
    <div className="container project-info-container">
      <h1 className="text-center project-name">{projectTitle}</h1>
      <div className="row mb-4">
        <div className="col-md-6  projectInfoCarousel">
          <Carousel projectNameForImage={projectNameForImage}/>
        </div>
        <div className="col-md-6 my-auto col-12 projectInfoDesc">
          <h3 className="ms-1">Description</h3>
          <p className="ms-1">{projectDescription}</p>
          <Link className="button-class visit-website-button-project-info" to={websiteLink} target="_blank">Visit Website</Link>
          <Link className="button-class see-github-button" to={githubLink} target="_blank">See on GitHub</Link>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-12">
          <h3 className='text-center'>Main Features</h3>
          <ul className='main-feature-list'>
            {features.map(feature=>(
            <li><b>{feature.name}</b> {feature.description}</li>
            ))}
          </ul>
        </div>
        <div className="col-md-12">
          <h3 className='text-center'>Technologies Used</h3>
          <ul className='d-flex justify-content-center tech-used-list'>
            {technologies.map(technology=>(
               <li> <i class={`${technology.icon} mx-2`}></i>{technology.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    
    </>
  )
}
