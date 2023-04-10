import React from 'react';

const Featured = ({feature}) => {
    const{post_name, company, image, location, job_time, salary,salary_logo, location_logo} = feature;
    return (
        <div className='feature-container'>
            <img src={image} alt='company-logo'/>
        </div>
    );
};

export default Featured;