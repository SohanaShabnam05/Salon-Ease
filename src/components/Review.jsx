import React from 'react'
import Rate from './Rate';
import photo from '../assets/customer.jpg';
import './Review.css';

const Review = () => {
  return (
    <div>
      <div class="review-section">
  <h2 className='r2'>Reviews</h2>

<div className="boxl">  

    
  <div className="review">
    <div className="reviewer-info">

    <div className="customer-photo">
        <img src={photo} alt="" />
        </div>
    <div class="customer-info">
      <h3>Ashish</h3>
        <p>a month ago</p>
      </div>

    </div>

    <div className="dis">
    <Rate />
    </div>
   
    <div className="scroll-container">
    <div className="dis">  
    <p class="review-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis turpis ut magna bibendum malesuada. Nulla non hendrerit nisl. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nemo quo culpa tempora illum vitae eaque ratione sit dolor. Nemo, voluptates porro suscipit cupiditate modi numquam dolores reprehenderit doloremque eos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos cumque, vitae dignissimos omnis, quasi dicta blanditiis aspernatur doloribus numquam exercitationem quo. Eos vel nesciunt minima unde quos expedita iste qui.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corporis enim velit quia. Atque praesentium porro error, delectus aliquid sint impedit. Pariatur amet soluta animi cum sed possimus sequi tempora?</p>
    </div>
    </div>
  
  </div>

  <div class="review">
    <div className="reviewer-info">

    <div className="customer-photo">
        <img src={photo} alt="" />
        </div>
    <div class="customer-info">
      <h3>Ashish</h3>
        <p>a month ago</p>
      </div>

    </div>

    <div className="dis">
    <Rate />
    </div>
   
    <div className="scroll-container">
    <div className="dis">
    <p class="review-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis turpis ut magna bibendum malesuada. Nulla non hendrerit nisl.</p>
    </div>

    </div>
  </div>

  <div class="review">
    <div className="reviewer-info">

    <div className="customer-photo">
        <img src={photo} alt="" />
        </div>
    <div class="customer-info">
      <h3>Ashish</h3>
        <p>a month ago</p>
      </div>

    </div>

    <div className="dis">
    <Rate />
    </div>
   
    <div className="scroll-container">

    <div className="dis">
    <p class="review-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis turpis ut magna bibendum malesuada. Nulla non hendrerit nisl. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, quae voluptatem. Corporis explicabo dolores obcaecati consequatur ad. Alias animi, iure sit consectetur et saepe, earum quam non, reiciendis placeat porro.</p>
    </div>
    </div>
  </div>

  </div>
 
</div>

    </div>
  )
}

export default Review
