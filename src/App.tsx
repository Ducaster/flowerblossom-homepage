import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
import { Programs } from "./components/Programs";
import { Quote } from "./components/Quote";
import { GetInvolved } from "./components/GetInvolved";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";
import { AllPrograms } from "./pages/AllPrograms";
import { ProgramDetail } from "./pages/ProgramDetail";

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Programs />
        <Quote />
        <GetInvolved />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<AllPrograms />} />
        <Route path="/programs/:id" element={<ProgramDetail />} />
      </Routes>
    </Router>
  );
}
