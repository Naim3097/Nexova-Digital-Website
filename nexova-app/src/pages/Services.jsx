import { Link } from 'react-router-dom';
import { Palette, PenTool, BarChart3, ArrowRight, CheckCircle, Users, Zap, Target, Eye, MessageCircle, TrendingUp } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Palette size={28} />,
      title: "Social Media Design",
      desc: "Our core offering. We craft vibrant, engaging, and professional social media content tailored to your brand's unique identity. Every post, story, and reel is designed to stop the scroll and start conversations.",
      deliverables: ["Custom Feed Posts & Carousels", "Reel & Video Covers", "Story Templates & Highlight Icons", "Profile & Banner Branding", "Content Calendar Visuals"],
      color: "from-sky-50 to-cyan-50"
    },
    {
      icon: <PenTool size={28} />,
      title: "Branding Content",
      desc: "Establish trust and authority with a cohesive brand identity. We design the assets that make every touchpoint of your marketing memorable and consistent across all channels.",
      deliverables: ["Complete Brand Kits", "Logo & Sub-Mark Systems", "Typography & Font Pairing", "Color Palette Curations", "Brand Guidelines Document"],
      color: "from-violet-50 to-purple-50"
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Digital Marketing",
      desc: "Performance-oriented marketing strategies that use human-centric visuals to drive engagement and conversion. We marry creative with data for campaigns that truly resonate.",
      deliverables: ["Campaign Strategy & Planning", "Ad Creative Design (Meta, Google)", "Performance Analytics & Reports", "A/B Testing Visuals", "Audience Targeting Guidance"],
      color: "from-emerald-50 to-teal-50"
    }
  ];

  const whyUs = [
    { icon: <Eye size={22} />, title: "Human-First Design", desc: "No synthetic tropes. Every visual we produce feels organic, authentic, and crafted by real creative minds." },
    { icon: <Target size={22} />, title: "Strategy-Led Creativity", desc: "Beautiful design is nothing without purpose. We start with strategy, then design to achieve your business goals." },
    { icon: <MessageCircle size={22} />, title: "Collaborative Process", desc: "You're part of the journey. Regular check-ins, transparent timelines, and open feedback loops at every milestone." },
    { icon: <TrendingUp size={22} />, title: "Measurable Results", desc: "We track engagement, reach, and conversions. Every deliverable is tied to real performance metrics you can see." },
    { icon: <Zap size={22} />, title: "Fast Turnarounds", desc: "We respect your timelines. Most projects are delivered within 5-10 business days without compromise on quality." },
    { icon: <Users size={22} />, title: "Dedicated Team", desc: "A dedicated designer and strategist assigned to your brand, ensuring consistency and personalized creative attention." }
  ];

  const process = [
    { step: "01", title: "Brief & Discovery", desc: "We start by understanding your brand story, target audience, core challenges, and desired outcomes." },
    { step: "02", title: "Creative Strategy", desc: "We research your competitors, define content pillars, select visual styles, and present moodboards for your approval." },
    { step: "03", title: "Design & Production", desc: "Handcrafted, original designs are produced. You receive drafts for review with up to two rounds of revisions." },
    { step: "04", title: "Delivery & Support", desc: "Final assets delivered in all required formats. We offer ongoing support and content scheduling assistance." }
  ];

  return (
    <div className="flex-grow flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-4">Services</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight">
          We Build Digital Identities That
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd"> Resonate With Humans</span>
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
          We don't just create graphics — we build a cohesive digital identity that sparks real connection. Strategic creativity meets human-centric design.
        </p>
      </section>

      {/* Detailed Service Cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div key={index} className={`bg-gradient-to-br ${service.color} rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start`}>
              <div className="flex-1">
                <div className="h-14 w-14 bg-gradient-to-br from-brand-gradientStart to-brand-gradientEnd text-white rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-heading font-bold mb-4">{service.title}</h2>
                <p className="opacity-80 leading-relaxed text-lg mb-6">{service.desc}</p>
                <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 shadow-md transition">
                  Get a Quote <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="font-heading font-bold text-brand-darkBlue mb-5">Key Deliverables</h3>
                  <ul className="space-y-4">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-brand-lightBlue mt-0.5 shrink-0" />
                        <span className="opacity-90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">Why Nexova</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Brands Choose Us</h2>
            <p className="opacity-70">Six reasons forward-thinking companies partner with Nexova for their creative needs.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-brand-whiteTeal p-7 rounded-2xl hover:shadow-md transition group">
                <div className="w-12 h-12 bg-brand-lightBlue/15 text-brand-darkBlue rounded-xl flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-brand-gradientStart group-hover:to-brand-gradientEnd group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-lg font-heading font-bold mb-2">{item.title}</h3>
                <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Proven Process</h2>
            <p className="opacity-70">From first call to final delivery, here's how we bring your brand vision to life.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-lightBlue/10 h-full">
                  <span className="text-5xl font-heading font-extrabold text-brand-lightBlue/20">{item.step}</span>
                  <h3 className="text-lg font-heading font-bold mb-3 mt-4">{item.title}</h3>
                  <p className="opacity-70 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-brand-lightBlue/30">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Common Questions</h2>
          </div>
          {[
            { q: "How long does a typical project take?", a: "Most projects are completed within 5-10 business days. Larger brand identity projects may take 2-4 weeks depending on scope and complexity." },
            { q: "Do you offer revisions?", a: "Yes! Every project includes up to two rounds of revisions to ensure the final deliverables match your vision perfectly." },
            { q: "Can I request a custom package?", a: "Absolutely. We tailor our services to each client's unique needs. Reach out via our contact page for a custom quote." },
            { q: "What platforms do you design for?", a: "We design for Instagram, Facebook, LinkedIn, TikTok, Pinterest, X/Twitter, YouTube, and any other platform your brand needs." }
          ].map((faq, i) => (
            <div key={i} className="border-b border-brand-lightBlue/10 py-6">
              <h3 className="font-heading font-bold text-lg mb-2">{faq.q}</h3>
              <p className="opacity-70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-darkBlue text-brand-whiteTeal py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-lightBlue rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gradientStart rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
            Let's talk about your brand goals and how our services can help you stand out in a crowded digital landscape.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-8 py-4 rounded-full font-semibold sm:text-lg hover:opacity-90 shadow-xl transition inline-flex items-center">
            Book a Free Consultation <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}