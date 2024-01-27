import React from "react";

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
                <a href="#" class="card-button visit-website-button">
                    Visit Website
                </a>
                <a href="#" class="card-button see-more-button">
                    See More
                </a>
            </div>
        </div>
      </div>
    </>
  );
}
