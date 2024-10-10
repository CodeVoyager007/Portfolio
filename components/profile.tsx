import React from "react";
import { Button } from "./ui/button";

const Profile: React.FC = () => {
  return (
    <section id="Profile" className="section-box container mt-5">
      <div>
        <div className="section-title p-4">
          <h1>Profile</h1>
          <hr />
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img
              src="dp.jpg"
              className="img-fluid p-3 mb-5"
              alt="Ayesha's image"
            />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Responsive Web Developer & Graphic Designer</h3>
            <p className="fst-italic">I have been working on web since 2023</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Name:</strong>
                    <span>Ayesha Mughal</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>City:</strong>
                    <span>Pakistan - Karachi</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Phone:</strong>
                    <span>+923458849343</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Date Of Birth:</strong>
                    <span>21 June 2009</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Age:</strong>
                    <span>15</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong>
                    <span>Intermediate (Currently in 2nd year)</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                 <span>ayeshamughal2162[at]gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong>
                    <span style={{ color: "green" }}>Available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section Skills */}
            <div className="skill flex flex-wrap gap-4">
              {/* GitHub */}
              <a
                href="https://www.github.com/CodeVoyager007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  className="col-md-4 col-sm-12 col-lg-3 bg-black flex items-center p-3"
                >
                  <i className="fab fa-github mr-2" aria-hidden="true"></i>
                  <span>Github</span>
                </Button>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ayesha_techadventures/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  className="col-md-4 col-sm-12 col-lg-3  bg-black flex items-center p-3"
                >
                  <i className="fab fa-instagram mr-2" aria-hidden="true"></i>
                  <span>Instagram</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

