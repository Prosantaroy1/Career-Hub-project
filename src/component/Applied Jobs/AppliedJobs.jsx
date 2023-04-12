import React from 'react';
import { getDb } from '../../utilities/fakedb';
import ApplyJob from '../ApplyJob/ApplyJob';
import './AppliedJobs.css'

const AppliedJobs = () => {
    const data = getDb(); 
    console.log(data)
    return (
        <div className='applied-container'>
            <h3>Filter By</h3>
            <div className='applyjob-container'>
             {
                data.map(applyjob=> <ApplyJob
                 applyjob={applyjob}
                ></ApplyJob>)
             }
            </div>
           
        </div>
    );
};

export default AppliedJobs;