import { useEffect, useState } from "react";
import "./App.css";
import { AboutMe } from "./Pages/AboutMe";
import { Certifications } from "./Pages/Certifications";
import { ContactMe } from "./Pages/ContactMe";
import { HomePage } from "./Pages/HomePage";
import { Skills } from "./Pages/Skills";
import { Header } from "./components/Header";
import Aos from "aos";
import "aos/dist/aos";
import { Loading } from "./components/Loading";

function App() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    Aos.init();
    Aos.refresh();

    if (timer < 100) {
      setTimeout(() => {
        setTimer((prevTimer) =>
          prevTimer >= 100 ? prevTimer : prevTimer + 10
        );
      }, 500);
    }
  }, [timer]);

  return (

    <>
   
    <div className="app">
        <Header />

        {timer !== 100 ? (
          <div  > <Loading timer={timer} />
   </div>):<>  
        <HomePage />
        <AboutMe />
        <Skills />
        <Certifications />
        <ContactMe /></>  }
     
    </div></>
  );
}

export default App;
