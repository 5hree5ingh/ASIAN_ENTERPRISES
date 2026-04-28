import React from 'react';
import './Facilities.css';

/* ─── CALIBRATION DATA ─────────────────────────────────────── */
const calibrations = [
    {
        id: '01',
        name: 'Temperature & Humidity',
        short: 'Parameters Calibration',
        img: '/images/calib_temp_humidity.png',
        color: '#3b82f6',
    },
    {
        id: '02',
        name: 'Volume & Mass',
        short: 'Calibration',
        img: '/images/calib_volume_mass.png',
        color: '#06b6d4',
    },
    {
        id: '03',
        name: 'Pressure',
        short: 'Calibration',
        img: '/images/calib_pressure.png',
        color: '#8b5cf6',
    },
    {
        id: '04',
        name: 'Electro Technical',
        short: 'Calibration',
        img: '/images/calib_electro.png',
        color: '#f59e0b',
    },
    {
        id: '05',
        name: 'Dimension',
        short: 'Calibration',
        img: '/images/calib_dimension.png',
        color: '#10b981',
    },
    {
        id: '06',
        name: 'Light Intensity (Lux)',
        short: 'Calibration',
        img: '/images/calib_light_lux.png',
        color: '#f97316',
    },
    {
        id: '07',
        name: 'Acoustic & RPM',
        short: 'Calibration',
        img: '/images/calib_acoustic_rpm.png',
        color: '#ec4899',
    },
    {
        id: '08',
        name: 'Energy',
        short: 'Calibration',
        img: '/images/calib_energy.png',
        color: '#14b8a6',
    },
    {
        id: '09',
        name: 'Force',
        short: 'Calibration',
        img: '/images/calib_force.png',
        color: '#a855f7',
    },
];

/* ─── HYGRO THERMAL DATA ─────────────────────────────────── */
const hygroThermal = [
    { id: '01', name: 'RM / FG Stores', sub: 'Raw material & finished goods storage mapping' },
    { id: '02', name: 'Warehouse', sub: 'Large-area temperature & humidity qualification' },
    { id: '03', name: 'Quarantine Areas', sub: 'Controlled zone environmental monitoring' },
    { id: '04', name: 'Cold Stores', sub: 'Cold chain & refrigerated area mapping' },
];

/* ─── OTHER FACILITIES DATA ──────────────────────────────── */
const otherFacilities = [
    { id: '01', name: 'HVAC & Clean Room Test', sub: 'Airflow, pressure differential & particle count testing' },
    { id: '02', name: 'Steam Quality Test', sub: 'Dryness fraction, superheat & non-condensable gas testing' },
    { id: '03', name: 'Compressed Air Validation', sub: 'Purity, pressure, dew point & particulate validation' },
    { id: '04', name: 'PLC Validation & VFD Repair', sub: 'Automation system validation & drive servicing' },
    { id: '05', name: 'Measuring Instruments Supply', sub: 'Supply of calibrated precision measurement instruments' },
    { id: '06', name: 'Repair of Mechanical Instruments', sub: 'Expert repair and refurbishment of gauges & instruments' },
];


/* ─── VALIDATION DATA ──────────────────────────────────────── */
const validations = [
    {
        id: '01',
        name: 'Autoclave / Sterilizer',
        short: 'Validation',
        img: '/images/valid_autoclave.png',
        color: '#3b82f6',
    },
    {
        id: '02',
        name: 'Tunnels',
        short: 'Validation',
        img: '/images/valid_tunnel.png',
        color: '#06b6d4',
    },
    {
        id: '03',
        name: 'Incubators',
        short: 'Validation',
        img: '/images/valid_incubator.png',
        color: '#10b981',
    },
    {
        id: '04',
        name: 'Oven / Vacuum Oven / VTD / STD / ATD',
        short: 'Validation',
        img: '/images/valid_oven.png',
        color: '#f59e0b',
    },
    {
        id: '05',
        name: 'Muffle Furnace',
        short: 'Validation',
        img: '/images/valid_muffle.png',
        color: '#ef4444',
    },
    {
        id: '06',
        name: 'Process Reactors / Industrial Furnace',
        short: 'Validation',
        img: '/images/valid_reactor.png',
        color: '#8b5cf6',
    },
    {
        id: '07',
        name: 'Water Bath',
        short: 'Validation',
        img: '/images/calib_temp_humidity.png',
        color: '#0ea5e9',
    },
    {
        id: '08',
        name: 'Refrigerator & Deep Freezer',
        short: 'Validation',
        img: '/images/calib_pressure.png',
        color: '#6366f1',
    },
    {
        id: '09',
        name: 'Dry Heat Sterilizer (DHS)',
        short: 'Validation',
        img: '/images/valid_muffle.png',
        color: '#f97316',
    },
];

