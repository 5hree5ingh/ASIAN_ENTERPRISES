/**
 * validationData.js
 * Central data store for all validation & qualification services.
 * Organized into 3 groups: Equipment, Utility, and Process & Automation.
 */

export const VALIDATION_GROUPS = [
    {
        id: 'equipment',
        slug: 'equipment',
        title: 'Equipment Qualification',
        shortTitle: 'Equipment',
        icon: 'flask',
        description: 'IQ, OQ & PQ validation of critical process equipment used in pharmaceutical, biotech, and food manufacturing.',
        services: [
            {
                id: 'autoclave-validation',
                name: 'Autoclave Validation',
                img: '/images/valid_autoclave.png',
                description:
                    'Complete qualification of steam sterilisers (autoclaves) covering Installation Qualification (IQ), Operational Qualification (OQ), and Performance Qualification (PQ). Includes heat penetration studies, heat distribution mapping, F0 determination, and cycle validation per GAMP 5 and EU GMP Annex 15.',
                specs: [
                    { label: 'Temperature Range', value: '110°C – 140°C' },
                    { label: 'Pressure Range', value: '0–3 bar (gauge)' },
                    { label: 'Sensors Used', value: 'Calibrated Pt-100 RTDs' },
                    { label: 'Standard', value: 'EN 13060 / GAMP 5' },
                ],
                applications: ['Pharmaceutical GMP', 'Hospital CSSD', 'Biotech Labs', 'Dental Clinics'],
                protocol: [
                    'Pre-validation calibration of all temperature and pressure sensors',
                    'Installation Qualification — utilities, documentation, drawings review',
                    'Operational Qualification — empty chamber heat distribution mapping',
                    'Performance Qualification — loaded cycle heat penetration studies',
                    'F0 / lethality calculations and biological indicator correlation',
                ],
            },
            {
                id: 'oven-validation',
                name: 'Hot Air Oven Validation',
                img: '/images/valid_oven.png',
                description:
                    'IQ, OQ & PQ qualification of hot air ovens, sterilising tunnels, and drying ovens. Covers temperature uniformity mapping, hot spot identification across all load configurations, and cycle development for depyrogenation and drying processes.',
                specs: [
                    { label: 'Temperature Range', value: '50°C – 400°C' },
                    { label: 'Mapping Points', value: 'Up to 12 data loggers' },
                    { label: 'Uncertainty', value: '±0.5°C' },
                    { label: 'Standard', value: 'EU GMP Annex 15 / FDA 21 CFR Part 11' },
                ],
                applications: ['Pharmaceutical Drying', 'Depyrogenation', 'Food Processing', 'Component Drying'],
                protocol: [
                    'IQ — installation verification, utilities, calibration records',
                    'OQ — empty chamber mapping at all set points',
                    'PQ — loaded chamber mapping with production batches',
                    'Worst-case load and empty/half-load studies',
                    'Filter integrity and airflow uniformity verification',
                ],
            },
            {
                id: 'incubator-validation',
                name: 'Incubator & BOD Validation',
                img: '/images/valid_incubator.png',
                description:
                    'Qualification of CO₂ incubators, BOD incubators, seed germination chambers, and stability chambers. Includes temperature and humidity uniformity mapping at all set-point conditions, CO₂ concentration verification, and recovery time studies.',
                specs: [
                    { label: 'Temperature Range', value: '4°C – 60°C' },
                    { label: 'Humidity Range', value: '10% – 98% RH' },
                    { label: 'Uncertainty', value: '±0.3°C / ±2% RH' },
                    { label: 'Standard', value: 'USP 1151 / ICH Q1A/Q1B' },
                ],
                applications: ['Microbiology Labs', 'QC Laboratories', 'Research Institutes', 'Pharma Stability'],
                protocol: [
                    'IQ documentation and utility verification',
                    'OQ — temperature uniformity at all set-points',
                    'Humidity uniformity and recovery after door-opening study',
                    'PQ — 3-cycle consistency study',
                    'Alarm and safety system verification',
                ],
            },
            {
                id: 'muffle-furnace-validation',
                name: 'Muffle Furnace Validation',
                img: '/images/valid_muffle.png',
                description:
                    'Qualification of muffle furnaces, tube furnaces, and box furnaces used for ashing, ignition, and sintering processes. Thermal mapping using multi-point thermocouple arrays. Heat-up rate, soak temperature, and cool-down profiling across all operational zones.',
                specs: [
                    { label: 'Temperature Range', value: '200°C – 1400°C' },
                    { label: 'Measurement Points', value: 'Up to 20 TCs' },
                    { label: 'Uncertainty', value: '±2°C' },
                    { label: 'Standard', value: 'AMS 2750 / EU GMP' },
                ],
                applications: ['Ceramics & Sintering', 'QC Ashing', 'Metal Heat Treatment', 'Research Labs'],
                protocol: [
                    'IQ — physical installation and documentation',
                    'OQ — temperature mapping at 3 set-points across zones',
                    'PQ — loaded chamber validation with production material',
                    'Thermocouple insertion, sheathing, and placement per AMS 2750',
                    'Over-temperature alarm and controller verification',
                ],
            },
            {
                id: 'tunnel-pasteurizer-validation',
                name: 'Tunnel Pasteurizer Validation',
                img: '/images/valid_tunnel.png',
                description:
                    'Complete IQ/OQ/PQ of linear and rotary tunnel pasteurisers used in food, beverage, and pharmaceutical manufacturing. Lethality (PU) calculations, zone temperature profiling with traverse thermocouples, and belt speed verification.',
                specs: [
                    { label: 'Temperature Range', value: '60°C – 90°C' },
                    { label: 'PU Determination', value: 'Temperature–time integration' },
                    { label: 'Zones Qualified', value: 'Pre-heat, Pasteurisation, Cooling' },
                    { label: 'Standard', value: 'FDA PMO / EU Regulation 853/2004' },
                ],
                applications: ['Beverage Bottling', 'Dairy Processing', 'Canned Food', 'Brewery & Distillery'],
                protocol: [
                    'IQ — zone heater, conveyor, and spray system verification',
                    'OQ — zone temperature mapping at design speeds',
                    'PQ — PU determination with loaded product containers',
                    'Belt speed and residence time verification',
                    'Alarm testing and rejected container diversion system',
                ],
            },
            {
                id: 'reactor-validation',
                name: 'Reactor & Fermenter Qualification',
                img: '/images/valid_reactor.png',
                description:
                    'Qualification of batch and continuous reactors, bioreactors, and fermenters in pharmaceutical and chemical industries. Covers temperature uniformity, jacket efficiency, agitation studies, pH and DO probe performance qualification, and CIP/SIP cycle validation.',
                specs: [
                    { label: 'Volume Range', value: '5 L – 50,000 L' },
                    { label: 'Temperature', value: '-20°C to +200°C' },
                    { label: 'Parameters', value: 'Temp, pH, DO, Pressure, Agitation' },
                    { label: 'Standard', value: 'FDA cGMP / GAMP 5 / EU GMP' },
                ],
                applications: ['API Synthesis', 'Biofermentation', 'Chemical Processing', 'Pilot Plant R&D'],
                protocol: [
                    'IQ — vessel, jacket, instrumentation, and utilities',
                    'OQ — jacket heating/cooling performance, agitation mapping',
                    'Sensor calibration and performance qualification (pH, DO, temp)',
                    'CIP/SIP cycle validation',
                    'PQ — 3 production-scale process validation runs',
                ],
            },
        ],
    },
    {
        id: 'utility',
        slug: 'utility',
        title: 'Utility Qualification',
        shortTitle: 'Utility',
        icon: 'wind',
        description: 'Testing and qualification of critical utilities — clean rooms, steam systems, compressed air, and purified water.',
        services: [
            {
                id: 'hvac-cleanroom',
                name: 'HVAC & Clean Room Testing',
                img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
                description:
                    'Comprehensive qualification of HVAC systems and cleanrooms to ISO 14644 and GMP Annex 1 standards. Includes air change rate (ACPH) measurement, room pressure differential testing, HEPA filter integrity (DOP/PAO), particle counting, and temperature/humidity uniformity mapping.',
                specs: [
                    { label: 'ISO Classes', value: 'ISO 5 to ISO 8 (Class 100 to 100,000)' },
                    { label: 'Particle Sizes', value: '0.5 µm and 5 µm' },
                    { label: 'Airflow', value: 'Velocity, ACPH, Uniformity' },
                    { label: 'Standard', value: 'ISO 14644-1/2 / EU GMP Annex 1' },
                ],
                applications: ['Pharmaceutical Manufacturing', 'Hospital OTs', 'Semiconductor Fab', 'Medical Device'],
                protocol: [
                    'HEPA filter integrity test (DOP/PAO challenge)',
                    'Airflow velocity and uniformity measurements',
                    'Air change per hour (ACPH) determination',
                    'Room pressure differential cascade verification',
                    'Particle count at rest and in-operation',
                    'Temperature and humidity mapping',
                ],
            },
            {
                id: 'steam-quality',
                name: 'Steam Quality Testing',
                img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                description:
                    'Qualification of pure steam (clean steam) and saturated steam systems per HTM 2010 and EN 285 standards. Tests include dryness fraction (superheat), non-condensable gas content, and superheating. Microbial and chemical quality testing of steam condensate.',
                specs: [
                    { label: 'Dryness Fraction', value: '≥ 0.95' },
                    { label: 'Non-Condensable Gas', value: '≤ 3.5%' },
                    { label: 'Superheat', value: '≤ 25°C' },
                    { label: 'Standard', value: 'EN 285 / HTM 2010 / PDA TR48' },
                ],
                applications: ['Autoclave Systems', 'SIP Processes', 'Hospital Sterilisation', 'Pharma GMP'],
                protocol: [
                    'Sampling at point of use with calibrated sensor assembly',
                    'Dryness fraction determination using throttling calorimeter',
                    'Non-condensable gas quantification',
                    'Superheat measurement at multiple flow conditions',
                    'Condensate chemical and microbiological testing',
                ],
            },
            {
                id: 'compressed-air',
                name: 'Compressed Air Validation',
                img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80',
                description:
                    'Testing and qualification of compressed air, nitrogen, and other instrument gases to ISO 8573 purity classes. Parameters include oil content, particulate count, moisture (dew point), and microbial contamination. Suitable for pharmaceutical, food, and industrial applications.',
                specs: [
                    { label: 'Purity Classes', value: 'ISO 8573 Class 1 to Class 5' },
                    { label: 'Parameters', value: 'Oil, Particulate, Dew Point, Micro' },
                    { label: 'Dew Point', value: '-70°C to +20°C (pressure dew point)' },
                    { label: 'Standard', value: 'ISO 8573 / ZS 2004:2011' },
                ],
                applications: ['Pharmaceutical Product Contact', 'Food Grade Air', 'Instrument Air', 'CNC Machining'],
                protocol: [
                    'Particulate counting per ISO 8573-4',
                    'Oil aerosol and vapour measurement per ISO 8573-2 & 5',
                    'Pressure dew point measurement per ISO 8573-3',
                    'Microbiological sampling and culture per ISO 8573-7',
                    'Point-of-use sampling at all critical locations',
                ],
            },
        ],
    },
    {
        id: 'process',
        slug: 'process',
        title: 'Process & Automation Validation',
        shortTitle: 'Process & Automation',
        icon: 'cpu',
        description: 'Validation of automated systems, PLC controllers, VFDs, and purified water systems used in GMP and regulated environments.',
        services: [
            {
                id: 'plc-validation',
                name: 'PLC / SCADA Validation',
                img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
                description:
                    'Computer system validation (CSV) and qualification of PLCs, SCADA systems, and HMI panels used in pharmaceutical and regulated manufacturing. Covers hardware qualification, software validation (GAMP 5 category 4/5), alarm management, and audit trail verification per 21 CFR Part 11.',
                specs: [
                    { label: 'Framework', value: 'GAMP 5, 21 CFR Part 11, EU Annex 11' },
                    { label: 'PLC Brands', value: 'Siemens, Allen Bradley, Schneider, Mitsubishi' },
                    { label: 'Deliverables', value: 'URS, FS, IQ, OQ, PQ, Traceability Matrix' },
                    { label: 'Standard', value: 'FDA 21 CFR Part 11 / EU GMP Annex 11' },
                ],
                applications: ['Pharma Automation', 'HVAC Control Systems', 'Batch Manufacturing', 'Clean Room Control'],
                protocol: [
                    'User Requirements Specification (URS) and Functional Specification review',
                    'Risk assessment (FMEA / GAMP category determination)',
                    'IQ — hardware installation verification',
                    'OQ — functional and interlock testing, alarm testing',
                    'PQ — process simulation and production batch review',
                    '21 CFR Part 11 / Annex 11 compliance audit',
                ],
            },
            {
                id: 'vfd-repair',
                name: 'VFD Repair & Testing',
                img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
                description:
                    'Expert repair, testing, and performance re-verification of Variable Frequency Drives (VFDs / inverters). Services cover fault diagnosis, IGBT replacement, capacitor replacement, firmware updates, and post-repair performance testing to manufacturer specifications.',
                specs: [
                    { label: 'Brands Serviced', value: 'ABB, Siemens, Danfoss, Schneider, Yaskawa' },
                    { label: 'Power Range', value: '0.37 kW to 500 kW' },
                    { label: 'Voltage', value: 'Single-phase & Three-phase' },
                    { label: 'Deliverable', value: 'Test report with before/after readings' },
                ],
                applications: ['Pumps & Compressors', 'HVAC Systems', 'Conveyor Drives', 'Process Motors'],
                protocol: [
                    'Incoming inspection and fault diagnosis',
                    'Component-level testing (IGBT, capacitors, gate drivers)',
                    'Parts replacement and re-assembly',
                    'Load test on motor test bench',
                    'Output waveform and harmonic verification',
                    'Delivery with calibrated test certificate',
                ],
            },
            {
                id: 'water-system-validation',
                name: 'Purified Water System Validation',
                img: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&q=80',
                description:
                    'Complete qualification of Purified Water (PW), Water for Injection (WFI), and Highly Purified Water (HPW) systems per WHO TRS 929, USFDA, and Ph. Eur. requirements. Includes 3-phase validation approach, TOC, conductivity, and microbiological trend monitoring.',
                specs: [
                    { label: 'Water Grades', value: 'PW, WFI, HPW' },
                    { label: 'Parameters', value: 'TOC, Conductivity, Microbial, Endotoxin' },
                    { label: 'Phase Duration', value: '2–4 weeks per phase' },
                    { label: 'Standard', value: 'WHO TRS 929 / USP <1231> / Ph. Eur. 0169' },
                ],
                applications: ['Pharma Manufacturing', 'Injectable Preparation', 'Hospital Pharmacy', 'Biotech'],
                protocol: [
                    'IQ — P&ID vs. as-built verification',
                    'OQ — sampling point function and sanitisation cycle',
                    'Phase 1 — daily sampling for 4 weeks',
                    'Phase 2 — thrice-weekly sampling for 4 weeks',
                    'Phase 3 — routine sampling frequency establishment',
                    'Trend analysis and validation conclusion report',
                ],
            },
        ],
    },
];

export const getAllValidationServices = () =>
    VALIDATION_GROUPS.flatMap(g => g.services.map(s => ({ ...s, groupId: g.id, groupTitle: g.title })));

export const getValidationServiceById = (serviceId) => {
    for (const group of VALIDATION_GROUPS) {
        const svc = group.services.find(s => s.id === serviceId);
        if (svc) return { service: svc, group };
    }
    return null;
};

export const getValidationGroupById = (slug) =>
    VALIDATION_GROUPS.find(g => g.slug === slug) || null;
