import Hero from "./sections/Hero.jsx";
import Header from "./sections/Header.jsx";
import Features from "./sections/Features.jsx";
import Pricing from "./sections/Pricing.jsx";
import Faq from "./sections/Faq.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Footer from "./sections/Footer.jsx";
import { Routes, Route } from "react-router-dom";
import Contact from "./sections/Contact.jsx";
import AboutFooter from "./sections/AboutFooter.jsx";
import Gallery from "./sections/Gallery.jsx";
import Course from "./sections/Course.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <Pricing />
              <Testimonials />
              <AboutFooter />
            </>
          }
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
