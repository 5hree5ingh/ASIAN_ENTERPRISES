import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'Annual Calibration Contract – Tata Motors Pune',
        category: 'Automotive',
        desc: 'Comprehensive calibration of 1200+ instruments across production lines including torque wrenches, Vernier calipers, pressure gauges, and temperature sensors. Delivered with zero production downtime.',
        stats: { instruments: '1200+', duration: '12 Months', certs: '1200+' },
        tags: ['Dimensional', 'Torque', 'Pressure', 'Temperature'],
    },
    {
        id: 2,
        title: 'Precision Lab Setup – DRDO Research Centre',
        category: 'Defence',
        desc: 'Complete setup and calibration of precision measurement laboratory for DRDO. Supplied, installed, and calibrated 200+ instruments. Established traceability to national standards.',
        stats: { instruments: '200+', duration: '6 Months', certs: '200+' },
        tags: ['Dimensional', 'Electrical', 'Force', 'Mass'],
    },
    {
        id: 3,
        title: 'Pharma Quality Lab Calibration – Sun Pharma',
        category: 'Pharmaceutical',
        desc: 'GDP-compliant calibration of analytical balances, temperature data loggers, pH meters, and pressure equipment across 3 manufacturing facilities. All calibration records maintained digitally.',
        stats: { instruments: '450+', duration: '8 Months', certs: '450+' },
        tags: ['Temperature', 'Mass', 'Pressure', 'Electrical'],
    },
    {
        id: 4,
        title: 'Production Line CMM Calibration – Mahindra',
        category: 'Automotive',
        desc: 'Calibration and maintenance of Coordinate Measuring Machines (CMM) used in high-precision automotive manufacturing. Achieved measurement uncertainty of less than 2 microns.',
        stats: { instruments: '15 CMMs', duration: 'Ongoing', certs: '60+' },
        tags: ['CMM', 'Dimensional', 'Form', 'Surface'],
    },
    {
        id: 5,
        title: 'Hospital Equipment Calibration – Kokilaben Hospital',
        category: 'Healthcare',
        desc: 'Periodic calibration of medical measuring equipment including blood pressure monitors, thermometers, weighing scales, infusion pumps, and diagnostic devices across 4 hospital wings.',
        stats: { instruments: '300+', duration: '24 Months', certs: '300+' },
        tags: ['Temperature', 'Pressure', 'Mass', 'Electrical'],
    },
    {
        id: 6,
        title: 'Aerospace Component QC – HAL Nashik',
        category: 'Aerospace',
        desc: 'High-precision calibration for Hindustan Aeronautics Limited. Calibration of surface plates, angle gauges, thread gauges, and special purpose gauges used in aircraft component manufacturing.',
        stats: { instruments: '500+', duration: '18 Months', certs: '500+' },
        tags: ['Dimensional', 'Angle', 'Thread', 'Surface'],
    },
];

const categories = ['All', 'Automotive', 'Defence', 'Pharmaceutical', 'Healthcare', 'Aerospace'];
const categoryColors = {
    Automotive: '#3b82f6',
    Defence: '#8b5cf6',
    Pharmaceutical: '#06b6d4',
    Healthcare: '#10b981',
    Aerospace: '#f59e0b',
};

const Projects = () => {
    const [active, setActive] = React.useState('All');
    const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

    return (
        <div className="projects-page page-enter">
            {/* Page Header */}
            <section className="page-hero">
                <div className="bg-grid" />
                <div className="glow-orb page-orb1" />
                <div className="container page-hero-inner">
                    <div className="section-tag">Our Work</div>
                    <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
                        Projects That Define <span>Our Excellence</span>
                    </h1>
                    <p className="section-subtitle" style={{ maxWidth: '680px' }}>
                        From automotive giants to aerospace laboratories, our calibration expertise has powered
                        quality control operations across India's most demanding industries.
                    </p>
                </div>
            </section>

            {/* Filter */}
            <section className="section">
                <div className="container">
                    <div className="proj-filters">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`proj-filter-btn ${active === cat ? 'active' : ''}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="projects-grid">
                        {filtered.map(proj => (
                            <div key={proj.id} className="project-card glass-card">
                                <div className="pc-header">
                                    <span
                                        className="pc-category"
                                        style={{ color: categoryColors[proj.category], borderColor: `${categoryColors[proj.category]}40`, background: `${categoryColors[proj.category]}15` }}
                                    >
                                        {proj.category}
                                    </span>
                                    <div className="pc-number">#{String(proj.id).padStart(2, '0')}</div>
                                </div>
                                <h3 className="pc-title">{proj.title}</h3>
                                <p className="pc-desc">{proj.desc}</p>
                                <div className="pc-stats">
                                    <div className="pc-stat">
                                        <span className="pc-stat-val">{proj.stats.instruments}</span>
                                        <span className="pc-stat-lbl">Instruments</span>
                                    </div>
                                    <div className="pc-stat-divider" />
                                    <div className="pc-stat">
                                        <span className="pc-stat-val">{proj.stats.duration}</span>
                                        <span className="pc-stat-lbl">Duration</span>
                                    </div>
                                    <div className="pc-stat-divider" />
                                    <div className="pc-stat">
                                        <span className="pc-stat-val">{proj.stats.certs}</span>
                                        <span className="pc-stat-lbl">Certificates</span>
                                    </div>
                                </div>
                                <div className="pc-tags">
                                    {proj.tags.map((tag, i) => (
                                        <span key={i} className="pc-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ background: 'var(--bg-dark)', paddingTop: 0 }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="section-tag" style={{ justifyContent: 'center' }}>Start a Project</div>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>
                        Have an Upcoming <span>Calibration Requirement?</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto 36px' }}>
                        Let us tailor a calibration plan perfectly suited to your industry and needs.
                    </p>
                    <Link to="/contact" className="btn-primary" style={{ margin: '0 auto' }}>
                        <span>Discuss Your Requirements</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Projects;
