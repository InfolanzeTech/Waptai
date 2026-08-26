import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Copy,
  Linkedin,
  Share2,
  Twitter,
} from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "Why 18% GST on Water Purifiers is a Public Health Concern",
    slug: "why-18-percent-gst-on-water-purifiers-is-a-public-health-concern",
    category: "Policy & Health",
    date: "18 Aug 2026",
    readTime: "8 min read",
    image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777541780/blog3_hqcb77.png",
    excerpt: "Pure water is not a luxury — it is survival. Yet India taxes water purifiers at 18% GST, equal to luxury appliances.",
    sections: [
      { type: "lead", text: "Pure water is not a luxury — it is survival. Yet in India, water purifiers are taxed at 18% GST, the same rate as appliances like air conditioners and washing machines." },
      { type: "paragraph", text: "Under HSN code 8421, water purification systems fall into the general goods category, despite their direct role in preventing waterborne diseases. This has raised serious concerns among industry experts and policymakers." },
      { type: "heading", text: "The Core Paradox" },
      { type: "paradox", items: [{ label: "Untreated / Tap water", rate: "0%", color: "green" }, { label: "Packaged water jars", rate: "12%", color: "amber" }, { label: "Water purifiers", rate: "18%", color: "red" }] },
      { type: "quote", text: "Why is access to safe drinking water taxed higher than its alternatives?" },
      { type: "heading", text: "Health at Risk" },
      { type: "paragraph", text: "According to reports by global health agencies, waterborne diseases account for a significant share of illnesses in developing countries. Yet, the very systems designed to prevent these diseases remain expensive due to higher taxation." },
      { type: "heading", text: "GST Comparison Snapshot" },
      { type: "table", headers: ["Category", "GST Rate"], rows: [["Essential food (milk, vegetables)", "0%"], ["Daily use goods (food, hygiene)", "5%"], ["Healthcare & medicines", "5%"], ["Gold", "3%"], ["Consumer electronics", "18%"], ["Water purifiers", "18%"]] },
      { type: "highlight", text: "Even gold is taxed at 3% — lower than clean drinking water access." },
      { type: "heading", text: "Impact on Adoption" },
      { type: "paragraph", text: "A basic water purifier costs around ₹10,000. At 18% GST that is ₹1,800 in tax. At 5% it would be just ₹500. Lower GST could save households up to ₹1,300, making clean water more accessible. Currently, adoption remains at a mere ~6% penetration — largely due to cost barriers." },
      { type: "impact", items: [{ label: "Tax at 18% GST", value: "₹1,800", color: "red" }, { label: "Tax at 5% GST", value: "₹500", color: "green" }, { label: "Savings per purchase", value: "₹1,300", color: "blue" }, { label: "Current penetration", value: "~6%", color: "amber" }] },
      { type: "heading", text: "Policy Contradiction" },
      { type: "paragraph", text: "India is actively promoting Swachh Bharat, Har Ghar Jal, and preventive healthcare. Yet water purification systems remain in the highest tax bracket — creating a clear policy mismatch." },
      { type: "list", items: ["Swachh Bharat Mission", "Har Ghar Jal", "Preventive Healthcare Push"] },
      { type: "quote", text: "If essential goods are taxed lower to support public welfare, why is clean drinking water still taxed at 18%?" },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Reducing GST on water purifiers is not just a tax reform — it is a public health decision. Making clean water affordable could increase adoption, reduce disease burden, and support sustainability. It's time to stop taxing a necessity and start enabling a healthier India." },
      { type: "outcomes", items: ["Increase adoption", "Reduce disease burden", "Support sustainability"] },
    ],
  },
  {
    id: 2,
    title: "India's Tax Code Treats Clean Water as a Luxury",
    slug: "india-s-tax-code-treats-clean-water-as-a-luxury",
    category: "Economy",
    date: "4 Aug 2026",
    readTime: "5 min read",
    image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777541777/blog4_fj9cha.png",
    excerpt: "India's tax structure puts purification technology in the luxury tier — a contradiction that costs lives.",
    sections: [
      { type: "lead", text: "India's GST structure places water purifiers — life-saving devices — in the same bracket as luxury consumer electronics." },
      { type: "heading", text: "The Numbers Don't Lie" },
      { type: "paragraph", text: "Under HSN code 8421, water purification systems fall into the general goods category, despite their direct role in preventing waterborne diseases. This classification drives up costs for millions of families." },
      { type: "paradox", items: [{ label: "Untreated / Tap water", rate: "0%", color: "green" }, { label: "Packaged water jars", rate: "12%", color: "amber" }, { label: "Water purifiers", rate: "18%", color: "red" }] },
      { type: "quote", text: "A device that saves lives is taxed more than gold." },
      { type: "heading", text: "GST Snapshot" },
      { type: "table", headers: ["Category", "GST Rate"], rows: [["Essential food", "0%"], ["Daily use goods", "5%"], ["Healthcare & medicines", "5%"], ["Consumer electronics", "18%"], ["Water purifiers", "18%"]] },
      { type: "highlight", text: "Even gold is taxed at 3%, lower than clean water access." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Reducing GST on water purifiers is a public health necessity. The government must realign its tax policy with its public health goals." },
    ],
  },
  {
    id: 3,
    title: "6% Penetration: Clean Water Remains Out of Reach",
    slug: "6-percent-penetration-clean-water-remains-out-of-reach",
    category: "Infrastructure",
    date: "22 Jul 2026",
    readTime: "6 min read",
    image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777541777/blog5_kakeyr.png",
    excerpt: "With 6% household penetration, water purifiers remain a luxury for most Indians despite being a health necessity.",
    sections: [
      { type: "lead", text: "Only 6% of Indian households own a water purifier — a statistic driven not by indifference, but by affordability shaped by an 18% tax." },
      { type: "paragraph", text: "Waterborne diseases remain a leading cause of illness in India. Access to clean drinking water at the household level is a critical intervention — yet the tax structure makes it prohibitively expensive." },
      { type: "paradox", items: [{ label: "Untreated / Tap water", rate: "0%", color: "green" }, { label: "Packaged water jars", rate: "12%", color: "amber" }, { label: "Water purifiers", rate: "18%", color: "red" }] },
      { type: "heading", text: "What a 5% GST Would Change" },
      { type: "impact", items: [{ label: "Tax at 18% GST", value: "₹1,800", color: "red" }, { label: "Tax at 5% GST", value: "₹500", color: "green" }, { label: "Savings per purchase", value: "₹1,300", color: "blue" }, { label: "Current penetration", value: "~6%", color: "amber" }] },
      { type: "quote", text: "A ₹1,300 saving could be the difference between safe water and waterborne disease for millions." },
      { type: "heading", text: "Conclusion" },
      { type: "paragraph", text: "Reducing GST on water purifiers is not just a tax reform — it is a public health imperative. By making clean water affordable, the government can move beyond 'providing pipes' to truly 'providing health.'" },
    ],
  },
  {
    id: 4,
    title: "Swachh Bharat vs 18% GST: A Policy Contradiction",
    slug: "swachh-bharat-vs-18-percent-gst-a-policy-contradiction",
    category: "Governance",
    date: "10 Jul 2026",
    readTime: "5 min read",
    image: "https://res.cloudinary.com/danaw1eyu/image/upload/v1777541777/blog6_kxaeah.png",
    excerpt: "India promotes Swachh Bharat yet taxes water purifiers at 18%. The contradiction demands urgent policy attention.",
    sections: [
      { type: "lead", text: "India champions cleanliness and public health through landmark schemes — yet its tax code tells a different story." },
      { type: "heading", text: "The Policy Mismatch" },
      { type: "list", items: ["Swachh Bharat Mission — promotes cleanliness", "Har Ghar Jal — promises water to every home", "Preventive healthcare push — emphasizes disease prevention"] },
      { type: "paragraph", text: "All three pillars of India's public health agenda align with wider adoption of water purifiers — yet the 18% GST bracket actively discourages it." },
      { type: "quote", text: "Policy intent and tax structure must align for real public health outcomes." },
      { type: "heading", text: "The Ask" },
      { type: "paragraph", text: "Reducing GST on water purifiers to 5% — in line with healthcare goods — is a straightforward, high-impact reform. It is time to stop taxing a necessity." },
      { type: "outcomes", items: ["Increase adoption", "Reduce disease burden", "Support sustainability"] },
    ],
  },
];

