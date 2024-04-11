import React from 'react';
import Image from 'next/image';
import OnboardingPage1 from './onboardingpage1/page'; // Assuming OnboardingPage1 is in the same directory
import CreateAccount from './createaccount/page';

export default function Home() {
  return (
    <main className=" ">
      <div className=" ">
        {/* Include the OnboardingPage1 component */}
        <OnboardingPage1 />
        <CreateAccount/>
      </div>
    </main>
  );
}
