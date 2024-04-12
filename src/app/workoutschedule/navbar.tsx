
"use client"
// Navigation.js
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  return (
    <nav className="   bottom-0 w-full white    pt-16   ">
      <div className="flex justify-around">
        <Link href="/" passHref>
          <Image
            src="/5.png"
            alt="Your Image"
            width={26.5}
            height={26.5}
          />
        </Link>
        <Link href="/ " passHref>
          <Image
            src="/7.png"
            alt="Your Image"
            width={26.5}
            height={26.5}
          />
        </Link>
        <Link href="/ " passHref className='pl-10'>
          <Image
            src="/3.png"
            alt="Your Image"
            width={26.5}
            height={26.5}
          />
        </Link>
        <Link href="/ " passHref>
          <Image
            src="/4.png"
            alt="Your Image"
            width={26.5}
            height={26.5}
          />
        </Link>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5">
        <Link href="/" passHref>
          <Image
            src="/6.png"
            alt="Your Image"
            width={77}
            height={77}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
