import { useState } from 'react';

const UseStateDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">useState Hook</h3>
      
      <div className="mb-4">
        <p className="text-gray-600 mb-2">Counter: <span className="font-bold">{count}</span></p>
        <div className="flex space-x-2">
          <button 
            onClick={() => setCount(count - 1)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
          <button 
            onClick={() => setCount(0)}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
          <button 
            onClick={() => setCount(count + 1)}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>
      
      <div className="mt-6">
        <label htmlFor="text-input" className="block text-gray-600 mb-2">
          Type something:
        </label>
        <input
          id="text-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text..."
        />
        {text && (
          <p className="mt-2 text-gray-600">
            You typed: <span className="font-medium">{text}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default UseStateDemo;