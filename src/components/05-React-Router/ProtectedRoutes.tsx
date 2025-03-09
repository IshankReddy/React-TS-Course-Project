 import { useState } from 'react';

const ProtectedRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>('home');
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };
  
  // Mock pages
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="p-4 bg-blue-50 rounded">
            <h3 className="text-lg font-medium mb-2">Home Page</h3>
            <p>This page is accessible to everyone.</p>
          </div>
        );
      case 'profile':
        if (!isLoggedIn) {
          return (
            <div className="p-4 bg-red-50 rounded border border-red-200">
              <h3 className="text-lg font-medium mb-2 text-red-600">Access Denied</h3>
              <p>You need to log in to view this page.</p>
              <button 
                onClick={handleLogin}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Log In
              </button>
            </div>
          );
        }
        return (
          <div className="p-4 bg-green-50 rounded">
            <h3 className="text-lg font-medium mb-2">Profile Page</h3>
            <p>Welcome to your profile! This is a protected route.</p>
          </div>
        );
      case 'settings':
        if (!isLoggedIn) {
          return (
            <div className="p-4 bg-red-50 rounded border border-red-200">
              <h3 className="text-lg font-medium mb-2 text-red-600">Access Denied</h3>
              <p>You need to log in to view this page.</p>
              <button 
                onClick={handleLogin}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Log In
              </button>
            </div>
          );
        }
        return (
          <div className="p-4 bg-purple-50 rounded">
            <h3 className="text-lg font-medium mb-2">Settings Page</h3>
            <p>Manage your account settings here. This is a protected route.</p>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Protected Routes</h3>
      
      <div className="flex justify-between items-center mb-4 pb-3 border-b">
        <div className="flex space-x-2">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`px-3 py-1 rounded ${currentPage === 'home' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentPage('profile')}
            className={`px-3 py-1 rounded ${currentPage === 'profile' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Profile
          </button>
          <button 
            onClick={() => setCurrentPage('settings')}
            className={`px-3 py-1 rounded ${currentPage === 'settings' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Settings
          </button>
        </div>
        
        {isLoggedIn ? (
          <button 
            onClick={handleLogout}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
          >
            Log Out
          </button>
        ) : (
          <button 
            onClick={handleLogin}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
          >
            Log In
          </button>
        )}
      </div>
      
      <div className="mb-3 flex items-center">
        <span className="text-sm text-gray-500 mr-2">Status:</span>
        {isLoggedIn ? (
          <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">Logged In</span>
        ) : (
          <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Not Logged In</span>
        )}
      </div>
      
      {renderPage()}
    </div>
  );
};

export default ProtectedRoutes;