import { motion } from "motion/react";
import { ChevronRight, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center bg-drpepper-dark overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://picsum.photos/seed/drpepper-hero/1920/1080?blur=2"
            alt="Hero Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white italic leading-none mb-6">
              23 FLAVORS. <br />
              <span className="text-drpepper-red">ONE UNIQUE</span> <br />
              EXPERIENCE.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Since 1885, Dr Pepper has been the bold choice for those who dare to be different. Experience the original blend of 23 flavors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary flex items-center gap-2">
                Explore Flavors <ChevronRight size={20} />
              </Link>
              <Link to="/quiz" className="px-6 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-drpepper-dark transition-all">
                Find Your Flavor
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <img
              src="https://picsum.photos/seed/drpepper-can/600/800"
              alt="Dr Pepper Can"
              className="w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(113,31,37,0.5)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/waco-texas/800/600"
                alt="Waco Texas 1885"
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 bg-drpepper-red text-white p-8 rounded-2xl shadow-xl hidden lg:block">
                <span className="text-5xl font-black italic">1885</span>
                <p className="text-sm font-bold uppercase tracking-widest mt-2">Established in Waco, TX</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl text-drpepper-red italic">A Heritage of Boldness</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Created by pharmacist Charles Alderton in Morrison's Old Corner Drug Store, Dr Pepper is the oldest major soft drink in the United States. It wasn't just a drink; it was a "Waco."
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The secret blend of 23 flavors creates a taste that's impossible to categorize. Is it cherry? Is it vanilla? Is it spice? It's all of them, and something entirely new.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-black text-drpepper-dark">23</h4>
                  <p className="text-sm text-gray-500 uppercase font-bold">Signature Flavors</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-drpepper-dark">139</h4>
                  <p className="text-sm text-gray-500 uppercase font-bold">Years of History</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl italic mb-4">The Lineup</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">From the original classic to the newest sensations, there's a Dr Pepper for every mood.</p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Original", color: "bg-drpepper-red" },
            { name: "Cherry", color: "bg-[#4A0E0E]" },
            { name: "Strawberries & Cream", color: "bg-[#D63384]" }
          ].map((item, idx) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-lg text-center group"
            >
              <div className={`w-full aspect-[3/4] ${item.color} rounded-2xl mb-6 overflow-hidden relative`}>
                <img
                  src={`https://picsum.photos/seed/dp-${idx}/400/600`}
                  alt={item.name}
                  className="w-full h-full object-cover mix-blend-overlay opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <span className="text-white font-black text-4xl italic rotate-[-10deg] drop-shadow-lg">{item.name}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <Link to="/products" className="text-drpepper-red font-bold flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                View Details <ChevronRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-drpepper-red text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black italic mb-8">Ready to find your perfect flavor?</h2>
          <p className="text-xl mb-10 opacity-90">Take our interactive taste quiz and let our AI help you discover your new favorite Dr Pepper variant.</p>
          <Link to="/quiz" className="bg-white text-drpepper-red px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform inline-block">
            Start the Flavor Quiz
          </Link>
        </div>
      </section>
    </div>
  );
}
