import { motion } from "motion/react";
import { articles } from "../data/content";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16">
          <h1 className="text-5xl italic text-drpepper-red mb-4">The 23rd Hour</h1>
          <p className="text-gray-500 text-lg">Stories, recipes, and culture from the world of Dr Pepper.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-drpepper-red text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  {article.category}
                </div>
              </div>
              <div className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                <span className="flex items-center gap-2"><Calendar size={14} /> March 28, 2026</span>
                <span className="flex items-center gap-2"><User size={14} /> Dr Pepper Team</span>
              </div>
              <h2 className="text-3xl italic mb-4 group-hover:text-drpepper-red transition-colors leading-tight">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {article.excerpt}
              </p>
              <button className="flex items-center gap-2 font-black text-drpepper-red uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                Read More <ArrowRight size={18} />
              </button>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-24 bg-drpepper-dark rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-drpepper-red/20 blur-[100px] rounded-full" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl italic mb-6">Never miss a flavor.</h2>
            <p className="text-gray-400 mb-10 text-lg">Join the Dr Pepper inner circle for exclusive recipes, early access to new flavors, and limited edition drops.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white/10 border border-white/20 px-8 py-4 rounded-full focus:outline-none focus:border-drpepper-red text-lg"
              />
              <button className="bg-drpepper-red text-white px-12 py-4 rounded-full font-black text-lg hover:bg-opacity-90 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
