import React, { useEffect, useState } from 'react';
import './Home.css';
import img from '../../images/macBookPro.jpeg';
import Reviews from '../Reviews/Reviews';
import useReviews from '../../Hooks/useReviews';
import { Link } from 'react-router-dom';

const Home = () => {
    const [userReviews, setUserReviews] = useReviews();

    return (
        <div>
            <div className="both-side">
                <div className="left-side">
                    <img src={img} alt="" />
                </div>
                <div className="right-side">
                    <h1>Latest <span className="mac-book">Mac Book Pro</span> <br /> Your Next Laptop</h1>
                    <p>
                    In the tech industry, Apple is a renowned name that makes the top rates simplified laptops for customers. Apple makes their laptops eye-catching and unique by providing almost every component. The world-famous Apple's MacBook cannot be compared with anyone as Apple uses its innovative technology and display panels to give the most accurate color contrast. MacBook is now even added a new feature that still many laptops do not have which is the Touch Bar. This Touch bar allows the user to keeps everything in order and works properly. Smart technologies are offering the best deals on Apple MacBook.
                    </p>
                    <button className="liveDemoBtn"> <a className="liveDemoBtnLink" target="_blank" href="https://www.apple.com/shop/buy-mac/macbook-pro">Live Demo</a></button>
                </div>
            </div>

            <h3>Customer Reviews(3)</h3>
            <div className="user-reviews">
                {
                    userReviews.slice(0, 3).map(userReview => <div className="singleUser">
                        <img src={userReview.img} alt="" />
                        <h3>{userReview.name}</h3>
                        <p><b>Review:</b> {userReview.review}</p>
                        <p><b>Rating:</b> {userReview.rating}</p>
                    </div>)
                }
            </div>
            <button className="allReviewsBtn">
                <Link className="allReviewsBtnLink" to="/reviews">See All Reviews</Link>
            </button>
        </div>
    );
};

export default Home;