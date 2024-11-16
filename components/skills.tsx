import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="Skill" className="section-box container mt-4">
      <div>
        <div className="section-title p-4">
          <h1>Skills</h1>
          <hr />
          <div className="row">
            <div className="col-12">
              <h3 style={{ textAlign: 'center' }}>
                Languages Libraries & Frameworks...
              </h3>
            </div>
            <div className="col-6">
              <div className="progress mt-2">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  aria-label="HTML"
                  style={{ width: '99%' }}
                  aria-valuenow={99}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <span>HTML</span> <i className="val">99%</i>

              <div className="progress mt-2">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  aria-label="CSS"
                  style={{ width: '99%' }}
                  aria-valuenow={99}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <span>CSS</span> <i className="val">99%</i>

              <div className="progress mt-2">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  aria-label="JavaScript"
                  style={{ width: '80%' }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <span>JavaScript</span> <i className="val">80%</i>

              <div className="progress mt-2">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  aria-label="JQuery"
                  style={{ width: '85%' }}
                  aria-valuenow={85}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              
              
              </div>
              <span>TypeScript</span> <i className="val">79%</i>
            </div>
            {/* Part 2 */}
            <div className="col-6">
              <div className="progress mt-2">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  aria-label="Bootstrap"
                  style={{ width: '90%' }}
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <span>Bootstrap</span> <i className="val">90%</i>

              <div className="progress mt-2">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  aria-label="Git"
                  style={{ width: '92%' }}
                  aria-valuenow={92}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              
              </div>
              <span>SASS</span> <i className="val">80%</i>

              <div className="progress mt-2">
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  aria-label="Python"
                  style={{ width: '76%' }}
                  aria-valuenow={76}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <span>Python</span> <i className="val">76%</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
