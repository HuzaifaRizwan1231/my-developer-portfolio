import React from 'react'
import Carousel from '../components/Carousel'

export default function ProjectInfo() {
  return (
    <>
    <div className="container project-info-container">
      <h1 className="text-center project-name">RFC</h1>
      <div className="row mb-4">
        <div className="col-md-6">
          <Carousel/>
        </div>
        <div className="col-md-6 my-auto ">
          <h3>Description</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque id labore fugit laudantium quia pariatur saepe magni deserunt aliquid quaerat, corrupti voluptates impedit asperiores. Eius corrupti, odit numquam qui odio itaque iste illum rem?</p>
          <button className="button-class visit-website-button">Visit Website</button>
          <button className="button-class see-github-button">See on GitHub</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h3 className='text-center'>Main Features</h3>
          <ul className='main-feature-list'>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
          </ul>
        </div>
        <div className="col-md-12">
          <h3 className='text-center'>Technologies Used</h3>
          <ul className='d-flex justify-content-center tech-used-list'>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
            <li>Feature 1</li>
          </ul>
        </div>
      </div>
    </div>
    
    </>
  )
}
