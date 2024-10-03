import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import OurMember from './pages/OurMember';
import Contact from "./pages/Contact";
import ShadiMubark from './pages/ShadiMubark';
import FoodAid from './pages/FoodAid';
import HelpEducation from './pages/HelpEducation';
import Health from './pages/Health';
import WaterPlant from './pages/WaterPlant';
import MedicineCharity from './pages/MedicineCharity';
import DonationForm from './pages/DonationForm';
import HelpJobBank from './pages/HelpJobBank';
import LegalAid from './pages/LegalAid';
import OldAgeHome from './pages/OldAgeHome';
import Footer from './components/Footer';
import ChildrenHospital from './pages/ChildrenHospital';
import Orphans from './pages/Orphans';
import NotFound from './pages/NotFound'; // Don't forget to import the NotFound component
import JazzCashButton from './pages/JazzCashButton';
import HiringForm from './pages/HiringForm';
import JobSeekerForm from './pages/JobSeekerForm';
const App = () => {
  return (
    <Router> {/* Wrap your application with BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ShadiMubark" element={<ShadiMubark />} />
        <Route path="/foodAid" element={<FoodAid />} />
        <Route path="/helpEducation" element={<HelpEducation />} />
        <Route path="/health" element={<Health />} />
        <Route path="/waterPlant" element={<WaterPlant />} />
        <Route path="/medicineCharity" element={<MedicineCharity />} />
        <Route path="/helpJobBank" element={<HelpJobBank />} />
        <Route path="/legalAid" element={<LegalAid />} />
        <Route path="/oldAgeHome" element={<OldAgeHome />} />
        <Route path="/childrenHospital" element={<ChildrenHospital />} />
        <Route path="/orphans" element={<Orphans />} />
        <Route path="/donationForm" element={<DonationForm />} />
        <Route path="/ourMember" element={<OurMember />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/HiringForm" element={<HiringForm />} />
        <Route path="/JobSeekerForm" element={<JobSeekerForm />} />
        <Route path="/JazzCashButton" element={<JazzCashButton />}/>
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        
      </Routes>
      <Footer />

    </Router>

  );
}

export default App;
