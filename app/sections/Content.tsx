"use client";

import { useState } from "react";
import ProjectsFilter from "./ProjectsFilter";
import AboutCards from "./AboutCards";
import SkillsSection from "./SkillsSection";

export default function Content() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div>
    <div className="right-section relative">
      {/* Navbar */}
      <nav className="navbar absolute right-0">
        <button
          className={`${activeTab === "about" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`${activeTab === "resume" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("resume")}
        >
          Resume
        </button>
        <button
          className={`${activeTab === "projects" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={`${activeTab === "contact" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </nav>

      {/* Główna zawartość */}
      {activeTab === "about" && (
          <div>
            <h1 className="content-title">About Me</h1>
            <div className="big-divider"></div>
            <p className="content-text mb-7">Nazywam się Krystian Figiela. Studiuję inżynierię i analizę danych, a moją pasją jest tworzenie praktycznych rozwiązań w Pythonie, które łączą analizę, logikę i odrobinę kreatywności.</p>
            <div className="content-subtitle">What I'm doing</div>
            <AboutCards />
            <div className="content-subtitle">Skills</div>
            <SkillsSection />
          </div>
        )}

        {activeTab === "resume" && (
          <div>
          <div className="resume-content">
            <h1 className="content-title">Resume</h1>
            <div className="big-divider"></div>
            <div className="flex flex-row">
              <img src="/icons/graduation.png" alt="education" />
              <h2>Education</h2>
            </div>
            <ol className="relative mb-8">
              <li className="timeline-item">
                <div>
                  <div className="circle"></div>
                  <h3>ZST Leżajsk</h3>
                </div>
                <p>Kierunek Technik Informatyk. Certyfikat INF.02 i INF.03.</p>
                <span>2020 - 2025</span>
              </li>
              <li className="timeline-item">
              <div>
                  <div className="circle"></div>
                  <h3>Rzeszów University of Technology</h3>
                </div>
                <p>Inżynieria i Analiza Danych.</p>
                <span>2025 - teraz</span>
              </li>
            </ol>

            <div className="flex flex-row">
              <img src="/icons/graduation.png" alt="education" />
              <h2>Work Experience</h2>
            </div>
            <ol className="relative">
              <li className="timeline-item">
              <div>
                  <div className="circle"></div>
                  <h3>MF-Comp</h3>
                </div>
                <p>Praktyki w serwisie komputerowym</p>
                <span>2024 - teraz</span>
              </li>
              <li className="timeline-item">
              <div>
                  <div className="circle"></div>
                  <h3>BorgWarner</h3>
                </div>
                <p>Praca na produkcji</p>
                <span>2024 - teraz</span>
              </li>
            </ol>
          </div>

          <a href="files/krystian_figiela_cv.pdf" className="download-cv" download>Download CV</a>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            <h1 className="content-title">Projects</h1>
            <div className="big-divider"></div>
            <ProjectsFilter />
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h1 className="content-title">Contact</h1>
            <div className="big-divider"></div>
            <p className="content-text">You can contact me at krystian.figiela000@gmail.com</p>
          </div>
        )}
    </div>

    <nav className="navbar-mobile">
        <button
          className={`${activeTab === "about" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`${activeTab === "resume" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("resume")}
        >
          Resume
        </button>
        <button
          className={`${activeTab === "projects" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={`${activeTab === "contact" ? "text-[#714CDF]" : "text-white"}`}
          onClick={() => setActiveTab("contact")}
        >
          Contact
        </button>
      </nav>
    </div>
  );
}
