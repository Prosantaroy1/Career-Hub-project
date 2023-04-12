import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
               <div className='news'> 
                <h1>Blog Post</h1>
            </div>
         <div className='blog-container'>
            <div>
                <h3>When Use Contacts API?</h3>
                <p>
                   Contacts API to integrate the two systems and sync contact information. Contacts, along with companies, 
                   deals, tickets, line items, products, and quotes, are objects in the HubSpot CRM.
                </p>
            </div>
            <div>
                <h3>What is Custom hook in react?</h3>
                <p>
                Custom React JS hooks are reusable functions that a React JS
                 software developer can use to add special and unique functionality to the React applications. 
                </p>
            </div>
            <div>
                <h3>What is useref and for use work?</h3>
                <p>
                The useRef Hook allows you to persist values between renders. It can be used to store a 
                mutable value that 
                does not cause a re-render when updated. It can be used to access a DOM element directly.
                </p>
            </div>
            <div>
                <h3>what is usememo in react?</h3>
                <p>
                React has a built-in hook called useMemo that allows you to memoize expensive functions
                 so that you can avoid calling them on every render. You simple pass in a function and an
                  array of inputs 
                and useMemo will only recompute the memoized value when one of the inputs has changed.
                </p>
            </div>
         </div>
        </div>
    );
};

export default Blog;