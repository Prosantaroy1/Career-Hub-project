import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


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
           
        </div>
    );
};

export default Header;