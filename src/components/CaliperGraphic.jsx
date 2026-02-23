import React from 'react';
import './CaliperGraphic.css';

const CaliperGraphic = () => (
    <div className="caliper-wrapper">
        {/* Outer glow rings */}
        <div className="c-ring c-ring1" />
        <div className="c-ring c-ring2" />
        <div className="c-ring c-ring3" />

        {/* Scan line sweep */}
        <div className="scan-line" />

        {/* Main SVG Caliper */}
        <svg
            className="caliper-svg"
            viewBox="0 0 460 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                {/* Metallic body gradient */}
                <linearGradient id="gBody" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="25%" stopColor="#2563eb" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="75%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#0d2040" />
                </linearGradient>

                {/* Jaw gradient */}
                <linearGradient id="gJaw" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e3572" />
                    <stop offset="40%" stopColor="#2d62cc" />
                    <stop offset="100%" stopColor="#0a1b40" />
                </linearGradient>

                {/* Slider gradient */}
                <linearGradient id="gSlider" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1a3870" />
                    <stop offset="50%" stopColor="#224faa" />
                    <stop offset="100%" stopColor="#0d1e44" />
                </linearGradient>

                {/* Glass sheen */}
                <radialGradient id="gGlass" cx="30%" cy="20%" r="70%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>

                {/* Glow filter */}
                <filter id="fGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                {/* Drop shadow */}
                <filter id="fShadow" x="-15%" y="-15%" width="130%" height="160%">
                    <feDropShadow dx="0" dy="6" stdDeviation="10"
                        floodColor="#1a56db" floodOpacity="0.45" />
                </filter>

                {/* Strong glow */}
                <filter id="fGlow2" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* ── MAIN SCALE BAR ── */}
            <g filter="url(#fShadow)">
                <rect x="20" y="110" width="420" height="32" rx="6"
                    fill="url(#gBody)" />
                {/* Top highlight */}
                <rect x="20" y="110" width="420" height="3" rx="2"
                    fill="#60a5fa" opacity="0.5" />
                {/* Bottom edge */}
                <rect x="20" y="139" width="420" height="3" rx="2"
                    fill="#0a1730" opacity="0.7" />

                {/* Major tick marks (every 10mm) */}
                {Array.from({ length: 22 }).map((_, i) => (
                    <g key={i}>
                        <rect
                            x={20 + i * 19}
                            y="113"
                            width="1.2"
                            height={i % 5 === 0 ? 14 : 8}
                            fill={i % 5 === 0 ? '#93c5fd' : '#3b82f6'}
                            opacity={i % 5 === 0 ? 1 : 0.65}
                        />
                        {i % 5 === 0 && (
                            <text x={20 + i * 19} y="109" fontSize="8"
                                fill="#93c5fd" textAnchor="middle" opacity="0.9"
                                fontFamily="Inter, monospace">
                                {i * 2}
                            </text>
                        )}
                    </g>
                ))}
            </g>

            {/* ── FIXED JAW ── */}
            <g filter="url(#fShadow)">
                {/* Upper jaw (internal measure) */}
                <rect x="20" y="68" width="58" height="42" rx="4"
                    fill="url(#gJaw)" />
                <rect x="20" y="68" width="58" height="3" rx="2"
                    fill="#60a5fa" opacity="0.45" />

                {/* Lower jaw (external measure) */}
                <rect x="20" y="142" width="58" height="88" rx="4"
                    fill="url(#gJaw)" />
                {/* Jaw bevel tip */}
                <polygon
                    points="20,230 78,230 78,218 20,218"
                    fill="url(#gJaw)"
                />
                <line x1="44" y1="230" x2="78" y2="230"
                    stroke="#60a5fa" strokeWidth="1.8" opacity="0.7" />

                {/* Glass reflection on jaw */}
                <rect x="20" y="142" width="58" height="88" rx="4"
                    fill="url(#gGlass)" />
            </g>

            {/* ── MOVABLE SLIDER ── */}
            <g filter="url(#fShadow)">
                {/* Slider body */}
                <rect x="178" y="90" width="78" height="62" rx="6"
                    fill="url(#gSlider)" />
                {/* Slider top highlight */}
                <rect x="178" y="90" width="78" height="3" rx="2"
                    fill="#60a5fa" opacity="0.4" />

                {/* Vernier scale panel */}
                <rect x="180" y="122" width="74" height="24" rx="3"
                    fill="rgba(6,15,35,0.85)" stroke="#1a56db" strokeWidth="1" />
                {Array.from({ length: 13 }).map((_, i) => (
                    <rect key={i}
                        x={183 + i * 5.5}
                        y="125"
                        width="1"
                        height={i === 0 || i % 5 === 0 ? 10 : 6}
                        fill="#60a5fa"
                        opacity={i === 0 || i % 5 === 0 ? 0.95 : 0.6}
                    />
                ))}
                <text x="217" y="148" fontSize="6"
                    fill="#93c5fd" textAnchor="middle" fontFamily="monospace"
                    opacity="0.85">
                    0.02mm
                </text>

                {/* Lock screw */}
                <circle cx="246" cy="110" r="8"
                    fill="#0c1c3e" stroke="#2563eb" strokeWidth="1.8" />
                <circle cx="246" cy="110" r="4"
                    fill="#162852" />
                <line x1="243" y1="107" x2="249" y2="113"
                    stroke="#3b82f6" strokeWidth="1.2" opacity="0.8" />
                <line x1="249" y1="107" x2="243" y2="113"
                    stroke="#3b82f6" strokeWidth="1.2" opacity="0.8" />

                {/* Movable upper jaw */}
                <rect x="178" y="68" width="55" height="22" rx="4"
                    fill="url(#gJaw)" />

                {/* Movable lower jaw */}
                <rect x="178" y="152" width="55" height="78" rx="4"
                    fill="url(#gJaw)" />
                <polygon
                    points="178,230 233,230 233,218 178,218"
                    fill="url(#gJaw)"
                />
                <line x1="178" y1="230" x2="202" y2="230"
                    stroke="#60a5fa" strokeWidth="1.8" opacity="0.7" />

                {/* Glass sheen on slider */}
                <rect x="178" y="90" width="78" height="62" rx="6"
                    fill="url(#gGlass)" />
            </g>

            {/* ── DEPTH ROD ── */}
            <rect x="228" y="142" width="5" height="82" rx="2.5"
                fill="url(#gBody)" />
            <rect x="228" y="142" width="5" height="4"
                fill="#60a5fa" opacity="0.85" />

            {/* ── MEASUREMENT GAP GLOW ── */}
            <rect x="78" y="218" width="100" height="12" rx="3"
                fill="#1a56db" opacity="0.08" />
            <line x1="78" y1="224" x2="178" y2="224"
                stroke="#60a5fa" strokeWidth="2"
                strokeDasharray="5,3"
                opacity="0.75"
                filter="url(#fGlow)" />

            {/* Measurement annotation */}
            <rect x="96" y="200" width="66" height="18" rx="4"
                fill="rgba(8,18,45,0.95)" stroke="#1a56db" strokeWidth="1.2" />
            <text x="129" y="213" fontSize="9.5"
                fill="#60a5fa" textAnchor="middle"
                fontFamily="monospace" fontWeight="700">
                38.20 mm
            </text>

            {/* ── DIGITAL READOUT BOX ── */}
            <rect x="295" y="95" width="100" height="36" rx="8"
                fill="rgba(5,12,30,0.95)" stroke="#1a56db" strokeWidth="1.8" />
            {/* Screen glow */}
            <rect x="297" y="97" width="96" height="32" rx="7"
                fill="rgba(26,86,219,0.06)" />
            <text x="324" y="115" fontSize="8"
                fill="#60a5fa" opacity="0.65" fontFamily="monospace">
                READING
            </text>
            <text x="345" y="126" fontSize="15"
                fill="#60a5fa" textAnchor="middle"
                fontFamily="monospace" fontWeight="700"
                filter="url(#fGlow2)">
                38.20
            </text>
            <text x="388" y="126" fontSize="9"
                fill="#93c5fd" fontFamily="monospace" opacity="0.8">
                mm
            </text>

            {/* Jaw tip glow dots */}
            <circle cx="78" cy="230" r="4"
                fill="#60a5fa" filter="url(#fGlow2)" opacity="0.9" />
            <circle cx="178" cy="230" r="4"
                fill="#60a5fa" filter="url(#fGlow2)" opacity="0.9" />

            {/* Particle accents */}
            <circle cx="30" cy="80" r="2" fill="#3b82f6" opacity="0.5" />
            <circle cx="420" cy="100" r="1.5" fill="#60a5fa" opacity="0.4" />
            <circle cx="380" cy="145" r="2.5" fill="#3b82f6" opacity="0.3" />
        </svg>

        {/* Floating label chip */}
        <div className="caliper-label">
            <span className="cl-dot" />
            Vernier Caliper · ±0.02mm
        </div>
    </div>
);

export default CaliperGraphic;
