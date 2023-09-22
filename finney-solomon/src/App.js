import { useEffect, useState } from "react";
import "./App.css";
import { AboutMe } from "./Pages/AboutMe";
import { Certifications } from "./Pages/Certifications";
import { ContactMe } from "./Pages/ContactMe";
import { HomePage } from "./Pages/HomePage";
import { Skills } from "./Pages/Skills";
import { ButtonCheck } from "./components/Button";
import { Header } from "./components/Header";
import Aos from "aos";
import "aos/dist/aos";
import { Progress } from "@nextui-org/react";
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
      }, 1000);
    }
  }, [timer]);

  console.log(timer);
  return (
    <div className="app">
      <Loading timer={timer} />
      <Header />
      <HomePage />
      <AboutMe />
      <Skills />
      <Certifications />
      <ContactMe />
    </div>
  );
}

export default App;
