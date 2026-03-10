import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import CaliperGraphic from '../components/CaliperGraphic';
import AboutMain from './AboutMain';
import Facilities from './Facilities';



const highlights = [
    { number: '20+', label: 'Years Experience' },
    { number: '375', label: 'Instruments Calibrated' },
    { number: '750', label: 'Satisfied Clients' },
];

const Home = () => {
    return (
        <div className="home page-enter">
            {/* ─── HERO ─── */}
            <section id="home-hero" className="hero">
                <div className="bg-grid" />
                <div className="glow-orb hero-orb1" />
                <div className="glow-orb hero-orb2" />

                <div className="hero-inner container">
                    {/* Left: Text Content */}
                    <div className="hero-content">
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
                            <a
                                href="https://wa.me/919760188223?text=Hello%20Asian%20Enterprises!%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20precision%20calibration%20and%20measurement%20services.%0A%0ACould%20you%20please%20provide%20a%20quote%20for%20my%20requirements%3F%0A%0AThank%20you!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <span>Get a Free Quote</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a
                                href="#facilities-section"
                                className="btn-outline"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('facilities-section')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                Our Facilities
                            </a>
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

                    {/* Right: 3D Caliper Graphic */}
                    <div className="hero-graphic">
                        <CaliperGraphic />
                    </div>
                </div>

                <div className="hero-scroll-hint">
                    <div className="scroll-arrow" />
                </div>
            </section>


            {/* ─── WHY CHOOSE US (About Main) ─── */}
            <AboutMain />

            {/* ─── FACILITIES ─── */}
            <section id="facilities-section">
                <Facilities embedded />
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
