import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMain.css';

const AboutMain = () => {
    return (
        <section id="about-main" className="section why-section about-main-section">
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
    );
};

export default AboutMain;
