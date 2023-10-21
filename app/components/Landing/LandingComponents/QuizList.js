import React, { Fragment } from "react";

import classes from "./QuizList.module.css";
import Link from "next/link";

const MAIN_QUIZ_LIST = [
  {
    information: {
      name: "Entertainment",
      image:
        "https://public.quizdaily.com/public/img/animations/illustration-category-desktop-entertainment.svg",
    },
    quizList: [
      {
        image:
          "https://img.quizdaily.com/quizdaily/quizzes/quizd-d3e312e6-5ec6-462b-8d64-dc9d1e42556a.jpeg",
        title: "Gentlemen Prefer This Quiz on Marilyn Monroe",
      },
      {
        image:
          "https://img.quizdaily.com/quizdaily/quizzes/quizd-d3e312e6-5ec6-462b-8d64-dc9d1e42556a.jpeg",
        title: "Gentlemen Prefer This Quiz on Marilyn Monroe",
      },
      {
        image:
          "https://img.quizdaily.com/quizdaily/quizzes/quizd-d3e312e6-5ec6-462b-8d64-dc9d1e42556a.jpeg",
        title: "Gentlemen Prefer This Quiz on Marilyn Monroe",
      },
      {
        image:
          "https://img.quizdaily.com/quizdaily/quizzes/quizd-d3e312e6-5ec6-462b-8d64-dc9d1e42556a.jpeg",
        title: "Gentlemen Prefer This Quiz on Marilyn Monroe",
      },
    ],
  },
  {
    information: {
      name: "Arts & Literature",
      image:
        "https://public.quizdaily.com/public/img/animations/illustration-category-desktop-arts-and-literature.svg",
    },
    quizList: [
      {
        image:
          "https://img.quizdaily.com/quizdaily/quizzes/quizd-d3e312e6-5ec6-462b-8d64-dc9d1e42556a.jpeg",
        title: "Gentlemen Prefer This Quiz on Marilyn Monroe",
      },
      {
        image:
          "https://img.quizdaily.com/quizdaily/quizzes/quizd-d3e312e6-5ec6-462b-8d64-dc9d1e42556a.jpeg",
        title: "Gentlemen Prefer This Quiz on Marilyn Monroe",
      },
      {
        image:
          "https://img.quizdaily.com/quizdaily/quizzes/quizd-d3e312e6-5ec6-462b-8d64-dc9d1e42556a.jpeg",
        title: "Gentlemen Prefer This Quiz on Marilyn Monroe",
      },
    ],
  },
];

const QuizList = ({ adWidth = 0 }) => {
  return (
    <article className={classes["ad-container"]}>
      <div style={{ width: `${adWidth}px` }} className={classes.ad}></div>
      <section className={classes["quiz-list"]}>
        {MAIN_QUIZ_LIST.map((quizContainer) => (
          // <div className={classes["quiz-container"]}>
          <Fragment>
            {/* <div className={classes.ad} /> */}
            <div className={classes.information}>
              <h1>{quizContainer.information.name}</h1>
              <img
                src={quizContainer.information.image}
                alt={quizContainer.information.name}
              />
            </div>

            {quizContainer.quizList.map((quiz) => (
              <div className={classes["quiz-card"]}>
                <div>
                  <div className={classes["image-container"]}>
                    <img src={quiz.image} alt={quiz.title} />
                  </div>
                  <h2>{quiz.title}</h2>
                </div>
                <Link href='/quiz/quizID-02'>
                  <button>Start Quiz!</button>
                </Link>
              </div>
            ))}
            {/* <div className={classes.ad} /> */}
          </Fragment>

          // {/* </div> */}
        ))}
      </section>
      <div style={{ width: `${adWidth}px` }} className={classes.ad}></div>
    </article>
  );
};

export default QuizList;
