import React from "react";

export default function ProjectItem(props) {
  return (
    <>
      <div class={`card text-center ${props.cardImageClass}`}>
        <div class="card-body">
            <div class="card-body-space">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">
                    {props.description}
                </p>
                <a href="#" class="btn btn-primary">
                    Visit Website
                </a>
                <a href="#" class="btn btn-primary">
                    See More
                </a>
            </div>
        </div>
      </div>
    </>
  );
}
