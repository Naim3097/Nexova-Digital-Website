import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Product from './pages/Product';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Product', path: '/product' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-whiteTeal/90 backdrop-blur-lg border-b border-brand-darkBlue/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between h-20 items-center">
            {/* Left links */}
            <div className="hidden lg:flex items-center space-x-10">
              {links.slice(0, 3).map(link => (
                <Link key={link.name} to={link.path} className="text-sm tracking-wide uppercase text-brand-darkBlue/70 hover:text-brand-darkBlue transition font-semibold">
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Center Logo */}
            <Link to="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
              <h1 className="text-3xl font-heading font-bold text-brand-darkBlue italic">
                Nexova<span className="not-italic text-brand-lightBlue">.</span>
              </h1>
            </Link>

            {/* Right links */}
            <div className="hidden lg:flex items-center space-x-10">
              {links.slice(3).map(link => (
                <Link key={link.name} to={link.path} className="text-sm tracking-wide uppercase text-brand-darkBlue/70 hover:text-brand-darkBlue transition font-semibold">
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-brand-darkBlue text-white px-5 py-2.5 text-sm tracking-wide uppercase font-semibold hover:bg-brand-darkBlue/90 transition">
                Get Started
              </Link>
            </div>

            {/* Mobile burger */}
            <button onClick={() => setIsOpen(true)} className="lg:hidden text-brand-darkBlue absolute right-6">
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen slide-over mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-brand-darkBlue text-brand-whiteTeal flex flex-col">
          <div className="flex justify-between items-center p-6">
            <h1 className="text-3xl font-heading font-bold italic">Nexova<span className="not-italic text-brand-lightBlue">.</span></h1>
            <button onClick={() => setIsOpen(false)}><X size={28} /></button>
          </div>
          <div className="flex-grow flex flex-col justify-center px-8 space-y-6">
            {links.map(link => (
              <Link onClick={() => setIsOpen(false)} key={link.name} to={link.path}
                className="text-4xl font-heading font-bold hover:text-brand-lightBlue transition border-b border-white/10 pb-4">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="p-8">
            <Link onClick={() => setIsOpen(false)} to="/contact"
              className="block text-center bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white py-4 font-semibold text-lg">
              Start a Project
            </Link>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-darkBlue text-brand-whiteTeal">
      {/* Big CTA strip */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center lg:text-left max-w-xl leading-tight">
            Ready to craft your <em className="text-brand-lightBlue">brand story</em>?
          </h2>
          <Link to="/contact" className="flex items-center gap-3 bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-8 py-4 font-semibold text-lg hover:opacity-90 transition group">
            Let's Talk <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Footer grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-heading font-bold italic mb-4">Nexova.</h2>
          <p className="opacity-60 text-sm leading-relaxed max-w-xs">Human-centric branding and social media design that builds trust and drives growth.</p>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold opacity-40 mb-6">Navigate</h3>
          <ul className="space-y-3">
            {['Home', 'Services', 'Product', 'Blog', 'Contact'].map(item => (
              <li key={item}><Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="opacity-70 hover:opacity-100 hover:text-brand-lightBlue transition text-sm">{item}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold opacity-40 mb-6">Services</h3>
          <ul className="space-y-3 opacity-70 text-sm">
            <li>Social Media Design</li>
            <li>Branding Content</li>
            <li>Digital Marketing</li>
            <li>Brand Kits</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold opacity-40 mb-6">Connect</h3>
          <ul className="space-y-3 opacity-70 text-sm">
            <li className="hover:opacity-100 cursor-pointer">Instagram</li>
            <li className="hover:opacity-100 cursor-pointer">LinkedIn</li>
            <li className="hover:opacity-100 cursor-pointer">Twitter / X</li>
            <li className="hover:opacity-100 cursor-pointer">hello@nexovadigital.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-8 text-center text-xs opacity-40 px-6">
        © 2026 Nexova Digital. All rights reserved. — Designed with intent, crafted by humans.
      </div>
    </footer>
  );
}

function DemoSwitcher() {
  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-2">
      <a href="http://localhost:3001" className="flex items-center gap-2 bg-brand-darkBlue text-white px-5 py-3 shadow-lg hover:bg-brand-lightBlue transition text-sm font-semibold uppercase tracking-wider">
        Switch to Demo 1 →
      </a>
      <a href="http://localhost:3000" className="flex items-center gap-2 bg-white text-brand-darkBlue px-4 py-2 shadow-lg border border-brand-darkBlue/10 hover:border-brand-lightBlue transition text-xs font-semibold uppercase tracking-wider">
        ← Index
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-body bg-brand-whiteTeal text-brand-darkBlue">
        <Navbar />
        <DemoSwitcher />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/product" element={<Product />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;