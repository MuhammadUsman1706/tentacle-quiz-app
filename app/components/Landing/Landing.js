import React from "react";
import HeroSection from "./LandingComponents/HeroSection";
import QuizList from "./LandingComponents/QuizList";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <main className={classes.home}>
      <HeroSection />
      <QuizList />
    </main>
  );
};

export default Landing;
