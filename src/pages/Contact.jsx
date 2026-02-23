import React, { useState } from 'react';
import './Contact.css';

const contactInfo = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
        ),
        label: 'Head Office',
        value: 'Asian Enterprises, Industrial Area, Andheri East, Mumbai - 400 093, Maharashtra',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.1 19.79 19.79 0 01.01 2.37a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.44 2.03L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.03-.44c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" />
            </svg>
        ),
        label: 'Phone',
        value: '+91 22 4567 8900 | +91 98765 43210',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: 'Email',
        value: 'info@asianenterprises.in | services@asianenterprises.in',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        label: 'Working Hours',
        value: 'Monday – Saturday: 9:00 AM – 6:00 PM\nSunday: Emergency Calls Only',
    },
];

const Contact = () => {
    const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="contact-page page-enter">
            {/* Page Header */}
            <section className="page-hero">
                <div className="bg-grid" />
                <div className="glow-orb page-orb1" />
                <div className="container page-hero-inner">
                    <div className="section-tag">Get In Touch</div>
                    <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
                        Let's Discuss Your <span>Calibration Needs</span>
                    </h1>
                    <p className="section-subtitle" style={{ maxWidth: '640px' }}>
                        Our team of experts is ready to tailor the perfect calibration and maintenance solution for your organization.
                        Reach out today for a free consultation.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container contact-grid">
                    {/* Info Cards */}
                    <div className="contact-info">
                        <h2 className="contact-info-title">Contact Information</h2>
                        <p className="contact-info-sub">We respond within 24 business hours. For urgent calibration needs, call us directly.</p>
                        <div className="contact-cards">
                            {contactInfo.map((c, i) => (
                                <div key={i} className="contact-card glass-card">
                                    <div className="cc-icon">{c.icon}</div>
                                    <div>
                                        <div className="cc-label">{c.label}</div>
                                        <div className="cc-value">{c.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick Stats */}
                        <div className="contact-stats glass-card">
                            <div className="cs-stat">
                                <span className="cs-num">24h</span>
                                <span className="cs-lbl">Response Time</span>
                            </div>
                            <div className="cs-divider" />
                            <div className="cs-stat">
                                <span className="cs-num">Free</span>
                                <span className="cs-lbl">Consultation</span>
                            </div>
                            <div className="cs-divider" />
                            <div className="cs-stat">
                                <span className="cs-num">48h</span>
                                <span className="cs-lbl">First Visit</span>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="contact-form-box glass-card">
                        {!submitted ? (
                            <>
                                <h3 className="form-title">Request a Quote</h3>
                                <p className="form-sub">Fill the form below and our team will get back to you shortly.</p>
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Your Name *</label>
                                            <input type="text" name="name" required placeholder="John Doe" value={form.name} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text" name="company" placeholder="ACME Corp." value={form.company} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Email Address *</label>
                                            <input type="email" name="email" required placeholder="john@company.com" value={form.email} onChange={handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="tel" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Service Required *</label>
                                        <select name="service" required value={form.service} onChange={handleChange}>
                                            <option value="">Select a service...</option>
                                            <option>Dimensional Calibration</option>
                                            <option>Pressure Calibration</option>
                                            <option>Temperature Calibration</option>
                                            <option>Torque Calibration</option>
                                            <option>Electrical Calibration</option>
                                            <option>Mass & Volume Calibration</option>
                                            <option>Instrument Repair</option>
                                            <option>On-site Calibration</option>
                                            <option>Annual Maintenance Contract</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Message / Additional Details</label>
                                        <textarea name="message" rows="4" placeholder="Describe your requirement, number of instruments, timeline, etc." value={form.message} onChange={handleChange} />
                                    </div>
                                    <button type="submit" className="btn-primary form-submit">
                                        <span>Send Enquiry</span>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                        </svg>
                                    </button>
                                </form>
                            </>
                        ) : (
                            <div className="form-success">
                                <div className="success-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                </div>
                                <h3>Enquiry Received!</h3>
                                <p>Thank you for reaching out to Asian Enterprises. Our team will contact you within 24 business hours.</p>
                                <button className="btn-outline" onClick={() => setSubmitted(false)}>Send Another Enquiry</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Branches */}
            <section className="section" style={{ background: 'var(--bg-dark)', paddingTop: '0' }}>
                <div className="container">
                    <div className="section-header center" style={{ marginBottom: '50px' }}>
                        <div className="section-tag">Our Branches</div>
                        <h2 className="section-title">Find Us <span>Near You</span></h2>
                    </div>
                    <div className="branches-grid">
                        {[
                            { city: 'Mumbai', type: 'Head Office', addr: 'Andheri East, Mumbai – 400 093', phone: '+91 22 4567 8900' },
                            { city: 'Pune', type: 'Branch Office', addr: 'Pimpri-Chinchwad, Pune – 411 019', phone: '+91 20 6789 0123' },
                            { city: 'Nashik', type: 'Lab Centre', addr: 'MIDC Ambad, Nashik – 422 010', phone: '+91 253 234 5678' },
                            { city: 'Aurangabad', type: 'Lab Centre', addr: 'Chikalthana MIDC, Aurangabad – 431 006', phone: '+91 240 234 5678' },
                            { city: 'Navi Mumbai', type: 'Service Centre', addr: 'TTC Area, Navi Mumbai – 400 703', phone: '+91 22 2767 8900' },
                            { city: 'Surat', type: 'Branch Office', addr: 'Sachin GIDC, Surat – 394 230', phone: '+91 261 432 5678' },
                        ].map((b, i) => (
                            <div key={i} className="branch-card glass-card">
                                <div className="bc-city">{b.city}</div>
                                <div className="bc-type">{b.type}</div>
                                <div className="bc-addr">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                                    </svg>
                                    {b.addr}
                                </div>
                                <div className="bc-phone">
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.1 19.79 19.79 0 01.01 2.37a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.44 2.03L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.03-.44c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" />
                                    </svg>
                                    {b.phone}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
