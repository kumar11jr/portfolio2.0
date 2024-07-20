import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import { Github, Globe, Globe2 } from 'lucide-react';

interface CardProps {
  title: string;
  duration: string;
  description: string;
  tags: string[];
  image: string;
  website?: string;
  source?: string;
}

const Card: React.FC<CardProps> = ({ title, duration, description, tags, image, website, source }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg">
      <Image src={image} alt={title} width="100" height='100' className="rounded-lg mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-500 mb-2">{duration}</p>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-500 rounded-full px-3 py-1 text-sm">{tag}</span>
        ))}
      </div>
      <div className="flex space-x-2">
        <Button variant={'outline'}>
            <Globe className='' />
            {website && <Link href={website}>Website</Link>}
        </Button>
        <Button>
        <Github className='h-4'/>
            {source && <Link href={source}>Source</Link>}
        </Button>
        </div>
    </div>
  );
};

export default Card;


