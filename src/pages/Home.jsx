import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { ArrowUpDown, Circle, Gauge, Maximize2, Ruler, Scale, Search, Settings, Thermometer, Wrench } from 'lucide-react';
import Testimonials from '../components/Testimonials';
import './Home.css';
import './Gallery.css';
import './Contact.css';

import emailjs from '@emailjs/browser';

/* ── Inline contact form for Home page ── */
function HomeContactForm() {
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

    if (submitted) {
        return (
            <div className="contact-form-box glass-card">
                <div className="form-success">
                    <div className="success-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>
                    <h3>Enquiry Received!</h3>
                    <p>Thank you for reaching out. Our team will contact you within 24 business hours.</p>
                    <button className="btn-outline" onClick={() => setSubmitted(false)}>Send Another Enquiry</button>
                </div>
            </div>
        );
    }
    return (
        <div className="contact-form-box glass-card">
            <h3 className="form-title">Request a Quote</h3>
            <p className="form-sub">Fill the form and our team will get back to you shortly.</p>
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
                <div className="form-group">
                    <label>Service Required *</label>
                    <select name="service" required defaultValue="">
                        <option value="" disabled>Select a service...</option>
                        <option>Dimensional Calibration</option>
                        <option>Pressure Calibration</option>
                        <option>Temperature Calibration</option>
                        <option>Torque Calibration</option>
                        <option>Electrical Calibration</option>
                        <option>Mass &amp; Volume Calibration</option>
                        <option>On-site Calibration</option>
                        <option>Annual Maintenance Contract</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Message / Details</label>
                    <textarea name="message" rows="4" placeholder="Describe your requirement, number of instruments, timeline, etc." />
                </div>
                <button type="submit" className="btn-primary form-submit" disabled={submitting}>
                    <span>{submitting ? 'Sending...' : 'Send Enquiry'}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                </button>
            </form>
        </div>
    );
}

/* ── Gallery preview images (6 best shots — uniform grid) ── */
const GALLERY_PREVIEW = [
    { id: 1, src: '/images/company_images/C1.png', label: 'Temperature Calibration Lab' },
    { id: 2, src: '/images/company_images/C2.png', label: 'Electrical Standards Bench' },
    { id: 3, src: '/images/company_images/C4.png', label: 'Weight Standards – Reference Set' },
    { id: 4, src: '/images/company_images/C5.png', label: 'Dimensional Measuring Tools' },
    { id: 5, src: '/images/company_images/C7.png', label: 'Equipment Overview' },
    { id: 6, src: '/images/company_images/C8.png', label: 'Calibration Bench' },
];

