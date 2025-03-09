import { useReducer } from 'react';

interface State {
  count: number;
  error: string | null;
}

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'incrementBy'; payload: number };

const initialState: State = {
  count: 0,
  error: null
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1, error: null };
    case 'decrement':
      if (state.count <= 0) {
        return { ...state, error: 'Count cannot be negative' };
      }
      return { ...state, count: state.count - 1, error: null };
    case 'reset':
      return { ...state, count: 0, error: null };
    case 'incrementBy':
      return { ...state, count: state.count + action.payload, error: null };
    default:
      return state;
  }
};

const UseReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">useReducer Hook</h3>
      
      <div className="mb-4">
        <p className="text-gray-600 mb-2">Counter: <span className="font-bold">{state.count}</span></p>
        
        {state.error && (
          <p className="text-red-500 text-sm mb-2">{state.error}</p>
        )}
        
        <div className="flex space-x-2">
          <button 
            onClick={() => dispatch({ type: 'decrement' })}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            -
          </button>
          <button 
            onClick={() => dispatch({ type: 'reset' })}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
          <button 
            onClick={() => dispatch({ type: 'increment' })}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            +
          </button>
          <button 
            onClick={() => dispatch({ type: 'incrementBy', payload: 5 })}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            +5
          </button>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded text-sm">
        <p className="text-gray-700 font-medium">Current State:</p>
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UseReducerDemo;