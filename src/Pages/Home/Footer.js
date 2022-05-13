import React from 'react';
import { Link } from 'react-router-dom';
import footerbg from '../../assets/images/footer.png'

const Footer = () => {
    const bosor = new Date();
    const year = bosor.getFullYear();
    return (
        <footer style={{ background: `url(${footerbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="footer px-12 py-12  text-neutral">
                <div className='px-12'>
                    <span className="footer-title">Services</span>
                    <Link to="" className="link link-hover">Branding</Link>
                    <Link to="" className="link link-hover">Design</Link>
                    <Link to="" className="link link-hover">Marketing</Link>
                    <Link to="" className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="" className="link link-hover">About us</Link>
                    <Link to="" className="link link-hover">Contact</Link>
                    <Link to="" className="link link-hover">Jobs</Link>
                    <Link to="" className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="" className="link link-hover">Terms of use</Link>
                    <Link to="" className="link link-hover">Privacy policy</Link>
                    <Link to="" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <footer className="footer footer-center p-4 text-base-content">
                <div>
                    <p>Copyright © {year} - All right reserved</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;