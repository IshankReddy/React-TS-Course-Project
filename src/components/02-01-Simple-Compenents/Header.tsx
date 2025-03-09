interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 60; // Reduced offset for smaller header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-blue-600 text-lg font-bold mr-3 shadow-md">
              TS
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
              {subtitle && <p className="text-sm text-blue-100">{subtitle}</p>}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {[
              { num: 1, name: "Setup" },
              { num: 2, name: "Components" },
              { num: 3, name: "Events" },
              { num: 4, name: "Router" },
              { num: 5, name: "Hooks" },
              { num: 6, name: "API" }
            ].map(({ num, name }) => (
              <button 
                key={num}
                onClick={() => scrollToSection(`section-${num}`)}
                className="flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors"
              >
                <span className="mr-1">{num}.</span>
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;