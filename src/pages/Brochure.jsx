import React from 'react';
import { Download, FileText } from 'lucide-react';
import './Brochure.css';

const Brochure = () => {
    const handleDownload = () => {
        window.print();
    };

    return (
        <div className="brochure-wrapper">
            {/* ── Sticky toolbar ── */}
            <div className="brochure-toolbar">
                <div className="brochure-toolbar-title">
                    <FileText size={20} />
                    Company Brochure — 4 Pages
                </div>
                <button className="brochure-download-btn" onClick={handleDownload}>
                    <Download size={16} />
                    Download PDF
                </button>
            </div>

            <div className="brochure-pages">
                {/* ═══════════════ PAGE 1 — COVER / ABOUT ═══════════════ */}
                <div className="brochure-page">
                    <div className="bp-cover">
                        <div className="bp-cover-top">
                            <img src="/images/Asian_logo.png" alt="Asian Enterprises" className="bp-cover-logo" />
                            <div className="bp-cover-badge">NABL Accredited</div>
                        </div>

                        <div className="bp-cover-hero">
                            <div className="bp-cover-tagline">Since 2013 • ISO/IEC 17025</div>
                            <h1 className="bp-cover-title">
                                Precision Calibration
                                <span>& Validation Experts</span>
                            </h1>
                            <p className="bp-cover-desc">
                                India's trusted partner for NABL-accredited calibration, equipment validation,
                                and measurement assurance — delivering accuracy you can rely on.
                            </p>
                            <div className="bp-cover-stats">
                                <div>
                                    <div className="bp-cover-stat-num">600+</div>
                                    <div className="bp-cover-stat-label">Clients Served</div>
                                </div>
                                <div>
                                    <div className="bp-cover-stat-num">12+</div>
                                    <div className="bp-cover-stat-label">Years Experience</div>
                                </div>
                                <div>
                                    <div className="bp-cover-stat-num">28+</div>
                                    <div className="bp-cover-stat-label">Engineers</div>
                                </div>
                                <div>
                                    <div className="bp-cover-stat-num">9+</div>
                                    <div className="bp-cover-stat-label">Calibration Types</div>
                                </div>
                            </div>
                        </div>

                        <img src="/images/about_hero_lab.png" alt="Lab" className="bp-cover-image" />

                        <div className="bp-cover-footer">
                            <span>www.asianenterprises.in</span>
                            <span>NABL • ISO 9001 • MSME • NPL Traceable</span>
                        </div>
                    </div>
                </div>

                {/* ═══════════════ PAGE 2 — CALIBRATION ═══════════════ */}
                <div className="brochure-page">
                    <div className="bp-services">
                        <div className="bp-services-header">
                            <div className="bp-sh-tag">Our Core Services</div>
                            <h2 className="bp-sh-title">Calibration Services</h2>
                        </div>

                        <div className="bp-services-body">
                            <p className="bp-services-intro">
                                We offer comprehensive NABL-accredited calibration services across four key disciplines —
                                ensuring every instrument meets traceability, accuracy, and compliance requirements.
                            </p>

                            <div className="bp-service-grid">
                                <div className="bp-service-card">
                                    <img src="/images/calib_dimension.png" alt="Dimensional" className="bp-service-card-img" />
                                    <div className="bp-service-card-body">
                                        <h4 className="bp-service-card-title">Dimensional Calibration</h4>
                                        <p className="bp-service-card-desc">
                                            Calipers, micrometers, height gauges, bore gauges, surface plates & thread gauges.
                                            Traceable to NPL national standards.
                                        </p>
                                    </div>
                                </div>

                                <div className="bp-service-card">
                                    <img src="/images/calib_temp_humidity.png" alt="Thermal" className="bp-service-card-img" />
                                    <div className="bp-service-card-body">
                                        <h4 className="bp-service-card-title">Thermal Calibration</h4>
                                        <p className="bp-service-card-desc">
                                            Thermometers, RTDs, thermocouples, IR thermometers, data loggers & humidity sensors.
                                            ITS-90 traceable.
                                        </p>
                                    </div>
                                </div>

                                <div className="bp-service-card">
                                    <img src="/images/calib_electro.png" alt="Electrical" className="bp-service-card-img" />
                                    <div className="bp-service-card-body">
                                        <h4 className="bp-service-card-title">Electrical Calibration</h4>
                                        <p className="bp-service-card-desc">
                                            Multimeters, clamp meters, power analysers, LCR meters, insulation testers &
                                            energy meters.
                                        </p>
                                    </div>
                                </div>

                                <div className="bp-service-card">
                                    <img src="/images/calib_pressure.png" alt="Mechanical" className="bp-service-card-img" />
                                    <div className="bp-service-card-body">
                                        <h4 className="bp-service-card-title">Mechanical Calibration</h4>
                                        <p className="bp-service-card-desc">
                                            Torque wrenches, force gauges, pressure gauges, weighing balances, hardness
                                            testers & vibration meters.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bp-services-footer">
                            <div className="bp-accreditations">
                                <img src="/images/CERTIFICATES_LOGO/NABL.png" alt="NABL" className="bp-accreditation-logo" />
                                <img src="/images/CERTIFICATES_LOGO/ISO.png" alt="ISO" className="bp-accreditation-logo" />
                                <img src="/images/CERTIFICATES_LOGO/NPL.png" alt="NPL" className="bp-accreditation-logo" />
                                <img src="/images/CERTIFICATES_LOGO/BIS.png" alt="BIS" className="bp-accreditation-logo" />
                            </div>
                            <span className="bp-page-num">02</span>
                        </div>
                    </div>
                </div>

                {/* ═══════════════ PAGE 3 — VALIDATION ═══════════════ */}
                <div className="brochure-page">
                    <div className="bp-services">
                        <div className="bp-validation-header">
                            <div className="bp-sh-tag">Equipment Qualification</div>
                            <h2 className="bp-sh-title">Validation Services</h2>
                        </div>

                        <div className="bp-services-body">
                            <p className="bp-services-intro">
                                IQ, OQ & PQ validation of critical process equipment used in pharmaceutical, biotech,
                                and regulated manufacturing environments — compliant with GAMP 5, EU GMP Annex 15 & FDA cGMP.
                            </p>

                            <div className="bp-valid-grid">
                                <div className="bp-valid-card">
                                    <img src="/images/valid_autoclave.png" alt="Autoclave" className="bp-valid-card-img" />
                                    <div className="bp-valid-card-body">
                                        <h4 className="bp-valid-card-title">Autoclave Validation</h4>
                                        <p className="bp-valid-card-desc">
                                            Steam steriliser qualification — heat penetration, F0 determination & cycle validation.
                                        </p>
                                    </div>
                                </div>

                                <div className="bp-valid-card">
                                    <img src="/images/valid_oven.png" alt="Oven" className="bp-valid-card-img" />
                                    <div className="bp-valid-card-body">
                                        <h4 className="bp-valid-card-title">Hot Air Oven</h4>
                                        <p className="bp-valid-card-desc">
                                            Temperature uniformity mapping, hot spot ID & depyrogenation cycle validation.
                                        </p>
                                    </div>
                                </div>

                                <div className="bp-valid-card">
                                    <img src="/images/valid_incubator.png" alt="Incubator" className="bp-valid-card-img" />
                                    <div className="bp-valid-card-body">
                                        <h4 className="bp-valid-card-title">Incubator & BOD</h4>
                                        <p className="bp-valid-card-desc">
                                            CO₂ incubators, BOD chambers — temp & humidity uniformity mapping.
                                        </p>
                                    </div>
                                </div>

                                <div className="bp-valid-card">
                                    <img src="/images/valid_muffle.png" alt="Muffle" className="bp-valid-card-img" />
                                    <div className="bp-valid-card-body">
                                        <h4 className="bp-valid-card-title">Muffle Furnace</h4>
                                        <p className="bp-valid-card-desc">
                                            Thermal mapping with multi-point thermocouple arrays up to 1400°C.
                                        </p>
                                    </div>
                                </div>

                                <div className="bp-valid-card">
                                    <img src="/images/valid_tunnel.png" alt="Tunnel" className="bp-valid-card-img" />
                                    <div className="bp-valid-card-body">
                                        <h4 className="bp-valid-card-title">Tunnel Pasteurizer</h4>
                                        <p className="bp-valid-card-desc">
                                            PU lethality calculations, zone temperature profiling & belt speed verification.
                                        </p>
                                    </div>
                                </div>

                                <div className="bp-valid-card">
                                    <img src="/images/valid_reactor.png" alt="Reactor" className="bp-valid-card-img" />
                                    <div className="bp-valid-card-body">
                                        <h4 className="bp-valid-card-title">Reactor & Fermenter</h4>
                                        <p className="bp-valid-card-desc">
                                            Batch reactors, bioreactors — CIP/SIP validation & process qualification.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bp-services-footer">
                            <div className="bp-accreditations">
                                <img src="/images/CERTIFICATES_LOGO/NABL.png" alt="NABL" className="bp-accreditation-logo" />
                                <img src="/images/CERTIFICATES_LOGO/ERTL.png" alt="ERTL" className="bp-accreditation-logo" />
                            </div>
                            <span className="bp-page-num">03</span>
                        </div>
                    </div>
                </div>

                {/* ═══════════════ PAGE 4 — CONTACT ═══════════════ */}
                <div className="brochure-page">
                    <div className="bp-contact">
                        <div className="bp-contact-hero">
                            <img src="/images/Asian_logo.png" alt="Asian Enterprises" className="bp-contact-logo" />
                            <h2 className="bp-contact-title">Let's Work Together</h2>
                            <p className="bp-contact-subtitle">
                                Partner with India's trusted calibration experts for precision you can count on.
                            </p>

                            <div className="bp-contact-grid">
                                <div className="bp-contact-card">
                                    <div className="bp-contact-card-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </div>
                                    <div className="bp-contact-card-label">Head Office</div>
                                    <div className="bp-contact-card-value">
                                        Plot-2A, Shivani Puram-2,<br />
                                        Jamalpur Kalan, Haridwar<br />
                                        249407 (U.K) India
                                    </div>
                                </div>

                                <div className="bp-contact-card">
                                    <div className="bp-contact-card-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11.1 19.79 19.79 0 01.01 2.37a2 2 0 011.99-2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.44 2.03L8.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.03-.44c.907.339 1.85.573 2.81.7a2 2 0 011.72 2z" />
                                        </svg>
                                    </div>
                                    <div className="bp-contact-card-label">Phone</div>
                                    <div className="bp-contact-card-value">
                                        +91 97601 88223<br />
                                        +91 94111 11480
                                    </div>
                                </div>

                                <div className="bp-contact-card">
                                    <div className="bp-contact-card-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </div>
                                    <div className="bp-contact-card-label">Email</div>
                                    <div className="bp-contact-card-value">
                                        asianhdr@yahoo.com<br />
                                        asian_e@yahoo.com
                                    </div>
                                </div>

                                <div className="bp-contact-card">
                                    <div className="bp-contact-card-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                        </svg>
                                    </div>
                                    <div className="bp-contact-card-label">Working Hours</div>
                                    <div className="bp-contact-card-value">
                                        Mon–Sat: 9 AM – 6 PM<br />
                                        Sunday: Emergency Only
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bp-contact-footer">
                            <div className="bp-contact-footer-left">
                                <img src="/images/Asian_logo.png" alt="Logo" className="bp-contact-footer-logo" />
                                <div className="bp-contact-footer-text">
                                    <strong>Asian Enterprises</strong><br />
                                    NABL Accredited Calibration & Validation Laboratory
                                </div>
                            </div>
                            <div className="bp-contact-certs">
                                <img src="/images/CERTIFICATES_LOGO/NABL.png" alt="NABL" className="bp-contact-cert-img" />
                                <img src="/images/CERTIFICATES_LOGO/ISO.png" alt="ISO" className="bp-contact-cert-img" />
                                <img src="/images/CERTIFICATES_LOGO/NPL.png" alt="NPL" className="bp-contact-cert-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brochure;
