import React, { useState, useEffect } from 'react';

const QuizComponent = () => {
  const [question, setQuestion] = useState("What type of collar is commonly found on polo shirts?");
  const [options, setOptions] = useState(["Flat collar", "Club collar", "Point Collar", "Cutaway collar"]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  // Load score from local storage on component mount
  useEffect(() => {
    const savedScore = localStorage.getItem('score');
    if (savedScore) {
      setScore(parseInt(savedScore, 10));
    }
  }, []);

  // Update local storage whenever score changes
  useEffect(() => {
    localStorage.setItem('score', score);
  }, [score]);

  const handleOptionSelect = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);
      if (option === "Flat collar") {
        setScore(prevScore => prevScore + 1);
      }
    }
  };

  return (
    <div className="max-w-md m-20 bg-white p-4 shadow-md rounded">
      <h1 className='text-3xl font-bold'>Puzzle 1</h1>
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <div className="flex flex-col space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionSelect(option)}
            disabled={selectedOption !== null}
            className={`py-2 px-4 border rounded ${selectedOption === option ? 'bg-blue-500 text-white' : 'bg-white text-black'} ${selectedOption !== null ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-4 text-lg font-semibold">Score: {score}</p>
    </div>
  );
};

export default QuizComponent;
