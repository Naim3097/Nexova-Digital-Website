import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
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

const scheduleSteps = [
  {
    date: "Week 1–2",
    title: "Discovery",
    desc: "We dive deep into your brand, audience, and competitors. Through collaborative workshops and audits, we map out the strategic foundation that every design decision will build upon.",
    img: "schedule/18.jpg",
  },
  {
    date: "Week 3–4",
    title: "Design",
    desc: "Our team translates strategy into scroll-stopping visuals. From social templates to full brand kits, every asset is handcrafted with intention — no cookie-cutter work, ever.",
    img: "schedule/19.jpg",
  },
  {
    date: "Week 5–6",
    title: "Launch",
    desc: "Content goes live across your channels. We monitor performance, gather insights, and iterate in real-time to ensure maximum engagement and measurable growth.",
    img: "schedule/20.jpg",
  },
];

function ScheduleTimeline() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white overflow-hidden">
      {/* Centered title */}
      <div className="text-center mb-20 px-4">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-black leading-tight">
          Schedule
        </h2>
      </div>

      {/* Two-column layout: left nav + right content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left: phase nav labels */}
          <div className="flex flex-row md:flex-col gap-4 md:gap-2 md:pt-2 md:min-w-[160px] flex-shrink-0">
            {scheduleSteps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left text-lg md:text-xl font-heading font-bold transition-all duration-300 ${
                  active === i ? 'text-black' : 'text-gray-300 hover:text-gray-400'
                }`}
              >
                {step.title}
              </button>
            ))}
          </div>

          {/* Right: vertical slide content */}
          <div className="flex-1 relative overflow-hidden">
            {scheduleSteps.map((step, i) => (
              <div
                key={i}
                className={`transition-all duration-500 ease-out ${
                  active === i
                    ? 'opacity-100 translate-y-0 relative'
                    : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                }`}
              >
                {/* Date pill + description */}
                <div className="mb-8">
                  <span className="inline-block text-xs font-semibold text-black bg-gray-100 border border-gray-200 rounded-full px-3 py-1.5 mb-4">
                    {step.date}
                  </span>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>

                {/* Schedule image */}
                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <img
                    src={`${import.meta.env.BASE_URL}${step.img}`}
                    alt={step.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingStars() {
  const stars = useRef(
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.25 + 0.08,
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 5,
      drift: Math.random() * 20 - 10,
    }))
  ).current;

  return (
    <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: `radial-gradient(circle, rgba(122,217,251,${s.opacity + 0.15}) 0%, rgba(122,217,251,${s.opacity}) 40%, transparent 70%)`,
            boxShadow: `0 0 ${s.size * 3}px rgba(122,217,251,${s.opacity * 0.8}), 0 0 ${s.size * 6}px rgba(122,217,251,${s.opacity * 0.3})`,
            animation: `astroFloat ${s.duration}s ease-in-out ${s.delay}s infinite`,
            '--drift': `${s.drift}px`,
          }}
        />
      ))}
      <style>{`
        @keyframes astroFloat {
          0%, 100% { opacity: 0.3; transform: translateY(0) translateX(0); }
          25% { opacity: 1; }
          50% { opacity: 0.6; transform: translateY(-15px) translateX(var(--drift)); }
          75% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function AstronautHero() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const [blur, setBlur] = useState(8);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        setBlur(Math.max(0, 8 - ratio * 8));
      },
      { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const textBlur = isHovered ? 0 : blur;

  return (
    <section ref={heroRef} className="relative w-full my-8 overflow-hidden" style={{ minHeight: '85vh' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}hero/home-astronaut2.jpg`}
          alt="Astronaut hero background"
          className="w-full h-full object-cover"
        />
        {/* Soft dark blue gradient from the left */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(10,25,47,0.55) 0%, rgba(10,25,47,0.25) 35%, transparent 65%)' }} />
      </div>

      {/* Floating techy stars */}
      <FloatingStars />

      {/* Text with blur intro effect — shifted right */}
      <div className="relative z-10 flex items-center h-full" style={{ minHeight: '85vh' }}>
        <div
          ref={textRef}
          className="max-w-2xl px-12 sm:px-20 lg:px-32 py-16 cursor-default"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            filter: `blur(${textBlur}px)`,
            transition: 'filter 0.6s ease-out',
          }}
        >
          <p className="text-white/70 text-sm sm:text-base tracking-widest uppercase mb-4 font-medium" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            A growing portfolio of
          </p>
          <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-tight mb-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            150+ brands<br />
            trust our craft
          </h2>
          <div className="flex flex-wrap gap-8 mt-6">
            <div>
              <span className="text-white text-3xl sm:text-4xl font-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>3M+</span>
              <p className="text-white/60 text-sm mt-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>Impressions delivered</p>
            </div>
            <div>
              <span className="text-white text-3xl sm:text-4xl font-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>500+</span>
              <p className="text-white/60 text-sm mt-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>Campaigns launched</p>
            </div>
            <div>
              <span className="text-white text-3xl sm:text-4xl font-black" style={{ fontFamily: 'Satoshi, sans-serif' }}>98%</span>
              <p className="text-white/60 text-sm mt-1" style={{ fontFamily: 'Satoshi, sans-serif' }}>Client retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const services = [
    { icon: <Palette size={28} />, title: "Social Media Design", desc: "Scroll-stopping visuals crafted for every platform. We design carousels, reels, and posts that feel authentic to your brand voice.", video: "capabilities/cap1.mp4" },
    { icon: <PenTool size={28} />, title: "Branding Content", desc: "From logo systems to brand kits, we build the visual DNA that makes your business instantly recognizable and deeply trusted.", video: "capabilities/cap2.mp4" },
    { icon: <BarChart3 size={28} />, title: "Digital Marketing", desc: "Data-informed campaigns that pair human creativity with strategic execution. Real engagement, real conversions.", video: "capabilities/cap3.mp4" }
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
            <img src={`${import.meta.env.BASE_URL}${brand.src.replace(/^\//, '')}`}  alt={brand.alt} className="w-full h-full object-contain" />
          </div>
        ))}

        {/* Centered content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <p className="text-brand-darkBlue/60 font-semibold text-base md:text-lg mb-4">
            A growing portfolio of
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.05] text-brand-darkBlue mb-2">
            150+ brands
          </h1>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.05] text-brand-darkBlue mb-2">
            3M+ impressions
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.05] text-brand-darkBlue/40 mt-4">
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

      {/* Hero Section 2 — Astronaut background with blur intro */}
      <AstronautHero />

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
              <div className="text-4xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd mb-2">{stat.number}</div>
              <p className="text-sm md:text-base opacity-60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Showcase — Mobbin-style continuous scroll */}
      <section className="py-20 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto px-4 mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-brand-darkBlue leading-tight">
            Our designs suits<br />your style.
          </h2>
        </div>

        {/* Scrolling marquee row */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee w-max">
            {[...Array(2)].map((_, setIdx) => (
              <div key={setIdx} className="flex gap-6">
                {[
                  { label: "Social Feed", img: "visuals/c2.jpg" },
                  { label: "Brand Kit", img: "visuals/c3.jpg" },
                  { label: "Story Template", img: "visuals/c4.jpg" },
                  { label: "Ad Creative", img: "visuals/c7.jpg" },
                  { label: "Carousel Post", img: "visuals/c10.jpg" },
                  { label: "Presentation", img: "visuals/copilot4.jpg" },
                  { label: "Webinar", img: "visuals/copilot-webinar.jpg" },
                  { label: "Event Design", img: "visuals/israk-mikraj.jpg" },
                  { label: "Poster Design", img: "visuals/whats-next.jpg" },
                  { label: "Campaign", img: "visuals/c2b.jpg" },
                  { label: "Thumbnail", img: "visuals/c4b.jpg" },
                ].map((card, i) => (
                  <div key={i} className="flex flex-col items-center flex-shrink-0">
                    <p className="text-sm font-semibold text-brand-darkBlue/50 mb-3 tracking-wide">{card.label}</p>
                    <div className="w-[220px] md:w-[260px] aspect-[4/5] rounded-2xl overflow-hidden shadow-sm">
                      <img src={`${import.meta.env.BASE_URL}${card.img}`} alt={card.label} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Core Services */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Centered headline + sub */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-black leading-tight mb-4">
              Core Capabilities
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed">We specialize in three interconnected disciplines that together create a powerful, cohesive brand presence online.</p>
          </div>

          {/* 3-column row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <div key={i} className="flex flex-col">
                {/* Video box */}
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl mb-5 overflow-hidden">
                  <video
                    src={`${import.meta.env.BASE_URL}${service.video}`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Title + description below */}
                <h3 className="text-lg md:text-xl font-heading font-bold text-black mb-2">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule — Mobbin Awards-style horizontal scroll timeline */}
      <ScheduleTimeline />

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
                <span className="text-6xl font-heading font-black text-brand-lightBlue/15 absolute top-4 right-6">{item.step}</span>
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
