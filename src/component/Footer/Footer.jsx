import React from 'react';
import './Footer.css'
import social from '../../assets/Icons/Group 9969.png'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-section-1'>
                <div className='div-1'>
                    <h4>Programming</h4>
                    <p>
                      There are many variations of 
                      passages of Lorem Ipsum , but the majority 
                      have suffered alteration in some form.
                    </p>
                   <img src={social} alt='social-icon'/>   
                </div>

                <div className='div-2'>
                    <h4>Company</h4>
                    <div className='company-list'>
                        <ul>
                            <li>About us</li>
                            <li>Work</li>
                            <li>Letest New</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>
                <div className='div-3'>
                    <h4>Product</h4>
                    <div className='product-list'>
                        <ul>
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            <li>Customers</li>
                            <li>Integrations</li>
                        </ul>
                    </div>
                </div>
                <div className='div-4'>
                    <h4>Support</h4>
                    <div className='support-list'>
                        <ul>
                            <li>Help Desk</li>
                            <li>Sales</li>
                            <li>Become a Partner</li>
                            <li>Developers</li>
                        </ul>
                    </div>
                </div>
                <div className='div-5'>
                    <h4>Contact</h4>
                    <div className='contact-list'>
                        <ul>
                            <li>524 Broadway , NYC</li>
                            <li>+1 777 - 978 - 5570</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-section-2'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </div>
    );
};

export default Footer;