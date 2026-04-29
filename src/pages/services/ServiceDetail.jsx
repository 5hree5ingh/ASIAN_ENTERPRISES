import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
    ArrowLeft, ArrowRight, CheckCircle2,
    Award, Shield, ChevronRight, Phone, MessageSquare
} from 'lucide-react';
import { getServiceById, getCategoryById } from '../../data/servicesData';
import './ServiceDetail.css';

const FadeIn = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
            {children}
        </motion.div>
    );
};

const ServiceDetail = () => {
    const { category: catSlug, service: svcId } = useParams();
    const cat = getCategoryById(catSlug);
    const svc = getServiceById(catSlug, svcId);

    if (!cat || !svc) return (
        <div className="sd-not-found page-enter">
            <div className="container">
                <h1>Service not found</h1>
                <Link to="/facilities" className="btn-primary">Back to Services</Link>
            </div>
        </div>
    );

    const relatedServices = cat.services.filter(s => s.id !== svcId).slice(0, 3);

    return (
        <div className="sd-page page-enter">

            {/* HERO — split layout */}
            <section className="sd-hero">
                <div className="sd-hero-img-col">
                    <img src={svc.img} alt={svc.name} className="sd-hero-img" />
                    <div className="sd-hero-img-overlay" />
                    <div className="sd-nabl-badge">
                        <Award size={18} /><span>NABL Accredited</span>
                    </div>
                </div>

                <div className="sd-hero-content-col">

                    <motion.div className="sd-cat-tag"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                        {cat.title}
                    </motion.div>

                    <motion.h1 className="sd-title"
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.65 }}>
                        {svc.name}
                    </motion.h1>

                    <motion.p className="sd-desc"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                        {svc.description}
                    </motion.p>

                    <motion.div className="sd-specs"
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        <div className="sd-specs-title">Technical Specifications</div>
                        <div className="sd-specs-grid">
                            {svc.specs.map((s, i) => (
                                <div key={i} className="sd-spec-item">
                                    <span className="sd-spec-label">{s.label}</span>
                                    <span className="sd-spec-val">{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="sd-apps"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                        <div className="sd-apps-title">Applications</div>
                        <div className="sd-apps-tags">
                            {svc.applications.map((app, i) => (
                                <span key={i} className="sd-app-tag">{app}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="sd-cta-row"
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                        <a href="https://wa.me/919760188223" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            <MessageSquare size={17} /><span>Request Quote</span>
                        </a>
                        <Link to="/contact" className="sd-contact-link">
                            <Phone size={15} />Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CALIBRATION PROCESS */}
            <section className="sd-process-section">
                <div className="container">
                    <FadeIn>
                        <div className="section-header center">
                            <div className="section-tag"><Shield size={14} />Our Process</div>
                            <h2 className="section-title">How We <span>Calibrate</span> Your Instrument</h2>
                        </div>
                    </FadeIn>
                    <div className="sd-process-grid">
                        {[
                            { step: '01', title: 'Receive & Inspect', desc: 'Instrument received and visually inspected. Make, model, serial number, and current condition are documented before any measurements begin.' },
                            { step: '02', title: 'Condition & Stabilise', desc: 'Instrument is placed in the calibration environment to stabilise under controlled temperature and humidity conditions as per the approved procedure.' },
                            { step: '03', title: 'Calibrate vs Reference', desc: 'Measurements taken at multiple points against NABL-traceable reference standards. Data recorded per approved calibration procedure.' },
                            { step: '04', title: 'Report & Certificate', desc: 'Measurement uncertainty calculated. Pass/fail determined. A detailed calibration certificate with all readings and corrections is issued within 48 hours.' },
                        ].map((p, i) => (
                            <FadeIn key={i} delay={i * 0.1}>
                                <div className="sd-process-card">
                                    <div className="sd-process-num">{p.step}</div>
                                    <h3 className="sd-process-title">{p.title}</h3>
                                    <p className="sd-process-desc">{p.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY ASIAN ENTERPRISES */}
            <section className="sd-why-section">
                <div className="container sd-why-inner">
                    <FadeIn className="sd-why-img-col">
                        <div className="sd-why-img-wrap">
                            <img src="/images/about_lab_premium.png" alt="Asian Enterprises Lab" className="sd-why-img" />
                            <div className="sd-why-badge">
                                <div className="sd-why-badge-num">25+</div>
                                <div className="sd-why-badge-txt">Years<br />of Excellence</div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15} className="sd-why-content">
                        <div className="section-tag">Why Choose Us</div>
                        <h2 className="sd-why-title">Calibration You Can <span>Trust</span></h2>
                        <p className="sd-why-sub">
                            Asian Enterprises has been the preferred calibration partner for manufacturing,
                            aerospace, pharma, and quality labs for over 25 years.
                        </p>
                        <ul className="sd-why-points">
                            {[
                                'NABL Accredited & ISO/IEC 17025 Compliant Laboratory',
                                'Certificates accepted by all auditing bodies worldwide',
                                'Experienced and certified calibration technicians',
                                'On-site calibration services available across India',
                                'Industry-fastest turnaround — certificates within 48 hours',
                                'Competitive pricing with no hidden charges',
                            ].map((pt, i) => (
                                <motion.li key={i} className="sd-why-point"
                                    initial={{ opacity: 0, x: -18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}>
                                    <CheckCircle2 size={17} className="sd-check" /><span>{pt}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="sd-why-actions">
                            <Link to="/about" className="btn-primary">
                                <span>Learn About Us</span><ArrowRight size={17} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* RELATED SERVICES */}
            {relatedServices.length > 0 && (
                <section className="sd-related-section">
                    <div className="container">
                        <FadeIn>
                            <div className="section-header center">
                                <div className="section-tag">Also in {cat.shortTitle}</div>
                                <h2 className="section-title">Related <span>Services</span></h2>
                            </div>
                        </FadeIn>
                        <div className="sd-related-grid">
                            {relatedServices.map((rs, i) => (
                                <FadeIn key={rs.id} delay={i * 0.1}>
                                    <Link to={`/services/${catSlug}/${rs.id}`} className="sd-related-card">
                                        <div className="sd-related-img-wrap">
                                            <img src={rs.img} alt={rs.name} className="sd-related-img" />
                                            <div className="sd-related-overlay" />
                                        </div>
                                        <div className="sd-related-body">
                                            <h3 className="sd-related-title">{rs.name}</h3>
                                            <p className="sd-related-desc">{rs.description.slice(0, 90)}...</p>
                                            <span className="sd-related-link">View Details <ArrowRight size={14} /></span>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                        <FadeIn>
                            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                                <Link to={`/services/${catSlug}`} className="btn-outline">
                                    <ArrowLeft size={16} /> All {cat.shortTitle} Services
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ServiceDetail;
