import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function MainImage(props) {

  const {ProjectsLinkClick, ContactLinkClick} = props;
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<i>MERN Developer</i>",
        "<i>PHP Developer</i>",
        "<i>Full Stack Dev</i>",
      ],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="mainSection container-fluid">
        <div className="row mainRow">
          <div className="col-sm-7 first-section col-12 m-auto d-flex flex-column ">
            <div className="mainText m-auto">
              Hi, This is Huzaifa!
              <div className="typedJSText">
                <span ref={el}></span>
              </div>
              <div className="buttons d-flex gap-md-4 gap-3 mt-4">
              <button onClick={ProjectsLinkClick} className="view-projcts-btn">View Projects</button>
              <button onClick={ContactLinkClick} className="get-connected-btn">Get Connected</button>
            </div>
            </div>
            
          </div>
          <div className="col-sm-5 second-section col-12 text-center d-flex justify-content-center align-items-end">
            <img
              src="/assets/IMG-20230922-WA0014.jpg"
              alt=""
              className="about-image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
