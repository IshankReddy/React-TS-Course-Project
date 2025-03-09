 import { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#3B82F6');
  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6'];
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Color Picker</h3>
      <div 
        className="w-full h-20 rounded-lg mb-4"
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex space-x-2">
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className="w-8 h-8 rounded-full border-2 border-white"
            style={{ backgroundColor: c }}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;