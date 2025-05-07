import './App.css';
import Header from './components/Header';
import FeaturedSection from './components/FeaturedSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSections';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <FeaturedSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
