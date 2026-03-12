import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, ArrowRight, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="flex-grow flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-4">Contact</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight">
          Let's Build Something
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd"> Meaningful Together</span>
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
          Whether you have a clear vision or just a spark of an idea, we'd love to hear from you. Our team is ready to help elevate your brand.
        </p>
      </section>

      {/* Contact Form + Info Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 space-y-6">
            {/* Info Card */}
            <div className="bg-brand-darkBlue text-brand-whiteTeal rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-lightBlue rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-gradientStart rounded-full blur-2xl"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-heading font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-brand-lightBlue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Email Us</p>
                      <p className="opacity-80 text-sm">hello@nexovadigital.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-brand-lightBlue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Call Us</p>
                      <p className="opacity-80 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand-lightBlue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Visit Us</p>
                      <p className="opacity-80 text-sm">123 Creative Studio Ave,<br/>Suite 400, San Francisco,<br/>CA 94107</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-brand-lightBlue" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-1">Office Hours</p>
                      <p className="opacity-80 text-sm">Mon - Fri: 9am - 6pm PST<br/>Weekend: By appointment</p>
                    </div>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-sm font-semibold mb-4 opacity-60">Follow Us</p>
                  <div className="flex gap-3">
                    {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-lightBlue/20 transition cursor-pointer">
                        <Icon size={18} className="text-brand-lightBlue" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-br from-brand-lightBlue/10 to-brand-gradientEnd/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Send size={18} className="text-brand-lightBlue" />
                <h3 className="font-heading font-bold text-sm">Quick Response</h3>
              </div>
              <p className="text-sm opacity-70">We respond to all inquiries within 24 hours during business days. For urgent requests, call us directly.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-brand-lightBlue/10">
              <h2 className="text-2xl font-heading font-bold mb-2">Send Us a Message</h2>
              <p className="opacity-60 text-sm mb-8">Fill out the form below and we'll get back to you with a tailored proposal.</p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-brand-darkBlue mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue/50 focus:border-brand-lightBlue transition-all bg-brand-whiteTeal/50" placeholder="Jane" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-brand-darkBlue mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue/50 focus:border-brand-lightBlue transition-all bg-brand-whiteTeal/50" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-darkBlue mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue/50 focus:border-brand-lightBlue transition-all bg-brand-whiteTeal/50" placeholder="jane@company.com" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brand-darkBlue mb-2">Company / Brand Name</label>
                  <input type="text" id="company" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue/50 focus:border-brand-lightBlue transition-all bg-brand-whiteTeal/50" placeholder="Acme Inc." />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-brand-darkBlue mb-2">Project Type</label>
                    <select id="project" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue/50 focus:border-brand-lightBlue transition-all bg-brand-whiteTeal/50">
                      <option value="">Select a service</option>
                      <option>Social Media Design</option>
                      <option>Branding Content</option>
                      <option>Brand Kit Package</option>
                      <option>Digital Marketing</option>
                      <option>Custom Project</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-brand-darkBlue mb-2">Budget Range</label>
                    <select id="budget" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue/50 focus:border-brand-lightBlue transition-all bg-brand-whiteTeal/50">
                      <option value="">Select range</option>
                      <option>Under $1,000</option>
                      <option>$1,000 - $2,500</option>
                      <option>$2,500 - $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-darkBlue mb-2">Project Details</label>
                  <textarea id="message" rows="5" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue/50 focus:border-brand-lightBlue transition-all bg-brand-whiteTeal/50" placeholder="Tell us about your brand, goals, timeline, and any inspiration you have in mind..."></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-brand-lightBlue/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-brand-whiteTeal rounded-3xl h-64 md:h-80 flex items-center justify-center border border-brand-lightBlue/10">
            <div className="text-center">
              <MapPin size={40} className="text-brand-lightBlue/40 mx-auto mb-4" />
              <span className="text-brand-darkBlue/30 font-heading font-medium">[ Interactive Map — San Francisco, CA ]</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Before You Reach Out</h2>
          </div>
          {[
            { q: "What's the typical timeline for a project?", a: "Most projects take 5-10 business days. Larger branding packages may take 2-4 weeks. We'll give you a clear timeline during our initial consultation." },
            { q: "Do I need to prepare anything before our call?", a: "Not at all! But if you have any brand assets, competitor examples, or inspiration you like, feel free to share them. It helps us understand your vision faster." },
            { q: "What if I'm not sure which package I need?", a: "That's perfectly fine. Our discovery call is free and designed to help us recommend the best solution for your specific goals and budget." },
            { q: "Can I see examples of your previous work?", a: "Yes! Check out our portfolio section on the home page, or ask us during the consultation and we'll share relevant case studies from your industry." },
            { q: "Do you work with international clients?", a: "Absolutely. We work with brands globally. All communication and deliverables are handled digitally, making location no barrier." }
          ].map((faq, i) => (
            <div key={i} className="border-b border-brand-lightBlue/10 py-6">
              <h3 className="font-heading font-bold text-lg mb-2">{faq.q}</h3>
              <p className="opacity-70 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-darkBlue text-brand-whiteTeal py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-brand-lightBlue rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-gradientStart rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <MessageSquare size={40} className="text-brand-lightBlue mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Prefer a Quick Chat?</h2>
          <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto">
            Book a free 15-minute discovery call with our creative team. No commitments, no pressure — just a genuine conversation about your brand.
          </p>
          <button className="bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-8 py-4 rounded-full font-semibold sm:text-lg hover:opacity-90 shadow-xl transition inline-flex items-center">
            Schedule a Call <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}