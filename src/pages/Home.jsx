import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AboutMain from './AboutMain';
import Facilities from './Facilities';

/* ── Animated counter hook ── */
const useCountUp = (end, duration = 2000, delay = 0) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    const start = useCallback(() => {
        if (started) return;
        setStarted(true);

        const startTime = performance.now() + delay;
        const step = (now) => {
            const elapsed = now - startTime;
            if (elapsed < 0) { requestAnimationFrame(step); return; }
            const progress = Math.min(elapsed / duration, 1);
            // easeOutQuart for a satisfying deceleration
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [end, duration, delay, started]);

    return [count, start];
};

/* ── CountUp component with IntersectionObserver ── */
const CountUp = ({ end, suffix = '', duration = 2000, delay = 0 }) => {
    const [count, start] = useCountUp(end, duration, delay);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { start(); observer.disconnect(); } },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [start]);

    return <span ref={ref}>{count}{suffix}</span>;
};

const Home = () => {
    return (
        <div className="home page-enter">
            {/* ─── HERO ─── */}
            <section id="home-hero" className="hero">
                {/* Full-screen bg image */}
                <div className="hero-bg" />
                {/* Gradient overlay for text legibility */}
                <div className="hero-overlay" />

                {/* Floating badge */}
                <div className="hero-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    ISO/IEC 17025 &amp; NABL Accredited
                </div>

                {/* Hero content — left aligned */}
                <div className="hero-content">
                    <h1 className="hero-title">
                        Precision<br />
                        Calibration<br />
                        <span className="hero-title-accent">Services</span>
                    </h1>
                    <p className="hero-subtitle">
                        Delivering world-class calibration &amp; validation services for
                        precision measuring instruments — ensuring your instruments meet
                        the highest accuracy standards.
                    </p>

                    <div className="hero-actions">
                        <a
                            href="https://wa.me/919760188223?text=Hello%20Asian%20Enterprises!%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20precision%20calibration%20and%20measurement%20services.%0A%0ACould%20you%20please%20provide%20a%20quote%20for%20my%20requirements%3F%0A%0AThank%20you!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-btn-primary"
                        >
                            Get a Free Quote
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <Link to="/about" className="hero-btn-outline">
                            Learn More
                        </Link>
                    </div>

                    {/* Stats row — animated counters */}
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat-number">
                                <CountUp end={25} suffix="+" duration={2000} />
                            </span>
                            <span className="hero-stat-label">Years Experience</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat">
                            <span className="hero-stat-number">
                                <CountUp end={750} suffix="+" duration={2000} delay={200} />
                            </span>
                            <span className="hero-stat-label">Satisfied Clients</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat">
                            <span className="hero-stat-number">
                                <CountUp end={5000} suffix="+" duration={2500} delay={400} />
                            </span>
                            <span className="hero-stat-label">Calibrations / Year</span>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="hero-scroll-indicator">
                    <div className="scroll-line" />
                    <span className="scroll-text">Scroll</span>
                </div>
            </section>

            {/* ─── SERVICES STRIP ─── */}
            <section className="services-strip">
                <div className="container services-strip-inner">
                    {[
                        { icon: '⚙️', title: 'Dimensional', desc: 'Calipers, Micrometers, Gauges' },
                        { icon: '🌡️', title: 'Thermal', desc: 'Temperature & Humidity' },
                        { icon: '⚡', title: 'Electrical', desc: 'Multimeters, Clamp Meters' },
                        { icon: '💪', title: 'Mechanical', desc: 'Force, Torque, Pressure' },
                    ].map((svc, i) => (
                        <div key={i} className="service-strip-card">
                            <span className="ssc-icon">{svc.icon}</span>
                            <div>
                                <div className="ssc-title">{svc.title}</div>
                                <div className="ssc-desc">{svc.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── WHY CHOOSE US ─── */}
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
