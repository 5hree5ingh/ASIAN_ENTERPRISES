import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
    ChevronDown, Ruler, Thermometer, Zap, Settings,
    Maximize2, Circle, ArrowUpDown, Search,
    Activity, Eye, Database, Droplets,
    BarChart2, Waves, Shield, Wrench,
    Scale, Gauge, Weight,
    ClipboardCheck, Wind, Cpu,
    FlaskConical, Thermometer as ThermoIcon, Wifi
} from 'lucide-react';
import './Navbar.css';

/* ── CALIBRATION MEGA MENU DATA ── */
const CALIBRATION_MENU = [
    {
        slug: 'dimensional',
        title: 'Dimensional',
        fullTitle: 'Dimensional Calibration',
        Icon: Ruler,
        services: [
            { label: 'Vernier Calipers', icon: Ruler, id: 'vernier-calipers' },
            { label: 'Micrometers', icon: Maximize2, id: 'micrometers' },
            { label: 'Dial Gauges', icon: Circle, id: 'dial-gauges' },
            { label: 'Height Gauges', icon: ArrowUpDown, id: 'height-gauges' },
            { label: 'Bore Gauges', icon: Search, id: 'bore-gauges' },
            { label: 'Thread Gauges', icon: Ruler, id: 'thread-gauges' },
        ],
    },
    {
        slug: 'thermal',
        title: 'Thermal',
        fullTitle: 'Thermal Calibration',
        Icon: Thermometer,
        services: [
            { label: 'Thermometers', icon: Thermometer, id: 'thermometers' },
            { label: 'RTDs & Thermocouples', icon: Activity, id: 'rtd-thermocouple' },
            { label: 'Infrared Thermometers', icon: Eye, id: 'infrared-thermometers' },
            { label: 'Data Loggers', icon: Database, id: 'data-loggers' },
            { label: 'Humidity Sensors', icon: Droplets, id: 'humidity-sensors' },
            { label: 'Calibration Baths', icon: Waves, id: 'calibration-baths' },
        ],
    },
    {
        slug: 'electrical',
        title: 'Electrical',
        fullTitle: 'Electrical Calibration',
        Icon: Zap,
        services: [
            { label: 'Multimeters', icon: Zap, id: 'multimeters' },
            { label: 'Clamp Meters', icon: Activity, id: 'clamp-meters' },
            { label: 'Power Analyzers', icon: BarChart2, id: 'power-analyzers' },
            { label: 'LCR Meters', icon: Waves, id: 'lcr-meters' },
            { label: 'Insulation Testers', icon: Shield, id: 'insulation-testers' },
            { label: 'Energy Meters', icon: Gauge, id: 'energy-meters' },
        ],
    },
    {
        slug: 'mechanical',
        title: 'Mechanical',
        fullTitle: 'Mechanical Calibration',
        Icon: Settings,
        services: [
            { label: 'Torque Wrenches', icon: Wrench, id: 'torque-wrenches' },
            { label: 'Force Gauges', icon: Scale, id: 'force-gauges' },
            { label: 'Pressure Gauges', icon: Gauge, id: 'pressure-gauges' },
            { label: 'Weighing Machines', icon: Weight, id: 'weighing-balances' },
            { label: 'Hardness Testers', icon: Settings, id: 'hardness-testers' },
            { label: 'Vibration & RPM', icon: Activity, id: 'vibration-rpm' },
        ],
    },
];

