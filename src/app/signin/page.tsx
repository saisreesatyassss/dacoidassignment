"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SignIn: React.FC = () => {
  
    const router = useRouter();

const handleButtonClick = () => {
  router.push('/workouttracker');
};
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAgreeTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreeTerms(event.target.checked);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!agreeTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    // Here you can proceed with account creation, e.g., make an API call
    console.log('Account created with the following details:');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="w-full h-screen max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="text-start mb-8">
        <h2 className="text-2xl font-bold text-gray-700">Welcome Back</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 p-3 w-full border bg-gray-100 rounded-xl"
            placeholder="Email"
            required
          />
        </div>
       <div className="mb-4 relative">
  <input
    type="password"
    id="password"
    value={password}
    onChange={handlePasswordChange}
    className="mt-1 p-3  w-full border bg-gray-100 rounded-xl"
    placeholder="Password"
    required
  />
  <svg
    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 17c-2.659 0-4.891-1.638-5.825-3.958C6.231 12.263 6.881 11 8 11h8c1.119 0 1.769 1.263 1.825 2.042C16.891 15.362 14.659 17 12 17z" />
  </svg>
</div>

        <div className="    mb-44">
         <p className="mt-4 text-sm text-gray-500 underline">Forgot your password?</p>

        </div>
        <button   onClick={handleButtonClick}
 type="submit" className="w-full bg-gradient-to-r from-blue-300 to-blue-400 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700">
          Sign In
        </button>
      </form>
      <div className="flex items-center">
        <div className="border-t border-gray-300 my-4 flex-grow"></div>
        <h1 className="mx-4">or</h1>
        <div className="border-t border-gray-300 my-4 flex-grow"></div>
      </div>
      <div className="flex justify-center items-center p-4">
        <Image
          src="/login.png"
          alt="Your Image"
          width={106}
          height={44}
        />
      </div>
      <div className="flex justify-center items-center  -4">
        <p className=" text-sm text-gray-700">Don’t have an account yet? <a href="#" className="text-blue-500 underline" >Create an account </a></p>
      </div>
    </div>
  );
};

export default SignIn;
