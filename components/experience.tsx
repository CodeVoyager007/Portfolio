import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="Experience" className="section-box container mt-4">
      <div>
        <div className="section-title p-4">
          <h1>Experience</h1>
          <hr />
          <p className="p-3">
            I’m currently interning at GAO TECH since September 15. 🌟 I&apos;ve created several projects showcasing my web development skills, including a Weather Widget App 🌤️, a Quiz App ❓, a Movie Search App 🎬, a GitHub Profile Viewer 🖥️, a Currency Converter 💱, and a Pomodoro Timer App ⏳. I&apos;m also developing a Random User Generator 👤 and a JARVIS-like Assistant 🤖 to help with coding tasks. Each project reflects my creativity and passion for learning! ✨🚀
            <br />
            If you want to see my projects on GitHub, check out my
            <a
              href="https://github.com/CodeVoyager007"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'black' }}
            >
              GitHub
            </a>
            account.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
