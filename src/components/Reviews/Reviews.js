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
                    <p><b>Review:</b> {userReview.review}</p>
                    <p><b>Rating:</b> {userReview.rating}</p>
                    <img src={userReview.img} alt="" />
                </div>)
            }
            
        </div>
    );
};

export default Reviews;