import React from "react";
import { Button } from "./ui/button";

const Portfolio: React.FC = () => {
  return (
    <section id="Portfolio" className="section-box container mt-4">
      <div>
        <div className="section-title p-4">
          <h1>Portfolio</h1>
          <hr />
          <h1 style={{ textAlign: "center", color: "white" }}>
            My <span>Basic Projects</span>
          </h1>
          <div className="Pcontainer">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Weather Widget App</h3>
                <span>
                  Technologies: NextJS, React, Tailwind CSS, Shadcn UI,
                  WEATHERAPI
                </span>
                <p>
                  A web application that allows users to fetch real-time weather
                  of any city.
                </p>
                <Button variant="outline" className="mb-2">
                  <a
                    href="https://github.com/CodeVoyager007/Weather-Widget-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    View Source <i className="fas fa-external-link-alt"></i>
                  </a>
                </Button>
                <Button variant="outline" className="mb-2">
                  <a
                    href="https://weather-widget-app-alpha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Try it Live <i className="fas fa-external-link-alt"></i>
                  </a>
                </Button>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Quiz App</h3>
                <span>
                  Technologies: NextJS, React, Tailwind CSS, Shadcn UI, Opentdb
                  API
                </span>
                <p>
                  A simple Quiz app that allows users to select a category for
                  the quiz.
                </p>
                <Button variant="outline" className="mb-2">
                  <a
                    href="https://github.com/CodeVoyager007/Quiz-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    View Source <i className="fas fa-external-link-alt"></i>
                  </a>
                </Button>
                <Button variant="outline" className="mb-2">
                  <a
                    href="https://quiz-app-blue-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Try it Live <i className="fas fa-external-link-alt"></i>
                  </a>
                </Button>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Movie Search App</h3>
                <span>
                  Technologies: NextJS, React, Tailwind CSS, Shadcn UI, OMDB API
                </span>
                <p>
                  Discover and explore your favorite movies effortlessly with
                  this sleek and user-friendly movie search app!
                </p>
                <Button variant="outline" className="mb-2">
                  <a
                    href="https://github.com/CodeVoyager007/Movie-Search-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    View Source <i className="fas fa-external-link-alt"></i>
                  </a>
                </Button>
                <Button variant="outline" className="mb-2">
                  <a
                    href="https://movie-search-app-gilt.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Try it Live <i className="fas fa-external-link-alt"></i>
                  </a>
                </Button>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Github Profile Viewer App</h3>
                <span>
                  Technologies: NextJS, React, Tailwind CSS, Shadcn UI, GitHub
                  API
                </span>
                <p>
                  Effortlessly find and explore GitHub profiles with this
                  intuitive and responsive GitHub profile search app!
                </p>
                <Button variant="outline" className="mb-2">
                  <a
                    href="https://github.com/CodeVoyager007/Github-Profile-Search-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    View Source <i className="fas fa-external-link-alt"></i>
                  </a>
                </Button>
                <Button variant="outline" className="mb-2">
                  <a
                    href="https://github-profile-search-app-sage.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Try it Live <i className="fas fa-external-link-alt"></i>
                  </a>
                </Button>
              </div>
            </div>

            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3>Currency Converter</h3>
                <span>
                  Technologies: NextJS, React, Tailwind CSS, Shadcn UI,
                  ExchangeRateAPI
                </span>
                <p>
                  Quickly and easily convert currencies with this intuitive
                  Currency Converter app, featuring live exchange rates to help
                  travelers and businesses manage their finances on the go!
                </p>
                <Button variant="outline" className="mb-2">
                  <a
                    href="https://github.com/CodeVoyager007/Currency-Converter-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    View Source <i className="fas fa-external-link-alt"></i>
                  </a>
                </Button>
                <Button variant="outline" className="mb-2">
                  <a
                    href="https://currency-converter-app-gamma.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    Try it Live <i className="fas fa-external-link-alt"></i>
                  </a>
                </Button>
              </div>
            </div>

            <div className="more-work">
              <p>More ↓</p>
              <a
                href="https://github.com/CodeVoyager007"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
