import React from 'react';
import useReviews from '../../Hooks/useReviews';
import './Reviews.css';

const Reviews = () => {
    const [userReviews, setUserReviews] = useReviews();
    return (
        <div className="user-reviews">
            {
                userReviews.map(userReview => <div className="single-user">
                    <h3>{userReview.name}</h3>
                    <h4>Review: {userReview.review}</h4>
                    <h4>Rating: {userReview.rating}</h4>
                    <img src={userReview.img} alt="" />
                </div>)
            }
            
        </div>
    );
};

export default Reviews;