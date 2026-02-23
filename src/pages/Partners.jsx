import React from 'react';
import './Partners.css';

const partners = [
    { name: 'Tata Motors', industry: 'Automotive', abbr: 'TM' },
    { name: 'Mahindra & Mahindra', industry: 'Automotive', abbr: 'M&M' },
    { name: 'DRDO', industry: 'Defence & Aerospace', abbr: 'DRDO' },
    { name: 'Hindustan Aeronautics', industry: 'Aerospace', abbr: 'HAL' },
    { name: 'Sun Pharmaceutical', industry: 'Pharmaceutical', abbr: 'SP' },
    { name: 'Bajaj Auto', industry: 'Automotive', abbr: 'BA' },
    { name: 'Bharat Petroleum', industry: 'Oil & Gas', abbr: 'BPCL' },
    { name: 'Larsen & Toubro', industry: 'Engineering', abbr: 'L&T' },
    { name: 'Kokilaben Hospital', industry: 'Healthcare', abbr: 'KH' },
    { name: 'ISRO', industry: 'Space Research', abbr: 'ISRO' },
    { name: 'Forbes Marshall', industry: 'Process', abbr: 'FM' },
    { name: 'Kirloskar Electric', industry: 'Electrical', abbr: 'KE' },
];

const testimonials = [
    {
        text: 'Asian Enterprises has been our trusted calibration partner for over 8 years. Their precision, speed, and documentation quality are absolutely unmatched in the industry.',
        author: 'Mr. Ramesh Singh',
        company: 'Tata Motors, Pune',
        role: 'Head of Quality Assurance',
    },
    {
        text: 'Their mobile calibration unit saved us enormous downtime. The team arrives on-site, calibrates all instruments, and provides digital certificates same day. Highly recommended!',
        author: 'Dr. Kavita Nair',
        company: 'Sun Pharmaceutical',
        role: 'QA Manager',
    },
    {
        text: 'We have been working with Asian Enterprises for our aerospace-grade calibration needs. Their attention to measurement uncertainty and traceability is commendable.',
        author: 'Wing Commander (Retd.) Anand Dixit',
        company: 'HAL Nashik',
        role: 'Technical Director',
    },
];

const Partners = () => (
    <div className="partners-page page-enter">
        <section className="page-hero">
            <div className="bg-grid" />
            <div className="glow-orb page-orb1" />
            <div className="container page-hero-inner">
                <div className="section-tag">Our Partners</div>
                <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
                    Trusted by India's <span>Leading Companies</span>
                </h1>
                <p className="section-subtitle" style={{ maxWidth: '680px' }}>
                    From Fortune 500 companies to cutting-edge research labs, our calibration services
                    are trusted by organizations that demand absolute precision.
                </p>
            </div>
        </section>

        {/* Partner logos */}
        <section className="section">
            <div className="container">
                <div className="section-header center" style={{ marginBottom: '60px' }}>
                    <div className="section-tag">Our Clients</div>
                    <h2 className="section-title">200+ <span>Satisfied Partners</span></h2>
                </div>
                <div className="partners-grid">
                    {partners.map((p, i) => (
                        <div key={i} className="partner-card glass-card">
                            <div className="partner-logo">
                                <span className="partner-abbr">{p.abbr}</span>
                            </div>
                            <div className="partner-info">
                                <div className="partner-name">{p.name}</div>
                                <div className="partner-industry">{p.industry}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Industries served */}
        <section className="section" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <div className="section-header center" style={{ marginBottom: '50px' }}>
                    <div className="section-tag">Sectors</div>
                    <h2 className="section-title">Industries We <span>Serve</span></h2>
                </div>
                <div className="industries-grid">
                    {[
                        { name: 'Automotive', icon: '🚗', count: '45+ clients' },
                        { name: 'Aerospace & Defence', icon: '✈️', count: '12 clients' },
                        { name: 'Pharmaceutical', icon: '💊', count: '35+ clients' },
                        { name: 'Healthcare', icon: '🏥', count: '28 clients' },
                        { name: 'Oil & Gas', icon: '⚡', count: '18 clients' },
                        { name: 'Manufacturing', icon: '🔧', count: '60+ clients' },
                        { name: 'Research & Education', icon: '🔬', count: '22 clients' },
                        { name: 'Power & Energy', icon: '🏭', count: '20+ clients' },
                    ].map((ind, i) => (
                        <div key={i} className="industry-card glass-card">
                            <div className="ind-icon">{ind.icon}</div>
                            <div className="ind-name">{ind.name}</div>
                            <div className="ind-count">{ind.count}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="section">
            <div className="container">
                <div className="section-header center" style={{ marginBottom: '60px' }}>
                    <div className="section-tag">Testimonials</div>
                    <h2 className="section-title">What Our <span>Clients Say</span></h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card glass-card">
                            <div className="testi-quote">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.79 1.24-1.45 2.13-1.97L9.19 7c-.87.41-1.65.98-2.34 1.71-.74.78-1.28 1.63-1.62 2.55-.35.93-.44 1.81-.28 2.64.16.84.52 1.62 1.08 2.34.44.56 1.02.96 1.74 1.22.72.26 1.45.27 2.2.02.62-.2 1.1-.57 1.45-1.13.35-.54.52-1.12.52-1.73l.01-.88zm8.54 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.95.1-1.95.78-3 .53-.79 1.24-1.45 2.13-1.97L17.73 7c-.87.41-1.64.978-2.33 1.707-.74.78-1.28 1.63-1.62 2.55-.35.92-.44 1.8-.28 2.63.16.84.52 1.62 1.08 2.34.44.56 1.02.96 1.74 1.22.72.26 1.45.27 2.2.02.62-.2 1.1-.57 1.45-1.13.35-.54.52-1.12.52-1.73l.01-.88z" />
                                </svg>
                            </div>
                            <p className="testi-text">"{t.text}"</p>
                            <div className="testi-author">
                                <div className="testi-avatar">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="testi-name">{t.author}</div>
                                    <div className="testi-role">{t.role}, {t.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default Partners;
