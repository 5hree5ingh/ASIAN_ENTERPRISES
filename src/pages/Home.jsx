import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const services = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
        title: 'Precision Calibration',
        desc: 'Accredited calibration services for Vernier calipers, micrometers, gauges, and all precision measuring instruments.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        title: 'Maintenance Services',
        desc: 'Routine preventive maintenance programs to keep your instruments performing at peak accuracy and reliability.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M4.93 4.93l1.41 1.41M18.66 18.66l1.41 1.41M2 12h2M20 12h2M12 2v2M12 20v2" />
            </svg>
        ),
        title: 'Repair & Restoration',
        desc: 'Expert repair of damaged or non-functional measuring instruments, restoring them to manufacturer specifications.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: 'Certification & Documentation',
        desc: 'ISO-traceable calibration certificates and comprehensive documentation for quality assurance compliance.',
    },
];

const highlights = [
    { number: '20+', label: 'Years Experience' },
    { number: '375', label: 'Instruments Calibrated' },
    { number: '750', label: 'Satisfied Clients' },
];

const Home = () => {
    return (
        <div className="home page-enter">
            {/* ─── HERO ─── */}
            <section className="hero">
                <div className="bg-grid" />
                <div className="glow-orb hero-orb1" />
                <div className="glow-orb hero-orb2" />

                {/* Floating instrument graphic */}
                <div className="hero-graphic">
                    <div className="graphic-ring ring1" />
                    <div className="graphic-ring ring2" />
                    <div className="graphic-ring ring3" />
                    <div className="graphic-center">
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="46" width="80" height="8" rx="4" fill="#1a56db" opacity="0.9" />
                            <rect x="10" y="28" width="8" height="44" rx="3" fill="#1a56db" />
                            <rect x="82" y="28" width="8" height="44" rx="3" fill="#1a56db" />
                            <circle cx="50" cy="50" r="10" fill="#040d1a" stroke="#60a5fa" strokeWidth="2.5" />
                            <circle cx="50" cy="50" r="3" fill="#60a5fa" />
                            <rect x="20" y="38" width="4" height="16" rx="2" fill="#3b82f6" opacity="0.8" />
                            <rect x="28" y="42" width="3" height="8" rx="1.5" fill="#3b82f6" opacity="0.5" />
                            <rect x="69" y="38" width="4" height="16" rx="2" fill="#3b82f6" opacity="0.8" />
                            <rect x="76" y="42" width="3" height="8" rx="1.5" fill="#3b82f6" opacity="0.5" />
                        </svg>
                    </div>
                </div>

                <div className="hero-content container">
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        Precision Measurement Specialists
                    </div>
                    <h1 className="hero-title">
                        Calibration and
                        <br />
                        <span className="hero-gradient">Validation Facilities.</span>
                    </h1>
                    <p className="hero-desc">
                        Asian Enterprises delivers world-class calibration, maintenance, and repair services
                        for precision measuring instruments. From Vernier calipers to advanced gauge meters —
                        we ensure your instruments meet the highest standards of accuracy.
                    </p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn-primary">
                            <span>Get a Free Quote</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/facilities" className="btn-outline">
                            Our Facilities
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats">
                        {highlights.map((h, i) => (
                            <div key={i} className="hero-stat">
                                <div className="stat-number">{h.number}</div>
                                <div className="stat-label">{h.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-scroll-hint">
                    <div className="scroll-arrow" />
                </div>
            </section>

            {/* ─── SERVICES ─── */}
            <section className="section services-section">
                <div className="container">
                    <div className="section-header center">
                        <div className="section-tag">What We Do</div>
                        <h2 className="section-title">
                            Comprehensive Instrument <span>Services</span>
                        </h2>
                        <p className="section-subtitle">
                            From routine calibration to complex repairs, our certified technicians ensure
                            your precision instruments deliver reliable, accurate measurements.
                        </p>
                    </div>
                    <div className="services-grid">
                        {services.map((s, i) => (
                            <div key={i} className="service-card glass-card">
                                <div className="service-icon">{s.icon}</div>
                                <h3 className="service-title">{s.title}</h3>
                                <p className="service-desc">{s.desc}</p>
                                <div className="service-arrow">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── WHY CHOOSE US ─── */}
            <section className="section why-section">
                <div className="bg-grid" style={{ opacity: 0.5 }} />
                <div className="container why-inner">
                    <div className="why-left">
                        <div className="section-tag">Why Asian Enterprises</div>
                        <h2 className="section-title">
                            Built on <span>Precision</span> &<br /> Trust
                        </h2>
                        <p className="section-subtitle">
                            With over 25 years of expertise, we are the preferred calibration partner for
                            manufacturing, aerospace, automotive, and quality control labs across the region.
                        </p>
                        <div className="why-points">
                            {[
                                'ISO/IEC 17025 Accredited Laboratory',
                                'NABL-Compliant Calibration Procedures',
                                'Experienced & Certified Technicians',
                                'On-site & In-lab Calibration Services',
                                'Quick Turnaround Time Guaranteed',
                                'Comprehensive Calibration Certificates',
                            ].map((pt, i) => (
                                <div key={i} className="why-point">
                                    <div className="why-check">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <path d="M20 6L9 17l-5-5" />
                                        </svg>
                                    </div>
                                    <span>{pt}</span>
                                </div>
                            ))}
                        </div>
                        <Link to="/about" className="btn-primary" style={{ marginTop: '32px' }}>
                            <span>Learn More About Us</span>
                        </Link>
                    </div>
                    <div className="why-right">
                        <div className="why-visual">
                            <div className="wv-orb" />
                            <div className="wv-card wc1">
                                <div className="wvc-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="wvc-title">5000+ Calibrations</div>
                                    <div className="wvc-sub">Delivered annually</div>
                                </div>
                            </div>
                            <div className="wv-card wc2">
                                <div className="wvc-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="wvc-title">Expert Team</div>
                                    <div className="wvc-sub">30+ certified technicians</div>
                                </div>
                            </div>
                            <div className="wv-card wc3">
                                <div className="wvc-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="wvc-title">Certified</div>
                                    <div className="wvc-sub">ISO & NABL accredited</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── INSTRUMENTS WE CALIBRATE ─── */}
            <section className="section instruments-section">
                <div className="container">
                    <div className="section-header center">
                        <div className="section-tag">Our Expertise</div>
                        <h2 className="section-title">Instruments We <span>Calibrate</span></h2>
                    </div>
                    <div className="instruments-grid">
                        {[
                            'Vernier Calipers', 'Micrometers', 'Dial Gauges', 'Depth Gauges',
                            'Height Gauges', 'Bore Gauges', 'Thread Gauges', 'Angle Gauges',
                            'Torque Wrenches', 'Pressure Gauges', 'Temperature Instruments', 'Force Gauges',
                        ].map((inst, i) => (
                            <div key={i} className="instrument-tag">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                                {inst}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA BANNER ─── */}
            <section className="cta-banner">
                <div className="cta-bg-grid" />
                <div className="cta-glow" />
                <div className="container cta-inner">
                    <div className="cta-text">
                        <h2 className="cta-title">Ready to Ensure Your Instruments Are Accurate?</h2>
                        <p className="cta-sub">Contact us today for a free consultation and quote on calibration services.</p>
                    </div>
                    <div className="cta-actions">
                        <Link to="/contact" className="btn-primary">
                            <span>Contact Us Today</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link to="/projects" className="btn-outline">View Our Projects</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
