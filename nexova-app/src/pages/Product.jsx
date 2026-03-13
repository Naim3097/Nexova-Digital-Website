import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Shield, Zap, Users, Clock, Infinity } from 'lucide-react';

export default function Product() {
  const packages = [
    {
      name: "Starter Kit",
      tagline: "Perfect for new brands",
      desc: "Everything you need to establish a professional online presence, ideal for startups and small businesses just getting started with their brand.",
      price: "$899",
      period: "/project",
      features: ["Custom Logo Design", "Social Media Templates x10", "Color Palette & Typography", "Brand Guidelines (1-page)", "2 Rounds of Revisions"],
      highlight: false
    },
    {
      name: "Brand Kit Pro",
      tagline: "Most popular",
      desc: "An all-in-one brand identity package tailored for growing agencies and digital-first companies ready to own their market presence.",
      price: "$1,499",
      period: "/project",
      features: ["Custom Logo + Sub-Mark System", "Social Media Templates x25", "Color Palette Curations", "Typography & Font Pairing", "Full Brand Guidelines Document", "Stationery Design (Cards, Letterhead)", "3 Rounds of Revisions"],
      highlight: true
    },
    {
      name: "Social Ignition",
      tagline: "For maximum impact",
      desc: "Jumpstart your online presence with 30 days of professionally designed content backed by strategic planning and copywriting.",
      price: "$2,250",
      period: "/month",
      features: ["30 Custom Posts + Copywriting", "15 Story Graphics", "5 Reel/Video Covers", "Content Calendar & Strategy", "Engagement Strategy Plan", "Monthly Performance Report", "Dedicated Account Manager"],
      highlight: false
    }
  ];

  const addOns = [
    { name: "Monthly Content Pack", price: "$750/mo", desc: "15 custom posts with copywriting, published on your schedule." },
    { name: "Animated Social Posts", price: "$45/post", desc: "Motion graphics and micro-animations for higher engagement." },
    { name: "Pitch Deck Design", price: "$500", desc: "A beautifully designed investor or sales deck up to 15 slides." },
    { name: "Email Template Design", price: "$350", desc: "Custom-branded email newsletter templates for Mailchimp or similar." }
  ];

  const comparison = [
    { feature: "Custom Logo Design", starter: true, pro: true, ignition: false },
    { feature: "Social Media Templates", starter: "10", pro: "25", ignition: "30 Posts" },
    { feature: "Brand Guidelines", starter: "1-page", pro: "Full Doc", ignition: false },
    { feature: "Content Strategy", starter: false, pro: false, ignition: true },
    { feature: "Copywriting", starter: false, pro: false, ignition: true },
    { feature: "Revisions", starter: "2", pro: "3", ignition: "Unlimited" },
    { feature: "Account Manager", starter: false, pro: false, ignition: true },
    { feature: "Performance Report", starter: false, pro: false, ignition: true }
  ];

  const guarantees = [
    { icon: <Shield size={24} />, title: "Satisfaction Guarantee", desc: "Not happy? We'll revise until you are, or give you a full refund." },
    { icon: <Clock size={24} />, title: "On-Time Delivery", desc: "We deliver on schedule, every time. Your timeline is our commitment." },
    { icon: <Zap size={24} />, title: "Quick Turnaround", desc: "Most packages delivered within 5-10 business days from briefing." },
    { icon: <Users size={24} />, title: "Dedicated Support", desc: "Direct access to your designer via Slack, email, or video call." }
  ];

  return (
    <div className="flex-grow flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-4">Packages</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight">
          Transparent Pricing,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd"> Exceptional Value</span>
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
          Choose the package that fits your brand goals. Every plan is crafted with the same attention to detail, quality, and human touch.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`rounded-3xl p-8 md:p-10 flex flex-col relative overflow-hidden transition-shadow hover:shadow-xl ${
              pkg.highlight
                ? "bg-brand-darkBlue text-brand-whiteTeal shadow-2xl ring-2 ring-brand-lightBlue/30"
                : "bg-white shadow-sm border border-brand-lightBlue/15"
            }`}>
              {pkg.highlight && (
                <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white text-center text-xs font-bold py-1.5 uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className={pkg.highlight ? "mt-4" : ""}>
                <p className={`text-sm font-semibold uppercase tracking-widest mb-2 ${pkg.highlight ? "text-brand-lightBlue" : "text-brand-lightBlue"}`}>{pkg.tagline}</p>
                <h2 className="text-2xl font-heading font-bold mb-2">{pkg.name}</h2>
                <p className={`text-sm mb-6 leading-relaxed ${pkg.highlight ? "opacity-70" : "opacity-60"}`}>{pkg.desc}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-heading font-black">{pkg.price}</span>
                <span className={`text-base font-normal ${pkg.highlight ? "opacity-50" : "opacity-40"}`}>{pkg.period}</span>
              </div>

              <ul className="mb-10 flex-grow space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className={`mt-0.5 shrink-0 ${pkg.highlight ? "text-brand-lightBlue" : "text-brand-lightBlue"}`} />
                    <span className={`text-sm ${pkg.highlight ? "opacity-90" : "opacity-80"}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contact" className={`block text-center w-full py-4 rounded-full font-bold transition ${
                pkg.highlight
                  ? "bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white shadow-lg hover:opacity-90"
                  : "border-2 border-brand-darkBlue text-brand-darkBlue hover:bg-brand-darkBlue hover:text-white"
              }`}>
                Select Package
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">Compare</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Package Comparison</h2>
            <p className="opacity-70">See what's included in each plan at a glance.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-brand-lightBlue/20">
                  <th className="py-4 pr-4 font-heading font-bold text-sm">Feature</th>
                  <th className="py-4 px-4 font-heading font-bold text-sm text-center">Starter</th>
                  <th className="py-4 px-4 font-heading font-bold text-sm text-center text-brand-lightBlue">Pro</th>
                  <th className="py-4 pl-4 font-heading font-bold text-sm text-center">Ignition</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-brand-lightBlue/10">
                    <td className="py-4 pr-4 text-sm font-medium">{row.feature}</td>
                    {[row.starter, row.pro, row.ignition].map((val, ci) => (
                      <td key={ci} className="py-4 px-4 text-center text-sm">
                        {val === true ? <CheckCircle size={18} className="text-brand-lightBlue mx-auto" /> :
                         val === false ? <span className="text-gray-300">—</span> :
                         <span className="font-medium">{val}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">Extras</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Add-On Services</h2>
            <p className="opacity-70">Enhance any package with these supplementary creative services.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-brand-lightBlue/10 hover:shadow-md transition flex flex-col">
                <h3 className="font-heading font-bold mb-2">{addon.name}</h3>
                <p className="text-sm opacity-70 mb-4 flex-grow">{addon.desc}</p>
                <p className="text-xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">Our Promise</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Built on Trust</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {guarantees.map((g, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 bg-brand-lightBlue/10 text-brand-darkBlue rounded-2xl flex items-center justify-center mx-auto mb-4">
                  {g.icon}
                </div>
                <h3 className="font-heading font-bold mb-2">{g.title}</h3>
                <p className="opacity-70 text-sm">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-darkBlue text-brand-whiteTeal py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-lightBlue rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gradientStart rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Need Something Custom?</h2>
          <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
            Every brand is unique. If none of these packages are the perfect fit, reach out and we'll craft a bespoke solution just for you.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-8 py-4 rounded-full font-semibold sm:text-lg hover:opacity-90 shadow-xl transition inline-flex items-center">
            Request Custom Quote <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}