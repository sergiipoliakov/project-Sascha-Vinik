import { Component } from 'react';

import ReviewList from './ReviewList.jsx';
import mockedReviews from './reviews.json';
import ReviewHeader from './ReviewHeader';
import styles from './reviews.module.css';

const totalRating = mockedReviews.reduce(
  (totalRating, reviews) => totalRating + reviews.rating,
  0,
);

const avarageRating = +(totalRating / mockedReviews.length).toFixed();

class Reviews extends Component {
  state = {
    reviewLimit: 2,
    showAll: false,
  };

  toggleReviews = () => {
    this.setState(prevState => ({
      showAll: !prevState.showAll,
    }));
  };

  getCurrentReview = () => {
    if (this.state.showAll) {
      return mockedReviews;
    }
    return mockedReviews.slice(0, this.state.reviewLimit);
  };

  render() {
    return (
      <div className={styles.reviews}>
        <ReviewHeader
          totalRating={avarageRating}
          amount={mockedReviews.length}
        />
        <ReviewList reviews={this.getCurrentReview()} />
        <button
          type="button"
          className={styles.showMore}
          onClick={this.toggleReviews}
        >
          Читать ещё...
        </button>
      </div>
    );
  }
}

export default Reviews;
