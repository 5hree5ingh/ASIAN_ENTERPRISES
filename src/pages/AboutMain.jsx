import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMain.css';

const AboutMain = () => {
    return (
        <section id="about-main" className="about-main-section">
            <div className="container am-inner">
                {/* Left — Image */}
                <div className="am-image-col">
                    <div className="am-image-wrap">
                        <img
                            src="/images/about_mission.png"
                            alt="Precision Calibration"
                            className="am-image"
                        />
                        <div className="am-image-overlay-badge">
                            <span className="am-badge-num">25+</span>
                            <span className="am-badge-txt">Years<br />Experience</span>
                        </div>
                    </div>
                </div>

                {/* Right — Content */}
                <div className="am-content-col">
                    <div className="am-tag">Why Asian Enterprises</div>
                    <h2 className="am-title">
                        Built on <span>Precision</span> &amp;<br /> Trust
                    </h2>
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
                            <div key={i} className="am-point">
                                <div className="am-check">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <path d="M20 6L9 17l-5-5" />
                                    </svg>
                                </div>
                                <span>{pt}</span>
                            </div>
                        ))}
                    </div>
                    <Link to="/about" className="am-btn">
                        <span>Learn More About Us</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutMain;
