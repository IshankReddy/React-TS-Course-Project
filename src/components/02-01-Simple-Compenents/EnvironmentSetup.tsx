const EnvironmentSetup = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 w-128">
      <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
        <code>
{`# Create a new React + TypeScript project with Vite
npm create vite@latest my-react-ts-app --template react-ts

# Install dependencies
cd my-react-ts-app
npm install

# Add Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Start development server
npm run dev`}
        </code>
      </pre>
    </div>
  );
};

export default EnvironmentSetup;