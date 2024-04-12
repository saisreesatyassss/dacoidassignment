import React from 'react';
import Image from 'next/image';
import OnboardingPage1 from './onboardingpage1/page'; // Assuming OnboardingPage1 is in the same directory
import CreateAccount from './createaccount/page';
import OnboardingPage2 from './onboardingpage2/page';
import SignIn from './signin/page';
import Navigation from './workouttracker/navbar';
import WorkoutTrackerPage from './workouttracker/page';

export default function Home() {
  return (
    <main className=" ">
      <div className=" ">
        {/* Include the OnboardingPage1 component */}
        <OnboardingPage1 />
        {/* <OnboardingPage2 /> */}
        {/* <CreateAccount/> */}
        {/* <SignIn/> */}
        {/* <WorkoutTrackerPage/> */}
       </div>
    </main>
  );
}
