import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import './Home.css';

/* ── Gallery preview images (10 best shots) ── */
const GALLERY_PREVIEW = [
  { id: 1, src: '/images/company_images/C1.png',  label: 'Temperature Calibration Lab',       wide: true  },
  { id: 2, src: '/images/company_images/C2.png',  label: 'Electrical Standards Bench',        wide: false },
  { id: 3, src: '/images/company_images/C4.png',  label: 'Weight Standards – Reference Set',  wide: false },
  { id: 4, src: '/images/company_images/C5.png',  label: 'Dimensional Measuring Tools',       wide: false },
  { id: 5, src: '/images/company_images/C7.png',  label: 'Equipment Overview',                wide: true  },
  { id: 6, src: '/images/company_images/C8.png',  label: 'Calibration Bench',                 wide: false },
  { id: 7, src: '/images/company_images/C9.png',  label: 'Thermal Calibration Unit',          wide: false },
  { id: 8, src: '/images/company_images/C11.png', label: 'Field Calibration – On-site',       wide: false },
  { id: 9, src: '/images/company_images/C6.png',  label: 'Reference Standards',               wide: false },
  { id: 10, src: '/images/company_images/C12.png', label: 'On-site Measurement',               wide: false },
];

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
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [end, duration, delay, started]);

    return [count, start];
};

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

/* ── Fade-in section wrapper ── */
const FadeInSection = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            {children}
        </motion.div>
    );
};

/* ── Services data ── */
const services = [
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
            </svg>
        ),
        slug: 'dimensional',
        title: 'Dimensional Calibration',
        desc: 'Precise calibration of all dimensional measuring instruments to national and international standards.',
        items: ['Vernier Calipers', 'Micrometers', 'Dial Gauges', 'Height Gauges'],
        img: '/images/service_dimensional.png',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>
            </svg>
        ),
        slug: 'thermal',
        title: 'Thermal Calibration',
        desc: 'Temperature and humidity instrument calibration for labs, pharma, and industrial environments.',
        items: ['Thermometers', 'Data Loggers', 'Humidity Sensors', 'Calibrators'],
        img: '/images/service_thermal.png',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
        ),
        slug: 'electrical',
        title: 'Electrical Calibration',
        desc: 'Comprehensive calibration of electrical and electronic test instruments with full traceability.',
        items: ['Multimeters', 'Clamp Meters', 'Power Analyzers', 'LCR Meters'],
        img: '/images/service_electrical.png',
    },
    {
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
            </svg>
        ),
        slug: 'mechanical',
        title: 'Mechanical Calibration',
        desc: 'NABL-accredited calibration of force, torque, and pressure measuring instruments.',
        items: ['Torque Wrenches', 'Force Gauges', 'Pressure Gauges', 'Load Cells'],
        img: '/images/service_mechanical.png',
    },
];

