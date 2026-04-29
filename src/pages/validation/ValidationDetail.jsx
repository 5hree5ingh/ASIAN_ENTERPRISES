import React, { useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
    ArrowLeft, ArrowRight, CheckCircle2,
    Award, Shield, ChevronRight, Phone, MessageSquare,
    ClipboardCheck
} from 'lucide-react';
import { getValidationServiceById } from '../../data/validationData';
import './ValidationDetail.css';

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

const ValidationDetail = () => {
    const { group: groupSlug, service: svcId } = useParams();
    const result = getValidationServiceById(svcId);

    if (!result) return (
        <div className="vd-not-found page-enter">
            <div className="container">
                <h1>Service not found</h1>
                <Link to="/validation" className="btn-primary">Back to Validation</Link>
            </div>
        </div>
    );

    const { service: svc, group } = result;
    const relatedServices = group.services.filter(s => s.id !== svcId).slice(0, 3);

    return (
        <div className="vd-page page-enter">

            {/* HERO */}
            <section className="vd-hero">
                <div className="vd-hero-img-col">
                    <img src={svc.img} alt={svc.name} className="vd-hero-img" />
                    <div className="vd-hero-img-overlay" />
                    <div className="vd-gmp-badge">
                        <Award size={18} /><span>GMP Compliant</span>
                    </div>
                </div>

                <div className="vd-hero-content-col">

                    <motion.div className="vd-cat-tag"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
                        {group.title}
                    </motion.div>

                    <motion.h1 className="vd-title"
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45, duration: 0.65 }}>
                        {svc.name}
                    </motion.h1>

                    <motion.p className="vd-desc"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                        {svc.description}
                    </motion.p>

                    <motion.div className="vd-specs"
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
                        <div className="vd-specs-title">Technical Specifications</div>
                        <div className="vd-specs-grid">
                            {svc.specs.map((s, i) => (
                                <div key={i} className="vd-spec-item">
                                    <span className="vd-spec-label">{s.label}</span>
                                    <span className="vd-spec-val">{s.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="vd-apps"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                        <div className="vd-apps-title">Applications</div>
                        <div className="vd-apps-tags">
                            {svc.applications.map((app, i) => (
                                <span key={i} className="vd-app-tag">{app}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="vd-cta-row"
                        initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                        <a href="https://wa.me/919760188223" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            <MessageSquare size={17} /><span>Request Quote</span>
                        </a>
                        <Link to="/contact" className="vd-contact-link">
                            <Phone size={15} />Contact Us
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* VALIDATION PROTOCOL */}
            {svc.protocol && svc.protocol.length > 0 && (
                <section className="vd-protocol-section">
                    <div className="container">
                        <FadeIn>
                            <div className="section-header center">
                                <div className="section-tag"><Shield size={14} />Our Process</div>
                                <h2 className="section-title">Validation <span>Protocol</span></h2>
                            </div>
                        </FadeIn>
                        <div className="vd-protocol-grid">
                            {svc.protocol.map((step, i) => (
                                <FadeIn key={i} delay={i * 0.08}>
                                    <div className="vd-protocol-card">
                                        <div className="vd-protocol-num">{String(i + 1).padStart(2, '0')}</div>
                                        <p className="vd-protocol-desc">{step}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* WHY ASIAN ENTERPRISES */}
            <section className="vd-why-section">
                <div className="container vd-why-inner">
                    <FadeIn className="vd-why-img-col">
                        <div className="vd-why-img-wrap">
                            <img src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80" alt="Asian Enterprises Lab" className="vd-why-img" />
                            <div className="vd-why-badge">
                                <div className="vd-why-badge-num">25+</div>
                                <div className="vd-why-badge-txt">Years<br />of Excellence</div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15} className="vd-why-content">
                        <div className="section-tag">Why Choose Us</div>
                        <h2 className="vd-why-title">Validation You Can <span>Trust</span></h2>
                        <p className="vd-why-sub">
                            Asian Enterprises is the preferred validation partner for pharmaceutical, biotech,
                            food, and industrial clients across India.
                        </p>
                        <ul className="vd-why-points">
                            {[
                                'GMP-compliant IQ, OQ, PQ validation protocols',
                                'Experienced validation engineers with regulatory expertise',
                                'Deliverables accepted by FDA, EU GMP, WHO auditors',
                                'On-site validation services across India',
                                'Complete documentation — URS, FS, VMP, validation reports',
                                'Fast turnaround — reports within 5 working days',
                            ].map((pt, i) => (
                                <motion.li key={i} className="vd-why-point"
                                    initial={{ opacity: 0, x: -18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}>
                                    <CheckCircle2 size={17} className="vd-check" /><span>{pt}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="vd-why-actions">
                            <Link to="/about" className="btn-primary">
                                <span>Learn About Us</span><ArrowRight size={17} />
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* RELATED SERVICES */}
            {relatedServices.length > 0 && (
                <section className="vd-related-section">
                    <div className="container">
                        <FadeIn>
                            <div className="section-header center">
                                <div className="section-tag">Also in {group.shortTitle}</div>
                                <h2 className="section-title">Related <span>Services</span></h2>
                            </div>
                        </FadeIn>
                        <div className="vd-related-grid">
                            {relatedServices.map((rs, i) => (
                                <FadeIn key={rs.id} delay={i * 0.1}>
                                    <Link to={`/validation/${group.slug}/${rs.id}`} className="vd-related-card">
                                        <div className="vd-related-img-wrap">
                                            <img src={rs.img} alt={rs.name} className="vd-related-img" />
                                            <div className="vd-related-overlay" />
                                        </div>
                                        <div className="vd-related-body">
                                            <h3 className="vd-related-title">{rs.name}</h3>
                                            <p className="vd-related-desc">{rs.description.slice(0, 90)}...</p>
                                            <span className="vd-related-link">View Details <ArrowRight size={14} /></span>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                        <FadeIn>
                            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                                <Link to={`/validation/${group.slug}`} className="btn-outline">
                                    <ArrowLeft size={16} /> All {group.shortTitle} Services
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ValidationDetail;
