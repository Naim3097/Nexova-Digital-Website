import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Shield, Clock, Zap, Users } from 'lucide-react';

export default function Product() {
  const packages = [
    {
      name: "Starter Kit",
      tagline: "For new brands",
      price: "$899",
      period: "/project",
      features: ["Custom Logo Design", "Social Media Templates x10", "Color Palette & Typography", "Brand Guidelines (1-page)", "2 Rounds of Revisions"],
      highlight: false
    },
    {
      name: "Brand Kit Pro",
      tagline: "Most popular",
      price: "$1,499",
      period: "/project",
      features: ["Custom Logo + Sub-Mark System", "Social Media Templates x25", "Color Palette Curations", "Typography & Font Pairing", "Full Brand Guidelines Document", "Stationery Design (Cards, Letterhead)", "3 Rounds of Revisions"],
      highlight: true
    },
    {
      name: "Social Ignition",
      tagline: "Maximum impact",
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
    { icon: <Shield size={22} />, title: "Satisfaction Guarantee", desc: "Not happy? We'll revise until you are, or full refund." },
    { icon: <Clock size={22} />, title: "On-Time Delivery", desc: "We deliver on schedule, every time. Your timeline is our commitment." },
    { icon: <Zap size={22} />, title: "Quick Turnaround", desc: "Most packages delivered within 5-10 business days." },
    { icon: <Users size={22} />, title: "Dedicated Support", desc: "Direct access to your designer via Slack, email, or video." }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-6">Packages</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] mb-8 max-w-4xl mx-auto">
          Transparent Pricing, <em className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd">Exceptional Value</em>
        </h1>
        <p className="text-lg text-brand-darkBlue/60 max-w-xl mx-auto">
          Choose the package that fits your brand goals. Every plan delivers the same attention to detail and human touch.
        </p>
      </section>

      {/* Pricing — Horizontal card layout */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid md:grid-cols-3 gap-0 border border-brand-darkBlue/10">
          {packages.map((pkg, idx) => (
            <div key={idx} className={`p-8 lg:p-10 flex flex-col border-b md:border-b-0 md:border-r last:border-r-0 border-brand-darkBlue/10 relative ${
              pkg.highlight ? 'bg-brand-darkBlue text-brand-whiteTeal' : 'bg-white'
            }`}>
              {pkg.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd"></div>
              )}
              <p className={`text-xs uppercase tracking-[0.3em] font-semibold mb-1 ${pkg.highlight ? 'text-brand-lightBlue' : 'text-brand-lightBlue'}`}>{pkg.tagline}</p>
              <h2 className="text-2xl font-heading font-bold mb-4">{pkg.name}</h2>
              <div className="mb-8">
                <span className="text-5xl font-heading font-bold">{pkg.price}</span>
                <span className={`text-sm ${pkg.highlight ? 'opacity-40' : 'opacity-40'}`}>{pkg.period}</span>
              </div>
              <ul className="space-y-3 mb-10 flex-grow">
                {pkg.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-3 text-sm">
                    <Check size={16} className={`mt-0.5 shrink-0 ${pkg.highlight ? 'text-brand-lightBlue' : 'text-brand-lightBlue'}`} />
                    <span className={pkg.highlight ? 'opacity-80' : 'opacity-70'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className={`block text-center py-4 font-semibold text-sm uppercase tracking-wider transition ${
                pkg.highlight
                  ? 'bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white hover:opacity-90'
                  : 'border-2 border-brand-darkBlue text-brand-darkBlue hover:bg-brand-darkBlue hover:text-white'
              }`}>
                Select Package
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-3">Compare</p>
            <h2 className="text-4xl font-heading font-bold">Package Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-brand-darkBlue/10">
                  <th className="py-4 pr-4 text-left text-xs uppercase tracking-wider opacity-40 font-semibold">Feature</th>
                  <th className="py-4 px-4 text-center text-xs uppercase tracking-wider opacity-40 font-semibold">Starter</th>
                  <th className="py-4 px-4 text-center text-xs uppercase tracking-wider text-brand-lightBlue font-semibold">Pro</th>
                  <th className="py-4 pl-4 text-center text-xs uppercase tracking-wider opacity-40 font-semibold">Ignition</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-brand-darkBlue/5">
                    <td className="py-4 pr-4 text-sm">{row.feature}</td>
                    {[row.starter, row.pro, row.ignition].map((val, ci) => (
                      <td key={ci} className="py-4 px-4 text-center text-sm">
                        {val === true ? <Check size={16} className="text-brand-lightBlue mx-auto" /> :
                         val === false ? <span className="opacity-20">—</span> :
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
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-3">Extras</p>
            <h2 className="text-4xl font-heading font-bold leading-tight">Enhance Any Package</h2>
          </div>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {addOns.map((addon, i) => (
              <div key={i} className="border-t-2 border-brand-lightBlue/20 pt-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">{addon.name}</h3>
                  <span className="text-sm font-heading font-bold text-brand-lightBlue shrink-0 ml-4">{addon.price}</span>
                </div>
                <p className="text-sm text-brand-darkBlue/60">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-3 text-center">Our Promise</p>
          <h2 className="text-4xl font-heading font-bold text-center mb-16">Built on Trust</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-brand-darkBlue/10">
            {guarantees.map((g, i) => (
              <div key={i} className="p-8 border-b sm:border-b-0 sm:border-r last:border-r-0 border-brand-darkBlue/10 text-center">
                <div className="text-brand-lightBlue mb-4 flex justify-center">{g.icon}</div>
                <h3 className="font-bold mb-2 text-sm">{g.title}</h3>
                <p className="text-xs text-brand-darkBlue/60 leading-relaxed">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-darkBlue text-brand-whiteTeal py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Need something <em className="text-brand-lightBlue">custom</em>?
          </h2>
          <p className="text-lg opacity-60 mb-10 max-w-xl mx-auto">
            Every brand is unique. Reach out and we'll craft a bespoke solution just for you.
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-2 bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-8 py-4 font-semibold text-lg hover:opacity-90 transition">
            Request Custom Quote <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}