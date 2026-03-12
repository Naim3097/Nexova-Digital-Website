import { Link } from 'react-router-dom';
import { ArrowRight, Palette, PenTool, BarChart3, Star, Users, Award, TrendingUp } from 'lucide-react';

const floatingBrands = [
  { src: "/brands/nike.png", alt: "Nike", top: "8%", left: "8%", size: "w-16 h-16", delay: "0s" },
  { src: "/brands/adidas.png", alt: "Adidas", top: "14%", left: "35%", size: "w-14 h-14", delay: "0.5s" },
  { src: "/brands/puma.png", alt: "Puma", top: "6%", right: "18%", size: "w-14 h-14", delay: "1s" },
  { src: "/brands/lacoste.png", alt: "Lacoste", top: "38%", left: "5%", size: "w-12 h-12", delay: "1.5s" },
  { src: "/brands/splendid.png", alt: "Splendid", top: "32%", right: "6%", size: "w-16 h-16", delay: "0.8s" },
  { src: "/brands/nike.png", alt: "Nike", bottom: "28%", left: "12%", size: "w-14 h-14", delay: "2s" },
  { src: "/brands/adidas.png", alt: "Adidas", bottom: "22%", right: "12%", size: "w-12 h-12", delay: "0.3s" },
  { src: "/brands/puma.png", alt: "Puma", bottom: "10%", left: "30%", size: "w-12 h-12", delay: "1.2s" },
  { src: "/brands/lacoste.png", alt: "Lacoste", bottom: "14%", right: "28%", size: "w-14 h-14", delay: "1.8s" },
  { src: "/brands/splendid.png", alt: "Splendid", top: "50%", right: "3%", size: "w-12 h-12", delay: "0.6s" },
];

