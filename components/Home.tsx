import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[90vh]">
  <div className="px-60 flex flex-col md:flex-row">
    {/* Left side - Name and Description */}
    <div className="md:w-1/2 p-8 md:pr-16 mb-8"> {/* Added mb-8 for margin bottom */}
      <p className="text-lg mb-4">Hello</p>
      <h1 className="text-4xl mb-4">I&apos;m <span className='font-bold'>Prabhat Kumar</span></h1>
      <h2 className="text-3xl mb-4"><span className='font-bold'>a</span> Full Stack Developer.</h2>
      <p className="text-lg mb-4">Passionate Web Developer skilled in MERN. Committed to innovation, collaboration, and making a meaningful impact. Ready for new challenges.</p>
      <div className="flex">
        <Button className="mr-4">Contact Me</Button>
        <Button variant={'outline'}>Portfolio</Button>
      </div>
    </div>
    
    {/* Right side - Big Picture */}
    <div className="md:w-1/2 flex items-end justify-end"> {/* Added flex, items-end, and justify-end */}
      <Image width={400} height={400} className='rounded-full' src="/profile.jpeg" alt="Your Picture" />
    </div>
  </div>
</div>


  );
};

export default Home;

