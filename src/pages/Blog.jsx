import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Tag, Search } from 'lucide-react';
import { useState } from 'react';

export default function Blog() {
  const categories = ["All", "Content Strategy", "Digital Marketing", "Design Systems", "Branding", "Social Media"];
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = {
    title: "The Human Brand: Why Authenticity is Your Greatest Marketing Asset in 2026",
    desc: "In a world saturated with generic content, brands that lead with genuine human stories consistently outperform those that don't. Here's the data, the framework, and the creative playbook.",
    date: "March 12, 2026",
    category: "Content Strategy",
    readTime: "8 min read",
    color: "from-brand-lightBlue/20 to-brand-darkBlue/40"
  };

  const posts = [
    {
      title: "Why Authentic Storytelling Beats AI-Generated Copy Every Time",
      desc: "In an era of deepfakes and automated posts, audiences crave human connection. We explore why true storytelling builds trust faster than any algorithm.",
      date: "March 10, 2026",
      category: "Content Strategy",
      readTime: "5 min read"
    },
    {
      title: "The Anatomy of a High-Conversion Social Media Ad",
      desc: "Discover the visual and psychological principles that make real humans click, share, and engage with your brand campaigns.",
      date: "March 5, 2026",
      category: "Digital Marketing",
      readTime: "6 min read"
    },
    {
      title: "A Designer's Guide to Choosing Brand Colors",
      desc: "Navigating off-whites and brand gradients. Learn how we built the Nexova aesthetic to feel approachable yet authoritative.",
      date: "February 28, 2026",
      category: "Design Systems",
      readTime: "4 min read"
    },
    {
      title: "Building a Content Calendar That Actually Works",
      desc: "Stop posting randomly. Learn how to plan 30 days of engaging content that aligns with your marketing goals and resonates with your audience.",
      date: "February 20, 2026",
      category: "Social Media",
      readTime: "7 min read"
    },
    {
      title: "The Psychology Behind Scroll-Stopping Visuals",
      desc: "What makes someone stop scrolling? We break down the science of attention, color theory, and composition that drives engagement.",
      date: "February 14, 2026",
      category: "Design Systems",
      readTime: "5 min read"
    },
    {
      title: "From Logo to Legacy: Building a Brand That Lasts",
      desc: "A logo is just the beginning. Here's how to create a comprehensive brand identity system that grows with your business for years.",
      date: "February 8, 2026",
      category: "Branding",
      readTime: "6 min read"
    },
    {
      title: "Instagram Carousel Best Practices for 2026",
      desc: "Carousels still dominate engagement. We share our tested framework for designing multi-slide posts that educate, entertain, and convert.",
      date: "February 1, 2026",
      category: "Social Media",
      readTime: "4 min read"
    },
    {
      title: "How to Brief a Designer (And Get the Results You Want)",
      desc: "Bad briefs create bad designs. Learn the exact template we give our clients for writing briefs that lead to first-round approvals.",
      date: "January 25, 2026",
      category: "Branding",
      readTime: "5 min read"
    },
    {
      title: "Measuring ROI on Social Media Content",
      desc: "Likes don't pay the bills. Here's how to track meaningful metrics that prove the business value of your social media investments.",
      date: "January 18, 2026",
      category: "Digital Marketing",
      readTime: "6 min read"
    }
  ];

  const filteredPosts = activeCategory === "All" ? posts : posts.filter(p => p.category === activeCategory);

  const colors = ["from-amber-50 to-orange-50", "from-emerald-50 to-teal-50", "from-pink-50 to-rose-50", "from-violet-50 to-purple-50", "from-sky-50 to-cyan-50", "from-lime-50 to-green-50", "from-red-50 to-orange-50", "from-indigo-50 to-blue-50", "from-fuchsia-50 to-pink-50"];

  return (
    <div className="flex-grow flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-4">Blog</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight">
          Nexova
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd"> Insights</span>
        </h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
          The latest trends in social media design, digital marketing, and authentic brand storytelling from our creative team.
        </p>
      </section>

      {/* Featured Post */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className={`bg-gradient-to-br ${featuredPost.color} rounded-3xl overflow-hidden flex flex-col lg:flex-row`}>
            <div className="flex-1 bg-brand-darkBlue/10 min-h-[250px] lg:min-h-[400px] flex items-center justify-center">
              <span className="text-brand-darkBlue/30 font-heading font-medium text-xl">[ Featured Article Image ]</span>
            </div>
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-sm opacity-60 mb-4 font-medium">
                <span className="bg-brand-lightBlue/20 text-brand-darkBlue px-3 py-1 rounded-full text-xs font-semibold">{featuredPost.category}</span>
                <span>{featuredPost.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> {featuredPost.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 leading-snug">{featuredPost.title}</h2>
              <p className="opacity-70 leading-relaxed mb-6">{featuredPost.desc}</p>
              <div>
                <button className="inline-flex items-center bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 shadow-md transition">
                  Read Full Article <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 lg:px-8 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white shadow-md"
                    : "bg-white text-brand-darkBlue border border-brand-lightBlue/20 hover:border-brand-lightBlue/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, idx) => (
            <article key={idx} className="bg-white rounded-2xl shadow-sm border border-brand-lightBlue/10 hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer flex flex-col h-full overflow-hidden group">
              <div className={`bg-gradient-to-br ${colors[idx % colors.length]} w-full h-48 flex items-center justify-center relative`}>
                <span className="text-brand-darkBlue/25 font-heading font-medium text-sm">[ Article Cover ]</span>
                <div className="absolute inset-0 bg-brand-darkBlue/0 group-hover:bg-brand-darkBlue/5 transition-colors"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 text-xs opacity-60 mb-3 font-medium">
                  <span className="bg-brand-lightBlue/10 text-brand-darkBlue px-2.5 py-1 rounded-full font-semibold">{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-lg font-heading font-bold mb-3 group-hover:text-brand-lightBlue transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="opacity-60 text-sm mb-6 flex-grow leading-relaxed">
                  {post.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs opacity-40 flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  <span className="text-brand-darkBlue font-semibold text-sm flex items-center group-hover:text-brand-lightBlue transition">
                    Read <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-brand-gradientStart/10 to-brand-gradientEnd/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">Never Miss an Insight</h2>
          <p className="opacity-70 mb-8 max-w-lg mx-auto">Join 2,000+ marketers and designers who get weekly social media tips, branding insights, and design inspiration right in their inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="you@company.com" className="flex-1 px-5 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-lightBlue/50 focus:border-brand-lightBlue bg-white" />
            <button className="bg-gradient-to-r from-brand-gradientStart to-brand-gradientEnd text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 shadow-md transition whitespace-nowrap">Subscribe</button>
          </div>
          <p className="text-xs opacity-40 mt-4">No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-lightBlue font-semibold text-sm uppercase tracking-widest mb-3">Explore</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Browse by Topic</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { topic: "Content Strategy", articles: 12, desc: "Planning content that converts casual browsers into loyal followers." },
              { topic: "Digital Marketing", articles: 9, desc: "Campaign strategies, ad design, and performance optimization tips." },
              { topic: "Design Systems", articles: 8, desc: "Typography, color theory, layouts, and the craft of visual communication." },
              { topic: "Branding", articles: 11, desc: "Building cohesive brand identities that stand the test of time." },
              { topic: "Social Media", articles: 15, desc: "Platform-specific tips for Instagram, LinkedIn, TikTok, and beyond." },
              { topic: "Case Studies", articles: 6, desc: "Real results from real clients. Before & after brand transformations." }
            ].map((t, i) => (
              <div key={i} className="bg-brand-whiteTeal rounded-2xl p-6 hover:shadow-md transition cursor-pointer group">
                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-brand-lightBlue transition">{t.topic}</h3>
                <p className="text-sm opacity-60 mb-3">{t.desc}</p>
                <span className="text-xs font-semibold text-brand-lightBlue">{t.articles} articles →</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}