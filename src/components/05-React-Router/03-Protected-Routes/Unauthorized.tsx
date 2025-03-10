import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-red-500 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-center">Access Denied</h1>
            <p className="text-red-100 text-center mt-2">Authentication Required</p>
          </div>
          
          <div className="p-8">
            <div className="grid gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h2 className="text-red-800 font-semibold mb-2">Authentication Error</h2>
                <p className="text-red-700">Please log in to access this protected route.</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2">How to Access</h3>
                <ol className="list-decimal list-inside text-gray-600 space-y-2">
                  <li>Return to the demo page</li>
                  <li>Click the login button</li>
                  <li>Try accessing the protected route again</li>
                </ol>
              </div>
            </div>

            <Link 
              to="/"
              className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;