import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
    <footer className="footer">
        <div className="footer-top">
            <div className="container footer-grid">
                {/* Brand */}
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <img
                            src="/images/Asian_logo.png"
                            alt="Asian Enterprises Logo"
                            className="footer-logo-img"
                        />
                    </Link>
                    <p className="footer-brand-desc">
                        India's trusted calibration, maintenance, and repair service provider for precision
                        measuring instruments. Accuracy you can rely on — every single time.
                    </p>
                    <div className="footer-badges">
                        <span className="fbadge">NABL Accredited</span>
                        <span className="fbadge">ISO 17025</span>
                        <span className="fbadge">ISO 9001</span>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Quick Links</h4>
                    <ul className="footer-links">
                        {[
                            { label: 'Home', path: '/' },
                            { label: 'About Us', path: '/about' },
                            { label: 'Facilities', path: '/facilities' },
                            { label: 'Projects', path: '/projects' },
                            { label: 'Gallery', path: '/gallery' },
                            { label: 'Partners', path: '/partners' },
                            { label: 'Contact Us', path: '/contact' },
                        ].map(link => (
                            <li key={link.path}>
                                <Link to={link.path} className="footer-link">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Our Services</h4>
                    <ul className="footer-links">
                        {[
                            'Dimensional Calibration',
                            'Pressure Calibration',
                            'Temperature Calibration',
                            'Torque Calibration',
                            'Electrical Calibration',
                            'Mass & Volume',
                            'On-Site Calibration',
                            'Instrument Repair',
                        ].map(svc => (
                            <li key={svc}>
                                <Link to="/contact" className="footer-link">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                    {svc}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h4 className="footer-col-title">Contact Us</h4>
                    <div className="footer-contact">
                        <div className="fcontact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>Andheri East, Mumbai – 400 093, Maharashtra, India</span>
                        </div>
                        <div className="fcontact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.1 19.79 19.79 0 01.01 2.37a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.44 2.03L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.03-.44c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" />
                            </svg>
                            <span>+91 22 4567 8900</span>
                        </div>
                        <div className="fcontact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                            <span>info@asianenterprises.in</span>
                        </div>
                        <div className="fcontact-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>Mon–Sat: 9 AM – 6 PM</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
            <div className="container footer-bottom-inner">
                <p className="footer-copy">
                    © {new Date().getFullYear()} Asian Enterprises. All rights reserved. | Precision Calibration Services
                </p>
                <div className="footer-bottom-links">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Quality Policy</span>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
