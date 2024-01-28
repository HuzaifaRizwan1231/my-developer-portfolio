import React from "react";
import { Link } from "react-router-dom";

export default function ProjectItem(props) {
  return (
    <>
      <div class={`card text-center my-2 ${props.cardImageClass}`}>
        <div class="card-body">
            <div class="card-body-space">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text mb-4">
                    {props.description}
                </p>
                <Link to={props.websiteLink} target="_blank" class="button-class visit-website-button">
                    Visit Website
                </Link>
                <Link to={props.seeMoreLink} class="button-class see-more-button">
                    See More
                </Link>
            </div>
        </div>
      </div>
    </>
  );
}
