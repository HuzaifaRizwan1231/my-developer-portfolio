import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

export default function MainImage() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ['<i>Web Developer</i>', '<i>Software Engineer</i>','<i>Programmer</i>'],
        typeSpeed: 50,
        loop:true
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);
  return (
    <>
    <div className="mainSection container-fluid">
    <h1 className="mainText">
      <div className="row">
        <div className="col-md-5 text-center "> Hi! This is Huzaifa Rizwan
        <p className="typedJSText"><span ref={el}></span></p></div>
      </div>
     
    </h1>
    </div>
    </>
  )
}
