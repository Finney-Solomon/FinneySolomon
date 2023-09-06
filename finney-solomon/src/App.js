
import { useEffect } from 'react';
import './App.css';
import { AboutMe } from './Pages/AboutMe';
import { Certifications } from './Pages/Certifications';
import { ContactMe } from './Pages/ContactMe';
import { HomePage } from './Pages/HomePage';
import { Skills } from './Pages/Skills';
import { ButtonCheck } from './components/Button';
import { Header } from './components/Header';
import Aos from 'aos';
import 'aos/dist/aos'

function App() {
 
    useEffect(() => {
      Aos.init();
      Aos.refresh();
    }, []);
  
  return (
 
    <div className="app" >
       <Header/>
       <HomePage/>
       <AboutMe/>
       <Skills/>
       <Certifications/>
       <ContactMe/>
    </div>
  );
}

export default App;
