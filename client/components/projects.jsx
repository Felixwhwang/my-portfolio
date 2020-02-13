import React from 'react';

export default function Projects() {
  return (
    <div className="gap d-flex justify-content-center align-items-center" id="projects">
      <div className="container">
        <h1 className="text-center section-title">Projects</h1>
        <div className="row">

          <div className="col-lg-4 col-md-6 p-2">
            <div className="card project-shadow h-100">
              <div className="overflow-hidden">
                <a href="https://novamm.wenhaowang.net/" target="_blank"
                  rel="noopener noreferrer">
                  <img src="images/memory-match.png" className="img-fluid grow" />
                </a>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <a href="https://novamm.wenhaowang.net/" target="_blank"
                    rel="noopener noreferrer">
                    <h4 className="card-title d-inline">Nova Memory Match</h4>
                  </a>
                  <div>
                    <a href="https://github.com/Felixwhwang/nova-memory-match" target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-github project-icon git-color"></i>
                    </a>
                    <a href="https://novamm.wenhaowang.net/" target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-chrome project-icon resume-color"></i>
                    </a>
                  </div>
                </div>
                <label className="text-muted">Game App</label>
                <p className="card-text">A JavaScript memory match application. It&apos;s time
                to test your attention and memory. All devices oriented.</p>
                <p className="card-text">App was built using <strong>JavaScript</strong>,
                  <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>Bootstrap4</strong>
                  and <strong>jQuery</strong>.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-2">
            <div className="card project-shadow h-100">
              <div className="overflow-hidden">
                <a href="https://gameweaponsales.wenhaowang.net/" target="_blank"
                  rel="noopener noreferrer">
                  <img src="images/weapon-sales.png" className="img-fluid grow" />
                </a>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <a href="https://gameweaponsales.wenhaowang.net/" target="_blank"
                    rel="noopener noreferrer">
                    <h4 className="card-title d-inline">Game Weapon Sales</h4>
                  </a>
                  <div>
                    <a href="https://github.com/Felixwhwang/game-weapon-sales" target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-github project-icon git-color"></i>
                    </a>
                    <a href="https://gameweaponsales.wenhaowang.net/" target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-chrome project-icon resume-color"></i>
                    </a>
                  </div>
                </div>
                <label className="text-muted">Full Stack App</label>
                <p className="card-text">A functional web application for selling game replica weapon.
                All devices oriented.</p>
                <p className="card-text">App front-end was built using <strong>React</strong>,
                  <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Bootstrap4</strong>.
                Back-end was using <strong>MySQL</strong> database and <strong>PHP</strong>.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-2">
            <div className="card project-shadow h-100">
              <div className="overflow-hidden">
                <a href="https://soulmate.wenhaowang.net/" target="_blank"
                  rel="noopener noreferrer">
                  <img src="images/soulmate.png" className="img-fluid grow" />
                </a>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <a href="https://soulmate.wenhaowang.net/" target="_blank"
                    rel="noopener noreferrer">
                    <h4 className="card-title d-inline">Soulmate Dating App</h4>
                  </a>
                  <div>
                    <a href="https://github.com/Felixwhwang/soul-mate" target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-github project-icon git-color"></i>
                    </a>
                    <a href="https://soulmate.wenhaowang.net/" target="_blank"
                      rel="noopener noreferrer">
                      <i className="fab fa-chrome project-icon resume-color"></i>
                    </a>
                  </div>
                </div>
                <label className="text-muted">Full Stack App</label>
                <div className="under-construction">Under Construction</div>
                <p className="card-text">A web application for young people,
                  and who want to find the ideal other half in his/her life.</p>
                <p className="card-text">App front-end was built using <strong>React</strong>,
                  <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>Bootstrap4</strong>.
                Back-end was using <strong>MySQL</strong> database and <strong>PHP</strong>.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
