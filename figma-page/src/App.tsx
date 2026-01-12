
import './index.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import CTASection from './components/CTASection';
import ConsultationSection from './components/ConsultationSection';
import ReasonsSection from './components/ReasonsSection';
import SupportSection from './components/SupportSection';
import InstructorsSection from './components/InstructorsSection';
import CoursePriceSection from './components/CoursePriceSection';
import FlowSection from './components/FlowSection';
import CourseFlowSection from './components/CourseFlowSection';
import BottomCTASection from './components/BottomCTASection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CTASection />
      <FeaturesSection />
      <ConsultationSection />
      <ReasonsSection />
      <SupportSection />
      <InstructorsSection />
      <ConsultationSection />
      <CoursePriceSection />
      <FlowSection />
      <BottomCTASection />
      <CourseFlowSection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default App
