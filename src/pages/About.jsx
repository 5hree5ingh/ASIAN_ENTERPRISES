import React from 'react';
import { Link } from 'react-router-dom';
import {
    Building2,
    Award,
    ShieldCheck,
    Landmark,
    MapPin,
    MonitorSmartphone,
} from 'lucide-react';
import './About.css';

const team = [
    { name: 'Mrs. Mamta', role: 'Founder', exp: '12+ yrs', initials: 'MM', photo: '/images/MAMTA.png' },
    { name: 'Mr. Satish Kumar Mishra', role: 'Chief Executive Officer', exp: '12+ yrs', initials: 'SK', photo: '/images/SATISH.png' },
];

const milestones = [
    {
        year: '2013',
        title: 'Foundation',
        desc: 'Asian Enterprises was established with a bold mission — to deliver world-class precision calibration and measurement services to Indian industries.',
        Icon: Building2,
    },
    {
        year: '2014',
        title: 'NABL Accreditation',
        desc: 'Achieved prestigious NABL accreditation — certifying our compliance with ISO/IEC 17025 and placing us among India\'s top-tier calibration labs.',
        Icon: Award,
    },
    {
        year: '2014',
        title: 'ISO 9001 Certified',
        desc: 'Awarded ISO 9001 certification for our robust Quality Management System, reinforcing standardised processes and commitment to quality.',
        Icon: ShieldCheck,
    },
    {
        year: '2014',
        title: 'MSME Authorised',
        desc: 'Officially registered as an MSME by the Government of India — strengthening credibility and partnerships with government bodies and large industries.',
        Icon: Landmark,
    },
    {
        year: 'Growth',
        title: 'National Expansion',
        desc: 'Established service centres in Haridwar and Chandigarh, delivering on-site and in-lab calibration across Northern India\'s industrial corridors.',
        Icon: MapPin,
    },
    {
        year: '2025',
        title: 'Going Digital — SaaS Platform',
        desc: 'Implementing SaaS-based certificate generation software for instant, tamper-proof digital calibration certificates — faster, seamless, and fully paperless.',
        Icon: MonitorSmartphone,
    },
];

