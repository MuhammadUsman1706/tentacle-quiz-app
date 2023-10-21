'use client'

import { useState } from 'react'
import classes from './Quiz.module.css'



export default function Quiz({ id }) {
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [optionBtnClick, setOptionBtnClick] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState('')
    console.log(correctAnswer, "=====correctAnswer-----")
    const [wrongAnswer, setWrongAnswer] = useState('')
    console.log(wrongAnswer, "=====wrongAnswer-----")


    const quizQuestion = [
        {
            title: "When was the Declaration of Independence adopted?",
            image: "https://img.quizdaily.com/quizdaily/questions/quizd-16b58a9f-56c7-4f07-8002-784e0ae6ceaa.jpeg",
            pointIcon: "../../../point-icon.svg",
            pointNum: 2,
            pointTitle: "pts",
            options:
                [
                    {
                        text: "March 4, 1789",
                        correct: true
                    },
                    {
                        text: "July 4, 1776",
                        correct: false
                    },
                    {
                        text: "July 4, 1789",
                        correct: false
                    },
                    {
                        text: "December 7, 1787",
                        correct: false
                    }
                ]
        },
        // {
        //     title: "Queen Elizabeth II presided over the opening ceremony for what landmark?",
        //     image: "https://img.quizdaily.com/quizdaily/questions/quizd-50ef52fc-7529-4584-88d1-317803bc6a50.jpeg",
        //     pointIcon: "../../../point-icon.svg",
        //     pointNum: 2,
        //     pointTitle: "pts",
        //     options:
        //         [
        //             {
        //                 text: "Kakadu National Park",
        //                 correct: true
        //             },
        //             {
        //                 text: "Sydney Harbour Bridge",
        //                 correct: false
        //             },
        //             {
        //                 text: "Sydney Opera House",
        //                 correct: false
        //             },
        //             {
        //                 text: "Kangaroo Island",
        //                 correct: false
        //             }
        //         ]
        // },
    ]

    const optionClick = (text, questionIndex, optionIndex) => {
        setCorrectAnswer('')
        setWrongAnswer('')
        setOptionBtnClick(true)
        console.log(text, "optionText---")
        console.log(questionIndex, "questionIndex number ---")
        console.log(optionIndex, "optionIndex number ---")

        // const clickedOption = quizQuestion[0].options[index];

        // if (clickedOption.correct === true) {
        //     console.log("Answer is correct");
        // } else {
        //     console.log("Answer is incorrect");
        // }

        const selectedQuestion = quizQuestion[questionIndex];
        console.log(selectedQuestion, "selectedQuestion")

        const selectedOption = selectedQuestion.options[optionIndex];
        console.log(selectedOption, "selectedOption")

        if (selectedOption.correct) {
            // console.log(text, ":Answer is correct");
            setCorrectAnswer(text)
        } else {
            const correctOption = selectedQuestion.options.find((option) => option.correct);
            // console.log(text,":Answer is incorrect");
            setWrongAnswer(text)
            // console.log(correctOption.text, ":Correct Answer");
            setCorrectAnswer(correctOption.text)

        }
    }

    return (
        <div className={classes["quiz-container"]}>
            <div className={classes["quiz-leftAsidContainer"]} style={{ height: "auto" }}>
                <div className={classes["quiz-leftAsid-FirstAd"]}>
                    <div className={classes["L-First-adContainer"]}>
                        <div className={classes["L-firstAd"]}>
                            first ad
                        </div>
                    </div>
                </div>
                <div className={classes["quiz-leftAsid-SecondAd"]} style={{ position: 'inherit', left: "57px", top: "-383px", }}>
                    <div className={classes["L-Second-adContainer"]}>
                        <div className={classes["L-secondAd"]}>
                            second ad
                        </div>

                    </div>
                </div>
            </div>
            <main className={classes.mainBox}>
                <div className={classes["quiz-box"]}>
                    <div className={classes["quiz-box-FullContainer"]}>
                        <div className={classes["quiz-boxHeader"]}>
                            <div className={classes["quiz-QuestionDiv"]}>
                                <div className={classes["quiz-QuestionCount"]}>
                                    <div className={classes.QDProgress__current}>
                                        <svg className={classes.QDProgress__svg} width="30" height="30">
                                            <circle className={classes.QDProgress__circleBg} cx="15" cy="15" r="14.25" stroke-width="1.5"></circle>
                                            <circle className={classes.QDProgress__circleFg} cx="15" cy="15" r="14.25" stroke-width="1.5" stroke-dasharray="89.5353906273091" stroke-dashoffset="72.48103050782166" transform="rotate(-90 15 15)"></circle>
                                        </svg>
                                    </div>
                                    <span className={classes.Progress__currentText}>5</span>
                                    <span className={classes.Progress__slash}>/</span>
                                    <span className={classes.Progress__currentTotal}>21</span>
                                </div>

                                <span className={classes.questionText}>Question</span>
                            </div>
                            <div className={classes.Progress_Score}>
                                <div className={classes["Progress-streak_Img"]}>
                                    <img src='../../../streak-icon.svg' alt="score icon" className={classes.streak_icon} />
                                </div>
                                <span className={classes["streak-score"]}>0</span>
                                <span className={classes["streak-Label"]}>Strek</span>
                                <div className={classes["Progress-point_Img"]}>
                                    <img src='../../../point-icon.svg' alt="score icon" className={classes.point_icon} />
                                </div>
                                <span className={classes["point-score"]}>0</span>
                                <span className={classes["point-Label"]}>Point</span>
                            </div>
                        </div>
                        {quizQuestion.map((quizMaterial, questionIndex) => (
                            <div className={classes["quiz-boxBody"]} key={questionIndex}>
                                <div className={classes["question-container"]}>
                                    {/* <span className={classes["quiz-QuestionText"]}>When was the Declaration of Independence adopted?</span> */}
                                    <span className={classes["quiz-QuestionText"]}>{quizMaterial.title}</span>
                                </div>
                                {optionBtnClick == false ?
                                    <div className={classes["quizBox-imageContainer"]}>
                                        <div className={classes.questionImgContainer}>
                                            <div className={classes.questionImgDiv}>
                                                {/* <img src='https://img.quizdaily.com/quizdaily/questions/quizd-16b58a9f-56c7-4f07-8002-784e0ae6ceaa.jpeg' className={classes.questionImg} /> */}
                                                <img src={quizMaterial.image} className={classes.questionImg} />
                                            </div>
                                        </div>
                                        <div className={classes["question-pointImg"]}>
                                            <div className={classes["pointTag-image"]}>
                                                {/* <img src="../../../point-icon.svg" alt="point-icon" className={classes.pointIcon} /> */}
                                                <img src={quizMaterial.pointIcon} alt="point-icon" className={classes.pointIcon} />
                                            </div>
                                            {/* <span className={classes.pointNumber}>2</span> */}
                                            <span className={classes.pointNumber}>{quizMaterial.pointNum}</span>
                                            {/* <span className={classes.pts}>pts</span> */}
                                            <span className={classes.pts}>{quizMaterial.pointTitle}</span>
                                        </div>
                                    </div>

                                    :
                                    ""
                                }
                                {optionBtnClick == false ?
                                    <div className={classes["options-box"]} >
                                        {quizMaterial.options.map((quizOptions, optionIndex) => (
                                            <div className={classes["quizBox-options"]} key={optionIndex}>
                                                <div className={classes["quiz-option"]} onClick={() => optionClick(quizOptions.text, questionIndex, optionIndex)}>
                                                    {/* <span>March 4, 1789</span> */}
                                                    <span>{quizOptions.text}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <div className={classes.solutionContainer}>
                                        <div className={classes.answerDiv}>
                                            <div className={classes["correct-div"]}>
                                                <div className={classes["correct-answer"]}>
                                                    <span>{correctAnswer}</span>
                                                </div>
                                                <div className={classes["Option__status--correct"]}></div>
                                            </div>
                                            {wrongAnswer == "" ? "" : <div className={classes["wrong-div"]}>
                                                <div className={classes["wrong-answer"]}>
                                                    <span>{wrongAnswer}</span>
                                                </div>
                                                <div className={classes["Option__status--incorrect"]}></div>
                                            </div>}
                                        </div>
                                        {wrongAnswer == "" ?
                                            <div className={classes["QuizContent__hand--correct"]}>
                                                <img src='../../../icon-correct-hand.svg' className={classes.handImg} />
                                            </div>
                                            :
                                            <div className={classes["QuizContent__hand--correct"]}>
                                                <img src='../../../icon-incorrect-hand.svg' className={classes.handImg} />
                                            </div>
                                        }
                                        <div className={classes["nextQuestion-Div"]}>
                                            <div className={classes.nextContent}>
                                                <button type='button'>Next Question</button>
                                                <div className={classes.gifDiv}>
                                                    <img src='../../../icon-arrows-animated.gif' className={classes["GIF-img"]} />
                                                </div>
                                            </div>
                                            <div className={classes["total-question"]}>
                                                <span>Question 5 out of 18</span>
                                            </div>
                                        </div>
                                        <div className={classes.detailsAnswer}>
                                            <div className={classes["answer-explanation"]}>
                                                Cities like Sydney and Melbourne are indeed major Australian cultural hubs,
                                                but it is Canberra that is home to the nation’s capital. Just as Washington, D.C.,
                                                has a separate distinction for the area comprising the capital, Canberra has its own territory
                                                called the Australian Capital Territory (ACT). The ACT is surrounded by New South Wales and is
                                                located southwest of Sydney.
                                            </div>
                                        </div>
                                    </div>
                                }


                            </div>
                        ))}




                    </div>
                </div>
            </main>

            <div className={classes["quiz-rightAsidContainer"]} style={{ height: "auto" }}>
                <div className={classes["quiz-rightAsid-FirstAd"]}>
                    <div className={classes["R-First-adContainer"]}>
                        <div className={classes["R-firstAd"]}>
                            first ad
                        </div>
                    </div>
                </div>
                <div className={classes["quiz-rightAsid-SecondAd"]} style={{ position: 'inherit', right: "70.5px", top: "-40px", }}>
                    <div className={classes["R-Second-adContainer"]}>
                        <div className={classes["R-secondAd"]}>
                            second ad
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
