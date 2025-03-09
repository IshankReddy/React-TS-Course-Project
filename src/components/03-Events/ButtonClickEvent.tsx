import { useState } from 'react';

const ButtonClickEvent = () => {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState<string>('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setClickCount(prev => prev + 1);
    setLastClickTime(new Date().toLocaleTimeString());
    
    // Access event properties
    console.log('Button clicked at position:', event.clientX, event.clientY);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Button Click Event</h3>
      
      <div className="mb-4">
        <p className="text-gray-600">Click count: <span className="font-medium">{clickCount}</span></p>
        {lastClickTime && (
          <p className="text-gray-600">Last clicked at: <span className="font-medium">{lastClickTime}</span></p>
        )}
      </div>
      
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Click Me
      </button>
    </div>
  );
};

export default ButtonClickEvent;