import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className="footer-section">
        <div className="footer-container container">
            <h1>Come Say Hello!</h1>
            <a href="mailto:huzaifa.rizwan1231@gmail.com" className="footer-email"><i class="fa-regular mx-2 fa-envelope"></i>huzaifa.rizwan1231@gmail.com</a>
            </div>
        <div className="footer-links gap-4">

        <Link className="nav-link" to="https://www.facebook.com/huzaifa.rizwan.7359" target="_blank">
        <i class="fa-brands fa-facebook"></i>
                
                </Link>
                <Link className="nav-link" to="https://wa.me/923225300470" target="_blank">
                <i class="fa-brands fa-whatsapp"></i>
                </Link>
                <Link className="nav-link" to="https://github.com/HuzaifaRizwan1231" target="_blank">
                <i class="fa-brands fa-github"></i>
                
                </Link>
                <Link className="nav-link" to="https://www.linkedin.com/in/huzaifa-rizwan-36b54621b/" target="_blank">
                <i class="fa-brands fa-linkedin"></i>
                
                </Link>
                <Link className="nav-link" to="https://www.instagram.com/huzaifa_rizwan1231/" target="_blank">
                <i class="fa-brands fa-instagram"></i>
                
                </Link>
        </div>

    </div>
    
    
    </>
  )
}
