import React from 'react';

export default function About() {
  return (
    <div className="about-bg
      d-flex justify-content-center align-items-center" id="about">
      <div className="container">
        <div className="row about-me p-3">
          <div className="col-12 col-sm-6 col-lg-5
            d-flex justify-content-center align-items-center flex-wrap row">
            <img src="images/wenhao.jpg" className="my-photo img-fluid" />
            <div>
              <div>
                <span>Name: </span>
                <span>Wenhao Wang</span>
              </div>
              <div>
                <span>Title: </span>
                <span>Software Engineer</span>
              </div>
              <div>
                <span>Email: </span>
                <span>felixwhwang@gmail.com</span>
              </div>
              <div>
                <span>Phone: </span>
                <span>(626) 494-3162</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-7
            d-flex justify-content-center align-items-center flex-wrap">
            <h3>About Me</h3>
            <p>Teemo teemo teemo teemo teemo teemo teemo teemo teemo teemo
               teemo teemo teemo teemo teemo teemo teemo teemo teemo teemo</p>
            <p>Teemo teemo teemo teemo teemo teemo teemo teemo teemo teemo
               teemo teemo teemo teemo teemo teemo teemo teemo teemo teemo</p>
            <p>Teemo teemo teemo teemo teemo teemo teemo teemo teemo teemo
               teemo teemo teemo teemo teemo teemo teemo teemo teemo teemo</p>
          </div>
        </div>
      </div>
    </div>
  );
}
