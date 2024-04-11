'use client'
 


import React, { useState } from 'react';
import Image from 'next/image';

const OnboardingPage1: React.FC = () => {
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
 <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <a href="#" style={{ color: 'blue', textDecoration: 'underline' }}>
          Skip
        </a>
      </div>
         <div>
          <Image src="/img2.png" alt="Your Image" width={282} height={282} />
        </div>

        <div className="text-center py-8">
          <h1 className="text-4xl font-bold mb-4">Track Your Goal</h1>
          <p className="text-lg">
            Dont worry if you have trouble determining your goals. We can help you
            determine your goals and track your goals.
          </p>
        </div>

        <button
          type="submit"
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            border: 'none',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
          }}
        >
          <Image src="/button.png" alt="Your Image" width={282} height={282} />
        </button>
     </div>
  );
};

export default OnboardingPage1;