const Home = () => {
    return (
        <div className="home page-enter">

            {/* ─── HERO ─── */}
            <section id="home" className="hero">
                <div className="hero-bg" />
                <div className="hero-overlay" />

                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    ISO/IEC 17025 &amp; NABL Accredited
                </motion.div>

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
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
                        <motion.a
                            href="https://wa.me/919760188223?text=Hello%20Asian%20Enterprises!%20I%20am%20interested%20in%20your%20calibration%20services."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-btn-primary"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Get a Free Quote
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </motion.a>
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                            <Link to="/about" className="hero-btn-outline">Learn More</Link>
                        </motion.div>
                    </div>

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
                </motion.div>

                <div className="hero-scroll-indicator">
                    <div className="scroll-line" />
                    <span className="scroll-text">Scroll</span>
                </div>
            </section>

            {/* ─── ABOUT SECTION ─── */}
            <section id="about" className="about-main-section">
                <div className="container am-inner">
                    {/* Left — Image */}
                    <FadeInSection>
                        <div className="am-image-col">
                            <div className="am-image-wrap">
                                <img
                                    src="/images/about_lab_premium.png"
                                    alt="Precision Calibration Lab"
                                    className="am-image"
                                />
                                <div className="am-image-overlay-badge">
                                    <span className="am-badge-num">25+</span>
                                    <span className="am-badge-txt">Years<br />Experience</span>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay={0.15}>
                        <div className="am-content-col">
                            <div className="am-tag">Why Asian Enterprises</div>
                            <h2 className="am-title">Built on <span>Precision</span> &<br />Trust</h2>
                            <p className="am-subtitle">
                                With over 25 years of expertise, we are the preferred calibration partner for
                                manufacturing, aerospace, automotive, and quality control labs across the region.
                            </p>
                            <div className="am-points">
                                {[
                                    'ISO/IEC 17025 Accredited Laboratory',
                                    'NABL-Compliant Calibration Procedures',
                                    'Experienced & Certified Technicians',
                                    'On-site & In-lab Calibration Services',
                                    'Quick Turnaround Time Guaranteed',
                                    'Comprehensive Calibration Certificates',
                                ].map((pt, i) => (
                                    <motion.div key={i} className="am-point"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08, duration: 0.4 }}
                                    >
                                        <div className="am-check">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <path d="M20 6L9 17l-5-5" />
                                            </svg>
                                        </div>
                                        <span>{pt}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <Link to="/about" className="am-btn">
                                <span>Learn More About Us</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* ─── CALIBRATION SERVICES SECTION ─── */}
            <section id="calibration" className="services-section">
                <div className="container">
                    <FadeInSection>
                        <div className="section-header center">
                            <div className="section-tag">What We Do</div>
                            <h2 className="section-title">Our Calibration <span>Services</span></h2>
                            <p className="section-subtitle">
                                NABL-accredited calibration across all major disciplines —
                                traceable to national and international standards.
                            </p>
                        </div>
                    </FadeInSection>

                    <div className="services-grid">
                        {services.map((svc, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <motion.div
                                    className="service-card"
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <div style={{ overflow: 'hidden' }}>
                                        <img
                                            src={svc.img}
                                            alt={svc.title}
                                            className="service-card-img"
                                        />
                                    </div>
                                    <div className="service-card-body">
                                        <div className="service-card-icon">{svc.icon}</div>
                                        <h3 className="service-card-title">{svc.title}</h3>
                                        <p className="service-card-desc">{svc.desc}</p>
                                        <div className="service-card-items">
                                            {svc.items.map((item, j) => (
                                                <span key={j} className="service-item-tag">
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                        <path d="M20 6L9 17l-5-5" />
                                                    </svg>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                        <Link to={`/services/${svc.slug}`} className="service-card-link">
                                            Explore Service
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </motion.div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── VALIDATION SECTION ─── */}
            <section id="validation" className="services-section validation-services-section" style={{ background: '#f0f4ff' }}>
                <div className="container">
                    <FadeInSection>
                        <div className="section-header center">
                            <div className="section-tag">Validation &amp; Qualification</div>
                            <h2 className="section-title">Our Validation <span>Services</span></h2>
                            <p className="section-subtitle">
                                IQ, OQ &amp; PQ validation for equipment, utilities, and automated systems —
                                compliant with FDA, EU GMP, and WHO regulations.
                            </p>
                        </div>
                    </FadeInSection>

                    <div className="services-grid services-grid--3col">
                        {[
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                                        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
                                    </svg>
                                ),
                                slug: 'equipment',
                                title: 'Equipment Qualification',
                                desc: 'IQ, OQ & PQ validation of critical process equipment in pharmaceutical, biotech, and food manufacturing.',
                                items: ['Autoclave Validation', 'Hot Air Oven', 'Incubator & BOD', 'Muffle Furnace'],
                                img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
                                path: '/validation/equipment',
                            },
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                                        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2"/>
                                    </svg>
                                ),
                                slug: 'utility',
                                title: 'Utility Qualification',
                                desc: 'Testing and qualification of critical utilities — clean rooms, steam systems, compressed air, and purified water.',
                                items: ['HVAC & Clean Room', 'Steam Quality Testing', 'Compressed Air', 'Purified Water'],
                                img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                                path: '/validation/utility',
                            },
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                                        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                                    </svg>
                                ),
                                slug: 'process',
                                title: 'Process & Automation',
                                desc: 'Validation of PLCs, SCADA systems, VFDs, and purified water systems in GMP and regulated environments.',
                                items: ['PLC / SCADA Validation', 'VFD Repair & Testing', 'Water System Validation'],
                                img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
                                path: '/validation/process',
                            },
                        ].map((svc, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <motion.div
                                    className="service-card service-card--flex"
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                >
                                    <div style={{ overflow: 'hidden' }}>
                                        <img src={svc.img} alt={svc.title} className="service-card-img" />
                                    </div>
                                    <div className="service-card-body">
                                        <div className="service-card-icon">{svc.icon}</div>
                                        <h3 className="service-card-title">{svc.title}</h3>
                                        <p className="service-card-desc">{svc.desc}</p>
                                        <div className="service-card-items">
                                            {svc.items.map((item, j) => (
                                                <span key={j} className="service-item-tag">
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                        <path d="M20 6L9 17l-5-5" />
                                                    </svg>
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                        <Link to={svc.path} className="service-card-link" style={{ marginTop: 'auto' }}>
                                            Explore Service
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </motion.div>
                            </FadeInSection>
                        ))}
                    </div>
                </div>
            </section>



            {/* ─── INSTRUMENTS WE CALIBRATE ─── */}
            <section className="section instruments-section">
                <div className="container">
                    <FadeInSection>
                        <div className="section-header center">
                            <div className="section-tag">Our Expertise</div>
                            <h2 className="section-title">Instruments We <span>Calibrate</span></h2>
                        </div>
                    </FadeInSection>
                    <div className="instruments-grid">
                        {[
                            'Vernier Calipers', 'Micrometers', 'Dial Gauges', 'Depth Gauges',
                            'Height Gauges', 'Bore Gauges', 'Thread Gauges', 'Angle Gauges',
                            'Torque Wrenches', 'Pressure Gauges', 'Temperature Instruments', 'Force Gauges',
                        ].map((inst, i) => (
                            <motion.div
                                key={i}
                                className="instrument-tag"
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.35 }}
                                whileHover={{ y: -3 }}
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                                {inst}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── GALLERY PREVIEW ─── */}
            <section id="gallery" className="section gallery-home-section">
                <div className="container">
                    <FadeInSection>
                        <div className="section-header center" style={{ marginBottom: '40px' }}>
                            <div className="section-tag">Gallery</div>
                            <h2 className="section-title">Our <span>Work &amp; Facilities</span></h2>
                            <p className="section-subtitle" style={{ maxWidth: '560px', margin: '12px auto 0' }}>
                                A glimpse into our state-of-the-art laboratories, precision instruments,
                                and on-site calibration operations.
                            </p>
                        </div>
                    </FadeInSection>

                    <div className="home-gallery-grid">
                        {GALLERY_PREVIEW.map((img, i) => (
                            <motion.div
                                key={img.id}
                                className={`hg-item${img.wide ? ' hg-wide' : ''}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.5 }}
                                whileHover={{ scale: 1.03, zIndex: 2 }}
                            >
                                <img src={img.src} alt={img.label} className="hg-img" loading="lazy" />
                                <div className="hg-overlay">
                                    <span className="hg-label">{img.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <FadeInSection delay={0.2}>
                        <div style={{ textAlign: 'center', marginTop: '40px' }}>
                            <Link to="/gallery" className="btn-primary" style={{ display: 'inline-flex', gap: '10px', alignItems: 'center' }}>
                                <span>View Full Gallery</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </FadeInSection>
                </div>
            </section>

            {/* ─── CTA BANNER ─── */}
            <section className="cta-banner">
                <div className="cta-bg-grid" />
                <div className="cta-glow" />
                <div className="container cta-inner">
                    <FadeInSection>
                        <div className="cta-text">
                            <h2 className="cta-title">Ready to Ensure Your Instruments Are Accurate?</h2>
                            <p className="cta-sub">Contact us today for a free consultation and quote on calibration services.</p>
                        </div>
                    </FadeInSection>
                    <div className="cta-actions">
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link to="/contact" className="btn-primary">
                                <span>Contact Us Today</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                            <Link to="/projects" className="btn-outline">View Our Projects</Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
