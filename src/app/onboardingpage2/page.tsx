"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const OnboardingPage2: React.FC = () => {

  const router = useRouter();

const handleButtonClick = () => {
  router.push('/createaccount');
};


  const [name, setName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Name:', name);
  };

  return (
    <div>
      <div className="absolute top-5 right-5">
        <a href="#" className="text-blue-300 underline">
          Skip
        </a>
      </div>

      <div className="flex justify-center items-center py-16">
        <div className="relative overflow-hidden">
          <Image
            src="/img1.png"
            alt="Your Image"
            width={282}
            height={282}
          />
        </div>
      </div>

      <div className="pl-8 text-left py-8">
        <h1 className="text-2xl font-bold mb-4">Get Burn</h1>
        <p className="text-lg text-gray-500">
          Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever
        </p>
      </div>

      <button
            onClick={handleButtonClick}

        type="submit"
        className="absolute bottom-5 right-10 bg-white rounded-full w-16 h-16 border-none shadow-md cursor-pointer"
      >
        <Image src="/button.png" alt="Your Image" width={282} height={282} />
      </button>
    </div>
  );
};

export default OnboardingPage2;
