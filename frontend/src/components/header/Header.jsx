import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <video
        className="header-video"
        autoPlay
        muted
        loop
        playsInline
        src="header_video.mp4"
        type="video/mp4"
      />
      {/*<div className="header-content">
        <h1>Order your favourite food here</h1>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      </div>*/}
    </header>
  );
};

export default Header;


{/*import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
*/}
