import React from 'react';
import dove from '../../images/dove.jpg'
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <nav className="navbar">
      <div className="flex items-center">
      <div className="bg-black rounded-full h-8 w-8 leaf relative">
  <div style={{
    backgroundImage: `url(${dove})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%'
  }}></div>
</div>



      </div>
      <div className="flex space-x-4">
        <a href="#" className="text-white ml-2 mr-2 font-bold">Login</a>
        <a href="#" className="text-white ml-2 mr-2 font-bold">Signup</a>
        <a href="#" className="text-white ml-2 mr-2 font-bold">About Us</a>
      </div>
    </nav>
  );
};

export default Header;
