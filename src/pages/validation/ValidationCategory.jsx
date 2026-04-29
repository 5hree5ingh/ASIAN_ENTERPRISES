import React, { useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
    FlaskConical, Wind, Cpu,
    CheckCircle2, ArrowRight, ChevronRight,
    Award, Shield, ClipboardCheck
} from 'lucide-react';
import { getValidationGroupById, VALIDATION_GROUPS } from '../../data/validationData';
import './ValidationCategory.css';

// Map icon string → component
const ICON_MAP = {
    flask: FlaskConical,
    wind: Wind,
    cpu: Cpu,
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

const ValidationCard = ({ service, groupSlug, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });

    return (
        <motion.div ref={ref} className="vcat-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -6 }}>

            <div className="vcat-card-img-wrap">
                <img src={service.img} alt={service.name} className="vcat-card-img" />
                <div className="vcat-card-img-overlay" />
                <span className="vcat-card-num">{String(index + 1).padStart(2, '0')}</span>
            </div>

            <div className="vcat-card-body">
                <h3 className="vcat-card-title">{service.name}</h3>
                <p className="vcat-card-desc">{service.description}</p>

                <div className="vcat-specs-grid">
                    {service.specs.map((s, i) => (
                        <div key={i} className="vcat-spec">
                            <span className="vcat-spec-label">{s.label}</span>
                            <span className="vcat-spec-val">{s.value}</span>
                        </div>
                    ))}
                </div>

                <div className="vcat-apps">
                    {service.applications.map((app, i) => (
                        <span key={i} className="vcat-app-tag">{app}</span>
                    ))}
                </div>

                <Link to={`/validation/${groupSlug}/${service.id}`} className="vcat-detail-link">
                    Full Details <ArrowRight size={15} />
                </Link>
            </div>
        </motion.div>
    );
};

const ValidationCategory = () => {
    const { group: slug } = useParams();
    const navigate = useNavigate();
    const group = getValidationGroupById(slug);

    if (!group) return (
        <div className="vcat-not-found page-enter">
            <div className="container">
                <h1>Category not found</h1>
                <Link to="/validation" className="btn-primary">Back to Validation</Link>
            </div>
        </div>
    );

    const GroupIcon = ICON_MAP[group.icon] || ClipboardCheck;
    const otherGroups = VALIDATION_GROUPS.filter(g => g.slug !== slug);

    return (
        <div className="vcat-page page-enter">

            {/* HERO */}
            <section className="vcat-hero">
                <div className="vcat-hero-overlay" />
                <div className="vcat-hero-grid" />
                <div className="container vcat-hero-inner">

                    <motion.div className="vcat-hero-tag"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <GroupIcon size={16} /> IQ · OQ · PQ Qualified
                    </motion.div>

                    <motion.h1 className="vcat-hero-title"
                        initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
                        {group.title}
                    </motion.h1>
                </div>
            </section>

            {/* WHY IT MATTERS */}
            <section className="vcat-why-section">
                <div className="container vcat-why-inner">
                    <FadeIn className="vcat-why-content">
                        <div className="section-tag"><Shield size={14} />Why It Matters</div>
                        <h2 className="vcat-why-title">
                            The Importance of <span>{group.shortTitle}</span> Validation
                        </h2>
                        <p className="vcat-why-sub">
                            Proper validation is a regulatory requirement and the foundation of product quality,
                            process consistency, and patient or consumer safety.
                        </p>
                        <ul className="vcat-why-points">
                            {[
                                'Ensures compliance with FDA, EU GMP, WHO, and ISO regulations',
                                'Reduces risk of batch failures and product recalls',
                                'Documents process capability and equipment fitness for use',
                                'Required for NABL, CDSCO, and regulatory inspections',
                            ].map((pt, i) => (
                                <motion.li key={i} className="vcat-why-point"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}>
                                    <CheckCircle2 size={18} className="vcat-check-icon" />
                                    <span>{pt}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn delay={0.15} className="vcat-why-badges">
                        {[
                            { icon: Award, title: 'IQ / OQ / PQ', sub: 'Full Qualification Protocol' },
                            { icon: Shield, title: 'GMP Compliant', sub: 'EU GMP Annex 15 / FDA 21 CFR' },
                            { icon: CheckCircle2, title: 'Fast Reports', sub: 'Validation reports within 5 days' },
                        ].map((b, i) => (
                            <motion.div key={i} className="vcat-badge-card" whileHover={{ y: -4 }}>
                                <div className="vcat-badge-icon-wrap"><b.icon size={22} /></div>
                                <div>
                                    <div className="vcat-badge-title">{b.title}</div>
                                    <div className="vcat-badge-sub">{b.sub}</div>
                                </div>
                            </motion.div>
                        ))}
                    </FadeIn>
                </div>
            </section>

            {/* SERVICE CARDS */}
            <section className="vcat-list-section">
                <div className="container">
                    <FadeIn>
                        <div className="section-header center">
                            <div className="section-tag"><GroupIcon size={14} />{group.shortTitle} Services</div>
                            <h2 className="section-title">Our <span>{group.shortTitle}</span> Validation Services</h2>
                            <p className="section-subtitle">
                                Each service is performed by certified engineers following GMP-compliant qualification protocols.
                            </p>
                        </div>
                    </FadeIn>
                    <div className="vcat-cards-grid">
                        {group.services.map((svc, i) => (
                            <ValidationCard key={svc.id} service={svc} groupSlug={slug} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="vcat-cta-section">
                <div className="vcat-cta-bg-grid" />
                <div className="container vcat-cta-inner">
                    <FadeIn>
                        <p className="vcat-cta-sub">Ready to get started?</p>
                        <h2 className="vcat-cta-title">Request a Quote for {group.shortTitle} Validation</h2>
                        <p className="vcat-cta-desc">Our team responds within 24 hours. On-site visit within 48 hours.</p>
                        <div className="vcat-cta-actions">
                            <a href="https://wa.me/919760188223" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <span>WhatsApp Us Now</span><ArrowRight size={18} />
                            </a>
                            <Link to="/contact" className="btn-outline">Send an Enquiry</Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* OTHER GROUPS */}
            {otherGroups.length > 0 && (
                <section className="vcat-other-cats">
                    <div className="container">
                        <FadeIn>
                            <div className="section-header center">
                                <div className="section-tag">Explore More</div>
                                <h2 className="section-title">Other <span>Validation</span> Categories</h2>
                            </div>
                        </FadeIn>
                        <div className="vcat-other-grid">
                            {otherGroups.map((og, i) => {
                                const OgIcon = ICON_MAP[og.icon] || ClipboardCheck;
                                return (
                                    <FadeIn key={og.slug} delay={i * 0.1}>
                                        <Link to={`/validation/${og.slug}`} className="vcat-other-card">
                                            <div className="vcat-other-body">
                                                <div className="vcat-other-icon-wrap"><OgIcon size={20} /></div>
                                                <div>
                                                    <div className="vcat-other-title">{og.title}</div>
                                                    <div className="vcat-other-count">{og.services.length} Services</div>
                                                </div>
                                                <ArrowRight size={18} className="vcat-other-arrow" />
                                            </div>
                                        </Link>
                                    </FadeIn>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default ValidationCategory;
