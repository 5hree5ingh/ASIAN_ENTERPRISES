import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    quote: 'Asian Enterprises has been our trusted calibration partner for years. Their precision, speed, and documentation quality are absolutely unmatched in the industry.',
    company: 'Hero MotoCorp Limited',
    industry: 'Automotive',
    logo: '/images/logos/HERO MOTOCORP LIMITED.png',
  },
  {
    id: 2,
    quote: 'Dixon Technologies relies on Asian Enterprises for precision calibration of our electronics manufacturing equipment. Their accuracy and turnaround time are outstanding.',
    company: 'Dixon Technologies (India) Ltd.',
    industry: 'Electronics Manufacturing',
    logo: '/images/logos/DIXON TECHNOLOGIES (INDIA) LTD..png',
  },
  {
    id: 3,
    quote: 'The NABL-accredited calibration certificates from Asian Enterprises are accepted by all our international auditors without any queries.',
    company: 'ITC Limited',
    industry: 'FMCG & Hospitality',
    logo: '/images/logos/ITC LIMITED.png',
  },
  {
    id: 4,
    quote: 'Their mobile calibration unit saved us enormous downtime. The team arrives on-site, calibrates all instruments, and provides digital certificates same day.',
    company: 'Indian Oil Corporation Limited',
    industry: 'Oil & Gas',
    logo: '/images/logos/INDIAN OIL CORPORATION LIMITED.png',
  },
  {
    id: 5,
    quote: 'Reliable, fast, and technically excellent. Our pharmaceutical calibration requirements are met with pinpoint accuracy every single time.',
    company: 'Mankind Pharma',
    industry: 'Pharmaceutical',
    logo: '/images/logos/MANKIND PHARMA.png',
  },
  {
    id: 6,
    quote: 'Patanjali trusts Asian Enterprises for all critical instrument calibrations across our manufacturing facilities. Their compliance and traceability standards are top-notch.',
    company: 'Patanjali Ayurved',
    industry: 'FMCG & Ayurveda',
    logo: '/images/logos/patanjali.png',
  },
  {
    id: 7,
    quote: 'Exceptional calibration services with full traceability. Asian Enterprises is our go-to partner for every instrument we deploy across our packaging lines.',
    company: 'Alpla India Pvt Ltd',
    industry: 'Packaging',
    logo: '/images/logos/ALPLA INDIA PVT LTD.png',
  },
  {
    id: 8,
    quote: 'Their team handled our full facility calibration during a planned shutdown. Everything was done on time and with zero non-conformances.',
    company: 'Genus Power Infrastructures Ltd',
    industry: 'Power & Energy',
    logo: '/images/logos/GENUS POWER INFRASTRUCTURES LTD.png',
  },
  {
    id: 9,
    quote: 'Quick turnaround, highly professional technicians, and flawless documentation — Asian Enterprises never lets us down on our production lines.',
    company: 'East African (India) Overseas',
    industry: 'Manufacturing',
    logo: '/images/logos/EAST AFRICAN (INDIA) OVERSEAS.png',
  },
  {
    id: 10,
    quote: 'Asian Enterprises provides world-class calibration services for our rail infrastructure equipment. Their attention to safety-critical measurements is commendable.',
    company: 'Avadh Rail Infra Ltd.',
    industry: 'Railways & Infrastructure',
    logo: '/images/logos/AVADH RAIL INFRA LTD..png',
  },
  {
    id: 11,
    quote: 'We trust Asian Enterprises for all our pharmaceutical instrument calibrations. Their team understands the nuances of pharma compliance perfectly.',
    company: 'Psychotropics India Limited',
    industry: 'Pharmaceutical',
    logo: '/images/logos/PSYCHOTROPICS INDIA LIMITED.png',
  },
  {
    id: 12,
    quote: 'Our pharmaceutical equipment requires precise annual calibration. Asian Enterprises delivers every time with zero rework and full NABL traceability.',
    company: 'Simpex Pharma Pvt. Ltd.',
    industry: 'Pharmaceutical',
    logo: '/images/logos/SIMPEX PHARMA PVT. LTD..png',
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
