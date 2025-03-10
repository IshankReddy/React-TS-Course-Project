import { useState } from 'react';
import { type KeyboardEvent } from "react";

const KeyboardEvent = () => {
  const [keyPressed, setKeyPressed] = useState<string>('');
  const [keyCode, setKeyCode] = useState<string>('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    setKeyPressed(event.key);
    setKeyCode(event.code);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Keyboard Event</h3>
      
      <div className="mb-4">
        <label htmlFor="keyInput" className="block text-gray-600 mb-2">
          Type something:
        </label>
        <input
          id="keyInput"
          type="text"
          onKeyDown={handleKeyDown}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Press any key"
        />
      </div>
      
      {keyPressed && (
        <div className="mt-4 p-3 bg-gray-100 rounded">
          <p className="text-gray-700">Key pressed: <span className="font-medium">{keyPressed}</span></p>
          <p className="text-gray-700">Key code: <span className="font-medium">{keyCode}</span></p>
        </div>
      )}
    </div>
  );
};

export default KeyboardEvent;