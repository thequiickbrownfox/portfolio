import React from "react";
import "./Experience.css"; // Import CSS for styling

function Experience() {
  return (
    <section className="padding" id="experience">
      <div className="container">
        <h2 className="experience-heading">Work Experience</h2> {/* Heading for the work experience */}
        <div className="timeline-container">
          <div className="vertical-line"></div> {/* Vertical line for the timeline */}
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Machine Learning Engineer (Computer Vision) @ FruitCast</h3>
                <p>03/2024 - 06/2024</p>
                <ul>
                  <li>Research, develop and implement SOTA Visual Odometry for the application in polytunnels.</li>
                  <li>Responsible for tasks including pattern recognition, and application of robotics within the company in liaison with the data engineer and computer vision expert using Visual Odometry.</li>
                  <li>Developed and implemented computer vision algorithms, managing large datasets, and working closely in cross-functional teams for data science, mechanical design, sensors, firmware, and software engineering.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Data Scientist @ Infosys</h3>
                <p>10/2020 – 12/2022</p>
                <ul>
                  <li>Engineered team leadership: Orchestrated development of an enterprise solution utilising the Attention model to autonomously extract and categorise skills from resumes, leading to substantial cost savings in HR operations at Bangalore and Mysore DC.</li>
                  <li>Contributed to ML projects: Enabled BEF's global impact, attracted external clients like GlobalFoundries, boosting profits in 2021-2022.</li>
                  <li>Created courses: Trained 5000+ employees in ML, NLP, and stats, indirectly increasing revenue.</li>
                  <li>Awarded best author: GPT-3 course in Q2 2022, live to 250,000+ internal employees and external vendors.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Leader for Data Science and Machine Learning @ Corizo</h3>
                <p>02/2022 - 05/2024</p>
                <ul>
                  <li>Achieved 55% revenue increase: Led 1000+ students in data science and machine learning, driving growth.</li>
                  <li>Headed highest-revenue department: Developed impactful lessons and projects.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Internship @ Infosys</h3>
                <p>01/2020 – 03/2020</p>
                <ul>
                  <li>Got Trained in IVS-DWT stream.</li>
                  <li>Worked on UNIX, PLSQL, Python Programming language, Machine Learning fundamentals, Big Data, BI Testing, and extensively worked on ETL using Informatica.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
