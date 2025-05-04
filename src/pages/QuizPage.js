// pages/QAPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    id: 1,
    text: "What kind of energy do you want in a movie today?",
    options: [
      "🔥 High action and excitement",
      "😌 Calm and relaxing",
      "🧠 Thought-provoking and deep",
      "😂 Light and funny",
      "❤️ Emotional and romantic",
    ],
  },
  {
    id: 2,
    text: "Do you want to watch something…",
    options: [
      "🎭 Dramatic",
      "🎬 Realistic or based on true events",
      "🚀 Fantastical or imaginative",
      "👻 Spooky or thrilling",
      "👪 Family-friendly",
    ],
  },
  {
    id: 3,
    text: "What kind of ending do you prefer right now?",
    options: [
      "🥰 Feel-good and happy",
      "😲 Shocking or unexpected",
      "😢 Bittersweet or emotional",
      "😎 Cool and satisfying",
      "🤔 Open-ended or mysterious",
    ],
  },
  {
    id: 4,
    text: "What comes closest to your occasion?",
    options: [
      "🎉 Hanging out with friends",
      "💑 Date night / Romantic mood",
      "🧘‍♂️ Chilling alone / Me-time",
      "👨‍👩‍👧‍👦 Family movie time",
      "😌 Winding down after a long day",
      "🍿 Looking for something new or different",
      "😔 Need a mood boost / Feeling low",
      "🎮 Background noise while doing something else",
    ],
  },
];

const QAPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const currentQuestion = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex) / questions.length) * 100;

  const handleOptionSelect = (option) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: option,
    };
    
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/recommendation', { state: { answers: newAnswers } });
    }
  };

  return (
    <div className="min-h-screen p-4 text-white bg-gray-950 md:p-8">
      <div className="max-w-lg mx-auto">
        <div className="mb-6 bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="p-6 overflow-hidden bg-gray-800 shadow-xl bg-opacity-80 backdrop-blur-sm rounded-xl md:p-8">
          <h2 className="mb-6 text-2xl font-bold">{currentQuestion.text}</h2>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="flex items-center w-full px-4 py-3 text-left transition-all duration-200 bg-gray-700 rounded-lg md:px-6 md:py-4 hover:bg-gray-600"
              >
                <span className="mr-3 text-xl">{option.split(' ')[0]}</span>
                <span>{option.split(' ').slice(1).join(' ')}</span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center justify-between mt-6 text-sm text-gray-300">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            {currentQuestionIndex > 0 && (
              <button 
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                className="text-blue-400 hover:text-blue-300"
              >
                ← Previous
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAPage;