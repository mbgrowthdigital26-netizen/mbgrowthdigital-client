import Link from "next/link";
import {
  ArrowRight, Calendar, Clock, TrendingUp, Search, Target,
  Share2, Laptop, Smartphone, Palette, ShoppingCart, Mail,
  BarChart3, Users, Globe, Lightbulb
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { StaggerReveal, StaggerItem } from "@/components/shared/StaggerReveal";

const featuredPost = {
  title: "10 Digital Marketing Strategies Every Small Business Needs in 2025",
  excerpt: "In today's competitive digital landscape, small businesses need smart, cost-effective strategies to stand out. From local SEO to social media marketing, discover the essential tactics that can transform your online presence and drive real growth.",
  category: "Digital Marketing",
  date: "September 25, 2025",
  readTime: "8 min read",
  icon: TrendingUp,
  slug: "#",
  color: "from-green-500 to-emerald-600",
};

const blogPosts = [
  {
    title: "How to Rank Your Business on Google's First Page: A Complete SEO Guide",
    excerpt: "Learn proven SEO techniques to improve your website's visibility and attract organic traffic from Google search results.",
    category: "SEO",
    date: "September 18, 2025",
    readTime: "10 min read",
    icon: Search,
    slug: "#",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Google Ads vs Meta Ads: Which Platform is Right for Your Business?",
    excerpt: "A detailed comparison of Google Ads and Meta Ads to help you choose the best advertising platform for your specific goals and budget.",
    category: "Paid Advertising",
    date: "September 12, 2025",
    readTime: "7 min read",
    icon: Target,
    slug: "#",
    color: "from-red-500 to-rose-600",
  },
  {
    title: "Why Every Local Business Needs Google Business Profile in 2025",
    excerpt: "Discover how Google Business Profile can help local businesses appear in local search results, Google Maps, and attract more customers.",
    category: "Local SEO",
    date: "September 5, 2025",
    readTime: "6 min read",
    icon: Globe,
    slug: "#",
    color: "from-teal-500 to-cyan-600",
  },
  {
    title: "Social Media Marketing: How to Build a Brand That People Love",
    excerpt: "Building a strong social media presence requires consistency, creativity, and strategy. Learn how to create content that resonates with your audience.",
    category: "Social Media",
    date: "August 28, 2025",
    readTime: "9 min read",
    icon: Share2,
    slug: "#",
    color: "from-pink-500 to-fuchsia-600",
  },
  {
    title: "The Complete Guide to E-Commerce Website Development",
    excerpt: "Everything you need to know about building a successful e-commerce store — from choosing the right platform to optimizing for conversions.",
    category: "E-Commerce",
    date: "August 20, 2025",
    readTime: "12 min read",
    icon: ShoppingCart,
    slug: "#",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "UI/UX Design Principles That Increase Website Conversions",
    excerpt: "Great design is not just about aesthetics — it is about creating experiences that guide users toward action. Learn the design principles that drive results.",
    category: "Design",
    date: "August 14, 2025",
    readTime: "7 min read",
    icon: Palette,
    slug: "#",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "Why Your Business Needs a Mobile App in 2025",
    excerpt: "Mobile apps are no longer a luxury — they are a necessity. Explore the business benefits of mobile app development and how to get started.",
    category: "App Development",
    date: "August 7, 2025",
    readTime: "6 min read",
    icon: Smartphone,
    slug: "#",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Content Marketing: How to Create Content That Ranks and Converts",
    excerpt: "Content is still king, but only if it is strategic. Learn how to create SEO-optimized content that attracts traffic, builds trust, and drives conversions.",
    category: "Content Marketing",
    date: "July 30, 2025",
    readTime: "8 min read",
    icon: Lightbulb,
    slug: "#",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "Email Marketing Best Practices: How to Build a High-Converting Email List",
    excerpt: "Email marketing remains one of the highest ROI channels. Learn how to build, segment, and nurture your email list for maximum impact.",
    category: "Email Marketing",
    date: "July 22, 2025",
    readTime: "7 min read",
    icon: Mail,
    slug: "#",
    color: "from-rose-500 to-red-600",
  },
];

const categories = [
  { name: "All", count: 10 },
  { name: "Digital Marketing", count: 2 },
  { name: "SEO", count: 2 },
  { name: "Social Media", count: 1 },
  { name: "Paid Advertising", count: 1 },
  { name: "Web Development", count: 1 },
  { name: "E-Commerce", count: 1 },
  { name: "Design", count: 1 },
  { name: "App Development", count: 1 },
];

export default function Blog() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100/60 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 -right-1/4 w-[600px] h-[600px] bg-green-200/30 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <Reveal width="100%" direction="blur">
            <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Insights & Resources</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-900 mb-6">Our Blog</h1>
          </Reveal>
          <Reveal width="100%" delay={0.1} direction="up">
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest digital marketing trends, SEO strategies, web development tips, and industry insights from our expert team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <Reveal width="100%" direction="up">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 group hover:shadow-2xl transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-1/2 h-full bg-green-500/5 blur-[80px] rounded-full pointer-events-none" />

              <div className="relative z-10 p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold tracking-widest text-green-400 uppercase bg-green-400/10 px-3 py-1.5 rounded-full border border-green-400/20">
                      Featured
                    </span>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {featuredPost.date}
                    </span>
                    <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight group-hover:text-green-300 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 text-green-400 font-semibold text-sm group-hover:gap-3 transition-all cursor-pointer">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="shrink-0">
                  <div className={`w-20 h-20 md:w-28 md:h-28 rounded-3xl bg-gradient-to-br ${featuredPost.color} flex items-center justify-center shadow-2xl shadow-green-500/20`}>
                    <featuredPost.icon className="w-10 h-10 md:w-14 md:h-14 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Category Tags */}
      <section className="pb-8 bg-white">
        <div className="container mx-auto px-6">
          <Reveal width="100%" direction="up" delay={0.1}>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat, idx) => (
                <button
                  key={cat.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    idx === 0
                      ? "bg-green-600 text-white border-green-600 shadow-md shadow-green-500/20"
                      : "bg-white text-slate-600 border-slate-200 hover:border-green-400 hover:text-green-600 hover:bg-green-50"
                  }`}
                >
                  {cat.name}
                  <span className={`ml-1.5 text-xs ${idx === 0 ? "text-green-200" : "text-slate-400"}`}>
                    ({cat.count})
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-green-500/3 blur-[160px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.06}>
            {blogPosts.map((post) => (
              <StaggerItem key={post.title} className="h-full" direction="up">
                <article className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden h-full flex flex-col group hover:shadow-lg hover:border-green-300/50 transition-all duration-300">
                  {/* Card Header with Icon */}
                  <div className={`relative h-40 bg-gradient-to-br ${post.color} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
                    <post.icon className="w-16 h-16 text-white/80 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold tracking-wider text-green-600 uppercase bg-green-50 px-2.5 py-1 rounded-md border border-green-200">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-bold text-slate-900 mb-3 leading-snug group-hover:text-green-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="text-green-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(22,163,74,0.05),transparent_70%)] pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal width="100%" direction="blur">
            <div className="max-w-2xl mx-auto">
              <span className="text-green-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Stay Updated</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4 tracking-tight">
                Get Digital Marketing Tips Delivered to Your Inbox
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Join our growing community and receive the latest insights, strategies, and tips to grow your business online.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <a
                  href="https://wa.me/918610166708?text=Hi%20M.B%20Growth%20Digital%2C%20I%20would%20like%20to%20subscribe%20to%20your%20newsletter."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors shadow-lg shadow-green-500/20"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <p className="text-xs text-slate-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
