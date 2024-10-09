import { useCallback, useState } from "react";

import QUESTIONS from '../questions.js';
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from "./Question.jsx";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((state) => {
            return [...state, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (isQuizCompleted) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>Quiz Completed!</h2>
            </div>
        );
    }

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSkipAnswer={handleSkipAnswer}
                onSelectAnswer={handleSelectAnswer}
            />
        </div>
    );
}