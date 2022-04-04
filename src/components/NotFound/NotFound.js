import React from 'react';
import './NotFound.css';
import img from '../../images/error.webp';

const NotFound = () => {
    return (
        <div className="error-page">
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;