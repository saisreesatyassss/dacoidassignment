 "use client"

import React, { useState } from 'react';

const CreateAccount: React.FC = () => {
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
    <div>
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={handleFirstNameChange} required />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={handleLastNameChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={agreeTerms}
              onChange={handleAgreeTermsChange}
              required
            />
            By proceeding, I agree to all T ZC and Privacy Policy
          </label>
        </div>
        <button type="submit">Create an Account</button>
      </form>
      <p>Already have an account? <a href="#">Login</a></p>
    </div>
  );
};

export default CreateAccount;
