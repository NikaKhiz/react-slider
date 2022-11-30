import React from "react";
import { FaQuoteRight } from 'react-icons/fa';

const Review = ({ name, id, image, title, quote, position }) => {
    return (
        <article className={position}>
            <img src={image} alt={name} className="person-img" />
            <h2>{name}</h2>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <div className="icon">
                <FaQuoteRight />
            </div>
        </article>
    );
}

export default Review;