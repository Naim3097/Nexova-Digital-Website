import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Product from './pages/Product';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

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
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-heading font-bold text-brand-darkBlue tracking-tight">
              Nexova<span className="text-brand-lightBlue">.</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {links.map(link => (
              <Link key={link.name} to={link.path} className="text-brand-darkBlue hover:text-brand-lightBlue transition font-medium">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex">
            <Link to="/contact" className="bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-6 py-2 rounded-full font-medium hover:opacity-90 shadow-md transition">
              Get Started
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-darkBlue focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg absolute w-full left-0">
          {links.map(link => (
            <Link onClick={() => setIsOpen(false)} key={link.name} to={link.path} className="block px-3 py-2 text-brand-darkBlue font-medium hover:bg-brand-whiteTeal rounded-md">
              {link.name}
            </Link>
          ))}
          <Link onClick={() => setIsOpen(false)} to="/contact" className="block text-center mt-4 bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-6 py-2 rounded-full font-medium shadow-md">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-darkBlue text-brand-whiteTeal pt-12 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
           <h2 className="text-2xl font-heading font-bold mb-4">Nexova.</h2>
           <p className="opacity-80 max-w-sm">Elevating your brand with human-centric, creative marketing strategies that resonate and convert.</p>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 opacity-80">
            <li><Link to="/services" className="hover:text-brand-lightBlue">Services</Link></li>
            <li><Link to="/product" className="hover:text-brand-lightBlue">Product</Link></li>
            <li><Link to="/blog" className="hover:text-brand-lightBlue">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-heading font-semibold text-white mb-4">Connect</h3>
          <ul className="space-y-2 opacity-80">
            <li><Link to="/contact" className="hover:text-brand-lightBlue">Contact Us</Link></li>
            <li className="cursor-pointer hover:text-brand-lightBlue">Instagram</li>
            <li className="cursor-pointer hover:text-brand-lightBlue">LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center opacity-60 text-sm">
        © 2026 Nexova Digital. All rights reserved.
      </div>
    </footer>
  );
}

function DemoSwitcher() {
  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-2">
      <a href={import.meta.env.DEV ? "http://localhost:3002/demo2/" : "/demo2/"} className="flex items-center gap-2 bg-brand-darkBlue text-white px-4 py-2.5 rounded-full shadow-lg hover:bg-brand-lightBlue transition text-sm font-semibold">
        Switch to Demo 2 →
      </a>
      <a href={import.meta.env.DEV ? "http://localhost:3000/" : "/"} className="flex items-center gap-2 bg-white text-brand-darkBlue px-4 py-2 rounded-full shadow-lg border border-brand-darkBlue/10 hover:border-brand-lightBlue transition text-xs font-medium">
        ← Index
      </a>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/demo1/">
      <div className="min-h-screen flex flex-col font-body bg-brand-whiteTeal text-brand-darkBlue">
        <Navbar />
        <DemoSwitcher />
        <main className="flex-grow flex flex-col">
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
