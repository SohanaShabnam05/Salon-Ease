import React from 'react';
import Button from './Button';
import './Banner.css';
import {
  MDBCardBody,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Banner () {
  return (
  <div className="ban-container">
    <div className="ban-box"> 
   
    <div className="ban">

      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <img src='https://mdbootstrap.com/img/new/standard/nature/111.webp'  alt='...' />

          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      
      </MDBRipple>
      </div>
      <MDBCardBody>

        <div className="write-ban">
        <h5>1hr 10 mints</h5>
        </div>

        <div className="write-ban">
        <p>20% off $1100</p>
        </div>

        <div className="write-ban">
        <Button />
        </div>

        
      </MDBCardBody>
      </div>
  </div>

  );
}