/* ── VALIDATION MEGA MENU DATA ── */
const VALIDATION_MENU = [
    {
        slug: 'equipment',
        title: 'Equipment',
        fullTitle: 'Equipment Qualification',
        Icon: ClipboardCheck,
        services: [
            { label: 'Autoclave Validation', icon: FlaskConical, id: 'autoclave-validation' },
            { label: 'Hot Air Oven', icon: ThermoIcon, id: 'oven-validation' },
            { label: 'Incubator & BOD', icon: Database, id: 'incubator-validation' },
            { label: 'Muffle Furnace', icon: Activity, id: 'muffle-furnace-validation' },
            { label: 'Tunnel Pasteurizer', icon: Waves, id: 'tunnel-pasteurizer-validation' },
            { label: 'Reactor & Fermenter', icon: Droplets, id: 'reactor-validation' },
        ],
    },
    {
        slug: 'utility',
        title: 'Utility',
        fullTitle: 'Utility Qualification',
        Icon: Wind,
        services: [
            { label: 'HVAC & Clean Room', icon: Wind, id: 'hvac-cleanroom' },
            { label: 'Steam Quality Testing', icon: Waves, id: 'steam-quality' },
            { label: 'Compressed Air', icon: Wifi, id: 'compressed-air' },
        ],
    },
    {
        slug: 'process',
        title: 'Process & Automation',
        fullTitle: 'Process & Automation Validation',
        Icon: Cpu,
        services: [
            { label: 'PLC / SCADA Validation', icon: Cpu, id: 'plc-validation' },
            { label: 'VFD Repair & Testing', icon: Zap, id: 'vfd-repair' },
            { label: 'Purified Water System', icon: Droplets, id: 'water-system-validation' },
        ],
    },
];

