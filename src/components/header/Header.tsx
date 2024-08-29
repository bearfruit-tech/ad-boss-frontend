import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/adboss-logo.png" 
            alt="AdBOSS Media Group Logo" 
            width={200} 
            height={50} 
            className="mr-2"
          />
        </div>
        <div className="flex items-center">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300">
            Login
          </button>
          <button className="ml-4 px-6 py-2 bg-[#e4bb90] text-white rounded-md hover:bg-[#b7926d] transition-colors duration-300">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;