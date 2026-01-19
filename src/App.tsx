import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import WhyChooseUs from './pages/WhyChooseUs';
import ServiceAreas from './pages/ServiceAreas';
import Resources from './pages/Resources';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import FoundationRepairPage from './pages/services/FoundationRepair';
import PierInstallationPage from './pages/services/PierInstallation';
import { CrawlSpace, Waterproofing, Drainage, EmergencyRepairs } from './pages/services/ServiceTemplate';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/foundation-repair" element={<FoundationRepairPage />} />
            <Route path="/services/pier-installation" element={<PierInstallationPage />} />
            <Route path="/services/crawl-space" element={<CrawlSpace />} />
            <Route path="/services/waterproofing" element={<Waterproofing />} />
            <Route path="/services/drainage" element={<Drainage />} />
            <Route path="/services/emergency" element={<EmergencyRepairs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/service-areas" element={<ServiceAreas />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
