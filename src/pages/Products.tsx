import { motion } from "motion/react";
import { products } from "../data/content";
import { Star, ShoppingCart, Info } from "lucide-react";

export default function Products() {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="text-5xl italic text-drpepper-red mb-4">The 23 Flavors Collection</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Explore the unique variants of Dr Pepper. Each one crafted with the same dedication to boldness that started it all in 1885.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col md:flex-row bg-gray-50 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-20" 
                  style={{ backgroundColor: product.color }}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest text-drpepper-red">
                  Featured
                </div>
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <div className="flex items-center gap-1 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  <span className="text-gray-400 text-xs ml-2 font-bold">4.9/5</span>
                </div>
                <h2 className="text-3xl italic mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                <div className="mb-8">
                  <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Flavor Profile</h4>
                  <p className="text-sm font-medium text-drpepper-dark">{product.flavorProfile}</p>
                </div>
                <div className="flex gap-4">
                  <button className="btn-primary flex-grow flex items-center justify-center gap-2">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                  <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
                    <Info size={20} className="text-gray-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
