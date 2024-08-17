"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';


const Typewriter: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [typingDirection, setTypingDirection] = useState<'typing' | 'erasing'>('typing');

  useEffect(() => {
    const interval = setInterval(() => {
      if (typingDirection === 'typing') {
        if (displayText.length < texts[index].length) {
          setDisplayText(texts[index].substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setTypingDirection('erasing'), 1000); 
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(texts[index].substring(0, displayText.length - 1));
        } else {
          setTypingDirection('typing');
          setIndex((index + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [displayText, index, texts, typingDirection]);

  return <>{displayText}</>;
};

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
  <div className="px-60 flex flex-col md:flex-row">
    <div className="md:w-1/2 p-8 md:pr-16 mb-8">
      <p className="text-lg mb-4">Hello</p>
      <h1 className="text-4xl mb-4">I&apos;m <span className='font-bold'>Prabhat Kumar</span></h1>
      <h2 className="text-3xl mb-4"><span className='font-bold'>a</span> <Typewriter texts={['Full Stack Developer.', 'Web Developer.', 'Software Engineer.']} /> </h2>
      <p className="text-lg mb-4">Passionate Web Developer skilled in MERN. Committed to innovation, collaboration, and making a meaningful impact. Ready for new challenges.</p>
      <div className="flex">
        <Button className="mr-4">Contact Me</Button>
        <Button variant={'outline'}>Portfolio</Button>
      </div>
    </div>
    <div className="md:w-1/2 flex items-end justify-end">
      <Image width={400} height={400} className='rounded-full' src="/profile.jpeg" alt="Your Picture" />
    </div>
  </div>
</div>


  );
};

export default Home;

