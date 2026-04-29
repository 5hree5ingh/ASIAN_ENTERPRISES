import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
    ArrowRight, ChevronRight, CheckCircle2,
    Award, Shield, Cpu, Wind, FlaskConical
} from 'lucide-react';
import { VALIDATION_GROUPS } from '../../data/validationData';
import './ValidationPage.css';

const ICON_MAP = {
    flask: FlaskConical,
    wind: Wind,
    cpu: Cpu,
};

const FadeIn = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
            {children}
        </motion.div>
    );
};

const ValidationPage = () => {
    const allServices = VALIDATION_GROUPS.flatMap(g => g.services.map(s => ({ ...s, group: g })));

    return (
        <div className="val-page page-enter">

            {/* ── HERO ── */}
            <section className="val-hero">
                <div className="val-hero-overlay" />
                <div className="val-hero-grid" />
                <div className="container val-hero-inner">

                    <motion.div className="val-hero-tag"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <Shield size={14} /> GMP Compliant · GAMP 5 · EU Annex 15
                    </motion.div>

                    <motion.h1 className="val-hero-title"
                        initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
                        Validation &<br /><span>Qualification</span><br />Services
                    </motion.h1>


                    {/* Stats */}
                    <motion.div className="val-hero-stats"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
                        {[
                            { num: '12+', label: 'Validation Services' },
                            { num: '500+', label: 'Validations Completed' },
                            { num: '25+', label: 'Years Experience' },
                            { num: '100%', label: 'Audit Success Rate' },
                        ].map((stat, i) => (
                            <div key={i} className="val-stat">
                                <span className="val-stat-num">{stat.num}</span>
                                <span className="val-stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Floating badges */}
                <div className="val-hero-badges">
                    {['FDA 21 CFR', 'EU GMP', 'GAMP 5', 'ICH Q10', 'WHO GMP', 'ISO 14644'].map((b, i) => (
                        <motion.div key={i} className="val-float-badge"
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + i * 0.1 }}>
                            {b}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── WHAT IS VALIDATION ── */}
            <section className="val-intro-section">
                <div className="container val-intro-inner">
                    <FadeIn className="val-intro-content">
                        <div className="section-tag"><Shield size={14} />Why Validation</div>
                        <h2 className="val-intro-title">
                            From <span>Installation</span> to <span>Performance</span> — Fully Documented
                        </h2>
                        <p className="val-intro-sub">
                            Validation is the documented evidence that a process, equipment, or system consistently
                            produces results meeting predetermined specifications. It is a regulatory requirement under
                            FDA, EU GMP, WHO, and ICH guidelines — and the foundation of product quality assurance.
                        </p>
                        <ul className="val-intro-points">
                            {[
                                'Mandatory for pharmaceutical and medical device manufacturing',
                                'Provides evidence of compliance during regulatory inspections',
                                'Protects product integrity and patient safety',
                                'Reduces process variability and operational risk',
                                'Required for ISO 13485, GMP, and FDA approval',
                            ].map((pt, i) => (
                                <motion.li key={i} className="val-intro-point"
                                    initial={{ opacity: 0, x: -18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.09 }}>
                                    <CheckCircle2 size={16} className="val-check" /><span>{pt}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn delay={0.15} className="val-intro-cards">
                        {[
                            { label: 'IQ', full: 'Installation Qualification', desc: 'Verifies that equipment is installed correctly, according to design specifications and manufacturer recommendations.' },
                            { label: 'OQ', full: 'Operational Qualification', desc: 'Demonstrates that equipment operates as intended across its full operating range under all defined conditions.' },
                            { label: 'PQ', full: 'Performance Qualification', desc: 'Proves that the process consistently produces a product meeting specification under real-world production conditions.' },
                        ].map((c, i) => (
                            <motion.div key={i} className="val-iq-card" whileHover={{ y: -5 }}>
                                <div className="val-iq-label">{c.label}</div>
                                <div className="val-iq-full">{c.full}</div>
                                <p className="val-iq-desc">{c.desc}</p>
                            </motion.div>
                        ))}
                    </FadeIn>
                </div>
            </section>

            {/* ── SERVICES BY GROUP ── */}
            {VALIDATION_GROUPS.map((group, gi) => {
                const GroupIcon = ICON_MAP[group.icon] || FlaskConical;
                return (
                    <section key={group.id} className={`val-group-section ${gi % 2 === 1 ? 'val-group-alt' : ''}`}>
                        <div className="container">
                            <FadeIn>
                                <div className="section-header">
                                    <div className="section-tag"><GroupIcon size={14} />{group.title}</div>
                                    <h2 className="section-title"><span>{group.title}</span></h2>
                                    <p className="section-subtitle">{group.description}</p>
                                </div>
                            </FadeIn>

                            <div className="val-cards-grid">
                                {group.services.map((svc, i) => (
                                    <FadeIn key={svc.id} delay={i * 0.1}>
                                        <Link to={`/validation/${svc.id}`} className="val-svc-card">
                                            <div className="val-svc-img-wrap">
                                                <img src={svc.img} alt={svc.name} className="val-svc-img" />
                                                <div className="val-svc-overlay" />
                                                <span className="val-svc-num">{String(i + 1).padStart(2, '0')}</span>
                                                <div className="val-svc-badge-wrap">
                                                    <span className="val-svc-badge">IQ · OQ · PQ</span>
                                                </div>
                                            </div>
                                            <div className="val-svc-body">
                                                <h3 className="val-svc-title">{svc.name}</h3>
                                                <p className="val-svc-desc">
                                                    {svc.description.slice(0, 120)}...
                                                </p>
                                                <div className="val-svc-apps">
                                                    {svc.applications.slice(0, 3).map((app, j) => (
                                                        <span key={j} className="val-app-tag">{app}</span>
                                                    ))}
                                                </div>
                                                <span className="val-svc-link">
                                                    View Protocol <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </Link>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* ── CTA ── */}
            <section className="val-cta-section">
                <div className="val-cta-grid" />
                <div className="container val-cta-inner">
                    <FadeIn>
                        <div className="section-tag"><Award size={14} />Get Started</div>
                        <h2 className="val-cta-title">Need a Validation Partner You Can Trust?</h2>
                        <p className="val-cta-desc">
                            Our team of validation engineers will design, execute, and document your validation project —
                            ensuring first-time pass at every regulatory inspection.
                        </p>
                        <div className="val-cta-actions">
                            <a href="https://wa.me/919760188223" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <span>WhatsApp Our Team</span><ArrowRight size={18} />
                            </a>
                            <Link to="/contact" className="btn-outline">Send an Enquiry</Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </div>
    );
};

export default ValidationPage;
