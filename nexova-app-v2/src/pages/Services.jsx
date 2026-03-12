import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, CheckCircle, Eye, Target, MessageCircle, TrendingUp, Zap, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      num: "01",
      title: "Social Media Design",
      desc: "Our core offering. We craft vibrant, engaging, and professional social media content tailored to your brand's unique identity. Every post, story, and reel is designed to stop the scroll and start conversations.",
      deliverables: ["Custom Feed Posts & Carousels", "Reel & Video Covers", "Story Templates & Highlight Icons", "Profile & Banner Branding", "Content Calendar Visuals"]
    },
    {
      num: "02",
      title: "Branding Content",
      desc: "Establish trust and authority with a cohesive brand identity. We design the assets that make every touchpoint of your marketing memorable and consistent across all channels.",
      deliverables: ["Complete Brand Kits", "Logo & Sub-Mark Systems", "Typography & Font Pairing", "Color Palette Curations", "Brand Guidelines Document"]
    },
    {
      num: "03",
      title: "Digital Marketing",
      desc: "Performance-oriented marketing strategies that use human-centric visuals to drive engagement and conversion. We marry creative with data for campaigns that truly resonate.",
      deliverables: ["Campaign Strategy & Planning", "Ad Creative Design (Meta, Google)", "Performance Analytics & Reports", "A/B Testing Visuals", "Audience Targeting Guidance"]
    }
  ];

  const whyUs = [
    { icon: <Eye size={20} />, title: "Human-First Design", desc: "No synthetic tropes. Every visual we produce feels organic, authentic, and crafted by real creative minds." },
    { icon: <Target size={20} />, title: "Strategy-Led Creativity", desc: "Beautiful design is nothing without purpose. We start with strategy, then design to achieve your business goals." },
    { icon: <MessageCircle size={20} />, title: "Collaborative Process", desc: "You're part of the journey. Regular check-ins, transparent timelines, and open feedback loops." },
    { icon: <TrendingUp size={20} />, title: "Measurable Results", desc: "We track engagement, reach, and conversions. Every deliverable is tied to real performance metrics." },
    { icon: <Zap size={20} />, title: "Fast Turnarounds", desc: "Most projects delivered within 5-10 business days without compromise on quality." },
    { icon: <Users size={20} />, title: "Dedicated Team", desc: "A dedicated designer and strategist assigned to your brand for personalized creative attention." }
  ];

  const process = [
    { step: "01", title: "Brief & Discovery", desc: "We start by understanding your brand story, target audience, core challenges, and desired outcomes." },
    { step: "02", title: "Creative Strategy", desc: "We research competitors, define content pillars, select visual styles, and present moodboards for approval." },
    { step: "03", title: "Design & Production", desc: "Handcrafted original designs with up to two rounds of revisions included." },
    { step: "04", title: "Delivery & Support", desc: "Final assets in all required formats, plus ongoing support and content scheduling assistance." }
  ];

  return (
    <div>
      {/* Hero — Split layout */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-6">Services</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[0.95]">
              We Build Identities That <em className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd">Resonate</em>
            </h1>
          </div>
          <div>
            <p className="text-lg text-brand-darkBlue/60 leading-relaxed max-w-lg">
              We don't just create graphics — we build a cohesive digital identity that sparks real connection. Strategic creativity meets human-centric design across every touchpoint.
            </p>
          </div>
        </div>
      </section>

      {/* Services — Full-width alternating rows */}
      <section className="border-t border-brand-darkBlue/10">
        {services.map((service, i) => (
          <div key={i} className={`border-b border-brand-darkBlue/10 ${i % 2 === 1 ? 'bg-white' : ''}`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-start ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-7xl font-heading font-bold text-brand-lightBlue/15">{service.num}</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold -mt-4 mb-6">{service.title}</h2>
                  <p className="text-brand-darkBlue/60 leading-relaxed text-lg mb-8">{service.desc}</p>
                  <Link to="/contact" className="group inline-flex items-center gap-2 bg-brand-darkBlue text-white px-6 py-3 font-semibold text-sm hover:bg-brand-darkBlue/90 transition">
                    Get a Quote <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-brand-whiteTeal border border-brand-darkBlue/5 p-8">
                    <h3 className="text-xs uppercase tracking-[0.3em] font-semibold text-brand-darkBlue/40 mb-6">Key Deliverables</h3>
                    <ul className="space-y-4">
                      {service.deliverables.map((item, di) => (
                        <li key={di} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-brand-lightBlue mt-0.5 shrink-0" />
                          <span className="text-brand-darkBlue/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Why Us — Minimal grid */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-3">Why Nexova</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">Why Brands Choose Us</h2>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="border-t-2 border-brand-lightBlue/20 pt-6">
                <div className="text-brand-lightBlue mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-brand-darkBlue/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — Vertical timeline */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-3">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Our Proven Process</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-0">
            {process.map((item, i) => (
              <div key={i} className="flex gap-8 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-brand-lightBlue text-white flex items-center justify-center font-bold text-sm shrink-0">{item.step}</div>
                  {i < process.length - 1 && <div className="w-px flex-1 bg-brand-lightBlue/20 mt-2"></div>}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-heading font-bold mb-2">{item.title}</h3>
                  <p className="text-brand-darkBlue/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-3 gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-3">FAQ</p>
            <h2 className="text-4xl font-heading font-bold">Common Questions</h2>
          </div>
          <div className="lg:col-span-2 divide-y divide-brand-darkBlue/10">
            {[
              { q: "How long does a typical project take?", a: "Most projects are completed within 5-10 business days. Larger brand identity projects may take 2-4 weeks depending on scope and complexity." },
              { q: "Do you offer revisions?", a: "Yes! Every project includes up to two rounds of revisions to ensure the final deliverables match your vision perfectly." },
              { q: "Can I request a custom package?", a: "Absolutely. We tailor our services to each client's unique needs. Reach out via our contact page for a custom quote." },
              { q: "What platforms do you design for?", a: "We design for Instagram, Facebook, LinkedIn, TikTok, Pinterest, X/Twitter, YouTube, and any other platform your brand needs." }
            ].map((faq, i) => (
              <div key={i} className="py-8">
                <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-brand-darkBlue/60 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-darkBlue text-brand-whiteTeal py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Have a project <em className="text-brand-lightBlue">in mind</em>?
          </h2>
          <p className="text-lg opacity-60 mb-10 max-w-xl mx-auto">
            Let's talk about your brand goals and how our services can help you stand out.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-8 py-4 font-semibold text-lg hover:opacity-90 transition">
            Book a Free Consultation <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}