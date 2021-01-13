import React from 'react';
import Rating from '../../../Rating';

export default function ReviewseItem({ rating, title, description }) {
  return (
    <div className="reviewseItem">
      <div className="header">
        <img src="" alt="" className="avatar"></img>
      </div>
      <p></p>
      <h2>{title}</h2>
      <Rating rating={rating} />
    </div>
  );
}

// ReviewseItem.proptyps = {
//     rating:

// }
