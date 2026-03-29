import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

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
        </Router>
    );
}

export default App;
