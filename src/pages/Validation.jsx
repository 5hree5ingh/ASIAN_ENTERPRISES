import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
    ArrowRight, ClipboardCheck, Wind, Cpu, FlaskConical,
    CheckCircle2, Award, Shield
} from 'lucide-react';
import { VALIDATION_GROUPS } from '../data/validationData';
import './Validation.css';

const ICON_MAP = {
    flask: FlaskConical,
    wind: Wind,
    cpu: Cpu,
};

const GROUP_IMAGES = {
    equipment: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=720&q=80',
    utility:   'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=720&q=80',
    process:   'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=720&q=80',
};

const FadeIn = ({ children, delay = 0, className = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-60px' });
    return (
        <motion.div ref={ref} className={className}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}>
            {children}
        </motion.div>
    );
};

const Validation = () => (
    <div className="val-page page-enter">

        {/* HERO */}
        <section className="val-hero">
            <div className="val-hero-overlay" />
            <div className="val-hero-grid" />
            <div className="container val-hero-inner">
                <motion.div className="val-hero-tag"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
                    <ClipboardCheck size={16} /> IQ · OQ · PQ Validation Services
                </motion.div>
                <motion.h1 className="val-hero-title"
                    initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
                    Validation &amp;<br /><span>Qualification</span> Services
                </motion.h1>
                <motion.p className="val-hero-desc"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    Asian Enterprises delivered world-class calibration &amp; validation services for
                    precision measuring instruments — ensuring your instruments meet the highest accuracy standards.
                </motion.p>
                <motion.div className="val-hero-actions"
                    initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                    <a href="https://wa.me/919760188223" target="_blank" rel="noopener noreferrer" className="val-btn-primary">
                        Get a Free Quote <ArrowRight size={18} />
                    </a>
                    <Link to="/contact" className="val-btn-outline">Contact Us</Link>
                </motion.div>
            </div>
        </section>

        {/* GROUP CARDS */}
        <section className="val-groups-section">
            <div className="container">
                <FadeIn>
                    <div className="section-header center">
                        <div className="section-tag">Our Services</div>
                        <h2 className="section-title">Validation <span>Categories</span></h2>
                        <p className="section-subtitle">
                            Three comprehensive validation domains covering all critical equipment, utilities,
                            and automated systems in regulated industries.
                        </p>
                    </div>
                </FadeIn>

                <div className="val-groups-grid">
                    {VALIDATION_GROUPS.map((grp, i) => {
                        const GrpIcon = ICON_MAP[grp.icon] || ClipboardCheck;
                        return (
                            <FadeIn key={grp.slug} delay={i * 0.12}>
                                <Link to={`/validation/${grp.slug}`} className="val-group-card">
                                    <div className="val-group-img-wrap">
                                        <img
                                            src={GROUP_IMAGES[grp.slug] || GROUP_IMAGES.equipment}
                                            alt={grp.title}
                                            className="val-group-img"
                                        />
                                        <div className="val-group-img-overlay" />
                                        <div className="val-group-num">0{i + 1}</div>
                                    </div>
                                    <div className="val-group-body">
                                        <div className="val-group-icon-row">
                                            <div className="val-group-icon"><GrpIcon size={20} /></div>
                                            <span className="val-group-count">{grp.services.length} Services</span>
                                        </div>
                                        <h3 className="val-group-title">{grp.title}</h3>
                                        <p className="val-group-desc">{grp.description}</p>
                                        <ul className="val-group-svcs">
                                            {grp.services.slice(0, 3).map(svc => (
                                                <li key={svc.id}><CheckCircle2 size={13} />{svc.name}</li>
                                            ))}
                                            {grp.services.length > 3 && (
                                                <li className="val-more">+{grp.services.length - 3} more</li>
                                            )}
                                        </ul>
                                        <span className="val-group-cta">
                                            Explore Services <ArrowRight size={15} />
                                        </span>
                                    </div>
                                </Link>
                            </FadeIn>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* TRUST STRIP */}
        <section className="val-trust-section">
            <div className="container">
                <div className="val-trust-grid">
                    {[
                        { icon: Award, title: 'GMP Compliant', sub: 'EU GMP Annex 15 · FDA 21 CFR · WHO' },
                        { icon: Shield, title: 'IQ / OQ / PQ', sub: 'Full qualification documentation' },
                        { icon: ClipboardCheck, title: 'GAMP 5', sub: 'Computer system & automation validation' },
                        { icon: CheckCircle2, title: 'Fast Turnaround', sub: 'Validation reports within 5 days' },
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="val-trust-card">
                                <div className="val-trust-icon"><item.icon size={22} /></div>
                                <div className="val-trust-title">{item.title}</div>
                                <div className="val-trust-sub">{item.sub}</div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA */}
        <section className="val-cta-section">
            <div className="val-cta-bg-grid" />
            <div className="container val-cta-inner">
                <FadeIn>
                    <p className="val-cta-sub">Ready to get started?</p>
                    <h2 className="val-cta-title">Need a Validation Quote?</h2>
                    <p className="val-cta-desc">Our validation engineers respond within 24 hours. On-site visit arranged within 48 hours.</p>
                    <div className="val-cta-actions">
                        <a href="https://wa.me/919760188223" target="_blank" rel="noopener noreferrer" className="btn-primary">
                            <span>WhatsApp Us Now</span><ArrowRight size={18} />
                        </a>
                        <Link to="/contact" className="btn-outline">Send an Enquiry</Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    </div>
);

export default Validation;