/* ─── MARQUEE ROW ──────────────────────────────────────────── */
const MarqueeRow = ({ items, reverse = false }) => {
    /* Duplicate for seamless loop */
    const doubled = [...items, ...items];
    return (
        <div className="marquee-viewport">
            <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
                {doubled.map((item, i) => (
                    <div key={i} className="fac-card glass-card">
                        <div className="fac-img-wrap">
                            <img src={item.img} alt={item.name} className="fac-img" />
                            <div className="fac-img-overlay" />
                            <span className="fac-num">{item.id}</span>
                        </div>
                        <div className="fac-body">
                            <h3 className="fac-name">{item.name}</h3>
                            <p className="fac-label">{item.short}</p>
                            <div className="fac-dot-row">
                                <span className="fac-dot" />
                                <span className="fac-dot-line" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ─── PAGE ─────────────────────────────────────────────────── */
const Facilities = ({ embedded = false }) => (
    <div className={`facilities-page${embedded ? ' facilities-embedded' : ' page-enter'}`}>

        {/* ── HERO — only shown on standalone /facilities route ── */}
        {!embedded && (
            <section className="page-hero">
                <div className="bg-grid" />
                <div className="glow-orb page-orb1" />
                <div className="container page-hero-inner">
                    <div className="section-tag">Our Services</div>
                    <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
                        Calibration &amp; <span>Validation</span> Facilities
                    </h1>
                    <p className="section-subtitle" style={{ maxWidth: '680px' }}>
                        Asian Enterprises delivered world-class calibration &amp; validation services for
                        precision measuring instruments — ensuring your instruments meet the highest accuracy standards.
                    </p>
                </div>
            </section>
        )}

        {/* ── CALIBRATION SECTION ── */}
        <section className="section fac-section">
            <div className="container">
                <div className="section-header center fac-header">
                    <div className="section-tag">Precision Measurement</div>
                    <h2 className="section-title">
                        Calibration <span>Facilities</span> We Provide
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        9 specialised calibration disciplines, each traceable to national &amp; international standards.
                    </p>
                </div>
            </div>

            {/* Scrolling marquee rows */}
            <div className="fac-marquee-wrap">
                <MarqueeRow items={calibrations} />
                <MarqueeRow items={[...calibrations].reverse()} reverse />
            </div>

            {/* Count strip */}
            <div className="container">
                <div className="fac-count-strip">
                    {calibrations.map((c) => (
                        <div key={c.id} className="fcs-pill">
                            <span className="fcs-dot" />
                            <span>{c.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* divider */}
        <div className="container">
            <div className="divider" />
        </div>

        {/* ── VALIDATION SECTION ── */}
        <section className="section fac-section">
            <div className="container">
                <div className="section-header center fac-header">
                    <div className="section-tag">Process Assurance</div>
                    <h2 className="section-title">
                        Validation <span>Facilities</span> We Provide
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Comprehensive validation services for pharmaceutical, biotech, and industrial equipment.
                    </p>
                </div>
            </div>

            <div className="fac-marquee-wrap">
                <MarqueeRow items={validations} reverse />
                <MarqueeRow items={[...validations].reverse()} />
            </div>

            <div className="container">
                <div className="fac-count-strip">
                    {validations.map((v) => (
                        <div key={v.id} className="fcs-pill">
                            <span className="fcs-dot" />
                            <span>{v.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* divider */}
        <div className="container">
            <div className="divider" />
        </div>

        {/* ── HYGRO THERMAL QUALIFICATIONS ── */}
        <section className="section fac-section">
            <div className="container">
                <div className="section-header center fac-header">
                    <div className="section-tag">Environmental Qualification</div>
                    <h2 className="section-title">
                        Hygro Thermal <span>Qualifications</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Mapping and qualification of temperature & humidity-sensitive storage areas.
                    </p>
                </div>
                <div className="fac-feature-grid">
                    {hygroThermal.map((item) => (
                        <div key={item.id} className="fac-feature-card glass-card">
                            <span className="fac-feature-num">{item.id}</span>
                            <h3 className="fac-feature-name">{item.name}</h3>
                            <p className="fac-feature-sub">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* divider */}
        <div className="container">
            <div className="divider" />
        </div>

        {/* ── OTHER FACILITIES ── */}
        <section className="section fac-section">
            <div className="container">
                <div className="section-header center fac-header">
                    <div className="section-tag">Additional Services</div>
                    <h2 className="section-title">
                        Other Facilities <span>We Offer</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Comprehensive support services to complement our calibration and validation capabilities.
                    </p>
                </div>
                <div className="fac-feature-grid fac-feature-grid--wide">
                    {otherFacilities.map((item) => (
                        <div key={item.id} className="fac-feature-card glass-card">
                            <span className="fac-feature-num">{item.id}</span>
                            <h3 className="fac-feature-name">{item.name}</h3>
                            <p className="fac-feature-sub">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── CAPABILITIES BANNER ── */}
        <section className="section cap-section">
            <div className="container">
                <div className="cap-banner glass-card">
                    <div className="cap-content">
                        <div className="section-tag">And Many More</div>
                        <h2 className="section-title">
                            Continuously <span>Expanding</span> Our Capabilities
                        </h2>
                        <p className="section-subtitle">
                            We're constantly investing in new equipment and expanding our scope of accreditation
                            to meet the growing needs of industries. Contact us to learn about upcoming facilities.
                        </p>
                    </div>
                    <div className="cap-stats">
                        <div className="cap-stat">
                            <div className="stat-number">9+</div>
                            <div className="stat-label">Calibration Disciplines</div>
                        </div>
                        <div className="cap-stat">
                            <div className="stat-number">9+</div>
                            <div className="stat-label">Validation Services</div>
                        </div>
                        <div className="cap-stat">
                            <div className="stat-number">NABL</div>
                            <div className="stat-label">Accredited</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Facilities;

