import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import './App.css';

/* Layout */
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* Page CSS (global imports) */
import './pages/About.css';
import './pages/AboutMain.css';
import './pages/Facilities.css';
import './pages/Projects.css';
import './pages/Contact.css';
import './pages/Partners.css';
import './pages/Gallery.css';
import './pages/Validation.css';
import './pages/Brochure.css';

/* Pages */
import Home        from './pages/Home';
import About       from './pages/About';
import AboutMain   from './pages/AboutMain';
import Facilities  from './pages/Facilities';
import Projects    from './pages/Projects';
import Gallery     from './pages/Gallery';
import Partners    from './pages/Partners';
import Contact     from './pages/Contact';
import Validation  from './pages/Validation';
import Brochure    from './pages/Brochure';

/* Calibration sub-pages (was /services) */
import ServiceCategory from './pages/services/ServiceCategory';
import ServiceDetail   from './pages/services/ServiceDetail';

/* Validation sub-pages */
import ValidationCategory from './pages/validation/ValidationCategory';
import ValidationDetail   from './pages/validation/ValidationDetail';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    {/* Core pages */}
                    <Route path="/"           element={<Home />} />
                    <Route path="/about"      element={<About />} />
                    <Route path="/about-main" element={<AboutMain />} />
                    <Route path="/facilities" element={<Facilities />} />
                    <Route path="/projects"   element={<Projects />} />
                    <Route path="/gallery"    element={<Gallery />} />
                    <Route path="/partners"   element={<Partners />} />
                    <Route path="/contact"    element={<Contact />} />
                    <Route path="/brochure"   element={<Brochure />} />

                    {/* Validation landing + sub-pages */}
                    <Route path="/validation"                        element={<Validation />} />
                    <Route path="/validation/:group"                 element={<ValidationCategory />} />
                    <Route path="/validation/:group/:service"        element={<ValidationDetail />} />

                    {/* Calibration category pages — /services/dimensional, etc. (also aliased as /calibration) */}
                    <Route path="/calibration"                       element={<Facilities />} />
                    <Route path="/calibration/:category"             element={<ServiceCategory />} />
                    <Route path="/calibration/:category/:service"    element={<ServiceDetail />} />

                    {/* Legacy /services routes — keep working */}
                    <Route path="/services/:category"                element={<ServiceCategory />} />
                    <Route path="/services/:category/:service"       element={<ServiceDetail />} />
                </Routes>
            </main>
            <Footer />

            {/* ── Floating WhatsApp Button ── */}
            <a
                href="https://wa.me/919760188223?text=Hello%20Asian%20Enterprises!%20I%20am%20interested%20in%20your%20calibration%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
                aria-label="Chat on WhatsApp"
            >
                <svg viewBox="0 0 32 32" width="28" height="28" fill="#ffffff">
                    <path d="M16.004 0C7.165 0 .002 7.163.002 16c0 2.824.737 5.574 2.139 8.004L0 32l8.188-2.108A15.93 15.93 0 0016.004 32C24.837 32 32 24.837 32 16S24.837 0 16.004 0zm0 29.394a13.36 13.36 0 01-7.24-2.118l-.52-.308-4.857 1.252 1.294-4.717-.34-.54a13.32 13.32 0 01-2.047-7.163c0-7.378 6.005-13.383 13.383-13.383S29.394 8.622 29.394 16s-6.012 13.394-13.39 13.394zm7.327-10.02c-.4-.2-2.367-1.168-2.733-1.3-.367-.134-.634-.2-.9.2-.268.4-1.034 1.3-1.268 1.568-.233.267-.467.3-.867.1-.4-.2-1.69-.623-3.22-1.987-1.19-1.062-1.993-2.374-2.227-2.774-.233-.4-.025-.616.175-.815.18-.18.4-.467.6-.7.2-.234.267-.4.4-.667.134-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.687l-.767-.013c-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.334 0 1.967 1.434 3.867 1.634 4.134.2.267 2.82 4.304 6.832 6.033.954.412 1.7.658 2.28.842.958.305 1.832.262 2.522.159.77-.115 2.367-.968 2.7-1.902.334-.934.334-1.734.234-1.902-.1-.167-.367-.267-.767-.467z"/>
                </svg>
            </a>
        </Router>
    );
}

export default App;
