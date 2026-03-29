import React, { useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
    Ruler, Thermometer, Zap, Settings,
    CheckCircle2, ArrowRight, ChevronRight,
    Award, Shield
} from 'lucide-react';
import { getCategoryById, SERVICE_CATEGORIES } from '../../data/servicesData';
import './ServiceCategory.css';

const ICON_MAP = { ruler: Ruler, thermometer: Thermometer, zap: Zap, settings: Settings };

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

const ServiceCard = ({ service, categorySlug, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    return (
        <motion.div ref={ref} className="svc-card"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -6 }}>

            <div className="svc-card-img-wrap">
                <img src={service.img} alt={service.name} className="svc-card-img" />
                <div className="svc-card-img-overlay" />
                <span className="svc-card-num">{String(index + 1).padStart(2, '0')}</span>
            </div>

            <div className="svc-card-body">
                <h3 className="svc-card-title">{service.name}</h3>
                <p className="svc-card-desc">{service.description}</p>

                <div className="svc-specs-grid">
                    {service.specs.map((s, i) => (
                        <div key={i} className="svc-spec">
                            <span className="svc-spec-label">{s.label}</span>
                            <span className="svc-spec-val">{s.value}</span>
                        </div>
                    ))}
                </div>

                <div className="svc-apps">
                    {service.applications.map((app, i) => (
                        <span key={i} className="svc-app-tag">{app}</span>
                    ))}
                </div>

                <Link to={`/services/${categorySlug}/${service.id}`} className="svc-detail-link">
                    Full Details <ArrowRight size={15} />
                </Link>
            </div>
        </motion.div>
    );
};

