import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Services from "./routes/services/services.component";
import Contact from "./routes/contact/contact.component";
import Testimony from "./routes/testimony/testimony.component";
import Footer from "./components/footer/footer.component";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonies" element={<Testimony />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

 
