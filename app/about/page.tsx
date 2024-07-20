import Card from '@/components/card';
import { projects } from '@/data/projects';
import React from 'react';

const page = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            duration={project.duration}
            description={project.description}
            tags={project.tags}
            image={project.image}
            website={project.website}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
