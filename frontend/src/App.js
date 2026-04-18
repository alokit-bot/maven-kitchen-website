import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/sections/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Menu } from "./components/sections/Menu";
import { Features } from "./components/sections/Features";
import { Gallery } from "./components/sections/Gallery";
import { Testimonials } from "./components/sections/Testimonials";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

const Home = () => (
  <div className="bg-[#F8F5F0] text-[#2A2A2A]">
    <Header />
    <main>
      <Hero />
      <About />
      <Menu />
      <Features />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
