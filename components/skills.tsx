import React from 'react';
import { CardContent, CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card"
import Image from 'next/image';

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80vh] bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">My Skills</h1>
      <div className="flex justify-center items-center space-x-4">
      <Card className="w-full max-w-sm mx-auto">
      <CardContent className="flex aspect-square items-center justify-center p-6">
        <Image
          alt="Product image"
          className="aspect-square object-cover rounded-lg overflow-hidden"
          height="200"
          src="/profile.jpeg"
          width="200"
        />
      </CardContent>
      
      {/* <CardContent className="text-3xl font-semibold flex items-center justify-center">$49</CardContent> */}
    </Card>
      </div>
    </div>
  );
};

export default Skills;

