import Quiz from '@/app/components/Quizes/Quiz'
import React from 'react'


const QuizPage = ({ params: { id } }) => {    
    return (
        <div>
            <Quiz id={id}/>
        </div>
    )
}

export default QuizPage