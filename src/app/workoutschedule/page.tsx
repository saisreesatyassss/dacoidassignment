
"use client"
// // import { useState } from 'react';

// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// // import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
// // import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


// // const WorkoutSchedulePage = () => {

// //      const [toggle, setToggle] = useState(false);

// //   const handleToggle = () => {
// //     setToggle(!toggle);
// //   };
// //   return (
// //     <div>
// //         <div className="container mx-auto p-4">
// //       <div className="flex justify-between items-center mb-4">
// //         <div>
// //           <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
// //                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
               
// //            </Link>
// //         </div>
// //         <h1 className="text-xl font-bold">Workout Tracker</h1>
// //         <div></div> {/* This div is just a placeholder, you can add content on the right if needed */}
// //       </div>
// //       {/* Your content goes here */}
// //     </div>
// //          <Image
// //           src="/w1.png"
// //           alt="Icon"
// //           width={382}
// //           height={121}
// //         />
// //       {/* Import and display the caution icon */}
// //     <div className="flex rounded-2xl bg-gradient-to-r from-blue-300 to-white p-4 container">
// //         <FontAwesomeIcon icon={faExclamationTriangle} className="text-blue-500   text-3xl mt-1 mr-2" />
// //         <p className="text-sm text-gray-800">Youve burned fewer calories than yesterday. Time to get moving!</p>
// //       </div>

// //          <div className="container mx-auto p-4">
// //       <div className="flex justify-between items-center mb-4">
// //         <h1 className="text-xl font-bold">Workout Tracker</h1>
// //         <div>
// //           <Link href="/see-more" className="text-gray-600 hover:text-gray-900">
// //             See more
// //           </Link>
// //         </div>
// //       </div>
// //      </div>

// //  <div className="container   rounded-2xl shadow-2xl mx-auto p-6">
// //       <div className="flex items-center mb-4">
// //           <Image
// //           src="/w3.png"
// //           alt="Icon"
// //           width={50}
// //           height={50}
// //           className=' mr-4 rounded-full'
// //         />
// //          <div>
// //           <h2 className="text-lg font-bold">Full Body Workout</h2>
// //           <p className="text-sm text-gray-600">Today 3pm</p>
// //         </div>
// //         <button onClick={handleToggle} className="ml-auto px-4 py-2 bg-blue-500 text-white rounded">Toggle</button>
// //       </div>
// //       {/* Your content goes here */}
// //     </div>    </div>
// //   );
// // };

// // export default WorkoutSchedulePage;
// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faExclamationTriangle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
// import ReactSwitch from 'react-switch';
// import CustomizedSwitches from './comp';
// import ToggleSwitch from './comp';

// const WorkoutSchedulePage = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <div>
//           <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
//             <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
//           </Link>
//         </div>
//         <h1 className="text-2xl font-bold">Workout Tracker</h1>
//         <div></div> 
//       </div>
//           <Image src="/w1.png" alt="Workout Icon" width={343} height={121} className=" p-3" />

//       {/* Caution Message */}
//       <div className="flex   rounded-2xl bg-gradient-to-r from-blue-100 to-white px-4 py-2 mb-8">
//         <FontAwesomeIcon icon={faExclamationTriangle} className="text-blue-500 text-3xl mt-1 mr-4" />
//         <p className="text-sm text-gray-800">Youve burned fewer calories than yesterday. Time to get moving!</p>
//       </div>

//       {/* See More Link */}
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-xl ">Upcoming Workout</h2>
//         <div>
//           <Link href="/see-more" className="text-gray-600 hover:text-gray-900">
//             See more
//           </Link>
//         </div>
//       </div>

//       {/* Workout Card */}
//       <div className="rounded-2xl shadow-lg px-4 py-1 mb-8">
//         <div className="flex items-center mb-4">
//           <Image src="/w3.png" alt="Workout Icon" width={60} height={50} className="mr-4 rounded-full" />
//           <div>
//             <h2 className=" ">Full Body Workout</h2>
//             <p className="text-sm text-gray-600">Today 3pm</p>
//           </div>
//           <div   className="ml-auto px-4 py-2 rounded">       <ToggleSwitch />
// </div>
//         </div>
//        </div>

//      </div>
//   );
// };

// export default WorkoutSchedulePage;
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ToggleSwitch from './comp';
import Navigation from './navbar';

const WorkoutSchedulePage = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          </Link>
        </div>
        <h1 className="text-2xl font-bold">Workout Schedule</h1>
        <div></div> 
      </div>

      {/* Workout Icon */}
      <Image src="/w1.png" alt="Workout Icon" width={343} height={121} className="p-3" />

      {/* Caution Message */}
      <div className="flex rounded-2xl bg-gradient-to-r from-blue-100 to-white px-4 py-2 mb-8">
        <FontAwesomeIcon icon={faExclamationTriangle} className="text-blue-500 text-3xl mt-1 mr-4" />
        <p className="text-sm text-gray-800">Youve burned fewer calories than yesterday. Time to get moving!</p>
      </div>

      {/* See More Link */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl">Upcoming Workout</h2>
        <div>
          <Link href="/see-more" className="text-gray-600 hover:text-gray-900">
            See more
          </Link>
        </div>
      </div>

      {/* Workout Card */}
      <div className="rounded-2xl shadow-lg px-4 py-1 mb-8">
        <div className="flex items-center mb-4">
          <Image src="/w3.png" alt="Workout Icon" width={60} height={50} className="mr-4 rounded-full" />
          <div>
            <h2 className="">Full Body Workout</h2>
            <p className="text-sm text-gray-600">Today 3pm</p>
          </div>
          <div className="ml-auto px-4 py-2 rounded">
            <ToggleSwitch />
          </div>
        </div>
      </div>
      <div className="rounded-2xl shadow-lg px-4 py-1 mb-8">
        <div className="flex items-center mb-4">
          <Image src="/w4.png" alt="Workout Icon" width={60} height={50} className="mr-4 rounded-full" />
          <div>
            <h2 className="">Upper Body Workout</h2>
            <p className="text-sm text-gray-600">4 Feb, 3:30 pm</p>
          </div>
          <div className="ml-auto px-4 py-2 rounded">
            <ToggleSwitch />
          </div>
        </div>
      </div>
<Navigation/>
            {/* <Image src="/w  .png" alt="Workout Icon" width={343} height={121} className="p-3" /> */}

    </div>
  );
};

export default WorkoutSchedulePage;
