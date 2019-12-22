import React from 'react';

export default function Skill() {
  return (
    <div className="skills-bg d-flex justify-content-center align-items-center" id="skills">
      <div className="container">
        <h2 className="text-center">Skills</h2>
        <div className="row">

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/skill-icons/js.png" className="img-fluid" />
              <div className="card-title skill-text">JavaScript</div>
            </div>
          </div>

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/skill-icons/react.png" className="img-fluid" />
              <div className="card-title skill-text">React</div>
            </div>
          </div>

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/skill-icons/html5.png" className="img-fluid" />
              <div className="card-title skill-text">HTML5</div>
            </div>
          </div>

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/skill-icons/mysql.png" className="img-fluid" />
              <div className="card-title skill-text">MySQL</div>
            </div>
          </div>

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/skill-icons/css3.png" className="img-fluid" />
              <div className="card-title skill-text">CSS3</div>
            </div>
          </div>

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/skill-icons/php.png" className="img-fluid" />
              <div className="card-title skill-text">PHP</div>
            </div>
          </div>

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/skill-icons/bootstrap.png" className="img-fluid" />
              <div className="card-title skill-text">Bootstrap</div>
            </div>
          </div>

          <div className="col-lg-2 col-3 p-2">
            <div className="card skill-card">
              <img src="images/skill-icons/jQuery.png" className="img-fluid" />
              <div className="card-title skill-text">jQuery</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
