import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs">
            <h2>What is context API?</h2>
            <p>
            The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. It's aimed at solving the problem of prop drilling.
            </p>

            <h2>What is Semantic tag?</h2>
            <p>
                The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content. 
                Examples of non-semantic elements: div and span - Tells nothing about its content.
                Examples of semantic elements: form, table, and article - Clearly defines its content.


            </p>

            <h2>What are the difference among inline, block & inline-block element?</h2>
            <p>
            <b>inline:</b> The element doesn't start on a new line and only occupy just the width it requires. We can't set the width or height. <br />

            <b>block:</b> The element will start on a new line and occupy the full width available. And we can set width and height values. <br />

            <b>inline-block:</b> It's formatted just like the inline element, where it doesn't start on a new line. But, we can set width and height values.
            </p>
        </div>
    );
};

export default Blogs;