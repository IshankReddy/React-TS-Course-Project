import { useState, useRef, useEffect } from 'react';

const UseRefDemo = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);
  const renderCountRef = useRef<number>(0);
  
  // Focus the input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  // Count renders
  useEffect(() => {
    renderCountRef.current += 1;
  });
  
  // Timer logic
  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);
  
  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };
  
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">useRef Hook</h3>
      
      <div className="mb-4">
        <label htmlFor="ref-input" className="block text-gray-600 mb-2">
          Auto-focused input:
        </label>
        <div className="flex space-x-2">
          <input
            id="ref-input"
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type here..."
          />
          <button 
            onClick={handleFocus}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Focus
          </button>
        </div>
      </div>
      
      <div className="mb-4 mt-6">
        <p className="text-gray-600 mb-2">Timer: <span className="font-bold">{time}s</span></p>
        <div className="flex space-x-2">
          <button 
            onClick={toggleTimer}
            className={`px-3 py-1 rounded ${isRunning ? 'bg-yellow-500' : 'bg-green-500'} text-white`}
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button 
            onClick={resetTimer}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
      
      <p className="text-gray-600 mt-4">
        Component has rendered <span className="font-bold">{renderCountRef.current}</span> times.
      </p>
    </div>
  );
};

export default UseRefDemo;