/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X, Instagram, Twitter, Facebook } from "lucide-react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Quiz from "./pages/Quiz";
import Chatbot from "./components/Chatbot";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-drpepper-red rounded-full flex items-center justify-center text-white font-black text-xl italic">
              DP
            </div>
            <span className="text-2xl font-black tracking-tighter italic text-drpepper-red">Dr Pepper</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {["Products", "Quiz", "Blog"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`text-sm font-bold uppercase tracking-widest hover:text-drpepper-red transition-colors ${
                  location.pathname === `/${item.toLowerCase()}` ? "text-drpepper-red" : "text-gray-600"
                }`}
              >
                {item}
              </Link>
            ))}
            <button className="btn-primary text-sm py-2">Shop Now</button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-drpepper-dark">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 py-8 space-y-4"
          >
            {["Products", "Quiz", "Blog"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block text-xl font-bold text-drpepper-dark hover:text-drpepper-red"
              >
                {item}
              </Link>
            ))}
            <button className="w-full btn-primary">Shop Now</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-drpepper-dark text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-black italic">Dr Pepper</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Established in 1885 in Waco, Texas. The original 23 flavors that changed the world of soda forever.
          </p>
          <div className="flex space-x-4">
            <Instagram size={20} className="hover:text-drpepper-red cursor-pointer" />
            <Twitter size={20} className="hover:text-drpepper-red cursor-pointer" />
            <Facebook size={20} className="hover:text-drpepper-red cursor-pointer" />
          </div>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/products" className="hover:text-drpepper-red">All Flavors</Link></li>
            <li><Link to="/quiz" className="hover:text-drpepper-red">Flavor Quiz</Link></li>
            <li><Link to="/blog" className="hover:text-drpepper-red">Recipes & Stories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Support</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-drpepper-red">Contact Us</a></li>
            <li><a href="#" className="hover:text-drpepper-red">FAQs</a></li>
            <li><a href="#" className="hover:text-drpepper-red">Store Locator</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Get the latest 23 flavors news.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-white/10 border border-white/20 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-drpepper-red"
            />
            <button className="bg-drpepper-red px-4 py-2 rounded-r-md font-bold">Join</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        © 2026 Dr Pepper/Seven Up, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}

