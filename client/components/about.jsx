import React from 'react';

export default function About() {
  return (
    <div className="gap d-flex justify-content-center align-items-center" id="about">
      <div className="container">
        <h1 className="text-center section-title">About</h1>
        <div className="row about-me p-3 pt-4 pb-4 justify-content-center">
          <div className="col-12 col-sm-6 col-lg-5">
            <img src="images/wenhao.jpg" className="my-photo img-fluid" />
            <div className="person-info about-text mt-4 mb-4">
              <div className="d-flex align-items-center justify-content-between">
                <h3>Wenhao Wang</h3>
                <div className="person-link">
                  <a href="https://github.com/Felixwhwang" target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-github ml-1 git-color"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/wenhao-wang-68b19abb/" target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-linkedin ml-1"></i>
                  </a>
                  <a href="https://drive.google.com/file/d/1HCj_TltPGv4uELTeNoEsP9NiEeyAa9wh/view?usp=sharing" target="_blank"
                    rel="noopener noreferrer">
                    <i className="fas fa-file ml-1 resume-color"></i>
                  </a>
                </div>
              </div>
              <label className="text-muted">Software Engineer</label>
              <div className="d-flex align-items-center">
                <i className="fas fa-envelope"></i>
                <a href="mailto:felixwhwang@gmail.com">
                  <div className="ml-1">felixwhwang@gmail.com</div>
                </a>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-phone"></i>
                <div className="ml-1">626-494-3162</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-7 about-text">
            <p>I&apos;m a software engineer with a passion to learn technology in the programming area. I love to cooperate with my teammates to conquer enough difficult tasks. I am pleased to see everyone is growing including me. That is the prime motivation for everything I do. </p>
            <p>After graduating from the  University of North Alabama with a degree in Computer Science. I was eager to find my first professional job. I enjoyed developing applications, learning new technologies, and solving problems, but I didn&apos;t just stop growing, oppositely, I decided to pursue my master&apos;s degree after two years.</p>
            <p>I learned a lot of software development and management knowledge at the California State University of Dominguez Hills, but I realized I still needed actual applications developing experience. That&apos;s why after graduating from the CSUDH with a master degree in Computer Science I took the immersive program at LearningFuze later. New friends and new technologies made me excited. I spent ten hours per day for practice and developing applications over there. I am looking forward to the experiences in developing professional applications in the near future.</p>
            <p>In my leisure time, I enjoy swimming, watching movies, trying new cooking recipes, and spending quality time with my friends and my cute cat.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
