import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, RefreshCw, CheckCircle2 } from "lucide-react";
import { products } from "../data/content";

const questions = [
  {
    id: 1,
    question: "How do you like your sweetness?",
    options: [
      { text: "Classic & Balanced", value: "original" },
      { text: "Rich & Fruity", value: "cherry" },
      { text: "Creamy & Smooth", value: "cream" },
      { text: "Bold & Surprising", value: "strawberry" }
    ]
  },
  {
    id: 2,
    question: "What's your ideal snack pairing?",
    options: [
      { text: "Salty Pretzels", value: "original" },
      { text: "Dark Chocolate", value: "cherry" },
      { text: "Spicy BBQ Wings", value: "original" },
      { text: "Fresh Fruit", value: "strawberry" }
    ]
  },
  {
    id: 3,
    question: "Pick a vibe for your afternoon:",
    options: [
      { text: "Productive & Focused", value: "original" },
      { text: "Relaxed & Indulgent", value: "cream" },
      { text: "Energetic & Fun", value: "strawberry" },
      { text: "Sophisticated & Cool", value: "cherry" }
    ]
  }
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<any>(null);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (finalAnswers: string[]) => {
    // Simple logic: find most frequent category
    const counts: any = {};
    finalAnswers.forEach(a => counts[a] = (counts[a] || 0) + 1);
    const winner = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    
    // Map winner to a product
    let recommended;
    if (winner === "cherry") recommended = products.find(p => p.id === "cherry");
    else if (winner === "strawberry") recommended = products.find(p => p.id === "strawberries-cream");
    else if (winner === "cream") recommended = products.find(p => p.id === "cream-soda");
    else recommended = products.find(p => p.id === "original");

    setResult(recommended);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden">
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-12"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-drpepper-red">
                  Question {step + 1} of {questions.length}
                </span>
                <div className="flex gap-1">
                  {questions.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 w-8 rounded-full transition-colors ${i <= step ? "bg-drpepper-red" : "bg-gray-200"}`} 
                    />
                  ))}
                </div>
              </div>

              <h2 className="text-4xl italic mb-10">{questions[step].question}</h2>

              <div className="grid gap-4">
                {questions[step].options.map((option) => (
                  <button
                    key={option.text}
                    onClick={() => handleAnswer(option.value)}
                    className="group flex items-center justify-between p-6 rounded-2xl border-2 border-gray-100 hover:border-drpepper-red hover:bg-drpepper-red/5 transition-all text-left"
                  >
                    <span className="text-lg font-bold text-gray-700 group-hover:text-drpepper-red">{option.text}</span>
                    <ChevronRight className="text-gray-300 group-hover:text-drpepper-red group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Your Perfect Match</h2>
              <h3 className="text-5xl italic text-drpepper-red mb-8">{result.name}</h3>
              
              <div className="bg-gray-50 rounded-3xl p-8 mb-8 flex flex-col md:flex-row gap-8 items-center text-left">
                <img 
                  src={result.image} 
                  alt={result.name} 
                  className="w-32 h-48 object-cover rounded-xl shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{result.description}</p>
                  <p className="text-sm font-bold text-drpepper-red italic">Why you'll love it: {result.flavorProfile}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary px-12">Buy Now</button>
                <button 
                  onClick={reset}
                  className="flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-200 font-bold hover:bg-gray-50 transition-all"
                >
                  <RefreshCw size={18} /> Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
