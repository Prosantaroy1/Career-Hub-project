import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
const Home = () => {
    const categorys = useLoaderData();
    //console.log(categorys);
    return (
        <div className='home-container'>
            <div className='job-category'>
               <h3 className='job-title'>Job Category List</h3>
               <p className='job-description'>
                  Explore thousands of job opportunities with all the information
                   you need. Its your future
               </p>
               <div className='category-div'>
                 {
                    categorys.map(category=><Category
                     key={category.id}
                     category={category}
                    ></Category>)
                 }
               </div>
            </div>
        </div>
    );
};

export default Home;