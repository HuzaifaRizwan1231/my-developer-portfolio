import React from 'react'

export default function ShaheenSuperStore() {
  return (
    <>
        {/* Shaheen Super Store Project */}
        <div className="col-md-8 m-auto col-12 projectItemOnMobile">
            <div class={`card text-center my-2 shadow-lg`}>
              <div className="row invert-on-mobile">
                {/* Description */}
                <div className="col-md-6">
                  <div className="card-title">Shaheen Super Store</div>
                  <div className="card-text">
                  An e-commerce site for browsing and purchasing products, with an admin panel for management.
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
                        src="assets/techStack/php.png"
                        alt=""
                        className="w-100"
                      />
                    </li>
                    <li className="shadow-lg">
                      <img
                        src="assets/techStack/html.png"
                        alt=""
                        className="w-100"
                      />
                    </li>
                    <li className="shadow-lg">
                      <img
                        src="assets/techStack/css.png"
                        alt=""
                        className="w-100"
                      />
                    </li>
                    <li className="shadow-lg">
                      <img
                        src="assets/techStack/javascript.png"
                        alt=""
                        className="w-100"
                      />
                    </li>
                  </ul>
                  <div className="card-links d-flex justify-content-center gap-4 mt-4">
                    <a target="_blank" href="https://github.com/HuzaifaRizwan1231/shaheen-super-store" className="code">
                      Code <i class="fa-brands fa-github"></i>
                    </a>
                    <a target="_blank" href="http://shaheen-super-store.infinityfreeapp.com/" className="demo">
                      Live Demo <i class="fa-solid fa-link"></i>
                    </a>
                  </div>
                </div>
                {/* Image */}
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <img
                    src="assets/rfcimage1.jpg"
                    alt=""
                    className="w-100 card-image shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
    </>
  )
}
