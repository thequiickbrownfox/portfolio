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
                <h3>Data Scientist @ VIRAL</h3>
                <p>06/2024 - 07/2024</p>
                <ul>
                  <li>Developed a RAG-based ranking system using sentence_transformers embeddings and cosine similarity, evaluating job descriptions against 25 KPIs,
                  resulting in a 40% increase in high-quality candidate applications and demonstrating advanced NLP skills</li>
                  <li>Engineered an automated ETL pipeline using Python, and Airtable to extract job descriptions from multiple job boards, leveraging Axiom.ai,
                  BeautifulSoup and Selenium for web scraping, reducing data collection time by 90% and increasing processed listings by 3x.</li>
                  <li>Developed comprehensive data cleaning and transformation processes using Pandas and NLTK, including regex pattern matching, text normalisation,
                  and entity recognition, improving data quality by 95% and ensuring consistency across diverse job posting formats.</li>
                </ul>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Machine Learning Research Engineer (Computer Vision) @ FruitCast</h3>
                <p>03/2024 - 06/2024</p>
                <ul>
                  <li>Built a custom Visual Odometry solution for polytunnel environments by adapting the LightGlue feature extractor. Optimised the algorithm to process
laterally moving video footage, a significant departure from traditional forward-facing camera implementations. This tailored approach involved
fine-tuning feature detection parameters, implementing outlier rejection methods, and developing a novel tracking mechanism to handle the unique
challenges of lateral movement in confined spaces, resulting in substantially improved position accuracy for autonomous navigation in agricultural
settings.
</li>
                  <li>Built a Visual Odometry pipeline, conducting on-site testing at the Riseholme campus by setting up cameras in polytunnels and processing monocular
camera footage. Applied Gaussian blur to smooth extracted features in each frame, enabling accurate distance estimation for the camera's movement
within the polytunnel environment.</li>
                  <li>Spent approximately 10% of my time on data annotation, classifying strawberries into six distinct categories using V7, ensuring high-quality training
data for machine learning models.
</li>
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
