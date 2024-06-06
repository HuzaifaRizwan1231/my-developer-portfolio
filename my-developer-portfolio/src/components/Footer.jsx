import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  const { contactRef } = props;

  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const linksRef = useRef(null);

  const isPhoneInView = useInView(phoneRef);
  const isEmailInView = useInView(emailRef);
  const isLinksInView = useInView(linksRef);

  const phoneControls = useAnimation();
  const emailControls = useAnimation();
  const linksControls = useAnimation();

  useEffect(() => {
    if (isPhoneInView) {
      phoneControls.start("show");
    }
    if (isEmailInView) {
      emailControls.start("show");
    }
    if (isLinksInView) {
      linksControls.start("show");
    }
  }, [isPhoneInView, isEmailInView, isLinksInView]);

  const footerLinkVariant = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.25 },
    },
  };
  return (
    <>
      <div ref={contactRef} className="footer-section">
        <h2 className="mb-4">COME SAY HELLO!</h2>

        <div className="d-flex footer-contact gap-4 justify-content-center">
          <motion.div
            ref={phoneRef}
            variants={footerLinkVariant}
            initial="hidden"
            animate={phoneControls}
            className="d-flex gap-2"
          >
            <div className="d-flex justify-content-center align-items-center link-icon">
              <i class="fa-brands w-100 fa-whatsapp  "></i>
            </div>
            <div className="d-flex flex-column text-start">
              <span>Phone</span>
              <a
                target="_blank"
                href="https://wa.me/923225300470"
                className="footer-email"
              >
                +92 322 5300 470
              </a>
            </div>
          </motion.div>

          <motion.div
            ref={emailRef}
            variants={footerLinkVariant}
            initial="hidden"
            animate={emailControls}
            className="d-flex  gap-2"
          >
            <div className="d-flex justify-content-center align-items-center link-icon">
              <i class="fa-regular w-100 fa-envelope"></i>
            </div>
            <div className="d-flex flex-column text-start">
              <span>Email</span>
              <a
                target="_blank"
                href="mailto:huzaifa.rizwan1231@gmail.com"
                className="footer-email"
              >
                huzaifa.rizwan1231@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          ref={linksRef}
          variants={footerLinkVariant}
          initial="hidden"
          animate={linksControls}
          className="footer-links mt-5 gap-5"
        >
          <Link
            className="footer-link"
            to="https://www.facebook.com/huzaifa.rizwan.7359"
            target="_blank"
          >
            <i class="fa-brands fa-facebook"></i>
          </Link>
          <Link
            className="footer-link"
            to="https://github.com/HuzaifaRizwan1231"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </Link>
          <Link
            className="footer-link"
            to="https://www.linkedin.com/in/huzaifa-rizwan-36b54621b/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </Link>
          <Link
            className="footer-link"
            to="https://www.instagram.com/huzaifa_rizwan1231/"
            target="_blank"
          >
            <i class="fa-brands fa-instagram"></i>
          </Link>
        </motion.div>
      </div>
    </>
  );
}
