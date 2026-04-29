import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const contactInfo = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
        ),
        label: 'Head Office',
        value: 'Plot -2A, Shivani puram-2, Jamalpur kalan, Jagjeetpur Road, Raja Garden, Haridwar -249407(U.K) India',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.1 19.79 19.79 0 01.01 2.37a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.44 2.03L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.03-.44c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" />
            </svg>
        ),
        label: 'Phone',
        value: '+91 97601 88223 | +91 94111 11480',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: 'Email',
        value: 'asianhdr@yahoo.com | asian_e@yahoo.com',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        label: 'Working Hours',
        value: 'Mon – Sat: 9 AM – 6 PM',
    },
];

const Contact = () => {
    const formRef = useRef();
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        emailjs.sendForm('service_ho07lpt', 'template_yvnafmm', formRef.current, 'pqjQ_TN4v6h5quLa4')
            .then(() => {
                setSubmitted(true);
                setSubmitting(false);
            })
            .catch((err) => {
                console.error('EmailJS error:', err);
                setSubmitting(false);
            });
    };

    return (
        <div className="contact-page page-enter">
            {/* Compact Header */}
            <div className="contact-hero">
                <div className="bg-grid" />
                <div className="container contact-hero-inner">
                    <h1 className="contact-hero-title">
                        Contact <span>Us</span>
                    </h1>
                    <div className="contact-hero-underline" />
                </div>
            </div>

            {/* Main Content — fits viewport */}
            <div className="container contact-main">
                {/* Left — Contact Info (compact) */}
                <div className="contact-info-compact">
                    <div className="contact-cards-compact">
                        {contactInfo.map((c, i) => (
                            <div key={i} className="cc-compact">
                                <div className="cc-icon-sm">{c.icon}</div>
                                <div>
                                    <div className="cc-label">{c.label}</div>
                                    <div className="cc-value-sm">{c.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick Stats */}
                    <div className="contact-stats-compact">
                        <div className="cs-stat-sm">
                            <span className="cs-num-sm">24h</span>
                            <span className="cs-lbl-sm">Response</span>
                        </div>
                        <div className="cs-div-sm" />
                        <div className="cs-stat-sm">
                            <span className="cs-num-sm">Free</span>
                            <span className="cs-lbl-sm">Consultation</span>
                        </div>
                        <div className="cs-div-sm" />
                        <div className="cs-stat-sm">
                            <span className="cs-num-sm">48h</span>
                            <span className="cs-lbl-sm">First Visit</span>
                        </div>
                    </div>
                </div>

                {/* Right — Form */}
                <div className="contact-form-compact">
                    {!submitted ? (
                        <>
                            <h3 className="form-title-sm">Request a Quote</h3>
                            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Your Name *</label>
                                        <input type="text" name="name" required placeholder="John Doe" />
                                    </div>
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input type="text" name="company" placeholder="ACME Corp." />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <input type="email" name="email" required placeholder="john@company.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input type="tel" name="phone" placeholder="+91 98765 43210" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Service Required *</label>
                                        <select name="service" required defaultValue="">
                                            <option value="" disabled>Select a service...</option>
                                            <option>Dimensional Calibration</option>
                                            <option>Pressure Calibration</option>
                                            <option>Temperature Calibration</option>
                                            <option>Torque Calibration</option>
                                            <option>Electrical Calibration</option>
                                            <option>Mass & Volume Calibration</option>
                                            <option>On-site Calibration</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <input type="text" name="message" placeholder="Brief details..." />
                                    </div>
                                </div>
                                <button type="submit" className="btn-primary form-submit-sm" disabled={submitting}>
                                    <span>{submitting ? 'Sending...' : 'Send Enquiry'}</span>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                    </svg>
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="form-success-sm">
                            <div className="success-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h3>Enquiry Received!</h3>
                            <p>Our team will contact you within 24 business hours.</p>
                            <button className="btn-outline" onClick={() => setSubmitted(false)}>Send Another</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
