"use client"; // only if in Next.js, safe to keep

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

// Lazy imports
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Commitment = lazy(() => import("./pages/Commitment/Commitment"));
const Achievements = lazy(() => import("./pages/Achievements"));
const News = lazy(() => import("./pages/News"));
const Events = lazy(() => import("./pages/Events"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const Contact = lazy(() => import("./pages/Contact"));

// Loader fallback (can be a spinner or your own component)
const Loader = () => <div className="p-6 text-center">Loading...</div>;

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Nav />
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/commitment" element={<Commitment />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/news" element={<News />} />
              <Route path="/events" element={<Events />} />
              <Route path="/get-involved" element={<GetInvolved />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
