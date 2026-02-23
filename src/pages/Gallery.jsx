import React, { useState } from 'react';
import './Gallery.css';

const galleryItems = [
    { id: 1, label: 'Calibration Lab – Dimensional', cat: 'Labs', color: '#1a56db', symbol: '⊕' },
    { id: 2, label: 'Torque Wrench Calibration', cat: 'Services', color: '#0d2957', symbol: '⊗' },
    { id: 3, label: 'Pressure Gauge Setup', cat: 'Services', color: '#1e3a8a', symbol: '⊙' },
    { id: 4, label: 'Temperature Lab – Nashik', cat: 'Labs', color: '#1d4ed8', symbol: '◎' },
    { id: 5, label: 'Quality Certificate Archive', cat: 'Docs', color: '#2563eb', symbol: '✦' },
    { id: 6, label: 'Mobile Calibration Unit', cat: 'Equipment', color: '#1a56db', symbol: '⊕' },
    { id: 7, label: 'Surface Plate Inspection', cat: 'Services', color: '#0f2554', symbol: '⊞' },
    { id: 8, label: 'CMM Calibration – HAL', cat: 'Equipment', color: '#0d2957', symbol: '◈' },
    { id: 9, label: 'Reference Standards Room', cat: 'Labs', color: '#1e3a8a', symbol: '✧' },
    { id: 10, label: 'Client Training Session', cat: 'Events', color: '#2563eb', symbol: '⊕' },
    { id: 11, label: 'Annual Calibration Day', cat: 'Events', color: '#1d4ed8', symbol: '★' },
    { id: 12, label: 'Instrument Repair Workshop', cat: 'Services', color: '#1a56db', symbol: '⊗' },
];

const cats = ['All', 'Labs', 'Services', 'Equipment', 'Docs', 'Events'];

const Gallery = () => {
    const [active, setActive] = useState('All');
    const [selected, setSelected] = useState(null);
    const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.cat === active);

    return (
        <div className="gallery-page page-enter">
            {/* Page Header */}
            <section className="page-hero">
                <div className="bg-grid" />
                <div className="glow-orb page-orb1" />
                <div className="container page-hero-inner">
                    <div className="section-tag">Gallery</div>
                    <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
                        A Glimpse of Our <span>Work & Facilities</span>
                    </h1>
                    <p className="section-subtitle" style={{ maxWidth: '640px' }}>
                        Explore our state-of-the-art laboratories, precision calibration processes, and
                        the expert team behind every accurate measurement.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Filter */}
                    <div className="gal-filters">
                        {cats.map(cat => (
                            <button
                                key={cat}
                                className={`gal-filter-btn ${active === cat ? 'active' : ''}`}
                                onClick={() => setActive(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="gallery-grid">
                        {filtered.map((item, i) => (
                            <div
                                key={item.id}
                                className={`gallery-item ${i === 0 ? 'wide' : ''}`}
                                onClick={() => setSelected(item)}
                                style={{ '--accent-color': item.color }}
                            >
                                <div className="gi-visual" style={{ background: `linear-gradient(135deg, ${item.color}33, ${item.color}66)` }}>
                                    <div className="gi-pattern" />
                                    <div className="gi-symbol">{item.symbol}</div>
                                    <div className="gi-label-overlay">
                                        <span>{item.label}</span>
                                    </div>
                                </div>
                                <div className="gi-info">
                                    <span className="gi-cat">{item.cat}</span>
                                    <h4 className="gi-title">{item.label}</h4>
                                </div>
                                <div className="gi-zoom">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                                        <path d="M11 8v6M8 11h6" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selected && (
                <div className="lightbox" onClick={() => setSelected(null)}>
                    <button className="lb-close" onClick={() => setSelected(null)}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="lb-card" onClick={e => e.stopPropagation()}>
                        <div
                            className="lb-visual"
                            style={{ background: `linear-gradient(135deg, ${selected.color}44, ${selected.color}88)` }}
                        >
                            <div className="gi-pattern" />
                            <div className="lb-symbol">{selected.symbol}</div>
                        </div>
                        <div className="lb-info">
                            <div className="gi-cat">{selected.cat}</div>
                            <h3>{selected.label}</h3>
                            <p className="lb-desc">High-resolution documentation of our precision calibration processes and laboratory infrastructure, showcasing our commitment to measurement excellence.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
