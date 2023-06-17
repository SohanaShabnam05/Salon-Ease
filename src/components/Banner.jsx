import React from 'react';
import Button from './Button';
import './Banner.css';

export default function Banner () {
  return (
  <div className="ban-container">

  {/* side bar */}
    <div className='ban-side'>

    </div>


    {/* content */}
    <div id="content">
      <h2>Classic Facial</h2>
      <ul className="points">
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique?</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique?</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, similique?</li>
      </ul>
    </div>


    {/* photo */}
  <div className="ban-box">
    <div className="ban">
        <img src='https://mdbootstrap.com/img/new/standard/nature/111.webp'  alt='...' />
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div> 
      </div>

        <div className="write-ban">
        <h5>1hr 10 mints</h5>
        </div>

        <div className="write-ban">
        <p>20% off $1100</p>
        </div>

        <div className="write-ban">
        <Button />
        </div>
        </div>
      
  </div>

  );
}