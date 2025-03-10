import { Link } from 'react-router-dom';

const ProtectedDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-500 p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-center">Protected Dashboard</h1>
            <p className="text-blue-100 text-center mt-2">Welcome to your secure dashboard area</p>
          </div>
          
          <div className="p-8">
            <div className="grid gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h2 className="text-green-800 font-semibold mb-2">Authentication Success</h2>
                <p className="text-green-700">You've successfully accessed this protected route!</p>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Protected Data</h3>
                <p className="text-gray-600">This content is only visible to authenticated users.</p>
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

export default ProtectedDashboard;