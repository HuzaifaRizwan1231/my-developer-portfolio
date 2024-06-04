import React from 'react'

export default function RFC() {
  return (
    <>
        {/* RFC Project */}
        <div className="col-md-8 m-auto col-12 projectItemOnMobile">
            <div class={`card text-center my-2 shadow-lg`}>
              <div className="row">
                {/* Image */}
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="assets/rfcimage1.jpg"
                    alt=""
                    className="w-100 card-image shadow-sm"
                  />
                </div>
                {/* Description */}
                <div className="col-md-6">
                  <div className="card-title">Restaurant App</div>
                  <div className="card-text">
                    A Delightful Restaurant Menu App that Offers a Variety of
                    Food Options
                  </div>
                  <ul className="d-flex justify-content-center mt-2 list-unstyled tech-list flex-wrap gap-4">
                    <li className="shadow-lg">
                      <img
                        src="assets/techStack/mysql.png"
                        alt=""
                        className="w-100"
                      />
                    </li>
                    <li className="shadow-lg">
                      <img
                        src="assets/techStack/expressjs.png"
                        alt=""
                        className="w-100"
                      />
                    </li>
                    <li className="shadow-lg">
                      <img
                        src="assets/techStack/react.png"
                        alt=""
                        className="w-100"
                      />
                    </li>
                    <li className="shadow-lg">
                      <img
                        src="assets/techStack/nodejs.png"
                        alt=""
                        className="w-100"
                      />
                    </li>
                    <li className="shadow-lg">
                      <img
                        src="assets/techStack/tailwindcss.png"
                        alt=""
                        className="w-100"
                      />
                    </li>
                  </ul>
                  <div className="card-links d-flex justify-content-center gap-4 mt-4">
                    <a className="code">
                      Code <i class="fa-brands fa-github"></i>
                    </a>
                    <a className="demo">
                      Live Demo <i class="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
