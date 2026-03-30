import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: 'Asian Enterprises has been our trusted calibration partner for over 8 years. Their precision, speed, and documentation quality are absolutely unmatched in the industry.',
    company: 'Tata Motors',
    industry: 'Automotive · Pune',
    logo: '/images/logos/logo_tata.png',
  },
  {
    id: 2,
    quote: 'Their mobile calibration unit saved us enormous downtime. The team arrives on-site, calibrates all instruments, and provides digital certificates same day.',
    company: 'Sun Pharmaceutical',
    industry: 'Pharmaceutical',
    logo: '/images/logos/logo_sunpharma.png',
  },
  {
    id: 3,
    quote: 'We have been working with Asian Enterprises for our aerospace-grade calibration needs. Their attention to measurement uncertainty and traceability is commendable.',
    company: 'Hindustan Aeronautics',
    industry: 'Aerospace · Nashik',
    logo: '/images/logos/logo_hal.png',
  },
  {
    id: 4,
    quote: 'Reliable, fast, and technically excellent. Our thermal calibration requirements are met with pinpoint accuracy every single time.',
    company: 'Mahindra & Mahindra',
    industry: 'Automotive',
    logo: '/images/logos/logo_mahindra.png',
  },
  {
    id: 5,
    quote: 'The NABL-accredited calibration certificates from Asian Enterprises are accepted by all our international auditors without any queries.',
    company: 'Larsen & Toubro',
    industry: 'Engineering',
    logo: '/images/logos/logo_lt.png',
  },
  {
    id: 6,
    quote: 'Their team handled our full facility calibration during a planned shutdown. Everything was done on time and with zero non-conformances.',
    company: 'Bharat Petroleum',
    industry: 'Oil & Gas',
    logo: '/images/logos/logo_bpcl.png',
  },
  {
    id: 7,
    quote: 'DRDO relies on Asian Enterprises for high-precision dimensional and pressure calibrations critical to our defence programmes. Their traceability chain is impeccable.',
    company: 'DRDO',
    industry: 'Defence & Aerospace',
    logo: '/images/logos/logo_tata.png',
  },
  {
    id: 8,
    quote: 'Exceptional calibration services with full traceability. Asian Enterprises is our go-to partner for every instrument we deploy on-site.',
    company: 'Forbes Marshall',
    industry: 'Process Engineering',
    logo: '/images/logos/logo_hal.png',
  },
  {
    id: 9,
    quote: 'Quick turnaround, highly professional technicians, and flawless documentation — Asian Enterprises never lets us down on our production lines.',
    company: 'Bajaj Auto',
    industry: 'Automotive',
    logo: '/images/logos/logo_mahindra.png',
  },
  {
    id: 10,
    quote: 'Space-grade precision is non-negotiable. Asian Enterprises consistently meets our strict calibration requirements with full NABL compliance.',
    company: 'ISRO',
    industry: 'Space Research',
    logo: '/images/logos/logo_lt.png',
  },
  {
    id: 11,
    quote: 'We trust Asian Enterprises for all our critical medical equipment calibration. Their team understands the nuances of healthcare compliance perfectly.',
    company: 'Kokilaben Hospital',
    industry: 'Healthcare · Mumbai',
    logo: '/images/logos/logo_sunpharma.png',
  },
  {
    id: 12,
    quote: 'Our electrical test equipment requires precise annual calibration. Asian Enterprises delivers every time with zero rework and full traceability.',
    company: 'Kirloskar Electric',
    industry: 'Electrical Engineering',
    logo: '/images/logos/logo_bpcl.png',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayed, setDisplayed] = useState({
    quote: testimonials[0].quote,
    company: testimonials[0].company,
    industry: testimonials[0].industry,
  });

  const handleActivate = (index) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      const t = testimonials[index];
      setDisplayed({ quote: t.quote, company: t.company, industry: t.industry });
      setActiveIndex(index);
      setTimeout(() => setIsAnimating(false), 400);
    }, 200);
  };

  return (
    <div className="testimonials-unique">

      {/* Fixed-height quote zone */}
      <div className="tu-quote-wrap">
        <span className="tu-quote-mark tu-quote-mark--open">"</span>
        <p className={`tu-quote-text${isAnimating ? ' tu-quote-text--animating' : ''}`}>
          {displayed.quote}
        </p>
        <span className="tu-quote-mark tu-quote-mark--close">"</span>
      </div>

      {/* Fixed-height company label */}
      <div className={`tu-label${isAnimating ? ' tu-label--animating' : ''}`}>
        <span className="tu-company">{displayed.company}</span>
        <span className="tu-industry">{displayed.industry}</span>
      </div>

      {/* Pills — circles only, identical size always = zero layout shift */}
      <div className="tu-pills">
        {testimonials.map((t, index) => (
          <button
            key={t.id}
            className={`tu-pill${activeIndex === index ? ' tu-pill--active' : ''}`}
            onClick={() => handleActivate(index)}
            onMouseEnter={() => handleActivate(index)}
            aria-label={t.company}
          >
            <img src={t.logo} alt={t.company} className="tu-avatar-img" />
          </button>
        ))}
      </div>

    </div>
  );
}
