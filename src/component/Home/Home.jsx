import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
const Home = () => {
    const categorys = useLoaderData();
    //console.log(categorys);
    const [card, setCard] =useState([]);
    useEffect(()=>{
        fetch('featured.json')
        .then(res => res.json())
        .then(data => setCard(data))
    },[])

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
                    categorys.map(category=> <Category
                     key={category.id}
                     category={category}
                    ></Category>)
                 }
               </div>
            </div>
            <div className='featured-container'>
               <h3 className='job-title'>Featured Jobs</h3>
               <p className='job-description'>
                  Explore thousands of job opportunities with all the information
                   you need. Its your future
               </p>
               <div className='featured-div'>
                 {
                    card.map(feature =><Featured
                    key={feature.id}
                    feature={feature}
                    ></Featured>)
                 }
               </div>
               <div className='show-all'>
                  <button  className='btn-apply'>See All Jobs</button>
               </div>
               
            </div>
        </div>
    );
};

export default Home;