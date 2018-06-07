import React from 'react';
import UserReview from './UserReview';

const ReviewsSection = () => (
   	<section className="reviews-area section-gap">
		<div className="container">
			<div className="row section-title">
				<h1>User Reviews</h1>
				<p>Who are extremely in love with our platform.</p>
			</div>
			<div className="row">
				<UserReview username="Shubham" />
				<UserReview username="Saurabh Kabra" />
				<UserReview username="Sparsh Choudhary" />
				<UserReview username="Jon Banks" />
				<UserReview username="Landon Houston" />
				<UserReview username="Nelle Wade" />
			</div>
		</div>
	</section>
);

export default ReviewsSection;
