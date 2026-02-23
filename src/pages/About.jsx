import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const team = [
    { name: 'Mr. Rajesh Kumar', role: 'Founder & CEO', exp: '30+ yrs' },
    { name: 'Mr. Anil Sharma', role: 'Technical Director', exp: '22 yrs' },
    { name: 'Ms. Priya Verma', role: 'Quality Manager', exp: '15 yrs' },
    { name: 'Mr. Suresh Patel', role: 'Lead Calibration Engineer', exp: '18 yrs' },
];

const milestones = [
    { year: '1998', title: 'Foundation', desc: 'Asian Enterprises established in Mumbai with a vision to provide world-class calibration services.' },
    { year: '2003', title: 'First Accreditation', desc: 'Achieved NABL accreditation, marking significant growth in laboratory capabilities.' },
    { year: '2008', title: 'Expansion', desc: 'Opened 3 new facilities across Maharashtra and Gujarat to serve more clients.' },
    { year: '2015', title: 'ISO 17025', desc: 'Awarded ISO/IEC 17025 accreditation for technical competence in testing and calibration.' },
    { year: '2020', title: 'Digital Transformation', desc: 'Introduced digital calibration reporting and online certificate management.' },
    { year: '2024', title: 'National Leader', desc: 'Recognized as one of the top 10 calibration service providers in India.' },
];

const About = () => (
    <div className="about page-enter">
        {/* Page Header */}
        <section className="page-hero">
            <div className="bg-grid" />
            <div className="glow-orb page-orb1" />
            <div className="container page-hero-inner">
                <div className="section-tag">About Asian Enterprises</div>
                <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
                    25+ Years of Measurement <span>Excellence</span>
                </h1>
                <p className="section-subtitle" style={{ maxWidth: '700px' }}>
                    We are a premier calibration, maintenance, and repair service provider dedicated to
                    ensuring the accuracy and reliability of precision measuring instruments used across
                    industries throughout India.
                </p>
            </div>
        </section>

        {/* Mission & Vision */}
        <section className="section">
            <div className="container">
                <div className="about-mv">
                    <div className="mv-card glass-card">
                        <div className="mv-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
                            </svg>
                        </div>
                        <h3>Our Mission</h3>
                        <p>
                            To deliver precise, reliable, and timely calibration and maintenance services that
                            help our clients achieve uncompromised quality standards and regulatory compliance,
                            ensuring their instruments always perform at peak accuracy.
                        </p>
                    </div>
                    <div className="mv-card glass-card">
                        <div className="mv-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </div>
                        <h3>Our Vision</h3>
                        <p>
                            To be India's most trusted calibration laboratory, recognized for technical excellence,
                            innovation, and unwavering commitment to quality — supporting the growth of a
                            precision-driven manufacturing ecosystem.
                        </p>
                    </div>
                    <div className="mv-card glass-card">
                        <div className="mv-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <h3>Our Values</h3>
                        <p>
                            Precision, integrity, and customer-first philosophy drive everything we do. We
                            believe in transparent processes, continuous improvement, and building long-term
                            partnerships with our clients based on trust and measurable results.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Timeline */}
        <section className="section" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <div className="section-header center" style={{ marginBottom: '60px' }}>
                    <div className="section-tag">Our Journey</div>
                    <h2 className="section-title">Milestones That <span>Define Us</span></h2>
                </div>
                <div className="timeline">
                    {milestones.map((m, i) => (
                        <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-dot" />
                            <div className="timeline-card glass-card">
                                <div className="tl-year">{m.year}</div>
                                <h4 className="tl-title">{m.title}</h4>
                                <p className="tl-desc">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Team */}
        <section className="section">
            <div className="container">
                <div className="section-header center" style={{ marginBottom: '60px' }}>
                    <div className="section-tag">Leadership</div>
                    <h2 className="section-title">Meet Our <span>Expert Team</span></h2>
                </div>
                <div className="team-grid">
                    {team.map((member, i) => (
                        <div key={i} className="team-card glass-card">
                            <div className="team-avatar">
                                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="22" r="12" fill="rgba(26,86,219,0.3)" stroke="#3b82f6" strokeWidth="1.5" />
                                    <ellipse cx="30" cy="52" rx="20" ry="12" fill="rgba(26,86,219,0.2)" stroke="#3b82f6" strokeWidth="1.5" />
                                </svg>
                            </div>
                            <div className="team-info">
                                <h4 className="team-name">{member.name}</h4>
                                <div className="team-role">{member.role}</div>
                                <div className="team-exp">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                                    </svg>
                                    {member.exp} experience
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Certifications */}
        <section className="section certs-section">
            <div className="container">
                <div className="section-header center" style={{ marginBottom: '50px' }}>
                    <div className="section-tag">Accreditations</div>
                    <h2 className="section-title">Our <span>Certifications</span></h2>
                </div>
                <div className="certs-grid">
                    {['NABL Accredited Laboratory', 'ISO/IEC 17025:2017', 'BIS Authorized', 'NPL Traceable', 'ISO 9001:2015'].map((cert, i) => (
                        <div key={i} className="cert-item glass-card">
                            <div className="cert-badge">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <span className="cert-name">{cert}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

export default About;
