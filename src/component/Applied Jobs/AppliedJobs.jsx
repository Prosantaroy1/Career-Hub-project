import React from 'react';
import { getDb } from '../../utilities/fakedb';
import ApplyJob from '../ApplyJob/ApplyJob';
import './AppliedJobs.css'

const AppliedJobs = () => {
    const data = getDb(); 
    console.log(data)
    return (
        <div>
            <div className='news'> 
                <h1>Applied Jobs</h1>
            </div>
         <div className='applied-container'>
            <div className='filter'>
              <h3>Filter By</h3>
            </div>
           
            <div className='applyjob-container'>
             {
                data.map(applyjob=> <ApplyJob
                 applyjob={applyjob}
                ></ApplyJob>)
             }
            </div>
           
        </div>
       </div>
    );
};

export default AppliedJobs;