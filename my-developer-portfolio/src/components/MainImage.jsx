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
        <div className="row vh-100   ">
          <div className="col-md-7 m-auto d-flex flex-column justify-content-center">
            <div className="mainText m-auto">
              Hi, This is Huzaifa!
              <div className="typedJSText">
                <span ref={el}></span>
              </div>
              <div className="buttons d-flex gap-4 mt-4">
              <button onClick={ProjectsLinkClick} className="view-projcts-btn">View Projects</button>
              <button onClick={ContactLinkClick} className="get-connected-btn">Get Connected</button>
            </div>
            </div>
            
          </div>
          <div className="col-md-5 text-center m-auto">
            <img
              src="/assets/124560775.jpeg"
              alt=""
              className="about-image m-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
