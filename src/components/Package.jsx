import React from 'react';
import './package.css'
import sban from '../assets/customer.jpg'

const Package = () => {
  return (
    <div>
        <div className="box">

        <div className="write-banner">
            BEST SELLING PACKAGES
        </div>

        <div className="photo-container">

        <div className="banner">
            <div className="photo-box">
                <img src={sban} alt=" " />
            </div>
        </div>

        <div className="banner">
            <div className="photo-box">
                <img src={sban} alt=" " />
            </div>
        </div>

    </div>

        </div>
      

    </div>
  )
}

export default Package
