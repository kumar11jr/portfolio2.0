import React from 'react';
import { CardContent, CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import Image from 'next/image';


const skills = {
  frontend: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'JavaScript',
    'HTML5',
    'CSS3',
  ],
  backend: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST APIs',
    'GraphQL',
    'Firebase',
  ],
};


const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Front-End</h2>
            <ul className="list-disc list-inside space-y-2">
              {skills.frontend.map((skill) => (
                <li key={skill} className="text-gray-600">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Back-End</h2>
            <ul className="list-disc list-inside space-y-2">
              {skills.backend.map((skill) => (
                <li key={skill} className="text-gray-600">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
    </div>
    </div>
  );
};

export default Skills;

