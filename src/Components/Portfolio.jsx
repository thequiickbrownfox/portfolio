import React from "react";
// import image from "../images/design-desk.jpeg";

// Import your thumbnail images
import a_b_testing from "../images/a_b testing.png";
import price_prediction from "../images/price_prediction.png";
import credit_card from "../images/credit_card_fraud_detection.png";
import flight_ticket from "../images/flight_ticket.png";
import fake_news from "../images/fake_news.png";
import pong from "../images/pong.png";
import conway from "../images/conway.png";
import netflix from "../images/netflix.png";
import gan from "../images/gan.png"

// const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "GAN Model on MNSIT dataset",
    description:
      "This project delves into GANs, utilizing PyTorch and the MNIST dataset to understand their principles and generate digit images.",
    url: "https://github.com/Spartan-119/PyTorch-project-to-build-a-GAN-model-on-MNIST-dataset",
    thumbnail: gan, // Use the imported thumbnail
  },
  {
    title: "A-B Testing Approach for Comparing Performance of ML Models",
    description:
      "This project aims to compare BERT and DistilBERT models to find the best fit for a Question and Answering system, using A/B testing to assess their effectiveness and efficiency.",
    url: "https://github.com/Spartan-119/A-B-Testing-Approach-for-Comparing-Performance-of-ML-Models",
    thumbnail: a_b_testing, // Use the imported thumbnail
  },
  {
    title: "Build Real Estate Price Prediction Model with NLP and FastAPI",
    description:
      "In this Real Estate Price Prediction Project, I have built a real estate price prediction machine learning model and deploy it on Heroku using FastAPI Framework.",
    url: "https://github.com/Spartan-119/Build-Real-Estate-Price-Prediction-Model-with-NLP-and-FastAPI/tree/master",
    thumbnail: price_prediction, // Use the imported thumbnail
  },
  {
    title: "Credit Card Fraud Detection Project",
    description:
      "[PRIVATE REPO] This project's main objective is to create robust models for detecting credit card fraud using deep learning techniques, addressing a critical concern for financial institutions and cardholders.",
    url: "https://fraud-detection.herokuapp.com/",
    thumbnail: credit_card, // Use the imported thumbnail
  },
  {
    title: "Flight Ticket Price Predictor",
    description:
      "The objective of this project is to build a machine learning model to predict the flight ticket price based on various features such as source, destination, number of stops, departure time, arrival time, etc.",
    url: "https://github.com/Spartan-119/Project-Pro/tree/main/Flight%20Ticket%20Price%20Predictor",
    thumbnail: flight_ticket, // Use the imported thumbnail
  },
  {
    title: "Fake News Classifier",
    description:
      "This project provides both a Naive Bayes and an LSTM-based Fake News Classifier. Transitioning to the LSTM model can lead to improved classification accuracy, especially when dealing with complex text data.",
    url: "https://github.com/Spartan-119/Fake-News-Classifier",
    thumbnail: fake_news, // Use the imported thumbnail
  },
  {
    title: "Single Player Pong Game",
    description:
      "This Pong is a single-player game where the player controls a paddle and tries to hit the ball past the wall. The game keeps track of scores and ends when the player reaches a specified score limit.",
    url: "https://github.com/Spartan-119/Pong-game",
    thumbnail: pong, // Use the imported thumbnail
  },
  {
    title: "Conway's Game of Life",
    description:
      "This is an implementation of Conway's game of life in Python. Conway's Game of Life is a classic cellular automaton that simulates the evolution of life-like patterns on a grid. Despite its simple rules, it can produce complex and fascinating patterns.",
    url: "https://github.com/Spartan-119/Conway-s-Game-of-life/tree/main",
    thumbnail: conway, // Use the imported thumbnail
  },
  {
    title: "Movie Recommendation Engine",
    description:
      "In this project, I have built a recommendation engine that recommend movies in the descending order of user's likeliness to watch based on user's already watched movie.",
    url: "https://github.com/Spartan-119/Movie_Recommendation_Engine",
    thumbnail: netflix, // Use the imported thumbnail
  },
];

const Portfolio = () => {
  // Divide the projects into 3 rows with 3 projects in each row
  const rows = [];
  for (let i = 0; i < projectList.length; i += 3) {
    rows.push(projectList.slice(i, i + 3));
  }

  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio Projects</h2>

      {rows.map((row, rowIndex) => (
        <div key={`row_${rowIndex}`} className="container" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {row.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <h3>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
