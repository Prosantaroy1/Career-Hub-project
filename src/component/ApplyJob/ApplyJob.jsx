import React from 'react';
import './ApplyJob.css'

const ApplyJob = ({applyjob}) => {
    console.log(applyjob);
    const{salary_logo,location_logo,company,job_time,location,
         post_name,salary, image} = applyjob;
    return (
        <div className='applyjobs-container'>
            <div className='ap-div-1'>
                <div className='company-logo'>
                  <img className='company-img' src={image} alt='' />
                </div>
               <div className='apply-details'>
                    <h4>{post_name}</h4>
                    <p>{company}</p>
                    <div className='job-time'>
                        <p>{job_time[0]}</p>
                        <p>{job_time[1]}</p>
                    </div>
                    <div className='sl-lc-container'>
                        <p className='sl-lc'>
                            <img src={location_logo} alt=''/>
                            <span>{location}</span>
                        </p>
                        <p className='sl-lc'>
                            <img src={salary_logo} alt=''/>
                            <span>{salary}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className='ap-div-2'>
              <button className='btn-view'>View Details</button>
            </div>
        </div>
    );
};

export default ApplyJob;