const ServiceCategory = () => {
    const { category: slug } = useParams();
    const navigate = useNavigate();
    const cat = getCategoryById(slug);

    if (!cat) return (
        <div className="svc-not-found page-enter">
            <div className="container">
                <h1>Category not found</h1>
                <Link to="/facilities" className="btn-primary">Back to Services</Link>
            </div>
        </div>
    );

    const CatIcon = ICON_MAP[cat.icon] || Ruler;
    const otherCats = SERVICE_CATEGORIES.filter(c => c.slug !== slug);

    return (
        <div className="svc-category-page page-enter">

            {/* HERO */}
            <section className="svc-hero">
                <div className="svc-hero-bg" style={{ backgroundImage: `url(${cat.img})` }} />
                <div className="svc-hero-overlay" />
                <div className="svc-hero-grid" />
                <div className="container svc-hero-inner">
                    <motion.div className="svc-breadcrumb"
                        initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <Link to="/">Home</Link><ChevronRight size={14} />
                        <Link to="/facilities">Services</Link><ChevronRight size={14} />
                        <span>{cat.shortTitle}</span>
                    </motion.div>

                    <motion.div className="svc-hero-tag"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                        <CatIcon size={16} /> NABL Accredited · ISO/IEC 17025
                    </motion.div>

                    <motion.h1 className="svc-hero-title"
                        initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.7 }}>
                        {cat.title}
                    </motion.h1>

                    <motion.p className="svc-hero-tagline"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
                        {cat.tagline}
                    </motion.p>

                    <motion.p className="svc-hero-desc"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}>
                        {cat.description}
                    </motion.p>

                    <motion.div className="svc-hero-actions"
                        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
                        <a href="https://wa.me/919760188223" target="_blank" rel="noopener noreferrer" className="svc-btn-primary">
                            Get a Free Quote <ArrowRight size={18} />
                        </a>
                        <button className="svc-btn-outline" onClick={() => navigate('/contact')}>
                            Contact Us
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* WHY IT MATTERS */}
            <section className="svc-why-section">
                <div className="container svc-why-inner">
                    <FadeIn className="svc-why-content">
                        <div className="section-tag"><Shield size={14} />Why It Matters</div>
                        <h2 className="svc-why-title">
                            The Importance of <span>{cat.shortTitle}</span> Calibration
                        </h2>
                        <p className="svc-why-sub">
                            Proper calibration is not just a regulatory requirement — it is the foundation of
                            reliable measurement, product quality, and operational safety.
                        </p>
                        <ul className="svc-why-points">
                            {cat.whyImportant.map((pt, i) => (
                                <motion.li key={i} className="svc-why-point"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}>
                                    <CheckCircle2 size={18} className="svc-check-icon" />
                                    <span>{pt}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn delay={0.15} className="svc-why-badges">
                        {[
                            { icon: Award, title: 'NABL Accredited', sub: 'ISO/IEC 17025 Certified' },
                            { icon: Shield, title: 'NPL Traceable', sub: 'National Standard Reference' },
                            { icon: CheckCircle2, title: 'Fast Turnaround', sub: 'Certificates within 48 hrs' },
                        ].map((b, i) => (
                            <motion.div key={i} className="svc-badge-card" whileHover={{ y: -4 }}>
                                <div className="svc-badge-icon-wrap"><b.icon size={22} /></div>
                                <div>
                                    <div className="svc-badge-title">{b.title}</div>
                                    <div className="svc-badge-sub">{b.sub}</div>
                                </div>
                            </motion.div>
                        ))}
                    </FadeIn>
                </div>
            </section>

            {/* SERVICE CARDS */}
            <section className="svc-list-section">
                <div className="container">
                    <FadeIn>
                        <div className="section-header center">
                            <div className="section-tag"><CatIcon size={14} />{cat.shortTitle} Services</div>
                            <h2 className="section-title">Our <span>{cat.shortTitle}</span> Calibration Services</h2>
                            <p className="section-subtitle">
                                Each service is performed by certified technicians using NABL-accredited procedures.
                            </p>
                        </div>
                    </FadeIn>
                    <div className="svc-cards-grid">
                        {cat.services.map((svc, i) => (
                            <ServiceCard key={svc.id} service={svc} categorySlug={slug} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="svc-cta-section">
                <div className="svc-cta-bg-grid" />
                <div className="container svc-cta-inner">
                    <FadeIn>
                        <p className="svc-cta-sub">Ready to get started?</p>
                        <h2 className="svc-cta-title">Request a Quote for {cat.shortTitle} Calibration</h2>
                        <p className="svc-cta-desc">Our team responds within 24 hours. First visit within 48 hours.</p>
                        <div className="svc-cta-actions">
                            <a href="https://wa.me/919760188223" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <span>WhatsApp Us Now</span><ArrowRight size={18} />
                            </a>
                            <Link to="/contact" className="btn-outline">Send an Enquiry</Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* OTHER CATEGORIES */}
            <section className="svc-other-cats">
                <div className="container">
                    <FadeIn>
                        <div className="section-header center">
                            <div className="section-tag">Explore More</div>
                            <h2 className="section-title">Other <span>Calibration</span> Categories</h2>
                        </div>
                    </FadeIn>
                    <div className="svc-other-grid">
                        {otherCats.map((oc, i) => {
                            const OcIcon = ICON_MAP[oc.icon] || Ruler;
                            return (
                                <FadeIn key={oc.slug} delay={i * 0.1}>
                                    <Link to={`/services/${oc.slug}`} className="svc-other-card">
                                        <div className="svc-other-img-wrap">
                                            <img src={oc.img} alt={oc.title} className="svc-other-img" />
                                            <div className="svc-other-overlay" />
                                        </div>
                                        <div className="svc-other-body">
                                            <div className="svc-other-icon-wrap"><OcIcon size={20} /></div>
                                            <div>
                                                <div className="svc-other-title">{oc.title}</div>
                                                <div className="svc-other-count">{oc.services.length} Services</div>
                                            </div>
                                            <ArrowRight size={18} className="svc-other-arrow" />
                                        </div>
                                    </Link>
                                </FadeIn>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceCategory;
