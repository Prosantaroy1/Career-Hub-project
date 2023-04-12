import React, { useEffect, useState } from 'react';
import './JobDetails.css'
import { useLoaderData, useParams } from 'react-router-dom';
import post from '../../assets/Icons/Frame-1.png';
import phones from '../../assets/Icons/Frame-2.png';
import emails from '../../assets/Icons/Frame-3.png'
import { AddDb } from '../../utilities/fakedb';


const JobDetails = () => {
    const {id} =useParams();
    const [data, setData] = useState({});
    const jobs = useLoaderData();

    useEffect(()=>{
        if(jobs){
            let match=jobs.find(job=> job.id==id);
            //console.log(match)
            setData(match);
           
        }
    },[])
    const handleApplyNow = cart =>{
       AddDb(cart)
    }

    const{address, description, responsibilities, salary_logo,location_logo,
         Experiences, email, phone,Requirements,post_name,salary,} = data;

    return (
        <div className='job-details-container'>
             <h3>Job Details</h3>
             <div className='job-details'>
                <div className='details-part-1'>
                    <p><span className='part-1'>Job Description: </span> {description}</p>
                    <p><span className='part-1'>Job Responsibility</span>{responsibilities}</p>
                    <p><span className='part-1'>Educational Requirements:</span> <br/> {Requirements}</p>
                    <p><span className='part-1'>Experiences: </span><br/> {Experiences}</p>
                </div>
                <div className='details-part-2'>
                    <h4 className='part-2-title'>Job Details</h4>
                <hr style={{color: '#757575'}}/>
                    <div className='part-2-description'>
                      <p>
                        <img src={salary_logo} alt=''/>
                      {salary}   <span style={{color: '#1A1919'}}>Salary: </span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                      </p>
                      <p className='part-2-p'>
                        <img src={post} alt=''/>
                        <span style={{color: '#1A1919'}}>Job-Title: </span> {post_name}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                      </p>
                    </div>
                <h4 className='contact-title'>Contact Information</h4>
                <hr style={{color: '#757575'}}/>
                    <div className='contact-details'>
                     <p>
                        <img src={phones} alt=''/>
                       <span style={{color: '#1A1919'}}>Phone: </span> {phone}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                      </p>
                      <p>
                        <img src={emails} alt=''/>
                       <span style={{color: '#1A1919'}}>Email: </span> {email}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                      </p>
                      <p>
                        <img src={location_logo} alt=''/>
                       <span style={{color: '#1A1919'}}>Adress: </span> {address}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                      </p>
                    </div>
                    <button onClick={()=> handleApplyNow(data)}  className='apply-btn'>Apply Now</button>
                </div>
             </div>
        </div>
    );
};

export default JobDetails;