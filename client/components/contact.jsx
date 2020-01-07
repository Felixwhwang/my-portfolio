import React from 'react';

export default function Contact() {
  return (
    <div className="contact-bg d-flex align-items-center justify-content-center" id="contact">
      <div className="contact-filter">
        <div className="container contact-top-gap">
          <div className="info-bg">
            <div className="p-5">
              <h2 className="text-center mb-2">Thank You</h2>
              <h5 className="text-center text-muted mb-4">I am willing and able to relocate at short notice.</h5>
              <div>
                <div className="d-flex align-items-center justify-content-center mb-1">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:felixwhwang@gmail.com">
                    <div className="ml-1">felixwhwang@gmail.com</div>
                  </a>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <i className="fas fa-phone"></i>
                  <a href="tel:+16264943162">
                    <div className="ml-1">626-494-3162</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white text-center mt-3">
            Copyright ©2020 All rights reserved.
          </div>
          <div className="text-white text-center mb-3">
            wenhaowang.net
          </div>
        </div>
      </div>
    </div>
  );
}