const toneStyles = {
  green: { value: "text-emerald-600", chip: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  amber: { value: "text-amber-600", chip: "bg-amber-50 text-amber-700 border-amber-100" },
  red: { value: "text-rose-600", chip: "bg-rose-50 text-rose-700 border-rose-100" },
  blue: { value: "text-[#1c87c9]", chip: "bg-sky-50 text-sky-700 border-sky-100" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const paradoxBar = {
  green: "bg-emerald-500",
  amber: "bg-amber-500",
  red: "bg-rose-500",
  blue: "bg-[#1c87c9]",
};

const renderSection = (section, idx, headingNumber) => {
  switch (section.type) {
    case "lead":
      return (
        <p key={idx} className="text-xl md:text-[26px] leading-relaxed md:leading-[1.55] text-slate-800 font-medium mb-10">
          {section.text}
        </p>
      );
    case "heading":
      return (
        <h2
          key={idx}
          id={slugify(section.text)}
          className="scroll-mt-32 flex items-start gap-4 text-[22px] md:text-[28px] font-bold text-slate-900 mt-14 mb-5 tracking-tight"
        >
          <span className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-xl bg-[#e3f2fd] text-[#1c87c9] text-xs font-black flex items-center justify-center">
            {String(headingNumber).padStart(2, "0")}
          </span>
          {section.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={idx} className="text-[17px] md:text-lg leading-8 text-slate-600 mb-6">
          {section.text}
        </p>
      );
    case "list":
      return (
        <ul key={idx} className="mb-8 space-y-3 rounded-2xl bg-slate-50 border border-slate-100 p-5 md:p-6">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[16px] md:text-[17px] text-slate-700 leading-7">
              <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-[#1c87c9]" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={idx}
          className="relative my-10 overflow-hidden rounded-3xl border border-sky-100 bg-gradient-to-br from-[#e3f2fd] to-white px-7 py-8 md:px-10 md:py-10"
        >
          <span className="pointer-events-none absolute -top-4 left-5 text-[96px] leading-none text-[#1c87c9]/15 font-serif">
            “
          </span>
          <p className="relative text-lg md:text-2xl italic text-[#0d47a1] leading-relaxed font-semibold">
            {section.text}
          </p>
        </blockquote>
      );
    case "highlight":
      return (
        <div
          key={idx}
          className="my-8 rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 px-5 py-4 md:px-6 md:py-5 text-sm md:text-base font-semibold text-amber-900 shadow-sm"
        >
          {section.text}
        </div>
      );
    case "paradox":
      return (
        <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          {section.items.map((item, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm"
            >
              <span className={`absolute inset-x-0 top-0 h-1 ${paradoxBar[item.color] || "bg-[#1c87c9]"}`} />
              <div className={`text-4xl md:text-5xl font-black mb-2 ${toneStyles[item.color]?.value || "text-[#1c87c9]"}`}>
                {item.rate}
              </div>
              <div className="text-sm font-medium text-slate-500">{item.label}</div>
            </div>
          ))}
        </div>
      );
    case "table":
      return (
        <div key={idx} className="overflow-x-auto my-8 rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0d47a1] text-white">
                {section.headers.map((h, i) => (
                  <th key={i} className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => {
                const isLast = i === section.rows.length - 1;
                return (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 last:border-0 ${
                      isLast ? "bg-sky-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50"
                    }`}
                  >
                    <td className={`px-5 py-3.5 ${isLast ? "font-bold text-slate-900" : "text-slate-600"}`}>
                      {row[0]}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${
                          isLast
                            ? "bg-rose-50 text-rose-700 border-rose-100"
                            : "bg-white text-slate-700 border-slate-200"
                        }`}
                      >
                        {row[1]}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    case "impact":
      return (
        <div key={idx} className="grid grid-cols-2 gap-4 my-8">
          {section.items.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border bg-white p-5 shadow-sm ${toneStyles[item.color]?.chip || "border-slate-100"}`}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider mb-1.5 text-slate-400">
                {item.label}
              </div>
              <div className={`text-3xl md:text-4xl font-black ${toneStyles[item.color]?.value || "text-slate-800"}`}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      );
    case "outcomes":
      return (
        <div
          key={idx}
          className="rounded-3xl bg-gradient-to-br from-[#0d47a1] to-[#1c87c9] p-7 md:p-10 my-10 text-white shadow-xl"
        >
          <div className="text-xs font-bold text-sky-200 uppercase tracking-[0.2em] mb-5">
            Key Outcomes
          </div>
          <div className="flex flex-wrap gap-2.5">
            {section.items.map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-white/12 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full"
              >
                <CheckCircle2 size={15} />
                {item}
              </span>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
};

function CategoryBadge({ category, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-[#1c87c9] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white ${className}`}
    >
      {category}
    </span>
  );
}

function ArticleCard({ blog, featured = false }) {
  if (featured) {
    return (
      <Link
        to={`/blog/${blog.slug}`}
        className="group grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
      >
        <div className="relative h-64 sm:h-80 lg:h-full min-h-[280px] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
          <CategoryBadge category={blog.category} className="absolute top-5 left-5" />
        </div>
        <div className="flex flex-col justify-center p-7 md:p-10 space-y-4">
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={13} /> {blog.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} /> {blog.readTime}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-snug group-hover:text-[#1c87c9] transition-colors">
            {blog.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            {blog.excerpt}
          </p>
          <span className="inline-flex items-center gap-2 text-[#1c87c9] font-bold pt-1">
            Read article
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${blog.slug}`}
      className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        <CategoryBadge category={blog.category} className="absolute top-4 left-4" />
      </div>
      <div className="flex flex-1 flex-col p-6 space-y-3">
        <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400">
          <span className="inline-flex items-center gap-1">
            <Calendar size={12} /> {blog.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={12} /> {blog.readTime}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-[#1c87c9] transition-colors">
          {blog.title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {blog.excerpt}
        </p>
        <span className="inline-flex items-center gap-2 text-[#1c87c9] font-semibold text-sm pt-1">
          Read more
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

function BlogListing() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(blogs.map((b) => b.category)))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogs
    : blogs.filter((b) => b.category === activeCategory);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="bg-white font-sans antialiased overflow-x-hidden">
      <section className="relative py-20 md:py-28 bg-[#e3f2fd] overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=2000')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#e3f2fd]/70 via-[#e3f2fd]/50 to-white" />
        <motion.div
          animate={{ x: [0, 24, 0], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-16 -right-16 w-[340px] h-[340px] bg-sky-400 rounded-full blur-[110px] opacity-25 z-0"
        />

        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-blue-100 shadow-md mb-7"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0288d1] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0288d1]" />
            </span>
            <span className="text-[11px] font-black tracking-[0.16em] uppercase text-[#0d47a1]">
              Insights & Policy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl md:text-6xl font-black text-[#0d47a1] leading-[1.1] tracking-tight mb-5"
          >
            WAPTAI <span className="text-[#1c87c9]">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Expert insights on water purification, GST policy, and public health
            from India’s water industry association.
          </motion.p>
        </div>
      </section>

      <section className="relative -mt-6 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1c87c9] mb-3">
              Latest Articles
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
              Policy, Health & Industry Insights
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Stay informed with analysis from WAPTAI on clean water access,
              taxation, and public health.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-[#1c87c9] text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-sky-50 hover:text-[#1c87c9]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {featured && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="mb-10"
            >
              <ArticleCard blog={featured} featured />
            </motion.div>
          )}

          {rest.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {rest.map((blog) => (
                <motion.div key={blog.id} variants={fadeUp}>
                  <ArticleCard blog={blog} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#0d47a1] to-[#1c87c9] px-8 py-12 md:px-14 md:py-16 text-center text-white overflow-hidden relative">
          <div className="absolute -right-10 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200 mb-3">
            Join the movement
          </p>
          <h3 className="text-2xl md:text-4xl font-black mb-4">
            Help make clean water a public health priority
          </h3>
          <p className="text-sky-100 max-w-xl mx-auto mb-8">
            Become a WAPTAI member and stand with industry professionals
            advocating for fair GST and wider access to safe drinking water.
          </p>
          <Link
            to="/membarship"
            className="inline-flex items-center gap-2 bg-white text-[#0d47a1] font-bold px-7 py-3 rounded-full hover:bg-sky-50 transition-colors"
          >
            Become a Member
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}

function BlogArticle({ blog }) {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const [activeHeading, setActiveHeading] = useState("");

  const index = blogs.findIndex((item) => item.id === blog.id);
  const prev = index > 0 ? blogs[index - 1] : null;
  const next = index < blogs.length - 1 ? blogs[index + 1] : null;
  const related = blogs.filter((item) => item.id !== blog.id).slice(0, 3);

  const headings = useMemo(
    () =>
      blog.sections
        .filter((section) => section.type === "heading")
        .map((section) => ({ id: slugify(section.text), text: section.text })),
    [blog]
  );

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [blog.slug]);

  useEffect(() => {
    const observers = [];
    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHeading(id);
        },
        { rootMargin: "-25% 0px -65% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    if (headings[0]) setActiveHeading(headings[0].id);
    return () => observers.forEach((observer) => observer.disconnect());
  }, [headings, blog.slug]);

  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: blog.title, text: blog.excerpt, url: window.location.href });
        return;
      } catch {
        /* cancelled */
      }
    }
    handleCopy();
  };

  return (
    <div className="bg-white font-sans antialiased scroll-smooth">
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-slate-200/40">
        <div
          className="h-full bg-gradient-to-r from-[#0d47a1] via-[#1c87c9] to-[#0288d1] transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <section className="relative h-[58vh] min-h-[420px] max-h-[640px] overflow-hidden">
        <img src={blog.image} alt={blog.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-900/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(28,135,201,0.28),transparent_55%)]" />

        <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-10 md:pb-14">
          <nav className="flex items-center gap-1.5 text-[11px] font-semibold text-white/70 mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={12} />
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight size={12} />
            <span className="text-white/90 line-clamp-1">{blog.category}</span>
          </nav>

          <button
            type="button"
            onClick={() => navigate("/blog")}
            className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-colors"
          >
            <ArrowLeft size={14} />
            All articles
          </button>

          <CategoryBadge category={blog.category} className="self-start mb-4" />

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-white leading-[1.12] tracking-tight drop-shadow-sm"
          >
            {blog.title}
          </motion.h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2 font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1c87c9] text-[11px] font-black">
                W
              </span>
              WAPTAI Editorial
            </span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/40" />
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={14} /> {blog.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {blog.readTime}
            </span>
          </div>
        </div>
      </section>

      {headings.length > 0 && (
        <div className="lg:hidden border-b border-slate-100 bg-white">
          <div className="flex gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {headings.map((heading) => (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  activeHeading === heading.id
                    ? "bg-[#1c87c9] text-white"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {heading.text}
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 grid lg:grid-cols-12 gap-10 lg:gap-14">
        <article className="lg:col-span-8 min-w-0">
          {blog.excerpt && (
            <p className="mb-10 text-lg md:text-xl text-slate-500 leading-relaxed border-l-4 border-[#1c87c9] pl-5 italic">
              {blog.excerpt}
            </p>
          )}

          <div>
            {blog.sections.map((sec, i) => {
              const headingNumber = blog.sections
                .slice(0, i + 1)
                .filter((item) => item.type === "heading").length;
              return renderSection(sec, i, headingNumber);
            })}
          </div>

          <div className="mt-12 flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1c87c9] text-white text-lg font-black">
              W
            </div>
            <div>
              <p className="font-bold text-slate-900">WAPTAI Editorial</p>
              <p className="text-sm text-slate-500">
                Policy and industry insights from the Water Purification and Treatment Association of India.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2 rounded-full bg-[#1c87c9] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#0d47a1] transition-colors"
            >
              <Share2 size={15} /> Share article
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 hover:border-[#1c87c9] hover:text-[#1c87c9] transition-colors"
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
              {copied ? "Link copied" : "Copy link"}
            </button>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-[#1c87c9] hover:text-[#1c87c9] transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(blog.title)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 hover:border-[#1c87c9] hover:text-[#1c87c9] transition-colors"
              aria-label="Share on X"
            >
              <Twitter size={16} />
            </a>
          </div>

          {(prev || next) && (
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 pt-10 border-t border-slate-100">
              {prev ? (
                <Link
                  to={`/blog/${prev.slug}`}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 hover:border-[#1c87c9] hover:bg-sky-50 transition-all"
                >
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    <ArrowLeft size={12} /> Previous
                  </span>
                  <p className="mt-2 font-bold text-slate-900 leading-snug group-hover:text-[#1c87c9] transition-colors">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
              {next && (
                <Link
                  to={`/blog/${next.slug}`}
                  className="group rounded-2xl border border-slate-100 bg-slate-50 p-5 text-right hover:border-[#1c87c9] hover:bg-sky-50 transition-all"
                >
                  <span className="flex items-center justify-end gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Next <ArrowRight size={12} />
                  </span>
                  <p className="mt-2 font-bold text-slate-900 leading-snug group-hover:text-[#1c87c9] transition-colors">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          )}
        </article>

        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-28 space-y-5">
            {headings.length > 0 && (
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#1c87c9] mb-4">
                  In this article
                </p>
                <nav className="space-y-1">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`block rounded-xl px-3 py-2 text-sm leading-snug transition-all ${
                        activeHeading === heading.id
                          ? "bg-white text-[#0d47a1] font-semibold shadow-sm border-l-2 border-[#1c87c9]"
                          : "text-slate-500 hover:text-slate-800 hover:bg-white/70"
                      }`}
                    >
                      {heading.text}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-400 mb-3">
                Share
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:border-[#1c87c9] hover:text-[#1c87c9] transition-colors"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? "Copied" : "Copy link"}
                </button>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:border-[#1c87c9] hover:text-[#1c87c9]"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(blog.title)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 hover:border-[#1c87c9] hover:text-[#1c87c9]"
                  aria-label="Share on X"
                >
                  <Twitter size={16} />
                </a>
              </div>
            </div>

            {related.length > 0 && (
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#1c87c9] mb-4">
                  More to read
                </p>
                <div className="space-y-4">
                  {related.map((item) => (
                    <Link key={item.id} to={`/blog/${item.slug}`} className="group flex gap-3">
                      <img
                        src={item.image}
                        alt=""
                        className="h-16 w-20 flex-shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {item.category}
                        </p>
                        <p className="text-sm font-semibold text-slate-800 leading-snug line-clamp-2 group-hover:text-[#1c87c9] transition-colors">
                          {item.title}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="bg-slate-50 border-t border-slate-100 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1c87c9] mb-2">
                  Keep reading
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                  Related articles
                </h2>
              </div>
              <Link
                to="/blog"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-[#1c87c9]"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((item) => (
                <ArticleCard key={item.id} blog={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#0d47a1] to-[#1c87c9] px-8 py-12 md:px-14 md:py-16 text-center text-white overflow-hidden relative">
          <div className="absolute -right-10 -bottom-16 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200 mb-3">
            Join the movement
          </p>
          <h3 className="text-2xl md:text-4xl font-black mb-4">
            Help make clean water a public health priority
          </h3>
          <p className="text-sky-100 max-w-xl mx-auto mb-8">
            Become a WAPTAI member and stand with industry professionals advocating for fair GST and wider access to safe drinking water.
          </p>
          <Link
            to="/membarship"
            className="inline-flex items-center gap-2 bg-white text-[#0d47a1] font-bold px-7 py-3 rounded-full hover:bg-sky-50 transition-colors"
          >
            Become a Member
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {copied && (
        <div className="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg">
          Link copied to clipboard
        </div>
      )}
    </div>
  );
}

export default function Blog() {
  const { slug } = useParams();

  if (!slug) {
    return <BlogListing />;
  }

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-black text-slate-900 mb-3">Article not found</h1>
        <p className="text-slate-500 mb-6">This post may have been moved or unpublished.</p>
        <Link to="/blog" className="text-[#1c87c9] font-bold inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to blog
        </Link>
      </div>
    );
  }

  return <BlogArticle blog={blog} />;
}
