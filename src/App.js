import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import { useEffect, useState } from "react";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Mywork from "./Components/Mywork/Mywork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const storeMode = localStorage.getItem("mode");
    if (storeMode) {
      setIsChecked(JSON.parse(storeMode));
    }
  }, []);
  const toggledChecked = () => {
    setIsChecked((prevState) => {
      const newValue = !prevState;
      localStorage.setItem("mode", JSON.stringify(newValue));
      console.log("New Value", newValue);
      return newValue;
    });
  };

  return (
    <div>
      <NavBar isChecked={isChecked} toggledChecked={toggledChecked} />
      <Hero isChecked={isChecked} />
      <About isChecked={isChecked} />
      <Services isChecked={isChecked} />
      <Mywork isChecked={isChecked} />
      <Contact isChecked={isChecked} />
      <Footer isChecked={isChecked} />
    </div>
  );
}

export default App;
