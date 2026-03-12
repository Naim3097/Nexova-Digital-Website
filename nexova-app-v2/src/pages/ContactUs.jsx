import { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', service: '', budget: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail size={18} />, label: "Email", value: "hello@nexovadigital.com", href: "mailto:hello@nexovadigital.com" },
    { icon: <Phone size={18} />, label: "Phone", value: "+1 (555) 987-6543", href: "tel:+15559876543" },
    { icon: <MapPin size={18} />, label: "Location", value: "Kuala Lumpur, Malaysia", href: null },
    { icon: <Clock size={18} />, label: "Hours", value: "Mon – Fri, 9 AM – 6 PM MYT", href: null }
  ];

  const faqs = [
    { q: "How quickly do you respond?", a: "We respond to all inquiries within 24 hours during business days." },
    { q: "Can we schedule a video call?", a: "Absolutely. Once you reach out, we'll send a Calendly link to book at your convenience." },
    { q: "Do you work with international clients?", a: "Yes — we work with brands across Southeast Asia, Australia, the UK, and the US." },
    { q: "What information should I include?", a: "The more detail the better — your brand, goals, timeline, and budget range help us tailor our response." }
  ];

  return (
    <div>
      {/* Hero — split layout */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-6">Contact</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[0.95]">
              Let's Start <em className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd">Something</em>
            </h1>
          </div>
          <div>
            <p className="text-brand-darkBlue/60 text-lg">
              Have a project in mind? We'd love to hear about it. Fill out the form or reach out directly — we respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="border-t border-b border-brand-darkBlue/10 py-0">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, i) => (
            <div key={i} className="px-6 lg:px-12 py-6 border-b sm:border-b-0 sm:border-r last:border-r-0 border-brand-darkBlue/10 flex items-center gap-4">
              <div className="text-brand-lightBlue">{info.icon}</div>
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-darkBlue/40 mb-0.5">{info.label}</p>
                {info.href ? (
                  <a href={info.href} className="text-sm font-medium hover:text-brand-lightBlue transition">{info.value}</a>
                ) : (
                  <p className="text-sm font-medium">{info.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl font-heading font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-brand-darkBlue/40 block mb-2">Full Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full border-b-2 border-brand-darkBlue/10 py-3 bg-transparent focus:outline-none focus:border-brand-lightBlue transition text-sm" placeholder="John Smith" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-brand-darkBlue/40 block mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full border-b-2 border-brand-darkBlue/10 py-3 bg-transparent focus:outline-none focus:border-brand-lightBlue transition text-sm" placeholder="john@company.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-brand-darkBlue/40 block mb-2">Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full border-b-2 border-brand-darkBlue/10 py-3 bg-transparent focus:outline-none focus:border-brand-lightBlue transition text-sm" placeholder="Company name" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-brand-darkBlue/40 block mb-2">Service Interest</label>
                  <select name="service" value={formData.service} onChange={handleChange}
                    className="w-full border-b-2 border-brand-darkBlue/10 py-3 bg-transparent focus:outline-none focus:border-brand-lightBlue transition text-sm">
                    <option value="">Select a service</option>
                    <option value="brand-identity">Brand Identity Design</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="content-creation">Content Creation</option>
                    <option value="brand-strategy">Brand Strategy</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-brand-darkBlue/40 block mb-2">Budget Range</label>
                <select name="budget" value={formData.budget} onChange={handleChange}
                  className="w-full border-b-2 border-brand-darkBlue/10 py-3 bg-transparent focus:outline-none focus:border-brand-lightBlue transition text-sm">
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-3k">$1,000 – $3,000</option>
                  <option value="3k-5k">$3,000 – $5,000</option>
                  <option value="5k-10k">$5,000 – $10,000</option>
                  <option value="10k-plus">$10,000+</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-brand-darkBlue/40 block mb-2">Project Details *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="5"
                  className="w-full border-b-2 border-brand-darkBlue/10 py-3 bg-transparent focus:outline-none focus:border-brand-lightBlue transition text-sm resize-none" placeholder="Tell us about your brand, goals, and timeline..." />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 bg-brand-darkBlue text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:bg-brand-lightBlue transition">
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="border-l border-brand-darkBlue/10 pl-8 lg:pl-12">
              <h3 className="text-xl font-heading font-bold mb-8">Frequently Asked</h3>
              <div className="space-y-8">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-t border-brand-darkBlue/10 pt-6">
                    <h4 className="font-bold text-sm mb-2">{faq.q}</h4>
                    <p className="text-sm text-brand-darkBlue/60">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-brand-darkBlue text-brand-whiteTeal">
                <h4 className="font-heading font-bold text-lg mb-3">Prefer a call?</h4>
                <p className="text-sm opacity-60 mb-6">Book a free 30-minute consultation to discuss your brand needs.</p>
                <a href="#" className="inline-flex items-center gap-2 text-brand-lightBlue font-semibold text-sm hover:underline">
                  Schedule a Call <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-brand-darkBlue/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 text-center">
          <div className="aspect-[3/1] bg-gradient-to-br from-brand-lightBlue/10 to-brand-darkBlue/5 flex items-center justify-center border border-brand-darkBlue/10">
            <div>
              <MapPin size={32} className="text-brand-lightBlue mx-auto mb-4" />
              <p className="font-heading font-bold text-lg">Kuala Lumpur, Malaysia</p>
              <p className="text-sm text-brand-darkBlue/40 mt-1">Serving clients worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}