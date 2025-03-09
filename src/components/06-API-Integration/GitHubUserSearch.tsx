 import { useState } from 'react';

interface GitHubUser {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

const GitHubUserSearch = () => {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchUser = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Please enter a GitHub username');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('User not found');
        }
        throw new Error(`Error: ${response.status}`);
      }
      
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">GitHub User Search</h3>
      
      <form onSubmit={searchUser} className="mb-4">
        <div className="flex">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 disabled:bg-blue-300"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded mb-4">
          <p>{error}</p>
        </div>
      )}
      
      {loading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-600">Searching for user...</p>
        </div>
      )}
      
      {user && !loading && (
        <div className="bg-gray-50 p-4 rounded">
          <div className="flex items-start">
            <img 
              src={user.avatar_url} 
              alt={`${user.login}'s avatar`} 
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h4 className="text-lg font-bold">{user.name || user.login}</h4>
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                @{user.login}
              </a>
              {user.bio && <p className="text-sm text-gray-600 mt-1">{user.bio}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-4 text-center">
            <div className="bg-blue-50 p-2 rounded">
              <p className="text-lg font-bold">{user.public_repos}</p>
              <p className="text-xs text-gray-500">Repositories</p>
            </div>
            <div className="bg-green-50 p-2 rounded">
              <p className="text-lg font-bold">{user.followers}</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
            <div className="bg-purple-50 p-2 rounded">
              <p className="text-lg font-bold">{user.following}</p>
              <p className="text-xs text-gray-500">Following</p>
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-4">
            Member since {formatDate(user.created_at)}
          </p>
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-500">
        <p>Data provided by <a href="https://docs.github.com/en/rest" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">GitHub REST API</a></p>
      </div>
    </div>
  );
};

export default GitHubUserSearch;