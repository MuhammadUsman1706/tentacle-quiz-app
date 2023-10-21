import React from "react";
import classes from "./HeroSections.module.css";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <img src="./hero.svg" alt="Hero Bell" />
      <div className={classes["hero-content"]}>
        <div className={classes["hero-content-text"]}>
          <button className={classes.subject}>
            History <img src="./hero-small.svg" alt="Hero Bell" />
          </button>
          <h1>Can You Pass This U.S. Government 101 Quiz?</h1>

          <Link href='/quiz/quizID-01'>
            <button className={classes.start}>Start Quiz!</button>
          </Link>
        </div>
        {/* <div className={classes["divBorder hero-image"]}> */}
        <div className={`${classes.divBorder} ${classes["hero-image"]}`}>
          <img src="./images/home/white-house.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
