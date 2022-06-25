import Header from './components/header/Header';
import Home from './components/home/Home';
import Awards from './components/awards/Awards';
import CaseStudies from './components/casestudies/CaseStudies';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Awards />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
