 import { useState } from 'react';

const Toggler = () => {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Toggle Switch</h3>
      <div className="flex items-center justify-between">
        <span className="text-gray-600">Status: {isOn ? 'ON' : 'OFF'}</span>
        <button 
          onClick={() => setIsOn(!isOn)}
          className={`px-4 py-2 rounded-full ${isOn ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
        >
          {isOn ? 'Turn OFF' : 'Turn ON'}
        </button>
      </div>
    </div>
  );
};

export default Toggler;