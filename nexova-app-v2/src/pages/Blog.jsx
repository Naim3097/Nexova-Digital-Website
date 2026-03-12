import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Clock, Tag, Search } from 'lucide-react';

const articles = [
  {
    id: 1,
    category: "Branding",
    title: "Why Your Brand Needs a Visual Identity System, Not Just a Logo",
    excerpt: "A logo is a starting point, but a cohesive identity system is what creates recognition, trust, and emotional resonance across every touchpoint.",
    date: "April 28, 2025",
    readTime: "5 min read",
    featured: true
  },
  {
    id: 2,
    category: "Social Media",
    title: "The 2025 Guide to Instagram Content That Actually Converts",
    excerpt: "Likes are vanity. Conversions are sanity. Here's the content framework that drives real business results on Instagram.",
    date: "April 22, 2025",
    readTime: "7 min read",
    featured: false
  },
  {
    id: 3,
    category: "Design",
    title: "Color Psychology in Digital Branding: Choosing Palettes That Perform",
    excerpt: "Color isn't decoration — it's communication. Learn how strategic color choices can influence perception and drive action.",
    date: "April 15, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 4,
    category: "Strategy",
    title: "Content Pillars: The Strategic Foundation Every Brand Needs",
    excerpt: "Stop posting randomly. Content pillars give your brand a consistent voice and make planning effortless.",
    date: "April 10, 2025",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 5,
    category: "Social Media",
    title: "Short-Form Video: Why Your Brand Can't Afford to Ignore Reels",
    excerpt: "Reels aren't a trend — they're the future. Here's how brands are leveraging short-form video for massive organic reach.",
    date: "April 5, 2025",
    readTime: "5 min read",
    featured: false
  },
  {
    id: 6,
    category: "Branding",
    title: "Typography That Speaks: Choosing Fonts That Match Your Brand Voice",
    excerpt: "Serif or sans-serif? Display or monospace? Your typeface choices say more about your brand than you think.",
    date: "March 30, 2025",
    readTime: "6 min read",
    featured: false
  },
  {
    id: 7,
    category: "Design",
    title: "The Anatomy of a High-Converting Landing Page in 2025",
    excerpt: "From hero copy to CTA placement — every element of a landing page should serve one purpose: conversion.",
    date: "March 25, 2025",
    readTime: "8 min read",
    featured: false
  },
  {
    id: 8,
    category: "Strategy",
    title: "How to Audit Your Brand's Social Media Presence in 30 Minutes",
    excerpt: "A quick, actionable framework to assess your social media health and identify immediate wins.",
    date: "March 20, 2025",
    readTime: "4 min read",
    featured: false
  },
  {
    id: 9,
    category: "Social Media",
    title: "Hashtag Strategy Is Dead. Here's What Replaced It.",
    excerpt: "Algorithm updates have changed the discovery game. Learn the new rules for getting found on social platforms.",
    date: "March 15, 2025",
    readTime: "5 min read",
    featured: false
  }
];

const categories = ["All", "Branding", "Social Media", "Design", "Strategy"];

