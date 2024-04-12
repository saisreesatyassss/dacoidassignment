"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CreateAccount: React.FC = () => {

    const router = useRouter();

const handleButtonClick = () => {
  router.push('/signin');
};
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

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
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="w-full h-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      <div className="text-start mb-8">
        <h2 className="text-2xl font-bold text-gray-700">Create an Account</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
           <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            className="mt-1 p-3 w-full border bg-gray-100 rounded-xl placeholder-text-4xl"
            placeholder='First Name'
            required
          />
        </div>
        <div className="mb-4">
           <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            className="mt-1 p-3 w-full border bg-gray-100 rounded-xl"
            placeholder='Last Name'
            required
          />
        </div>
        <div className="mb-4">
           <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="mt-1 p-3 w-full border bg-gray-100 rounded-xl"
            placeholder='Email'
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="mt-1 p-3 w-full border bg-gray-100 rounded-xl"
            placeholder='Password'
            required
          />
        </div>
        <div className="  mb-8">
          <label htmlFor="agreeTerms" className="flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
              className="mr-1"
              required
            />
            <span className="text-sm text-gray-700">By proceeding, I agree to all T&C and Privacy Policy</span>
          </label>
        </div>


      <button
  type="submit"
  className="w-full bg-gradient-to-r from-blue-300 to-blue-400 text-white px-6 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700"
  onClick={handleButtonClick}
>
  Create an Account
</button>
<div className="flex items-center">
  <div className="border-t border-gray-300 my-4 flex-grow"></div>
  <h1 className="mx-4">or</h1>
  <div className="border-t border-gray-300 my-4 flex-grow"></div>
</div>


      </form>

        <div className="flex justify-center items-center p-4">
  <Image
    src="/login.png"
    alt="Your Image"
    width={106}
    height={44}
  />
</div>
   <div className="flex justify-center items-center  ">
      <p className=" text-sm text-gray-700">Already have an account? <a href="#" className="text-blue-500 underline" >Login</a></p>

</div>

    </div>
  );
};

export default CreateAccount;
