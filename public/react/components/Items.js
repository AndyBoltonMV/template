import React from 'react';

export const Item = (props) => {

  return <>
    {/* <h3>{props.item.title}</h3>
    <img src={props.item.image} alt={props.item.title} /> */}
    <div className='wrapper'>
        <div className='card'>
            <img className='card_img' src={props.item.image}></img>
            <div className='card_body'>
                <h2 className='card_title'>{props.item.title}</h2>
                <p className='card_description'>{props.item.description}</p>
                <h3 className='card_price'>{props.item.price}</h3>
                <button className='card_button'>More details</button>
            </div>
        </div>
    </div>
  </>
} 
	