/* ── CALIBRATION MEGA PANEL ── */
const CalibrationDropdown = ({ open, scrolled }) => (
    <AnimatePresence>
        {open && (
            <motion.div
                className={`mega-panel ${scrolled ? 'mega-panel--light' : ''}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <div className="mega-panel-inner">
                    {CALIBRATION_MENU.map((cat) => {
                        const CatIcon = cat.Icon;
                        return (
                            <div key={cat.slug} className="mega-col">
                                <Link to={`/services/${cat.slug}`} className="mega-col-header">
                                    <div className="mega-col-icon"><CatIcon size={16} /></div>
                                    <span>{cat.fullTitle}</span>
                                </Link>
                                <ul className="mega-col-items">
                                    {cat.services.map((svc) => {
                                        const SvcIcon = svc.icon;
                                        return (
                                            <li key={svc.id}>
                                                <Link to={`/services/${cat.slug}/${svc.id}`} className="mega-svc-link">
                                                    <SvcIcon size={14} strokeWidth={1.8} />
                                                    <span>{svc.label}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <Link to={`/services/${cat.slug}`} className="mega-view-all">
                                    View all {cat.title} services
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="mega-bottom-bar">
                    <span className="mega-bottom-txt">NABL Accredited · ISO/IEC 17025 · NPL Traceable</span>
                    <Link to="/contact" className="mega-bottom-cta">Get a Free Quote</Link>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

/* ── VALIDATION MEGA PANEL ── */
const ValidationDropdown = ({ open, scrolled }) => (
    <AnimatePresence>
        {open && (
            <motion.div
                className={`mega-panel mega-panel--validation ${scrolled ? 'mega-panel--light' : ''}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
                <div className="mega-panel-inner mega-panel-inner--3col">
                    {VALIDATION_MENU.map((grp) => {
                        const GrpIcon = grp.Icon;
                        return (
                            <div key={grp.slug} className="mega-col">
                                <Link to={`/validation/${grp.slug}`} className="mega-col-header">
                                    <div className="mega-col-icon"><GrpIcon size={16} /></div>
                                    <span>{grp.fullTitle}</span>
                                </Link>
                                <ul className="mega-col-items">
                                    {grp.services.map((svc) => {
                                        const SvcIcon = svc.icon;
                                        return (
                                            <li key={svc.id}>
                                                <Link to={`/validation/${grp.slug}/${svc.id}`} className="mega-svc-link">
                                                    <SvcIcon size={14} strokeWidth={1.8} />
                                                    <span>{svc.label}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <Link to={`/validation/${grp.slug}`} className="mega-view-all">
                                    View all {grp.title} services
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="mega-bottom-bar">
                    <span className="mega-bottom-txt">IQ · OQ · PQ · FDA · EU GMP · WHO Compliant</span>
                    <Link to="/contact" className="mega-bottom-cta">Request Validation Quote</Link>
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

/* ════════════════════════════════════════════
   NAVBAR
════════════════════════════════════════════ */
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [calibOpen, setCalibOpen] = useState(false);
    const [validOpen, setValidOpen] = useState(false);
    const [mobileCalibOpen, setMobileCalibOpen] = useState(false);
    const [mobileValidOpen, setMobileValidOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const calibTimer = useRef(null);
    const validTimer = useRef(null);
    const isHome = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ── Scroll-spy via IntersectionObserver ── */
    useEffect(() => {
        if (!isHome) return;
        const ids = ['home', 'about', 'calibration', 'validation', 'gallery', 'partners', 'contact'];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
        );
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, [isHome]);

    useEffect(() => {
        if (!isHome) setActiveSection('home');
    }, [location, isHome]);

    useEffect(() => {
        setMenuOpen(false);
        setCalibOpen(false);
        setValidOpen(false);
    }, [location]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const makeHoverHandlers = (setter, timer) => ({
        onMouseEnter: () => { clearTimeout(timer.current); setter(true); },
        onMouseLeave: () => { timer.current = setTimeout(() => setter(false), 150); },
    });

    const calibHandlers = makeHoverHandlers(setCalibOpen, calibTimer);
    const validHandlers = makeHoverHandlers(setValidOpen, validTimer);

    const isCalibActive = isHome
        ? activeSection === 'calibration'
        : location.pathname.startsWith('/services') || location.pathname.startsWith('/calibration');
    const isValidActive = isHome
        ? activeSection === 'validation'
        : location.pathname.startsWith('/validation');

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <img src="/images/Asian_logo.png" alt="Asian Enterprises" className="logo-img" />
                </Link>

                {/* Desktop links */}
                <ul className="nav-links">
                    <li>
                        {isHome ? (
                            <button onClick={() => scrollTo('home')}
                                className={`nav-link nav-link-btn ${isHome && activeSection === 'home' ? 'active' : ''}`}>
                                Home
                            </button>
                        ) : (
                            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                        )}
                    </li>
                    <li>
                        {isHome ? (
                            <button onClick={() => scrollTo('about')}
                                className={`nav-link nav-link-btn ${isHome && activeSection === 'about' ? 'active' : ''}`}>
                                About Us
                            </button>
                        ) : (
                            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>
                        )}
                    </li>

                    {/* Calibration dropdown */}
                    <li className="nav-services-item" {...calibHandlers}>
                        <button
                            onClick={() => isHome && scrollTo('calibration')}
                            className={`nav-link nav-services-btn ${calibOpen || isCalibActive ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}>
                            Calibration
                            <motion.span animate={{ rotate: calibOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                                <ChevronDown size={14} />
                            </motion.span>
                        </button>
                        <CalibrationDropdown open={calibOpen} scrolled={scrolled} />
                    </li>

                    {/* Validation dropdown */}
                    <li className="nav-services-item" {...validHandlers}>
                        <button
                            onClick={() => isHome && scrollTo('validation')}
                            className={`nav-link nav-services-btn ${validOpen || isValidActive ? 'active' : ''} ${scrolled ? 'scrolled' : ''}`}>
                            Validation
                            <motion.span animate={{ rotate: validOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                                <ChevronDown size={14} />
                            </motion.span>
                        </button>
                        <ValidationDropdown open={validOpen} scrolled={scrolled} />
                    </li>

                    <li>
                        {isHome ? (
                            <button onClick={() => scrollTo('gallery')}
                                className={`nav-link nav-link-btn ${isHome && activeSection === 'gallery' ? 'active' : ''}`}>
                                Gallery
                            </button>
                        ) : (
                            <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
                        )}
                    </li>
                    <li>
                        {isHome ? (
                            <button onClick={() => scrollTo('partners')}
                                className={`nav-link nav-link-btn ${isHome && activeSection === 'partners' ? 'active' : ''}`}>
                                Partners
                            </button>
                        ) : (
                            <Link to="/partners" className={`nav-link ${location.pathname === '/partners' ? 'active' : ''}`}>Partners</Link>
                        )}
                    </li>
                    <li>
                        {isHome ? (
                            <button onClick={() => scrollTo('contact')}
                                className={`nav-link nav-link-btn ${isHome && activeSection === 'contact' ? 'active' : ''}`}>
                                Contact Us
                            </button>
                        ) : (
                            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
                        )}
                    </li>
                </ul>



                {/* Hamburger */}
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <Link to="/" className={`mobile-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                <Link to="/about" className={`mobile-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link>

                {/* Mobile Calibration accordion */}
                <div className="mobile-services-accord">
                    <button
                        className="mobile-link mobile-services-toggle"
                        onClick={() => setMobileCalibOpen(v => !v)}
                    >
                        <span>Calibration</span>
                        <motion.span animate={{ rotate: mobileCalibOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                            <ChevronDown size={16} />
                        </motion.span>
                    </button>
                    <AnimatePresence>
                        {mobileCalibOpen && (
                            <motion.div
                                className="mobile-services-panel"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {CALIBRATION_MENU.map(cat => {
                                    const CatIcon = cat.Icon;
                                    return (
                                        <div key={cat.slug} className="mobile-cat-group">
                                            <Link to={`/services/${cat.slug}`} className="mobile-cat-link" onClick={() => setMenuOpen(false)}>
                                                <CatIcon size={15} /><span>{cat.fullTitle}</span>
                                            </Link>
                                            {cat.services.map(svc => {
                                                const SvcIcon = svc.icon;
                                                return (
                                                    <Link key={svc.id} to={`/services/${cat.slug}/${svc.id}`} className="mobile-svc-link" onClick={() => setMenuOpen(false)}>
                                                        <SvcIcon size={13} /><span>{svc.label}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Mobile Validation accordion */}
                <div className="mobile-services-accord">
                    <button
                        className="mobile-link mobile-services-toggle"
                        onClick={() => setMobileValidOpen(v => !v)}
                    >
                        <span>Validation</span>
                        <motion.span animate={{ rotate: mobileValidOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                            <ChevronDown size={16} />
                        </motion.span>
                    </button>
                    <AnimatePresence>
                        {mobileValidOpen && (
                            <motion.div
                                className="mobile-services-panel"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {VALIDATION_MENU.map(grp => {
                                    const GrpIcon = grp.Icon;
                                    return (
                                        <div key={grp.slug} className="mobile-cat-group">
                                            <Link to={`/validation/${grp.slug}`} className="mobile-cat-link" onClick={() => setMenuOpen(false)}>
                                                <GrpIcon size={15} /><span>{grp.fullTitle}</span>
                                            </Link>
                                            {grp.services.map(svc => {
                                                const SvcIcon = svc.icon;
                                                return (
                                                    <Link key={svc.id} to={`/validation/${grp.slug}/${svc.id}`} className="mobile-svc-link" onClick={() => setMenuOpen(false)}>
                                                        <SvcIcon size={13} /><span>{svc.label}</span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <Link to="/gallery"  className={`mobile-link ${location.pathname === '/gallery'  ? 'active' : ''}`}>Gallery</Link>
                {isHome ? (
                    <button className="mobile-link" onClick={() => { scrollTo('partners'); setMenuOpen(false); }}>Partners</button>
                ) : (
                    <Link to="/partners" className={`mobile-link ${location.pathname === '/partners' ? 'active' : ''}`}>Partners</Link>
                )}
                {isHome ? (
                    <button className="mobile-link" onClick={() => { scrollTo('contact'); setMenuOpen(false); }}>Contact Us</button>
                ) : (
                    <Link to="/contact" className={`mobile-link ${location.pathname === '/contact'  ? 'active' : ''}`}>Contact Us</Link>
                )}


            </div>
        </nav>
    );
};

export default Navbar;
