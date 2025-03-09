import { useState, useCallback, memo } from 'react';

// Child component that uses the callback
const Button = memo(({ onClick, children }: { onClick: () => void, children: React.ReactNode }) => {
  console.log(`${children} button rendered`);
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

const UseCallbackDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>('');
  
  // This callback will be recreated on every render
  const incrementWithoutCallback = () => {
    setCount(c => c + 1);
  };
  
  // This callback will only be recreated when dependencies change
  const incrementWithCallback = useCallback(() => {
    setCount(c => c + 1);
  }, []);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">useCallback Hook</h3>
      
      <div className="mb-4">
        <p className="text-gray-600 mb-2">Count: <span className="font-bold">{count}</span></p>
        
        <div className="flex flex-col space-y-2">
          <Button onClick={incrementWithCallback}>
            Increment (with useCallback)
          </Button>
          
          <Button onClick={incrementWithoutCallback}>
            Increment (without useCallback)
          </Button>
        </div>
      </div>
      
      <div className="mt-6">
        <p className="text-gray-600 mb-2">
          Type to trigger re-render (doesn't affect callbacks):
        </p>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type to re-render..."
        />
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
        <p className="text-gray-700">
          Open the console to see which buttons re-render when you type in the input.
          The button using useCallback won't re-render unnecessarily.
        </p>
      </div>
    </div>
  );
};

export default UseCallbackDemo;