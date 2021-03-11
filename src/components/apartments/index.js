import React from 'react';
import PropTypes from 'prop-types';
import ApartmentDetails from './details';
import Reviews from './Reviews';

function index({ apartment }) {
  if (!apartment) return null;
  const { rating, title, descr, imgUrl, id } = apartment;
  return (
    <div>
      <ApartmentDetails
        rating={rating}
        title={title}
        descr={descr}
        imgUrl={imgUrl}
        id={id}
      />
      <Reviews />
    </div>
  );
}

index.propTypes = {};

export default index;