export default function Home() {
  const services = [
    { icon: <Palette size={28} />, title: "Social Media Design", desc: "Scroll-stopping visuals crafted for every platform. We design carousels, reels, and posts that feel authentic to your brand voice." },
    { icon: <PenTool size={28} />, title: "Branding Content", desc: "From logo systems to brand kits, we build the visual DNA that makes your business instantly recognizable and deeply trusted." },
    { icon: <BarChart3 size={28} />, title: "Digital Marketing", desc: "Data-informed campaigns that pair human creativity with strategic execution. Real engagement, real conversions." }
  ];

  const stats = [
    { number: "150+", label: "Brands Elevated" },
    { number: "3M+", label: "Social Impressions" },
    { number: "98%", label: "Client Retention" },
    { number: "500+", label: "Campaigns Delivered" }
  ];

  const portfolio = [
    { title: "Brew & Bean Co.", category: "Social Media Redesign", color: "from-amber-100 to-orange-100" },
    { title: "FitVibe Athletics", category: "Brand Kit & Content", color: "from-emerald-100 to-teal-100" },
    { title: "Luna Skincare", category: "Full Digital Campaign", color: "from-pink-100 to-rose-100" },
    { title: "UrbanNest Interiors", category: "Social Media Strategy", color: "from-violet-100 to-purple-100" },
    { title: "GreenLeaf Foods", category: "Brand Identity", color: "from-lime-100 to-green-100" },
    { title: "Apex Consulting", category: "LinkedIn Campaign", color: "from-sky-100 to-blue-100" }
  ];

  const testimonials = [
    { name: "Sarah Mitchell", role: "Founder, Brew & Bean Co.", quote: "Nexova completely transformed how our audience perceives us. Our engagement tripled in just two months. They truly understand the human side of branding.", avatar: "SM" },
    { name: "James Rodriguez", role: "CMO, FitVibe Athletics", quote: "Working with Nexova felt like having an in-house creative team that genuinely cared about our mission. The results speak for themselves.", avatar: "JR" },
    { name: "Priya Patel", role: "CEO, Luna Skincare", quote: "They don't just design graphics — they craft stories. Our Instagram following grew 240% and every piece of content feels authentically us.", avatar: "PP" }
  ];

  const process = [
    { step: "01", title: "Discovery Call", desc: "We learn about your brand story, audience, goals, and the voice that makes you unique." },
    { step: "02", title: "Strategy & Moodboard", desc: "Our team presents a tailored creative direction with moodboards, color studies, and content pillars." },
    { step: "03", title: "Design & Create", desc: "Handcrafted visuals and copy that feel organic, intentional, and unmistakably yours." },
    { step: "04", title: "Launch & Optimize", desc: "We publish, monitor performance, and iterate together to maximize impact across channels." }
  ];

  return (
    <div className="flex-grow flex flex-col">
      {/* Hero Section — Mobbin-style centered with floating logos */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4">
        {/* Floating brand logos */}
        {floatingBrands.map((brand, i) => (
          <div
            key={i}
            className={`absolute ${brand.size} rounded-2xl shadow-lg overflow-hidden bg-white p-2 z-10`}
            style={{
              top: brand.top,
              left: brand.left,
              right: brand.right,
              bottom: brand.bottom,
              animation: `floatPulse 4s ease-in-out ${brand.delay} infinite`,
            }}
          >
            <img src={brand.src} alt={brand.alt} className="w-full h-full object-contain" />
          </div>
        ))}

        {/* Centered content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <p className="text-brand-darkBlue/60 font-semibold text-base md:text-lg mb-4">
            A growing portfolio of
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.05] text-brand-darkBlue mb-2">
            150+ brands
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold leading-[1.05] text-brand-darkBlue mb-2">
            3M+ impressions
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold leading-[1.05] text-brand-darkBlue/40 mt-4">
            500+ campaigns
          </h2>
        </div>

        {/* CSS animation */}
        <style>{`
          @keyframes floatPulse {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-12px) scale(1.05); }
          }
        `}</style>
      </section>

      {/* Trusted By / Social Proof */}
      <section className="bg-white py-12 px-4 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-sm font-medium opacity-40 uppercase tracking-widest mb-8">Trusted by forward-thinking brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30">
            {["Brew & Bean", "FitVibe", "Luna Skincare", "UrbanNest", "GreenLeaf", "Apex"].map((brand, i) => (
              <span key={i} className="font-heading font-bold text-lg md:text-xl text-brand-darkBlue whitespace-nowrap">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd mb-2">{stat.number}</div>
              <p className="text-sm md:text-base opacity-60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Core Capabilities</h2>
            <p className="opacity-70">We specialize in three interconnected disciplines that together create a powerful, cohesive brand presence online.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-brand-whiteTeal p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 text-left group">
                <div className="h-14 w-14 bg-gradient-to-br from-brand-gradientStart to-brand-gradientEnd text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{service.title}</h3>
                <p className="opacity-75 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/services" className="text-brand-darkBlue font-semibold inline-flex items-center text-sm hover:text-brand-lightBlue transition">
                  Learn More <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work / Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">How We Bring Brands to Life</h2>
            <p className="opacity-70">A transparent, collaborative process designed to deliver authentic results every single time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-8 shadow-sm border border-brand-lightBlue/10 hover:border-brand-lightBlue/30 transition">
                <span className="text-6xl font-heading font-extrabold text-brand-lightBlue/15 absolute top-4 right-6">{item.step}</span>
                <div className="relative z-10">
                  <h3 className="text-lg font-heading font-bold mb-3 mt-8">{item.title}</h3>
                  <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work / Portfolio Grid */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Work</h2>
            </div>
            <Link to="/product" className="text-brand-darkBlue font-semibold inline-flex items-center hover:text-brand-lightBlue transition">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${item.color} rounded-2xl h-64 md:h-72 flex items-end p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-brand-darkBlue/0 group-hover:bg-brand-darkBlue/60 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View Project →</span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-heading font-bold text-lg">{item.title}</h3>
                  <p className="text-sm opacity-60">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">What Our Clients Say</h2>
            <p className="opacity-70">Real stories from real people — the brands we've helped grow.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-brand-lightBlue/10 hover:shadow-lg transition flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, si) => <Star key={si} size={16} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="opacity-80 leading-relaxed flex-grow italic mb-8">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-gradientStart to-brand-gradientEnd flex items-center justify-center text-white font-bold text-sm">{t.avatar}</div>
                  <div>
                    <p className="font-heading font-bold text-sm">{t.name}</p>
                    <p className="text-xs opacity-60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-brand-gradientStart/10 to-brand-gradientEnd/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Stay Inspired</h2>
          <p className="opacity-70 mb-8 max-w-lg mx-auto">Get weekly design tips, branding insights, and social media strategies delivered straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="you@company.com" className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue/50 focus:border-brand-lightBlue" />
            <button className="bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 shadow-md transition whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-darkBlue text-brand-whiteTeal py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-lightBlue rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gradientStart rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Ready to elevate your brand?</h2>
          <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the forward-thinking clients who trust Nexova to craft their digital narrative. Let's create something meaningful together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-8 py-4 rounded-full font-semibold sm:text-lg hover:opacity-90 shadow-xl transition inline-flex items-center">
              Start Your Project <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/services" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold sm:text-lg hover:bg-white/10 transition">
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}