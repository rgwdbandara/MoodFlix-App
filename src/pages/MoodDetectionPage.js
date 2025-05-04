import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecommendation } from '../hooks/useRecommendation';
import { useSelector } from 'react-redux';
import WebcamMoodDetection from './WebcamMoodDetection';

const MoodDetectionPage = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [webcamActive, setWebcamActive] = useState(false);
  const { fetchRecommendations } = useRecommendation();
  const [mood, setMood] = useState(null);
  useSelector((state) => state.movieo);
  const navigate = useNavigate();

  const questions = [/* same as before */];

  const mapAnswersToFilters = (answers) => {
    const filters = {};

    const genreMap = {
      "😊 Happy": 35,
      "😢 Sad": 18,
      "😠 Angry": 28,
      "😰 Stressed": 10749,
      "😴 Bored": 878,
    };

    if (answers[0]) {
      const genreId = genreMap[answers[0]];
      if (genreId) filters.with_genres = genreId;
    }

    return filters;
  };

  const handleAnswer = async (answer) => {
    const newAnswers = { ...answers, [currentQuestion]: answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const filters = mapAnswersToFilters(newAnswers);
      const recommendations = await fetchRecommendations(filters);

      if (recommendations.length > 0) {
        const randomIndex = Math.floor(Math.random() * Math.min(5, recommendations.length));
        navigate(`/details/${recommendations[randomIndex].id}`);
      } else {
        navigate('/no-results');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-white bg-gray-950">
      <h1 className="mb-8 text-3xl font-bold md:text-5xl">Detect Your Mood</h1>

      {!showQuiz && !webcamActive ? (
        <div className="w-full max-w-md p-6 bg-gray-800 shadow-lg rounded-xl">
          <p className="mb-4 text-center">Use your webcam or answer a few questions to detect your mood.</p>

          <div className="flex flex-col gap-4">
            <button
              className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-950"
              onClick={() => setWebcamActive(true)}
            >
              Start Mood Detection (Webcam)
            </button>

            
          </div>
        </div>
      ) : webcamActive ? (
        <WebcamMoodDetection />
      ) : (
        <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
          <h1 className="mb-6 text-2xl font-bold text-center">Movie Recommendation Quiz</h1>
          {/* Quiz content same as before */}
        </div>
      )}
    </div>
  );
};

export default MoodDetectionPage;