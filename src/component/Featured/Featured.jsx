import React from 'react';
import './Featured.css'
import { Link } from 'react-router-dom';

const Featured = ({feature}) => {
    const{id, post_name, company, image, location, job_time, salary,salary_logo, location_logo} = feature;

    return (
        <div className='feature-container'>
            <img src={image} alt='company-logo'/>
            <h3 className='post-name'>{post_name}</h3>
            <p className='company-name'>{company}</p>
            <div className='job-time'>
                <h4>{job_time[0]}</h4>
                <h4>{job_time[1]}</h4>
            </div>
            <div className='loca-sala-container'>
               <div className='location'>
                  <img src={location_logo} alt='location-icon'/>
                  <p>{location}</p>
               </div>
               <div className='salary'>
                  <img src={salary_logo} alt='location-icon'/>
                  <p>{salary}</p>
               </div>
            </div>
            <Link to={`/feature/${id}`} className='btn-apply view-btn'>View Details</Link>
        </div>
    );
};

export default Featured;