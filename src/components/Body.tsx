import FeatureCard from './02-01-Simple-Compenents/FeatureCard';
import { featureCards } from './02-01-Simple-Compenents/cardData';
import Counter from './02-02-Dynamic-Components/Counter';
import Toggler from './02-02-Dynamic-Components/Toggler';
import ColorPicker from './02-02-Dynamic-Components/ColorPicker';
import ButtonClickEvent from './03-Events/ButtonClickEvent';
import KeyboardEvent from './03-Events/KeyboardEvent';
import SimpleForm from './03-Events/SimpleForm';
import UseStateDemo from './04-React-Hooks/UseStateDemo';
import UseEffectDemo from './04-React-Hooks/UseEffectDemo';
import UseReducerDemo from './04-React-Hooks/UseReducerDemo';
import UseRefDemo from './04-React-Hooks/UseRefDemo';
import UseCallbackDemo from './04-React-Hooks/UseCallbackDemo';// Add these imports at the top with the other imports
import BasicRouting from './05-React-Router/BasicRouting';
import RouteParameters from './05-React-Router/RouteParameters';
import ProtectedRoutes from './05-React-Router/ProtectedRoutes';
import WeatherAPI from './06-API-Integration/WeatherAPI';
import JSONPlaceholderAPI from './06-API-Integration/JSONPlaceholderAPI';
import GitHubUserSearch from './06-API-Integration/GitHubUserSearch';
import SectionHeader from './Header/SectionHeader';
import EnvironmentSetup from './02-01-Simple-Compenents/EnvironmentSetup';

const Body = () => {
  return (
    <main className="container mx-auto px-4 py-12 flex-grow">
      <div id="section-1">
        <SectionHeader number={1} />
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">React JS Env Setup</h2>
          <div className="w-32 h-1 bg-purple-500 rounded"></div>
          <p className="mt-4 text-gray-600">
            Seting up React Js with TypeScript for type saftey and tailwind for beautiful styling using vite.
          </p>
        </div>
      
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <EnvironmentSetup />
        </section>
      </div>

      <div id="section-2">
        <SectionHeader number={2} />

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Simple Static Components</h2>
          <div className="w-32 h-1 bg-blue-500 rounded"></div>
          <p className="mt-4 text-gray-600">
            These components demonstrate how to create stateless React components with TypeScript props.
          </p>
        </div>
        
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featureCards.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </section>
      
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Simple Dynamic Components</h2>
          <div className="w-32 h-1 bg-purple-500 rounded"></div>
          <p className="mt-4 text-gray-600">
            These components demonstrate how to use state in React components with TypeScript.
          </p>
        </div>
      
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Counter />
          <Toggler />
          <ColorPicker />
        </section>

      </div>

      <div id="section-3">
      
      <SectionHeader number={3} />
      
      <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Event Handling & Forms</h2>
          <div className="w-32 h-1 bg-blue-400 rounded"></div>
          <p className="mt-4 text-gray-600">
            These components demonstrate how to handle events and forms with TypeScript in React.
          </p>
        </div>
      
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ButtonClickEvent />
          <KeyboardEvent />
          <SimpleForm />
        </section>

      </div>

      <div id="section-4">
      
        <SectionHeader number={4} />
      
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">React Hooks</h2>
          <div className="w-32 h-1 bg-orange-400 rounded"></div>
          <p className="mt-4 text-gray-600">
            These components demonstrate how to use various React hooks with TypeScript.
          </p>
        </div>
      
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <UseStateDemo />
          <UseEffectDemo />
          <UseReducerDemo />
        </section>
      
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <UseRefDemo />
          <UseCallbackDemo />
        </section>

      </div>

      <div id="section-5">

        <SectionHeader number={5} />
      
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">React Router</h2>
          <div className="w-32 h-1 bg-green-400 rounded"></div>
            <p className="mt-4 text-gray-600">
              These components demonstrate how to implement routing in React applications with TypeScript.
            </p>
          </div>
      
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <BasicRouting />
          <RouteParameters />
          <ProtectedRoutes />
        </section>

      </div>

      <div id="section-6">

        <SectionHeader number={6} />
      
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Fetching Data & API Integration</h2>
          <div className="w-32 h-1 bg-purple-400 rounded"></div>
          <p className="mt-4 text-gray-600">
            These components demonstrate how to fetch and display data from external APIs using TypeScript.
          </p>
        </div>
      
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <WeatherAPI />
          <JSONPlaceholderAPI />
          <GitHubUserSearch />
        </section>

      </div>
    </main>
  );
};

export default Body;