const topics = [
  "Brand Identity", "Social Media Marketing", "Content Strategy", "Visual Design",
  "Logo Design", "Instagram Growth", "Color Theory", "Typography", "Reels & Video",
  "UI/UX for Brands", "Conversion Optimization", "Digital Marketing"
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = articles.find(a => a.featured);
  const filtered = articles.filter(a => {
    const categoryMatch = activeCategory === "All" || a.category === activeCategory;
    const searchMatch = !searchQuery || a.title.toLowerCase().includes(searchQuery.toLowerCase()) || a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch && !a.featured;
  });

  return (
    <div>
      {/* Hero — editorial masthead */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-6">Journal</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[0.95]">
              Insights & <em className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd">Ideas</em>
            </h1>
          </div>
          <div>
            <p className="text-brand-darkBlue/60 text-lg">
              Thoughts on branding, social media strategy, and design craft — from our team to yours.
            </p>
          </div>
        </div>
      </section>

      {/* Featured article — full-width editorial */}
      {featured && (
        <section className="border-t border-brand-darkBlue/10 py-16 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto grid lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2 aspect-[4/3] bg-gradient-to-br from-brand-lightBlue/10 to-brand-darkBlue/5 flex items-end p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold">Featured</p>
            </div>
            <div className="lg:col-span-3 lg:pl-8">
              <span className="text-xs uppercase tracking-[0.2em] text-brand-lightBlue font-semibold">{featured.category}</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mt-2 mb-4 leading-tight">{featured.title}</h2>
              <p className="text-brand-darkBlue/60 mb-6 text-lg leading-relaxed max-w-lg">{featured.excerpt}</p>
              <div className="flex items-center gap-6 text-xs text-brand-darkBlue/40 mb-8">
                <span className="flex items-center gap-1"><Clock size={12} />{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
              <Link to="#" className="group inline-flex items-center gap-2 font-semibold text-brand-darkBlue border-b-2 border-brand-darkBlue pb-1 hover:text-brand-lightBlue hover:border-brand-lightBlue transition">
                Read Article <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Filter & Search */}
      <section className="border-t border-brand-darkBlue/10 py-8 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition ${
                  activeCategory === cat
                    ? 'bg-brand-darkBlue text-white'
                    : 'text-brand-darkBlue/50 hover:text-brand-darkBlue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-darkBlue/30" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="pl-9 pr-4 py-2 border border-brand-darkBlue/10 text-sm bg-transparent focus:outline-none focus:border-brand-lightBlue w-64"
            />
          </div>
        </div>
      </section>

      {/* Article Grid — editorial list */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        <div className="divide-y divide-brand-darkBlue/10">
          {filtered.map((article, i) => (
            <article key={article.id} className="group py-8 grid lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-1 text-3xl font-heading font-bold text-brand-darkBlue/10">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-lightBlue font-semibold">{article.category}</span>
                <h3 className="text-xl md:text-2xl font-heading font-bold mt-1 mb-2 group-hover:text-brand-lightBlue transition leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-brand-darkBlue/60 max-w-lg">{article.excerpt}</p>
              </div>
              <div className="lg:col-span-2 text-xs text-brand-darkBlue/40 pt-2">
                <span className="flex items-center gap-1 mb-1"><Clock size={12} />{article.date}</span>
                <span>{article.readTime}</span>
              </div>
              <div className="lg:col-span-2 flex items-start justify-end pt-2">
                <Link to="#" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-darkBlue opacity-0 group-hover:opacity-100 transition">
                  Read <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-brand-darkBlue/40 py-16 text-lg">No articles found.</p>
        )}
      </section>

      {/* Topics */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-3">Explore</p>
              <h2 className="text-4xl font-heading font-bold leading-tight">Topics We Cover</h2>
            </div>
            <div className="lg:col-span-2 flex flex-wrap gap-3">
              {topics.map((topic, i) => (
                <span key={i} className="px-5 py-3 border border-brand-darkBlue/10 text-sm hover:border-brand-lightBlue hover:text-brand-lightBlue transition cursor-pointer flex items-center gap-2">
                  <Tag size={12} /> {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-brand-darkBlue/10 py-24 px-6 lg:px-12">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-lightBlue font-semibold mb-4">Newsletter</p>
          <h2 className="text-4xl font-heading font-bold mb-4">Stay in the Loop</h2>
          <p className="text-brand-darkBlue/60 mb-8">Get our latest insights on branding and social media — delivered to your inbox. No spam, just value.</p>
          <form className="flex flex-col sm:flex-row gap-0" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-grow px-5 py-4 border border-brand-darkBlue/10 border-r-0 sm:border-r-0 bg-transparent focus:outline-none focus:border-brand-lightBlue text-sm"
            />
            <button className="bg-brand-darkBlue text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-brand-lightBlue transition shrink-0">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-brand-darkBlue/30 mt-4">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}