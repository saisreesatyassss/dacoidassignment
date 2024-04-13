// pages/goals.tsx
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface GoalsState {
  weight: boolean;
  muscleGain: boolean;
  flexibility: boolean;
  fitness: boolean;
  event: boolean;
  mental: boolean;
}

const Goals = () => {

     const router = useRouter();

const handleButtonClick = () => {
  router.push('/workouttracker');
};
  const [goals, setGoals] = useState<GoalsState>({
    weight: false,
    muscleGain: false,
    flexibility: false,
    fitness: false,
    event: false,
    mental: false,
  });

  const handleGoalChange = (goal: keyof GoalsState) => {
    setGoals({ ...goals, [goal]: !goals[goal] });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold my-8 mx-4 pl-16">What are your goals?</h1>
<div className="p-2  gap-4">
        {Object.keys(goals).map((goal) => (
          <div key={goal} className="flex items-center gap-2 m-4 bg-gray-200 rounded-xl p-4 shadow-md">
            <span className="">{goal}</span>
            <input
              type="checkbox"
              checked={goals[goal as keyof GoalsState]}
              onChange={() => handleGoalChange(goal as keyof GoalsState)}
              className="form-checkbox rounded-md ml-auto"
            />
          </div>
        ))}
      </div>
       <button   onClick={handleButtonClick}
 type="submit" className="w-4/5 m-8 bg-gradient-to-r from-blue-300 to-blue-400 text-white px-6 py-3  rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700">
Confirm        </button>
    </div>
  );
};

export default Goals;
