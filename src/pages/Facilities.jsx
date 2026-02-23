import React from 'react';
import './Facilities.css';
import './About.css';

const facilities = [
    {
        id: '01',
        name: 'Dimensional Calibration Lab',
        location: 'Mumbai HQ',
        desc: 'State-of-the-art lab for calibrating all dimensional measuring instruments including Vernier calipers, micrometers, height gauges, and bore gauges. Temperature-controlled environment to ±1°C.',
        instruments: ['Vernier Calipers', 'Micrometers', 'Height Gauges', 'Bore Gauges'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        id: '02',
        name: 'Torque & Force Calibration Centre',
        location: 'Pune Branch',
        desc: 'Dedicated facility for precision calibration of torque wrenches, force gauges, dynamometers, and load cells with traceability to national standards.',
        instruments: ['Torque Wrenches', 'Force Gauges', 'Dynamometers', 'Load Cells'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
    {
        id: '03',
        name: 'Pressure & Vacuum Lab',
        location: 'Nashik Branch',
        desc: 'Fully equipped pressure calibration laboratory for gauges, transmitters, and transducers. Calibration range from vacuum to 1000 bar with high-precision reference standards.',
        instruments: ['Pressure Gauges', 'Transmitters', 'Transducers', 'Vacuum Gauges'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" />
            </svg>
        ),
    },
    {
        id: '04',
        name: 'Temperature Metrology Lab',
        location: 'Aurangabad Branch',
        desc: 'Advanced temperature calibration facility for thermometers, thermocouples, RTDs, and data loggers. NABL accredited for temperature calibration.',
        instruments: ['Thermometers', 'Thermocouples', 'RTD Sensors', 'Data Loggers'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z" />
            </svg>
        ),
    },
    {
        id: '05',
        name: 'Electrical & Electronic Standards Lab',
        location: 'Navi Mumbai Branch',
        desc: 'Precision electrical calibration for multimeters, oscilloscopes, clamp meters, power analyzers, and electronic measurement instruments.',
        instruments: ['Multimeters', 'Oscilloscopes', 'Clamp Meters', 'Power Analyzers'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
    {
        id: '06',
        name: 'Mass & Volume Calibration Lab',
        location: 'Surat Branch',
        desc: 'Calibration of weighing scales, balances, weights, and volumetric glassware. Certified to national and international standards for mass measurement.',
        instruments: ['Balances', 'Weighing Scales', 'Reference Weights', 'Burettes'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3v18M3 9h18M3 15h18" />
            </svg>
        ),
    },
    {
        id: '07',
        name: 'On-site Mobile Calibration Unit',
        location: 'Pan-India Service',
        desc: 'Fully equipped mobile laboratory for on-site calibration at client premises. Serving manufacturing plants, hospitals, and research facilities across India.',
        instruments: ['All Standard Instruments', 'Process Instruments', 'Panel Instruments', 'QC Equipment'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v4h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ),
    },
    {
        id: '08',
        name: 'Repair & Restoration Workshop',
        location: 'Mumbai HQ',
        desc: 'Expert mechanical and electronic repair workshop for all types of precision measuring instruments. Equipped with specialized tools for complete instrument restoration.',
        instruments: ['All Instrument Types', 'Optical Instruments', 'Surface Measurement', 'Form Measurement'],
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
];

const Facilities = () => (
    <div className="facilities-page page-enter">
        {/* Page Header */}
        <section className="page-hero">
            <div className="bg-grid" />
            <div className="glow-orb page-orb1" />
            <div className="container page-hero-inner">
                <div className="section-tag">Our Infrastructure</div>
                <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
                    8 World-Class <span>Facilities</span>
                </h1>
                <p className="section-subtitle" style={{ maxWidth: '680px' }}>
                    Our network of 8 strategically located labs and service centres ensures we are always
                    close to you — equipped with NABL-traceable reference standards and the latest
                    calibration technology.
                </p>
            </div>
        </section>

        {/* Facilities Grid */}
        <section className="section">
            <div className="container">
                <div className="facilities-grid">
                    {facilities.map((f) => (
                        <div key={f.id} className="facility-card glass-card">
                            <div className="fc-header">
                                <div className="fc-id">{f.id}</div>
                                <div className="fc-icon">{f.icon}</div>
                            </div>
                            <div className="fc-location">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                                {f.location}
                            </div>
                            <h3 className="fc-name">{f.name}</h3>
                            <p className="fc-desc">{f.desc}</p>
                            <div className="fc-instruments">
                                {f.instruments.map((inst, j) => (
                                    <span key={j} className="fc-tag">{inst}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Capabilities Banner */}
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
                            to meet the growing needs of industries. Contact us to learn about upcoming facilities
                            and new calibration services.
                        </p>
                    </div>
                    <div className="cap-stats">
                        <div className="cap-stat">
                            <div className="stat-number">8+</div>
                            <div className="stat-label">Facilities Nationwide</div>
                        </div>
                        <div className="cap-stat">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Parameters Covered</div>
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
