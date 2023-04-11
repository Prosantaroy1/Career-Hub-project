import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <div>
                   <h3 className='company-title'>Free Coding</h3>
                </div>
               <div className='Link-list'>
                  <Link className='link' to='/'>Home</Link>
                  <Link className='link' to='/statistics'>Statistics</Link>
                  <Link className='link' to='/appliedJobs'>Applied Jobs</Link>
                  <Link className='link' to='/blog'>Blog</Link>
                </div>
               <div className='nav-btn'>
                  <button className='btn-apply'>Star Applying</button>
               </div>
            </div>
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
    );
};

export default Header;