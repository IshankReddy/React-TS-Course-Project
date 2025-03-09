import { type FC } from 'react';

interface SectionHeaderProps {
  number: number;
}

const SectionHeader: FC<SectionHeaderProps> = ({ number }) => {
  // Predefined content for all possible sections
  const sections = [
    {
      number: 1,
      title: "Setting Up React with TypeScript",
      description: "Learn how to create and configure React projects with TypeScript",
      colorClass: "bg-yellow-400"
    },
    {
      number: 2,
      title: "Typing Props & State in Components",
      description: "Master TypeScript typing for component props and state management",
      colorClass: "bg-pink-400"
    },
    {
      number: 3,
      title: "Event Handling & Forms",
      description: "Properly type event handlers and form interactions in TypeScript",
      colorClass: "bg-blue-400"
    },
    {
      number: 4,
      title: "Working with Effects & Refs",
      description: "Type useEffect, useRef and other hooks correctly",
      colorClass: "bg-green-400"
    },
    {
      number: 5,
      title: "React Router with TypeScript",
      description: "Implement type-safe routing in your React applications",
      colorClass: "bg-orange-400"
    },
    {
      number: 6,
      title: "Fetching Data & API Integration",
      description: "Create type-safe API calls and handle responses properly",
      colorClass: "bg-purple-400"
    }
  ];

  // Find the section based on the provided number
  const section = sections.find(s => s.number === number);

  // If section doesn't exist, show error or fallback
  if (!section) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg shadow-sm mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Section not found</h2>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-${section.colorClass.substring(3)} to-${section.colorClass.substring(3)}/70 p-6 rounded-lg shadow-md mb-8 text-black`}>
      <div className="flex items-center mb-3">
        <div className={`${section.colorClass} rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold mr-4 shadow-md`}>
          {section.number}
        </div>
        <h2 className="text-3xl font-bold">{section.title}</h2>
      </div>
      
      <p className="ml-16 text-lg">
        {section.description}
      </p>
    </div>
  );
};

export default SectionHeader;