const INSTRUMENTS = [
    { name: 'Vernier Calipers', category: 'Dimensional', Icon: Ruler },
    { name: 'Micrometers', category: 'Dimensional', Icon: Maximize2 },
    { name: 'Dial Gauges', category: 'Dimensional', Icon: Circle },
    { name: 'Depth Gauges', category: 'Dimensional', Icon: ArrowUpDown },
    { name: 'Height Gauges', category: 'Dimensional', Icon: ArrowUpDown },
    { name: 'Bore Gauges', category: 'Dimensional', Icon: Search },
    { name: 'Thread Gauges', category: 'Dimensional', Icon: Ruler },
    { name: 'Angle Gauges', category: 'Dimensional', Icon: Settings },
    { name: 'Torque Wrenches', category: 'Mechanical', Icon: Wrench },
    { name: 'Pressure Gauges', category: 'Mechanical', Icon: Gauge },
    { name: 'Temperature Instruments', category: 'Thermal', Icon: Thermometer },
    { name: 'Force Gauges', category: 'Mechanical', Icon: Scale },
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
                <circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
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
                <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
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
                <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
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
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
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
    const navigate = useNavigate();
    const location = useLocation();
    const [selected, setSelected] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);

    /* ── Scroll to hash section when navigating from another page ── */
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    if (window.__lenis) {
                        window.__lenis.scrollTo(el, { offset: -90, duration: 1.6 });
                    } else {
                        const top = el.getBoundingClientRect().top + window.scrollY - 90;
                        window.scrollTo({ top, behavior: 'smooth' });
                    }
                }
            }, 100);
        }
    }, [location]);

    const openLightbox = (item, idx) => {
        setSelected(item);
        setSelectedIndex(idx);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelected(null);
        setSelectedIndex(null);
        document.body.style.overflow = '';
    };

    const navigateLightbox = useCallback(
        dir => {
            if (selectedIndex === null) return;
            const next = (selectedIndex + dir + GALLERY_PREVIEW.length) % GALLERY_PREVIEW.length;
            setSelected(GALLERY_PREVIEW[next]);
            setSelectedIndex(next);
        },
        [selectedIndex]
    );

    useEffect(() => {
        const handler = e => {
            if (!selected) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateLightbox(1);
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [selected, navigateLightbox]);

    useEffect(() => () => { document.body.style.overflow = ''; }, []);

    return (
        <div className="home page-enter">

            {/* ─── HERO ─── */}
            <section id="home" className="hero">
                <div className="hero-bg" />
                <div className="hero-overlay" />


                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    {/* Top group — title */}
                    <div className="hero-top">
                        <h1 className="hero-title">
                            <span className="hero-brand-tag">Asian Enterprises</span>
                            Asian<br />
                            Calibration<br />
                            <span className="hero-title-accent">Pvt Ltd</span>
                        </h1>
                    </div>

                    {/* Bottom group — subtitle, buttons, stats */}
                    <div className="hero-bottom">
                        <p className="hero-subtitle">
                            Asian Enterprises delivered world-class calibration &amp; validation services for
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
                    </div>
                </motion.div>

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
                            <h2 className="section-title">Our Calibration <span>Services</span></h2>
                            <div className="section-title-underline" />
                        </div>
                    </FadeInSection>

                    <div className="services-grid">
                        {services.map((svc, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <motion.div
                                    className="service-card"
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    onClick={() => navigate(`/services/${svc.slug}`)}
                                    style={{ cursor: 'pointer' }}
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
                            <h2 className="section-title">Our Validation <span>Services</span></h2>
                            <div className="section-title-underline" />
                            <p className="section-subtitle">
                                Asian Enterprises delivers IQ, OQ &amp; PQ validation for equipment, utilities,
                                and automated systems — compliant with FDA, EU GMP, and WHO regulations.
                            </p>
                        </div>
                    </FadeInSection>

                    <div className="services-grid services-grid--4col">
                        {[
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                                        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                                    </svg>
                                ),
                                slug: 'equipment',
                                title: 'Equipment Qualification',
                                desc: 'IQ, OQ & PQ validation of critical process equipment in pharmaceutical, biotech, and food manufacturing.',
                                items: ['Autoclave Validation', 'Hot Air Oven', 'Incubator & BOD', 'Muffle Furnace'],
                                img: '/images/val_equipment.png',
                                path: '/validation/equipment',
                            },
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                                        <path d="M14 4v10.54a4 4 0 11-4 0V4a2 2 0 014 0z" />
                                    </svg>
                                ),
                                slug: 'thermal',
                                title: 'Thermal & Reactor Qualification',
                                desc: 'Validation of pasteurisation systems, reactors, and fermenters in food, beverage, and chemical manufacturing.',
                                items: ['Tunnel Pasteurizer', 'Reactor & Fermenter'],
                                img: '/images/val_thermal.png',
                                path: '/validation/thermal',
                            },
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                                        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
                                    </svg>
                                ),
                                slug: 'utility',
                                title: 'Utility Qualification',
                                desc: 'Testing and qualification of critical utilities — clean rooms, steam systems, compressed air, and purified water.',
                                items: ['HVAC & Clean Room', 'Steam Quality Testing', 'Compressed Air', 'Purified Water'],
                                img: '/images/val_utility.png',
                                path: '/validation/utility',
                            },
                            {
                                icon: (
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="var(--blue-700)">
                                        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                                    </svg>
                                ),
                                slug: 'process',
                                title: 'Process & Automation',
                                desc: 'Validation of PLCs, SCADA systems, and VFDs in GMP and regulated environments.',
                                items: ['PLC / SCADA Validation', 'VFD Repair & Testing'],
                                img: '/images/val_process.png',
                                path: '/validation/process',
                            },
                        ].map((svc, i) => (
                            <FadeInSection key={i} delay={i * 0.1}>
                                <motion.div
                                    className="service-card service-card--flex"
                                    whileHover={{ y: -8 }}
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                    onClick={() => navigate(svc.path)}
                                    style={{ cursor: 'pointer' }}
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
                            <div className="section-title-underline" />
                            <p className="section-subtitle" style={{ maxWidth: '560px', margin: '12px auto 0' }}>
                                Asian Enterprises calibrates precision instruments across all major disciplines,
                                traceable to national &amp; international standards.
                            </p>
                        </div>
                    </FadeInSection>
                    <div className="instruments-grid">
                        {INSTRUMENTS.map(({ name, category, Icon }, i) => (
                            <motion.div
                                key={i}
                                className="instrument-tag"
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.35 }}
                                whileHover={{ y: -5 }}
                            >
                                <span className="instrument-icon">
                                    <Icon size={20} strokeWidth={2.1} />
                                </span>
                                <span className="instrument-copy">
                                    <span className="instrument-name">{name}</span>
                                    <span className="instrument-category">{category}</span>
                                </span>
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
                            <h2 className="section-title">Our <span>Work &amp; Facilities</span></h2>
                            <div className="section-title-underline" />
                            <p className="section-subtitle" style={{ maxWidth: '560px', margin: '12px auto 0' }}>
                                A glimpse into Asian Enterprises' state-of-the-art laboratories, precision
                                instruments, and on-site calibration operations.
                            </p>
                        </div>
                    </FadeInSection>

                    <div className="home-gallery-grid">
                        {GALLERY_PREVIEW.slice(0, 6).map((img, i) => (
                            <motion.div
                                key={img.id}
                                className="hg-item"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.5 }}
                                whileHover={{ scale: 1.03, zIndex: 2 }}
                                onClick={() => openLightbox(img, i)}
                                style={{ cursor: 'pointer' }}
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

            {/* ─── CLIENT TESTIMONIALS ─── */}
            <section id="partners" className="section" style={{ background: '#ffffff' }}>
                <div className="container">
                    <FadeInSection>
                        <div className="section-header center" style={{ marginBottom: '20px' }}>
                            <h2 className="section-title">What Our <span>Clients</span> <span>Say</span></h2>
                            <div className="section-title-underline" />
                        </div>
                    </FadeInSection>
                    <Testimonials />
                </div>
            </section>

            {/* ─── CONTACT US SECTION ─── */}
            <section id="contact" className="section" style={{ background: 'var(--bg-page)' }}>
                <div className="container">
                    <FadeInSection>
                        <div className="section-header center" style={{ marginBottom: '20px' }}>
                            <h2 className="section-title">Let's Discuss Your <span>Calibration Needs</span></h2>
                            <div className="section-title-underline" />
                        </div>
                    </FadeInSection>

                    <div className="contact-grid">
                        {/* Info */}
                        <FadeInSection delay={0.1}>
                            <div className="contact-info">
                                <h3 className="contact-info-title">Contact Information</h3>
                                <p className="contact-info-sub">For urgent calibration needs, call us directly.</p>
                                <div className="contact-cards">
                                    {[
                                        {
                                            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
                                            label: 'Head Office',
                                            value: 'Plot -2A, Shivani puram-2, Jamalpur kalan, Jagjeetpur Road, Raja Garden, Haridwar -249407(U.K) India',
                                        },
                                        {
                                            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.1 19.79 19.79 0 01.01 2.37a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.44 2.03L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.03-.44c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" /></svg>,
                                            label: 'Phone',
                                            value: '+91 97601 88223 | +91 94111 11480',
                                        },
                                        {
                                            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
                                            label: 'Email',
                                            value: 'asianhdr@yahoo.com | asian_e@yahoo.com',
                                        },
                                        {
                                            icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
                                            label: 'Working Hours',
                                            value: 'Mon – Sat: 9:00 AM – 6:00 PM',
                                        },
                                    ].map((c, i) => (
                                        <div key={i} className="contact-card glass-card">
                                            <div className="cc-icon">{c.icon}</div>
                                            <div>
                                                <div className="cc-label">{c.label}</div>
                                                <div className="cc-value">{c.value}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Form */}
                        <FadeInSection delay={0.2}>
                            <HomeContactForm />
                        </FadeInSection>
                    </div>
                </div>
            </section>

            {/* ── Lightbox (portal to body) ── */}
            {selected && ReactDOM.createPortal(
                <div className="lightbox" onClick={closeLightbox}>
                    <button className="lb-close" onClick={closeLightbox} aria-label="Close">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>

                    <button className="lb-nav lb-prev" onClick={e => { e.stopPropagation(); navigateLightbox(-1); }} aria-label="Previous">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div className="lb-card" onClick={e => e.stopPropagation()}>
                        <div className="lb-visual">
                            <img src={selected.src} alt={selected.label} className="lb-img" />
                        </div>
                        <div className="lb-info">
                            <h3 className="lb-title">{selected.label}</h3>
                            <p className="lb-desc">
                                Professional documentation of Asian Enterprises' precision calibration processes
                                and laboratory infrastructure.
                            </p>
                            <div className="lb-counter">{selectedIndex + 1} / {GALLERY_PREVIEW.length}</div>
                        </div>
                    </div>

                    <button className="lb-nav lb-next" onClick={e => { e.stopPropagation(); navigateLightbox(1); }} aria-label="Next">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>,
                document.body
            )}
        </div>
    );
};

export default Home;
