import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
    { label: 'Home', path: '/', sectionId: 'home-hero' },
    { label: 'About Us', path: '/about', sectionId: 'about-main' },
    { label: 'Facilities', path: '/facilities', sectionId: 'facilities-section' },
    { label: 'Projects', path: '/projects', sectionId: null },
    { label: 'Gallery', path: '/gallery', sectionId: null },
    { label: 'Partners', path: '/partners', sectionId: null },
    { label: 'Contact Us', path: '/contact', sectionId: null },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const location = useLocation();
    const observerRef = useRef(null);

    /* ── scroll shadow ── */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ── close mobile menu on route change ── */
    useEffect(() => setMenuOpen(false), [location]);

    /* ── IntersectionObserver: only active on home page "/" ── */
    useEffect(() => {
        if (location.pathname !== '/') {
            setActiveSection(null);
            return;
        }

        const sectionIds = navLinks
            .filter(l => l.sectionId)
            .map(l => l.sectionId);

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
        );

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) observerRef.current.observe(el);
        });

        return () => {
            if (observerRef.current) observerRef.current.disconnect();
        };
    }, [location.pathname]);

    /* ── decide which link is "active" ── */
    const isActive = (link) => {
        if (location.pathname !== '/') {
            return location.pathname === link.path;
        }
        // on the home page, use scroll-based section detection
        if (activeSection) {
            return link.sectionId === activeSection;
        }
        // default: Home is active
        return link.path === '/';
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                {/* Logo */}
                <Link to="/" className="nav-logo">
                    <img
                        src="/images/Asian_logo.png"
                        alt="Asian Enterprises Logo"
                        className="logo-img"
                    />
                </Link>

                {/* Desktop Nav */}
                <ul className="nav-links">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            {location.pathname === '/' && link.sectionId ? (
                                <a
                                    href={`#${link.sectionId}`}
                                    className={`nav-link ${isActive(link) ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById(link.sectionId)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    to={link.path}
                                    className={`nav-link ${isActive(link) ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="https://wa.me/919760188223?text=Hello%20Asian%20Enterprises!%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20precision%20calibration%20and%20measurement%20services.%0A%0ACould%20you%20please%20provide%20a%20quote%20for%20my%20requirements%3F%0A%0AThank%20you!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-cta"
                >
                    Get a Quote
                </a>

                {/* Hamburger */}
                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {navLinks.map(link => (
                    location.pathname === '/' && link.sectionId ? (
                        <a
                            key={link.path}
                            href={`#${link.sectionId}`}
                            className={`mobile-link ${isActive(link) ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                setMenuOpen(false);
                                document.getElementById(link.sectionId)?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {link.label}
                        </a>
                    ) : (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`mobile-link ${isActive(link) ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    )
                ))}
                <a
                    href="https://wa.me/919760188223?text=Hello%20Asian%20Enterprises!%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20precision%20calibration%20and%20measurement%20services.%0A%0ACould%20you%20please%20provide%20a%20quote%20for%20my%20requirements%3F%0A%0AThank%20you!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-cta"
                >Get a Quote</a>
            </div>
        </nav>
    );
};

export default Navbar;
