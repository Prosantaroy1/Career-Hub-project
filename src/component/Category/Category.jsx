import React from 'react';
import './Category.css'


const Category = ({category}) => {
   // console.log(category)
    const { name, job, img}= category;
    return (
        <div className='category-container'>
            <img src={img} alt='img'/>
            <h3>{name}</h3>
            <p>{job}</p>
        </div>
    );
};

export default Category;