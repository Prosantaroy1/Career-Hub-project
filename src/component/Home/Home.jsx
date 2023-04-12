import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import logo from '../../assets/All Images/P3OLGJ1 copy 1.png'


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
      <div>
         <div className='banner'>
           <div className='banner-container'>
                <div className='banner-title'>
                    <h2>
                        One Step<br/> Closer To Your<br/><span className='title-color'>Dream Job</span> 
                    </h2>
                    <p>
                     Explore thousands of job opportunities with all the<br/> information you need.
                     Its your future. Come find it. Manage all<br/> your job application from start to finish.
                    </p>
                    <button className='btn-apply'>Get Started</button>
                </div>
                <div className='banner-img'>
                   <img src={logo} alt='banner-logo'/>
                </div>
            </div>
         </div>
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
      </div>
    );
};

export default Home;