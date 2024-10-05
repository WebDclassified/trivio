import React, { useState } from "react";
import { data } from "../../assets/data";

const Quiz = () => {
  const [index, setIndex] = useState(0); // Start from the first question
  const [question, setQuestion] = useState(data[index]); // Fetch the question based on index
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Function to handle answer checking
  const checkAnswer = (e, ans) => {
    if (question.ans === ans) {
      e.target.classList.add("border-4", "border-green-500");
    } else {
      e.target.classList.add("border-4", "border-rose-500");
    }
    setSelectedAnswer(ans); // Save the selected answer
  };

  // Function to move to the next question
  const handleNext = () => {
    // Remove answer highlights for new question
    setSelectedAnswer(null);
    // Move to the next question if available
    if (index < data.length - 1) {
      setIndex(index + 1);
      setQuestion(data[index + 1]);
    }
  };

  return (
    <div className="flex flex-col max-w-md mx-auto my-24 shadow-md overflow-hidden md:max-w-2xl bg-slate-500 text-white rounded-lg px-14 py-8 font-poppins">
      <div className="text-center text-white p-0 text-4xl font-bold">Quiz</div>
      <div className="w-full bg-slate-900 h-1 my-4"></div>
      <div className="text-sm md:text-lg">
        {index + 1}. {question.question}
      </div>
      <div className="py-5 px-3 text-left text-lg">
        <ul>
          <li
            onClick={(e) => checkAnswer(e, 1)}
            className={`h-16 bg-slate-600 rounded-t-lg pl-4 mb-1 pt-4 cursor-pointer ${
              selectedAnswer === 1 ? (question.ans === 1 ? "border-green-500" : "border-rose-500") : ""
            }`}
          >
            {question.option1}
          </li>
          <li
            onClick={(e) => checkAnswer(e, 2)}
            className={`h-16 bg-slate-600 pl-4 mb-1 pt-4 cursor-pointer ${
              selectedAnswer === 2 ? (question.ans === 2 ? "border-green-500" : "border-rose-500") : ""
            }`}
          >
            {question.option2}
          </li>
          <li
            onClick={(e) => checkAnswer(e, 3)}
            className={`h-16 bg-slate-600 pl-4 mb-1 pt-4 cursor-pointer ${
              selectedAnswer === 3 ? (question.ans === 3 ? "border-green-500" : "border-rose-500") : ""
            }`}
          >
            {question.option3}
          </li>
          <li
            onClick={(e) => checkAnswer(e, 4)}
            className={`h-16 bg-slate-600 rounded-b-lg pl-4 mb-5 pt-4 cursor-pointer ${
              selectedAnswer === 4 ? (question.ans === 4 ? "border-green-500" : "border-rose-500") : ""
            }`}
          >
            {question.option4}
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={handleNext}
          className="bg-slate-800 rounded-2xl w-32 h-12 font-bold"
          disabled={selectedAnswer === null} // Disable the button until an answer is selected
        >
          {index === data.length-1 ? "Last" : "Next"}
        </button>
      </div>
      <div className="index flex flex-col items-center py-5 font-semibold">
        {index + 1} of {data.length} questions
      </div>
    </div>
  );
};

export default Quiz;
