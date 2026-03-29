/**
 * servicesData.js
 * Central data store for all 4 calibration categories and their individual services.
 * Used by category pages, the MegaMenu, and the home page services grid.
 */

export const SERVICE_CATEGORIES = [
    {
        id: 'dimensional',
        slug: 'dimensional',
        title: 'Dimensional Calibration',
        shortTitle: 'Dimensional',
        tagline: 'Precision in Every Measurement',
        description:
            'Our NABL-accredited dimensional calibration services cover the complete range of length and geometric measuring instruments. From micrometers to CMMs, every calibration is traceable to NPL national standards, ensuring your instruments deliver consistent and reliable measurement results.',
        img: '/images/service_dimensional.png',
        accentColor: '#1565c0',
        icon: 'ruler',
        whyImportant: [
            'Maintains product quality and reduces manufacturing scrap',
            'Ensures compliance with ISO 9001 and IATF 16949 standards',
            'Prevents costly defects reaching the customer',
            'Supports traceability to national measurement standards',
        ],
        services: [
            {
                id: 'vernier-calipers',
                name: 'Vernier Calipers',
                img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
                description:
                    'Calibration of all types of vernier, dial, and digital calipers including standard, depth, inside/outside jaw, offset inside jaw, and knife-edge designs. Calibrated against precision gauge blocks traceable to NPL.',
                specs: [
                    { label: 'Range', value: 'Up to 2000 mm' },
                    { label: 'Least Count', value: '0.01 / 0.001 mm' },
                    { label: 'Uncertainty', value: '±0.002 mm' },
                    { label: 'Standard', value: 'NPL Traceable' },
                ],
                applications: ['Manufacturing QC', 'Tool Room', 'Workshop', 'Incoming Inspection'],
            },
            {
                id: 'micrometers',
                name: 'Micrometers',
                img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
                description:
                    'Comprehensive calibration of outside, inside, depth, and special-purpose micrometers including screw-thread and spline designs. Calibrated using high-accuracy gauge blocks and setting standards.',
                specs: [
                    { label: 'Range', value: '0–500 mm' },
                    { label: 'Least Count', value: '0.001 mm' },
                    { label: 'Uncertainty', value: '±0.001 mm' },
                    { label: 'Standard', value: 'NPL Traceable' },
                ],
                applications: ['Precision Engineering', 'Aerospace', 'Automotive', 'Toolmaking'],
            },
            {
                id: 'dial-gauges',
                name: 'Dial Gauges & Indicators',
                img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                description:
                    'Calibration of dial gauges, dial test indicators, lever type indicators, and digital plunger indicators. Tests include accuracy, repeatability, and hysteresis per relevant IS/ISO standards.',
                specs: [
                    { label: 'Range', value: 'Up to 50 mm' },
                    { label: 'Least Count', value: '0.001 mm' },
                    { label: 'Uncertainty', value: '±0.002 mm' },
                    { label: 'Standard', value: 'IS 2090 / DIN 878' },
                ],
                applications: ['Machine Setting', 'Surface Inspection', 'Assembly Checking'],
            },
            {
                id: 'height-gauges',
                name: 'Height Gauges',
                img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80',
                description:
                    'Calibration of vernier, digital, and dial-type height gauges. Evaluated on a precision granite surface plate. Measurement includes zero setting error, flatness of base, and linearity over full range.',
                specs: [
                    { label: 'Range', value: 'Up to 1000 mm' },
                    { label: 'Resolution', value: '0.001 mm' },
                    { label: 'Uncertainty', value: '±0.003 mm' },
                    { label: 'Standard', value: 'ISO 13225' },
                ],
                applications: ['Precision Layout', 'Quality Inspection', 'Tool & Die'],
            },
            {
                id: 'bore-gauges',
                name: 'Bore Gauges',
                img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
                description:
                    'Calibration of telescoping, small hole, and dial-bore gauges. Setting ring gauges used as master references. Evaluated for accuracy, repeatability, and sensitivity through full measurement range.',
                specs: [
                    { label: 'Range', value: '6–1000 mm bore' },
                    { label: 'Uncertainty', value: '±0.002 mm' },
                    { label: 'Standard', value: 'IS 3137' },
                ],
                applications: ['Engine Reconditioning', 'Hydraulic Cylinders', 'Bearing Seats'],
            },
            {
                id: 'thread-gauges',
                name: 'Thread Gauges & Plug Gauges',
                img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                description:
                    'Calibration and verification of GO/NOGO plug and ring thread gauges, smooth limit gauges, and taper gauges to relevant IS/ISO thread standards. Measurement of flank angle, pitch, and major/minor diameters.',
                specs: [
                    { label: 'Thread Types', value: 'BSW, UNC, UNF, Metric, Trapezoidal' },
                    { label: 'Size Range', value: 'M1 to M200' },
                    { label: 'Standard', value: 'IS 919 / ISO 1502' },
                ],
                applications: ['Fastener Manufacturing', 'Engineering Components', 'Aerospace Parts'],
            },
            {
                id: 'surface-plates',
                name: 'Surface Plates & Straightedges',
                img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
                description:
                    'Assessment of granite and cast iron surface plates for flatness, using the Moody method with precision levels. Straightedge calibration using autocollimator and optical flat comparison methods.',
                specs: [
                    { label: 'Sizes', value: 'Up to 2400×1200 mm' },
                    { label: 'Grade', value: 'A, B, C' },
                    { label: 'Uncertainty', value: '±0.5 µm/m' },
                    { label: 'Standard', value: 'IS 3477 / DIN 876' },
                ],
                applications: ['Inspection Rooms', 'Metrology Labs', 'Precision Assembly'],
            },
            {
                id: 'angle-gauges',
                name: 'Angle Gauges & Protractors',
                img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
                description:
                    'Calibration of angle gauges, bevel protractors, sine rules, and precision squares. Uses autocollimator and calibrated angle gauge blocks as reference standards. Uncertainty evaluated to IS 5985.',
                specs: [
                    { label: 'Range', value: '0°–360°' },
                    { label: 'Resolution', value: '1 arcminute' },
                    { label: 'Uncertainty', value: '±10 arcseconds' },
                ],
                applications: ['CNC Setup', 'Jig & Fixture', 'Mould Making'],
            },
        ],
    },
    {
        id: 'thermal',
        slug: 'thermal',
        title: 'Thermal Calibration',
        shortTitle: 'Thermal',
        tagline: 'Accuracy Across Every Degree',
        description:
            'We provide comprehensive temperature and humidity calibration services covering a wide range from cryogenic to high-temperature applications. All calibrations are performed using NABL-accredited reference standards traceable to NPL, India and BIPM.',
        img: '/images/service_thermal.png',
        accentColor: '#1565c0',
        icon: 'thermometer',
        whyImportant: [
            'Critical for pharmaceutical cold chain compliance (GDP)',
            'Ensures accurate process control in manufacturing',
            'Required for food safety and storage compliance',
            'Supports calibration intervals mandated by ISO 17025',
        ],
        services: [
            {
                id: 'thermometers',
                name: 'Thermometers',
                img: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&q=80',
                description:
                    'Calibration of glass thermometers, bimetallic thermometers, and digital hand-held thermometers. Performed in temperature-controlled media baths using calibrated Pt-100 reference probes traceable to ITS-90.',
                specs: [
                    { label: 'Range', value: '-80°C to +250°C' },
                    { label: 'Uncertainty', value: '±0.05°C' },
                    { label: 'Standard', value: 'ITS-90 / NPL' },
                ],
                applications: ['Labs', 'Medical', 'HVAC', 'Food Processing'],
            },
            {
                id: 'rtd-thermocouple',
                name: 'RTDs & Thermocouples',
                img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
                description:
                    'Calibration of Pt-100, Pt-1000 RTDs and Type-J, K, T, E, B, R, S thermocouples. Uses fixed-point cells and comparison calibration methods. Calibration reports include correction factors and uncertainty at each calibration point.',
                specs: [
                    { label: 'RTD Range', value: '-200°C to +850°C' },
                    { label: 'TC Range', value: '-200°C to +1600°C' },
                    { label: 'Uncertainty', value: '±0.1°C to ±0.5°C' },
                ],
                applications: ['Steel Plants', 'Petrochemical', 'Pharmaceutical', 'Power'],
            },
            {
                id: 'infrared-thermometers',
                name: 'Infrared Thermometers',
                img: 'https://images.unsplash.com/photo-1588776814546-1ffbb30f7b7a?w=600&q=80',
                description:
                    'Non-contact infrared thermometer calibration using a black-body radiation source. Emissivity correction, distance-to-spot ratio verification, and temperature accuracy evaluated across the full operating range.',
                specs: [
                    { label: 'Range', value: '-50°C to +1000°C' },
                    { label: 'Uncertainty', value: '±0.5°C or ±0.5%' },
                    { label: 'Standard', value: 'ASTM E1213' },
                ],
                applications: ['Predictive Maintenance', 'Electrical Inspections', 'Process Monitoring'],
            },
            {
                id: 'data-loggers',
                name: 'Temperature Data Loggers',
                img: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&q=80',
                description:
                    'End-to-end calibration of temperature and humidity data loggers including multi-channel models used in pharmaceutical and cold chain applications. Calibration performed in climate chambers using reference probes.',
                specs: [
                    { label: 'Range', value: '-80°C to +100°C' },
                    { label: 'Humidity Range', value: '0–100% RH' },
                    { label: 'Uncertainty', value: '±0.2°C / ±1.5% RH' },
                ],
                applications: ['Cold Chain', 'Warehouses', 'Pharmaceutical GMP', 'Hospital Blood Banks'],
            },
            {
                id: 'humidity-sensors',
                name: 'Humidity Meters & Sensors',
                img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
                description:
                    'Calibration of relative humidity sensors, hygrometers, and digital psychrometers. Uses a precision humidity generator and calibrated chilled-mirror hygrometer as a reference standard.',
                specs: [
                    { label: 'Range', value: '10–98% RH' },
                    { label: 'Temperature Range', value: '-10°C to +80°C' },
                    { label: 'Uncertainty', value: '±1.5% RH' },
                ],
                applications: ['Clean Rooms', 'Storage Areas', 'Environmental Testing'],
            },
            {
                id: 'calibration-baths',
                name: 'Calibration Baths & Dry Blocks',
                img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
                description:
                    'Verification and calibration of liquid temperature baths and dry block calibrators used as working standards. Stability, uniformity, and accuracy of the bath are determined against a reference Pt-100 probe.',
                specs: [
                    { label: 'Range', value: '-80°C to +650°C' },
                    { label: 'Stability', value: '±0.01°C' },
                    { label: 'Uniformity', value: 'Verified at 3+ depths' },
                ],
                applications: ['Calibration Labs', 'QA Departments', 'Research Institutes'],
            },
        ],
    },
    {
        id: 'electrical',
        slug: 'electrical',
        title: 'Electrical Calibration',
        shortTitle: 'Electrical',
        tagline: 'Every Volt, Every Ohm — Precisely Verified',
        description:
            'Our electrical calibration laboratory handles the full spectrum of electrical and electronic test and measurement equipment. From basic multimeters to advanced power analysers, all calibrations are performed against NABL-traceable reference standards aligned to SI units.',
        img: '/images/service_electrical.png',
        accentColor: '#0d47a1',
        icon: 'zap',
        whyImportant: [
            'Ensures electrical safety compliance (IS 13947, IEC 61439)',
            'Required for energy audit and power quality measurements',
            'Prevents measurement errors in R&D and production testing',
            'Mandatory for NABL / ISO 17025 laboratory compliance',
        ],
        services: [
            {
                id: 'multimeters',
                name: 'Digital & Analog Multimeters',
                img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80',
                description:
                    'Calibration of all classes of digital and analog multimeters covering AC/DC voltage, AC/DC current, resistance, capacitance, frequency, and diode test functions. Uses a precision multifunction calibrator as the primary reference.',
                specs: [
                    { label: 'DC Voltage', value: '0 to 1000 V' },
                    { label: 'AC Voltage', value: '10 Hz to 100 kHz' },
                    { label: 'Resistance', value: '0 Ω to 1 GΩ' },
                    { label: 'Uncertainty', value: '±0.01% of reading' },
                ],
                applications: ['Electronics Lab', 'Field Service', 'Production Testing', 'Maintenance'],
            },
            {
                id: 'clamp-meters',
                name: 'Clamp Meters',
                img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                description:
                    'Calibration of AC/DC current clamp meters and flexible Rogowski coil current sensors. Current injection using precision current sources. Accuracy evaluated at multiple points across the full measurement range.',
                specs: [
                    { label: 'AC Range', value: 'Up to 1000 A' },
                    { label: 'DC Range', value: 'Up to 600 A' },
                    { label: 'Frequency', value: '50/60 Hz' },
                    { label: 'Uncertainty', value: '±0.1% + 0.1% of FS' },
                ],
                applications: ['Electrical Panels', 'Motors', 'Power Distribution', 'Energy Audits'],
            },
            {
                id: 'power-analyzers',
                name: 'Power Analyzers & Wattmeters',
                img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
                description:
                    'Calibration of single and three-phase power analysers, power quality meters, and wattmeters. Parameters include active power, reactive power, apparent power, power factor, and harmonics using a precision power standard.',
                specs: [
                    { label: 'Power Range', value: 'Up to 100 kW/phase' },
                    { label: 'Frequency', value: 'DC, 50/60 Hz, 400 Hz' },
                    { label: 'Uncertainty', value: '±0.05% of reading' },
                ],
                applications: ['Energy Metering', 'Motor Testing', 'Power Grid Monitoring'],
            },
            {
                id: 'lcr-meters',
                name: 'LCR Meters & Impedance Analysers',
                img: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&q=80',
                description:
                    'Calibration of LCR meters and impedance analysers for inductance, capacitance, and resistance measurements. Precision passive standards (resistors, capacitors, inductors) used as reference artefacts.',
                specs: [
                    { label: 'Capacitance', value: '0.1 pF to 100 F' },
                    { label: 'Inductance', value: '0.1 µH to 100 H' },
                    { label: 'Resistance', value: '0.01 Ω to 100 MΩ' },
                    { label: 'Frequency', value: '20 Hz to 1 MHz' },
                ],
                applications: ['Component Testing', 'R&D Labs', 'Quality Control'],
            },
            {
                id: 'insulation-testers',
                name: 'Insulation Resistance Testers',
                img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80',
                description:
                    'Calibration of insulation resistance testers (megohmmeters) and earth resistance testers at standard test voltages (250 V, 500 V, 1000 V, 2500 V, 5000 V). Calibrated using precision high-resistance standards.',
                specs: [
                    { label: 'Test Voltage', value: '250 V to 5000 V' },
                    { label: 'Resistance Range', value: '0.01 MΩ to 100 GΩ' },
                    { label: 'Uncertainty', value: '±2% of reading' },
                ],
                applications: ['Cable Testing', 'Motor Winding', 'Switchgear', 'Safety Testing'],
            },
            {
                id: 'energy-meters',
                name: 'Energy Meters',
                img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                description:
                    'Calibration and testing of single-phase and three-phase energy meters (class 0.2 to class 2). Uses a precision energy measurement reference standard. Error determination at various power factors and load conditions.',
                specs: [
                    { label: 'Voltage', value: '110 V / 230 V / 415 V' },
                    { label: 'Current', value: '1 A to 100 A' },
                    { label: 'Accuracy Class', value: '0.2 to Class 2' },
                    { label: 'Standard', value: 'IS 13779 / IEC 62052' },
                ],
                applications: ['Utility Billing', 'Energy Audits', 'Industrial Monitoring'],
            },
        ],
    },
    {
        id: 'mechanical',
        slug: 'mechanical',
        title: 'Mechanical Calibration',
        shortTitle: 'Mechanical',
        tagline: 'Force, Pressure & Torque — Verified with Confidence',
        description:
            'Our mechanical calibration services encompass force, torque, pressure, and mass measurement instruments. Accredited by NABL, all measurements are performed on precision rigs traceable to national and international standards, delivering reliable and industry-accepted calibration certificates.',
        img: '/images/service_mechanical.png',
        accentColor: '#1565c0',
        icon: 'settings',
        whyImportant: [
            'Ensures correct tightening torques for critical bolted joints',
            'Required for pressure vessel safety compliance',
            'Prevents product failures from incorrect force measurements',
            'Mandated by EHS, IATF 16949, and AS9100 quality systems',
        ],
        services: [
            {
                id: 'torque-wrenches',
                name: 'Torque Wrenches & Screwdrivers',
                img: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
                description:
                    'Calibration of click-type, beam-type, dial-indicating, and electronic torque wrenches, plus torque screwdrivers and torque multipliers. Performed on a precision torque calibration rig with a reference transducer traceable to NPL.',
                specs: [
                    { label: 'Range', value: '0.05 N·m to 5000 N·m' },
                    { label: 'Uncertainty', value: '±0.5% of reading' },
                    { label: 'Standard', value: 'ISO 6789' },
                ],
                applications: ['Automotive Assembly', 'Aerospace Fastening', 'Structural Steel', 'EV Battery'],
            },
            {
                id: 'force-gauges',
                name: 'Force Gauges & Load Cells',
                img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
                description:
                    'Calibration of compression, tension, and universal force gauges, along with industrial load cells. Uses a deadweight force standard machine and precision calibrated proving rings as reference standards.',
                specs: [
                    { label: 'Range', value: '0.1 N to 500 kN' },
                    { label: 'Uncertainty', value: '±0.1% of applied force' },
                    { label: 'Standard', value: 'ISO 376 / OIML R60' },
                ],
                applications: ['Material Testing', 'Crane Overload Protection', 'Weighing Systems'],
            },
            {
                id: 'pressure-gauges',
                name: 'Pressure Gauges & Transducers',
                img: 'https://images.unsplash.com/photo-1563213126-a4273aed2016?w=600&q=80',
                description:
                    'Calibration of Bourdon-tube pressure gauges, differential pressure gauges, diaphragm gauges, pressure transducers, and transmitters. Uses a precise dead-weight tester and electronic pressure reference standard.',
                specs: [
                    { label: 'Range', value: 'Vacuum to 2000 bar' },
                    { label: 'Uncertainty', value: '±0.05% to ±0.25% FS' },
                    { label: 'Fluid', value: 'Oil, Water, Gas (N2)' },
                    { label: 'Standard', value: 'IS 3624 / ASME B40.100' },
                ],
                applications: ['Process Industry', 'Hydraulics', 'Pneumatics', 'Safety Systems'],
            },
            {
                id: 'weighing-balances',
                name: 'Weighing Machines & Balances',
                img: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=600&q=80',
                description:
                    'Calibration of precision analytical balances, top-loading balances, platform scales, and industrial weighbridges. Calibrated using OIML class E2 and F1 standard weights in controlled temperature conditions.',
                specs: [
                    { label: 'Capacity', value: '0.1 mg to 10 tonnes' },
                    { label: 'Uncertainty', value: '±0.1 mg to ±5 kg' },
                    { label: 'Standard', value: 'OIML R 76 / NABL' },
                ],
                applications: ['Pharmacy', 'Laboratory', 'Logistics', 'Industrial Weighing'],
            },
            {
                id: 'hardness-testers',
                name: 'Hardness Testers',
                img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
                description:
                    'Calibration and verification of Brinell, Vickers, Rockwell, and Knoop hardness testing machines using certified reference test blocks. Covers deadweight force accuracy and anvil geometry verification.',
                specs: [
                    { label: 'Scales', value: 'HRC, HRB, HV, HB, HK' },
                    { label: 'Load Range', value: '0.001 kgf to 3000 kgf' },
                    { label: 'Standard', value: 'IS 1589 / ISO 6506-507-508' },
                ],
                applications: ['Heat Treatment', 'Material Testing', 'Quality Assurance'],
            },
            {
                id: 'vibration-rpm',
                name: 'Vibration Meters & Tachometers',
                img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
                description:
                    'Calibration of vibration meters, accelerometers, stroboscopes, and contact/laser tachometers. Vibration calibration uses a precision shaker table; tachometers calibrated against a reference speed standard.',
                specs: [
                    { label: 'RPM Range', value: '0 to 99,999 RPM' },
                    { label: 'Vibration Range', value: '0.1 to 200 m/s²' },
                    { label: 'Frequency', value: '10 Hz to 10 kHz' },
                ],
                applications: ['Predictive Maintenance', 'Rotating Machinery', 'Engine Testing'],
            },
        ],
    },
];

export const getCategoryById = (slug) =>
    SERVICE_CATEGORIES.find((c) => c.slug === slug) || null;

export const getServiceById = (categorySlug, serviceId) => {
    const cat = getCategoryById(categorySlug);
    if (!cat) return null;
    return cat.services.find((s) => s.id === serviceId) || null;
};
