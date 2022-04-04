import { useEffect, useState } from 'react';

const useReviews = () => {
    const [userReviews, setUserReviews] = useState([]);
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/amir-hossain113/images/main/reviewer-data.json')
        .then(res => res.json())
        .then(data => setUserReviews(data))
    }, []);
    
    return [userReviews, setUserReviews];
};

export default useReviews;