import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import './Gallery.css';

/* ── All company images ─────────────────────────── */
const ALL_IMAGES = [
  /* Calibration Lab */
  { id: 1,  src: '/images/company_images/C1.png',  label: 'Temperature Calibration Lab', cat: 'Calibration Lab', wide: true  },
  { id: 2,  src: '/images/company_images/C2.png',  label: 'Lab Overview – Nashik Facility', cat: 'Calibration Lab'              },
  { id: 3,  src: '/images/company_images/C3.png',  label: 'Calibration Bench – Side View', cat: 'Calibration Lab'              },

  /* Instruments */
  { id: 4,  src: '/images/company_images/C4.png',  label: 'Precision Instruments',       cat: 'Instruments',     wide: true  },
  { id: 5,  src: '/images/company_images/C5.png',  label: 'Measurement Tools',           cat: 'Instruments'                  },
  { id: 6,  src: '/images/company_images/C6.png',  label: 'Reference Standards',         cat: 'Instruments'                  },

  /* Equipment */
  { id: 7,  src: '/images/company_images/C7.png',  label: 'Calibration Equipment',       cat: 'Equipment',       wide: true  },
  { id: 8,  src: '/images/company_images/C8.png',  label: 'Equipment Room',              cat: 'Equipment'                    },
  { id: 9,  src: '/images/company_images/C9.png',  label: 'Thermal Calibration Unit',    cat: 'Equipment'                    },

  /* On-site */
  { id: 10, src: '/images/company_images/C11.png', label: 'Field Calibration',           cat: 'On-site',         wide: true  },
  { id: 11, src: '/images/company_images/C12.png', label: 'On-site Measurement',         cat: 'On-site'                      },
  { id: 12, src: '/images/company_images/C13.png', label: 'Client Site Testing',         cat: 'On-site'                      },
];

const CATS = ['All', 'Calibration Lab', 'Instruments', 'Equipment', 'On-site'];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imgLoaded, setImgLoaded] = useState({});

  const filtered =
    active === 'All' ? ALL_IMAGES : ALL_IMAGES.filter(g => g.cat === active);

  const openLightbox = (item, idx) => {
    setSelected(item);
    setSelectedIndex(idx);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelected(null);
    setSelectedIndex(null);
    document.body.style.overflow = '';
  };

  const navigate = useCallback(
    dir => {
      if (selectedIndex === null) return;
      const next = (selectedIndex + dir + filtered.length) % filtered.length;
      setSelected(filtered[next]);
      setSelectedIndex(next);
    },
    [selectedIndex, filtered]
  );

  useEffect(() => {
    const handler = e => {
      if (!selected) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selected, navigate]);

  /* cleanup overflow on unmount */
  useEffect(() => () => { document.body.style.overflow = ''; }, []);

  return (
    <div className="gallery-page page-enter">
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="bg-grid" />
        <div className="glow-orb page-orb1" />
        <div className="container page-hero-inner">
          <div className="section-tag">Gallery</div>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem,5vw,3.5rem)' }}>
            A Glimpse of Our <span>Work &amp; Facilities</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '640px' }}>
            Explore our state-of-the-art laboratories, precision calibration instruments, and
            the expert team behind every accurate measurement.
          </p>
        </div>
      </section>

      {/* ── Gallery Grid ──────────────────────────────────────── */}
      <section className="section gal-section">
        <div className="container">

          {/* Filter pills */}
          <div className="gal-filters">
            {CATS.map(cat => (
              <button
                key={cat}
                className={`gal-filter-btn ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
              >
                {cat}
                <span className="gal-filter-count">
                  {cat === 'All' ? ALL_IMAGES.length : ALL_IMAGES.filter(g => g.cat === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className={`gallery-item${item.wide ? ' wide' : ''}`}
                onClick={() => openLightbox(item, i)}
              >
                {/* Shimmer placeholder — hidden once image loads */}
                {!imgLoaded[item.id] && <div className="gi-shimmer" />}

                {/* Real image — always rendered, fills card */}
                <img
                  src={item.src}
                  alt={item.label}
                  className="gi-img"
                  onLoad={() => setImgLoaded(prev => ({ ...prev, [item.id]: true }))}
                />

                <div className="gi-overlay">
                  <div className="gi-meta">
                    <span className="gi-cat-badge">{item.cat}</span>
                    <h4 className="gi-title">{item.label}</h4>
                  </div>
                  <div className="gi-zoom-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="gal-stats">
            <div className="gal-stat">
              <span className="gal-stat-num">{ALL_IMAGES.length}+</span>
              <span className="gal-stat-label">Lab Photographs</span>
            </div>
            <div className="gal-stat-divider" />
            <div className="gal-stat">
              <span className="gal-stat-num">4</span>
              <span className="gal-stat-label">Accredited Labs</span>
            </div>
            <div className="gal-stat-divider" />
            <div className="gal-stat">
              <span className="gal-stat-num">25+</span>
              <span className="gal-stat-label">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lightbox (portal to body to escape parent transform) ── */}
      {selected && ReactDOM.createPortal(
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lb-close" onClick={closeLightbox} aria-label="Close">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button className="lb-nav lb-prev" onClick={e => { e.stopPropagation(); navigate(-1); }} aria-label="Previous">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="lb-card" onClick={e => e.stopPropagation()}>
            <div className="lb-visual">
              <img src={selected.src} alt={selected.label} className="lb-img" />
            </div>
            <div className="lb-info">
              <span className="gi-cat-badge">{selected.cat}</span>
              <h3 className="lb-title">{selected.label}</h3>
              <p className="lb-desc">
                Professional documentation of Asian Enterprises' precision calibration processes
                and laboratory infrastructure — showcasing our commitment to measurement excellence
                and international quality standards.
              </p>
              <div className="lb-counter">{selectedIndex + 1} / {filtered.length}</div>
            </div>
          </div>

          <button className="lb-nav lb-next" onClick={e => { e.stopPropagation(); navigate(1); }} aria-label="Next">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Gallery;
