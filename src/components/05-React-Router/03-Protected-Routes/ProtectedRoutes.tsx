import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProtectedRoutes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Protected Routes Demo</h2>
          <p className="text-sm text-gray-600 mt-1">
            Demonstrate authentication-based routing protection
          </p>
        </div>
        <button 
          onClick={() => setIsAuthenticated(!isAuthenticated)}
          className={`px-4 py-2 rounded-md flex items-center gap-2 ${
            isAuthenticated 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-green-500 hover:bg-green-600'
          } text-white transition-colors`}
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isAuthenticated ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" 
              />
            )}
          </svg>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center gap-3 text-sm">
          <span className={`w-3 h-3 rounded-full ${
            isAuthenticated ? 'bg-green-500' : 'bg-red-500'
          }`}></span>
          <span className="font-medium">Status:</span>
          <span className={isAuthenticated ? 'text-green-600' : 'text-red-600'}>
            {isAuthenticated ? 'Authenticated' : 'Not Authenticated'}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <Link 
          to={isAuthenticated ? "/protected-dashboard" : "/unauthorized"}
          className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg ${
            isAuthenticated 
              ? 'bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-200' 
              : 'bg-gray-500 hover:bg-gray-600 shadow-lg shadow-gray-200'
          } text-white transition-all transform hover:scale-[1.02]`}
        >
          <span className="flex items-center gap-2">
            {isAuthenticated ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Click to View Protected Dashboard →
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Click to Try Protected Area →
              </>
            )}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProtectedRoutes;