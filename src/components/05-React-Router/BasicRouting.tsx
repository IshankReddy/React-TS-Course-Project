 import { useState } from 'react';

// Mock router implementation for demo purposes
const BasicRouting = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  
  // Mock pages
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="p-4 bg-blue-50 rounded">
            <h3 className="text-lg font-medium mb-2">Home Page</h3>
            <p>Welcome to our website! This is the home page.</p>
          </div>
        );
      case 'about':
        return (
          <div className="p-4 bg-green-50 rounded">
            <h3 className="text-lg font-medium mb-2">About Page</h3>
            <p>Learn more about our company and mission.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="p-4 bg-purple-50 rounded">
            <h3 className="text-lg font-medium mb-2">Contact Page</h3>
            <p>Get in touch with our team for more information.</p>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Basic Routing</h3>
      
      <div className="flex space-x-2 mb-4 border-b pb-3">
        <button 
          onClick={() => setCurrentPage('home')}
          className={`px-3 py-1 rounded ${currentPage === 'home' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Home
        </button>
        <button 
          onClick={() => setCurrentPage('about')}
          className={`px-3 py-1 rounded ${currentPage === 'about' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          About
        </button>
        <button 
          onClick={() => setCurrentPage('contact')}
          className={`px-3 py-1 rounded ${currentPage === 'contact' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Contact
        </button>
      </div>
      
      <div className="mb-3">
        <span className="text-sm text-gray-500">Current URL: /</span>
        <span className="font-medium">{currentPage}</span>
      </div>
      
      {renderPage()}
      
      <div className="mt-4 text-sm text-gray-500">
        <p>Note: This is a simplified demo of routing concepts.</p>
        <p>In a real app, you would use react-router-dom.</p>
      </div>
    </div>
  );
};

export default BasicRouting;