const About = () => {
    const timelineRef = React.useRef(null);
    const fillRef = React.useRef(null);

    React.useEffect(() => {
        /* ── Reveal cards on scroll ── */
        const items = document.querySelectorAll('.timeline-item');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px 0px 0px' }
        );
        items.forEach((item) => observer.observe(item));

        /* ── Fallback: force-show items already in viewport on load ── */
        const fallback = setTimeout(() => {
            items.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    item.classList.add('visible');
                }
            });
        }, 100);

        /* ── Fill line on scroll ── */
        const handleScroll = () => {
            const timeline = timelineRef.current;
            const fill = fillRef.current;
            if (!timeline || !fill) return;

            const rect = timeline.getBoundingClientRect();
            const timelineTop = rect.top + window.scrollY;
            const timelineHeight = rect.height;
            const scrollY = window.scrollY + window.innerHeight * 0.55;

            const progress = Math.min(
                Math.max((scrollY - timelineTop) / timelineHeight, 0),
                1
            );
            fill.style.height = `${progress * 100}%`;

            /* Light up dots the fill has passed */
            const dots = timeline.querySelectorAll('.timeline-dot');
            dots.forEach((dot) => {
                const dotRect = dot.getBoundingClientRect();
                const dotCenter = dotRect.top + dotRect.height / 2;
                const fillBottom = rect.top + timelineHeight * progress;
                if (dotCenter <= fillBottom) {
                    dot.classList.add('reached');
                } else {
                    dot.classList.remove('reached');
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial check

        return () => {
            clearTimeout(fallback);
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
    <div className="about page-enter">
        {/* ─── PAGE HERO with background image ─── */}
        <section className="about-hero">
            <div className="about-hero-bg" />
            <div className="about-hero-overlay" />
            <div className="container about-hero-inner">
                <div className="about-hero-content">
                    <h1 className="about-hero-title">
                        12+ Years of Measurement<br />
                        <span className="about-hero-accent">Excellence</span>
                    </h1>
                    <p className="about-hero-subtitle">
                        Asian Enterprises delivered world-class calibration &amp; validation services for
                        precision measuring instruments — ensuring your instruments meet the highest accuracy standards.
                    </p>
                    <div className="about-hero-stats">
                        <div className="ahs-item">
                            <div className="ahs-number">600+</div>
                            <div className="ahs-label">Satisfied Clients</div>
                        </div>
                        <div className="ahs-divider" />
                        <div className="ahs-item">
                            <div className="ahs-number">28+</div>
                            <div className="ahs-label">Certified Engineers</div>
                        </div>
                        <div className="ahs-divider" />
                        <div className="ahs-item">
                            <div className="ahs-number">12+</div>
                            <div className="ahs-label">Years of Excellence</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* ─── TIMELINE ─── */}
        <section className="section timeline-section">
            <div className="container">
                <div className="section-header center" style={{ marginBottom: '60px' }}>
                    <h2 className="section-title">Milestones That <span>Define Us</span></h2>
                </div>
                <div className="timeline" ref={timelineRef}>
                    <div className="timeline-line" />
                    <div className="timeline-line-fill" ref={fillRef} />
                    {milestones.map((m, i) => (
                        <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-dot">
                                <span className="timeline-dot-inner">
                                    <m.Icon size={18} strokeWidth={2} />
                                </span>
                            </div>
                            <div className="timeline-card">
                                <div className="tl-year">{m.year}</div>
                                <h4 className="tl-title">{m.title}</h4>
                                <p className="tl-desc">{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ─── TEAM ─── */}
        <section className="section team-section">
            <div className="container">
                <div className="section-header center" style={{ marginBottom: '60px' }}>
                    <div className="section-tag">Leadership</div>
                    <h2 className="section-title">Meet Our <span>Expert Team</span></h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Our team of certified metrologists and engineers brings decades of combined experience
                        and an unwavering commitment to precision.
                    </p>
                </div>
                <div className="team-grid">
                    {team.map((member, i) => (
                        <div key={i} className="team-card">
                            <div className="team-avatar-wrap">
                                {member.photo
                                    ? <img src={member.photo} alt={member.name} className="team-photo" />
                                    : <div className="team-initials">{member.initials}</div>
                                }
                            </div>
                            <div className="team-info">
                                <h4 className="team-name">{member.name}</h4>
                                <div className="team-role">{member.role}</div>
                                <div className="team-exp">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                                    </svg>
                                    {member.exp} experience
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ─── CERTIFICATIONS ─── */}
        <section className="section certs-section">
            <div className="container">
                <div className="section-header center" style={{ marginBottom: '60px' }}>
                    <div className="section-tag">Accreditations</div>
                    <h2 className="section-title">Our <span>Certifications</span></h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Recognised and accredited by India's leading standards bodies —
                        every certificate reflects our commitment to quality and precision.
                    </p>
                </div>

                <div className="certs-grid">
                    {[
                        { img: '/images/CERTIFICATES_LOGO/NPL.png', name: 'NPL Traceable', full: 'National Physical Laboratory' },
                        { img: '/images/CERTIFICATES_LOGO/BIS.png', name: 'BIS Certified', full: 'Bureau of Indian Standards' },
                        { img: '/images/CERTIFICATES_LOGO/ERTL.png', name: 'ERTL Approved', full: 'Electronics Regional Test Lab' },
                        { img: '/images/CERTIFICATES_LOGO/NABL.png', name: 'NABL Accredited', full: 'National Accreditation Board' },
                        { img: '/images/CERTIFICATES_LOGO/ISO.png', name: 'ISO/IEC 17025', full: 'International Lab Competence Standard' },
                    ].map((cert, i) => (
                        <div key={i} className="cert-item">
                            <div className="cert-logo-wrap">
                                <img
                                    src={cert.img}
                                    alt={cert.name}
                                    className="cert-logo-img"
                                />
                            </div>
                            <div className="cert-info">
                                <span className="cert-name">{cert.name}</span>
                                <span className="cert-full">{cert.full}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="about-cta">
            <div className="container about-cta-inner">
                <div className="about-cta-text">
                    <h2 className="about-cta-title">Ready to Work With Us?</h2>
                    <p className="about-cta-sub">
                        Partner with India's trusted calibration experts. Get a free consultation today.
                    </p>
                </div>
                <div className="about-cta-actions">
                    <Link to="/contact" className="about-cta-btn-primary">
                        Contact Us
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                    <Link to="/projects" className="about-cta-btn-outline">
                        View Projects
                    </Link>
                </div>
            </div>
        </section>
    </div>
    );
};

export default About;
