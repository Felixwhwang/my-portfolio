import React from 'react';

export default function Projects() {
  return (
    <div className="projects-bg d-flex
        justify-content-center align-items-center" id="projects">
      <div className="container">
        <h2 className="text-center">Projects</h2>
        <div className="row">

          <div className="col-lg-4 col-md-6 p-2">
            <div className="card project-shadow h-100">
              <div className="overflow-hidden">
                <img src="images/memory-match.png" className="img-fluid grow" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Nova Memory Match</h5>
                <label className="text-muted">JS App</label>
                <p className="card-text">A JavaScript memory match application,
                all devices oriented.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 p-2">
            <div className="card project-shadow h-100">
              <div className="overflow-hidden">
                <img src="images/weapon-sales.png" className="img-fluid grow" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Game Weapon Sales</h5>
                <label className="text-muted">Full Stack App</label>
                <p className="card-text">A web application for selling game replica weapon.
                All devices oriented.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
