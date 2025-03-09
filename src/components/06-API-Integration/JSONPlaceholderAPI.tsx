import { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const JSONPlaceholderAPI = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch posts
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        if (!postsResponse.ok) throw new Error('Failed to fetch posts');
        const postsData = await postsResponse.json();
        setPosts(postsData);
        
        // Fetch users
        const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!usersResponse.ok) throw new Error('Failed to fetch users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const getUserName = (userId: number): string => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Unknown User';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">JSONPlaceholder API</h3>
      
      {loading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading data...</p>
        </div>
      )}
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded">
          <p>{error}</p>
        </div>
      )}
      
      {!loading && !error && (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <h4 className="font-medium mb-2 text-gray-700">Posts</h4>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {posts.map(post => (
                <div 
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className={`p-2 rounded cursor-pointer ${
                    selectedPost?.id === post.id 
                      ? 'bg-blue-100 border-l-4 border-blue-500' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <p className="font-medium truncate">{post.title}</p>
                  <p className="text-xs text-gray-500">By: {getUserName(post.userId)}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h4 className="font-medium mb-2 text-gray-700">Post Details</h4>
            {selectedPost ? (
              <div className="bg-gray-50 p-3 rounded">
                <h5 className="font-medium">{selectedPost.title}</h5>
                <p className="text-xs text-gray-500 mb-2">Author: {getUserName(selectedPost.userId)}</p>
                <p className="text-sm">{selectedPost.body}</p>
              </div>
            ) : (
              <div className="bg-gray-50 p-3 rounded text-center text-gray-500">
                Select a post to view details
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500">
        <p>Data fetched from: <a href="https://jsonplaceholder.typicode.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a></p>
      </div>
    </div>
  );
};

export default JSONPlaceholderAPI; 