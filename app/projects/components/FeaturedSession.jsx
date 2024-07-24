import React from 'react';
import FeaturedProj from './FeaturedProj';
import { FeaturedList } from '@/utils';

const FeaturedSession = () => {
  return (
    <div className="flex justify-center items-center w-full h-2/5">
      <div className="w-5/6 lg:w-4/6">
        {FeaturedList.map((project, index) => (
          <FeaturedProj
            key={index}
            name={project.name}
            description={project.description}
            tag={project.tag}
            image={project.image}
            tech={project.tech}
            demo={project.demo}
            code={project.code}
            spec={project.spec}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedSession;
