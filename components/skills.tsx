import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Website Development', percentage: 95 },
    { name: 'Data structure and algorithms', percentage: 80 },
    { name: 'Problem Solving', percentage: 85 },
    { name: 'ML Development', percentage: 80 },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">My Skills</h1>
      <div className="flex justify-center items-center space-x-4">
        {skills.map((skill, index) => (
          <div key={index} className="relative w-64 h-64">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="text-4xl font-bold text-black dark:text-white">{skill.percentage}%</div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
              <div className="text-lg text-black dark:text-gray-300">{skill.name}</div>
            </div>
            <svg className="absolute" viewBox="0 0 100 100" width="200" height="200">
              <circle cx="50" cy="50" r="90" fill="none" stroke="#e5e7eb" strokeWidth="8" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#34d399" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={`${(2 * Math.PI * 40 * skill.percentage) / 100}, 999`} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
