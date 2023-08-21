/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A-B Testing Approach for Comparing Performance of ML Models",
    description:
      "The objective of this project is to compare the performance of BERT and DistilBERT models for building an efficient Question and Answering system. Using A/B testing approach, we explore the effectiveness and efficiency of both models and determine which one is better suited for Q&A tasks.",
    url: "https://github.com/Spartan-119/A-B-Testing-Approach-for-Comparing-Performance-of-ML-Models",
  },
  {
    title: "Build Real Estate Price Prediction Model with NLP and FastAPI",
    description:
      "In this Real Estate Price Prediction Project, I have built a real estate price prediction machine learning model and deploy it on Heroku using FastAPI Framework.",
    url: "https://github.com/Spartan-119/Build-Real-Estate-Price-Prediction-Model-with-NLP-and-FastAPI/tree/master",
  },
  {
    title: "Credit Card Fraud Detection Project",
    description:
      "[PRIVATE REPO] The primary goal of this project is to develop effective models for the detection of fraudulent credit card transactions. Credit card fraud is a significant concern for both financial institutions and cardholders, and machine learning techniques, particularly deep learning, have proven to be valuable tools for addressing this issue.",
    url: "https://fraud-detection.herokuapp.com/",
  },
  {
    title: "Flight Ticket Price Predictor",
    description:
      "The objective of this project is to build a machine learning model to predict the flight ticket price based on various features such as source, destination, number of stops, departure time, arrival time, etc.",
    url: "https://github.com/Spartan-119/Project-Pro/blob/main/Flight%20Ticket%20Price%20Predictor/FTPP.ipynb",
  },
  {
    title: "Fake News Classifier",
    description:
      "This project provides both a Naive Bayes and an LSTM-based Fake News Classifier. Transitioning to the LSTM model can lead to improved classification accuracy, especially when dealing with complex text data.",
    url: "https://github.com/Spartan-119/Fake-News-Classifier",
  },
  {
    title: "One Player Pong Game",
    description:
      "This Pong is a one-player game where the player controls a paddle and tries to hit the ball past the wall. The game keeps track of scores and ends when the player reaches a specified score limit.",
    url: "https://github.com/Spartan-119/Pong-game",
  },
  {
    title: "Conway's Game of Life",
    description:
      "This is an implementation of Conway's game of life in Python. Conway's Game of Life is a classic cellular automaton that simulates the evolution of life-like patterns on a grid. Despite its simple rules, it can produce complex and fascinating patterns.",
    url: "https://github.com/Spartan-119/Conway-s-Game-of-life/tree/main",
  },
  {
    title: "Movie Recommendation Engine",
    description:
      "In this project, I have built a recommendation engine that recommend movies in the descending order of user's likeliness to watch based on user's already watched movie.",
    url: "https://github.com/Spartan-119/Movie_Recommendation_Engine",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
