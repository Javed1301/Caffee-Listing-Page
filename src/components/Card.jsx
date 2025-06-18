import React from 'react'
import './Card.css'
import goldStar from '../assets/Star_fill.svg';
import silverStar from '../assets/Star.svg';

function Card({keyid,availibility,name ,price,rating,votes,imgSrc,popular}) {

  
  return (
    <div  className="card" data-name = {availibility ? 'available' : 'sold-out'} id={keyid}>
        <h3 className={`popular ${popular ? 'show':''}`}>Popular</h3>
        <img src={imgSrc} alt={name} />
        <div className='content'>
            <h2 className='title'>{name}</h2>
            <p className='price'>{price}</p>
        </div>
        <div className='rating'>
            <div>
             <span className={`stars${rating === null ? ' no-rating' : ''}`}>
                {rating === null ? (
                  <>
                  <img src={silverStar} alt="No Rating" />
                  {rating}
                  </>
                ) : (
                  <>
                    <img src={goldStar} alt="Star" />
                    {rating}
                  </>
                )}
              </span>
              <span className='votes'>({votes} votes)</span>
            </div>
            <h3 className={`status ${availibility?'':'sold-out'}`}>Sold out</h3>
        </div>
    </div>
  )
}

export default Card