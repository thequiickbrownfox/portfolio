import React from "react";

// Import your podcast thumbnail images
import jeff from "../images/jeff.png";
import patricia from "../images/patricia.png";
import dave from "../images/dave.png";
import robin from "../images/robin.png";
import thomas from "../images/thomas.png";
import tawfiq from "../images/tawfiq.png";
// Import other thumbnails as needed

const podcasts = [
  {
    title: "Jeff Jockisch",
    description:
      "Jeff, PrivacyPlan's CEO and Data Privacy Researcher, explores diverse privacy facets via podcasts, expert conversations, and data analysis. His focus areas include tech, data brokers, regulations, AI, and podcast evaluations.",
    videoUrl:
      "https://www.youtube.com/watch?v=2oJTcTZUcHA&list=PL96YYnJMk5eaH26qgcWkBfQtcbdJc-Vl4&index=3",
    thumbnail: jeff,
  },
  {
    title: "Patricia Thaine",
    description:
      "Patricia is the CEO and co-founder of Private AI,  a company that she started with Pieter Luitjens, CTO of Private AI whose mission is to build the privacy layer for software.",
    videoUrl:
      "https://www.youtube.com/watch?v=Fy-u_1fF9Hk&list=PL96YYnJMk5eaH26qgcWkBfQtcbdJc-Vl4&index=7",
    thumbnail: patricia,
  },
  {
    title: "David Burnett",
    description:
      "Dave, Zero Biometrics' business development head, designs secure face authentication without storing sensitive biometrics, reducing data breach risks. Protecting biometric data, whether on your device or in the cloud, is crucial.",
    videoUrl:
      "https://www.youtube.com/watch?v=8jvrKlife9c&list=PL96YYnJMk5eaH26qgcWkBfQtcbdJc-Vl4&index=11",
    thumbnail: dave,
  },{
    title: "Robin Andruss",
    description:
      "Robin is the chief privacy officer at Skyflow. Robin is a strategic risk & business-focused Privacy & Data Protection Leader with over 15 years combined in the privacy, risk, audit, finance, strategy, and compliance space.",
    videoUrl:
      "https://www.youtube.com/watch?v=0Hu7p5EI_g8&list=PL96YYnJMk5eaH26qgcWkBfQtcbdJc-Vl4&index=16",
    thumbnail: robin,
  },{
    title: "Thomas La Piana",
    description:
      "Thomas is the senior software engineer at Ethyca. Thomas and I talked about the privacy landscape from an engineering perspective, inserting privacy into the CI/CD pipeline, the future of privacy tech in the coming years and much more!",
    videoUrl:
      "https://www.youtube.com/watch?v=-NV2ZyuFgcI&list=PL96YYnJMk5eaH26qgcWkBfQtcbdJc-Vl4&index=19",
    thumbnail: thomas,
  },
  {
    title: "Tawfiq Alashoor",
    description:
      "Dr. Tawfiq Alashoor, an Assistant Professor at Copenhagen Business School's Department of Digitalization, holds B.S., M.S., and Ph.D. degrees.",
    videoUrl:
      "https://youtu.be/FvcAqAq-LF0",
    thumbnail: tawfiq,
  },
  // Add more podcast episodes as needed
];


const Podcasts = () => {
  return (
    <section className="padding" id="podcasts">
      <h2 style={{ textAlign: "center" }}>Applied Privacy Podcast</h2>
      <div className="box">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns in the first row
            gap: "1rem",
            justifyContent: "space-between", // Space between columns
          }}
        >
          {podcasts.slice(0, 3).map((podcast, index) => (
            <div className="box" key={index}>
              <a href={podcast.videoUrl} target="_blank" rel="noopener noreferrer">
                <div className="inner-box">
                  <img
                    src={podcast.thumbnail}
                    alt={podcast.title}
                    style={{ maxWidth: "100%", height: "auto", maxHeight: "200px" }}
                  />
                  <h3>{podcast.title}</h3>
                  <p className="small">{podcast.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns in the second row
            gap: "1rem",
            justifyContent: "space-between", // Space between columns
          }}
        >
          {podcasts.slice(3, 6).map((podcast, index) => (
            <div className="box" key={index}>
              <a href={podcast.videoUrl} target="_blank" rel="noopener noreferrer">
                <div className="inner-box">
                  <img
                    src={podcast.thumbnail}
                    alt={podcast.title}
                    style={{ maxWidth: "100%", height: "auto", maxHeight: "200px" }}
                  />
                  <h3>{podcast.title}</h3>
                  <p className="small">{podcast.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Podcasts;