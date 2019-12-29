import React from 'react';
import { Link } from 'react-scroll';

export default function Landing() {
  return (
    <div className="landing-bg" id="landing">
      <div className="bg-color d-flex align-items-center justify-content-center">
        <div>
          <div className="brand-landing text-center">HI, I&apos;M WENHAO</div>
          <div className="slogan text-center">Challenge is my progress</div>
          <div className="text-center">
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70}>
              <div className="arrow-down">
                <i className="fas fa-angle-double-down"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
