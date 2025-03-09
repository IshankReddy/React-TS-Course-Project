import { useState, useEffect } from 'react';
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type ResourceData = Post | User | Comment;

const UseEffectDemo = () => {
  const [resourceType, setResourceType] = useState<string>('posts');
  const [items, setItems] = useState<ResourceData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}?_limit=3`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
    
    return () => {
      // Cleanup function
      console.log('Cleanup for resource type:', resourceType);
    };
  }, [resourceType]);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">useEffect Hook</h3>
      
      <div className="flex space-x-2 mb-4">
        <button 
          onClick={() => setResourceType('posts')}
          className={`px-3 py-1 rounded ${resourceType === 'posts' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Posts
        </button>
        <button 
          onClick={() => setResourceType('users')}
          className={`px-3 py-1 rounded ${resourceType === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Users
        </button>
        <button 
          onClick={() => setResourceType('comments')}
          className={`px-3 py-1 rounded ${resourceType === 'comments' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Comments
        </button>
      </div>
      
      <p className="text-gray-600 mb-3">Resource: <span className="font-medium">{resourceType}</span></p>
      
      {isLoading ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        <div className="max-h-40 overflow-y-auto bg-gray-50 p-2 rounded text-sm">
          <pre>{JSON.stringify(items, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UseEffectDemo;