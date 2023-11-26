/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Podcasts from "./Components/Podcasts";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Abin Varghese",
  title: (
    <>
      Machine Learning Engineer <br />
      & <br />
      Privacy Proponent
    </>
  ),
  email: "abinvarghese90@gmail.com",
  gitHub: "Spartan-119",
  instagram: "_coffee.consumer_/",
  linkedIn: "iamabinvarghese/",
  medium: "abin_varghese",
  twitter: "_coffeedrinker_",
  youTube: "@AbinVarghese",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Podcasts />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
