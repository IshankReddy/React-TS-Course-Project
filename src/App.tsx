import Header from './components/02-01-Simple-Compenents/Header';
import Body from './components/Body';
import Footer from './components/02-01-Simple-Compenents/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        title="React + TypeScript" 
        subtitle="Learn component development with type safety" 
      />
      <Body /> 
      <Footer />
    </div>
  );
}

export default App;