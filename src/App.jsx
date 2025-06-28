import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

import Footer from "./Components/Footer";

import ContactUsSection from "./Components/ContactUsSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Testimonials from "./pages/Testimonials";
import Chocolates from "./pages/Chocolates";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <div className="pt-20">
          {" "}
          {/* Fixed navbar ke liye padding */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact_us" element={<ContactUsSection />} />
            <Route path="/about_us" element={<About />} />
            <Route path="/chocolates" element={<Chocolates />} />

            <Route path="/terms&condition" element={<Terms />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
