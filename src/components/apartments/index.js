import React from 'react';
import PropTypes from 'prop-types';
import ApartmentDetails from './details';

function index({ apartment }) {
  console.log(apartment);
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
      <p>qeqeqw</p>
    </div>
  );
}

index.propTypes = {};

export default index;
