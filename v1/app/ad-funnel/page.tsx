"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { 
  Calendar, 
  Sparkles, 
  Megaphone, 
  LayoutGrid, 
  Users, 
  Globe, 
  Coins, 
  DollarSign,
  Wallet,
  Star,
  Sun,
  TrendingUp,
  Banknote,
  Crown,
  Briefcase,
  User,
  HelpCircle,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Answer {
  question: number;
  answer: string;
}

function AdFunnelContent() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalQuestions = 4;

  // Question 1: Goals (Multi-select)
  const question1Options = [
    { id: "appointments", label: "Generate appointment", icon: Calendar, color: "text-blue-500" },
    { id: "customers", label: "Acquire customers", icon: Sparkles, color: "text-emerald-500" },
    { id: "reach", label: "Gain reach", icon: Megaphone, color: "text-orange-500" },
    { id: "brand", label: "Position brand", icon: LayoutGrid, color: "text-blue-500" },
    { id: "recruiting", label: "Recruiting talents", icon: Users, color: "text-orange-500" },
    { id: "network", label: "Develop network", icon: Globe, color: "text-cyan-500" },
  ];

  // Question 2: Price Range
  const question2Options = [
    { 
      id: "300", 
      label: "£300", 
      icon: Coins, 
      iconColor: "text-yellow-500",
      bgColor: "bg-gray-100"
    },
    { 
      id: "300-1k", 
      label: "£300 - £1k", 
      icon: DollarSign, 
      iconColor: "text-emerald-600",
      bgColor: "bg-gray-100"
    },
    { 
      id: "1k-5k", 
      label: "£1k - £5k", 
      icon: Banknote, 
      iconColor: "text-green-600",
      bgColor: "bg-gray-100"
    },
    { 
      id: "over-5k", 
      label: "Over £5k", 
      icon: Wallet, 
      iconColor: "text-orange-500",
      bgColor: "bg-gray-100"
    },
  ];

  // Question 3: Role
  const question3Options = [
    { id: "ceo", label: "CEO", icon: Crown, iconColor: "text-yellow-500", bgColor: "bg-gradient-to-br from-yellow-100 to-yellow-50" },
    { id: "management", label: "Management", icon: Briefcase, iconColor: "text-blue-500", bgColor: "bg-gradient-to-br from-blue-100 to-blue-50" },
    { id: "employee", label: "Employee", icon: User, iconColor: "text-green-500", bgColor: "bg-gradient-to-br from-green-100 to-green-50" },
    { id: "other", label: "Other role", icon: HelpCircle, iconColor: "text-purple-500", bgColor: "bg-gradient-to-br from-purple-100 to-purple-50" },
  ];

  // Question 4: Budget
  const question4Options = [
    { id: "under-1k", label: "Less than £1000", icon: Star, iconColor: "text-orange-400" },
    { id: "2k-4k", label: "£2000 to £4000", icon: Sun, iconColor: "text-yellow-300" },
    { id: "5k-9k", label: "£5000 to £9000", icon: TrendingUp, iconColor: "text-cyan-300" },
    { id: "over-10k", label: "Over £10,000", icon: Zap, iconColor: "text-amber-300" },
  ];

  const toggleGoalSelection = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId)
        ? prev.filter((id) => id !== goalId)
        : [...prev, goalId]
    );
  };

  const handleNextQuestion = () => {
    if (isTransitioning) return;
    
    if (currentQuestion === 1 && selectedGoals.length === 0) {
      // Require at least one selection for question 1
      return;
    }

    setIsTransitioning(true);
    
    if (currentQuestion === 1) {
      setAnswers([...answers, { question: 1, answer: selectedGoals.join(", ") }]);
    }

    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setIsTransitioning(false);
    }, 500);
  };

  const handleAnswer = (answer: string) => {
    if (isTransitioning) return;

    // Check for redirect conditions
    if (currentQuestion === 3 && answer === "other") {
      // Redirect to /web-design if "Other role" is selected
      router.push("/web-design");
      return;
    }

    if (currentQuestion === 4 && answer === "under-1k") {
      // Redirect to /web-design if "Less than £1000" is selected
      router.push("/web-design");
      return;
    }

    setIsTransitioning(true);
    setAnswers([...answers, { question: currentQuestion, answer }]);

    // Animate to next question or complete
    setTimeout(() => {
      if (currentQuestion < totalQuestions) {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      } else {
        // All questions answered, redirect to booking page with answers
        const allAnswers = [...answers, { question: currentQuestion, answer }];
        const params = new URLSearchParams();
        allAnswers.forEach((ans) => {
          params.append(`q${ans.question}`, ans.answer);
        });
        router.push(`/booking?${params.toString()}`);
      }
    }, 500);
  };

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      <Navigation />

      <section className="flex-1 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8 md:mb-12">
            <p className="text-center text-lg font-semibold text-primary mb-4">
              Question {currentQuestion} of {totalQuestions}
            </p>
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-primary/80"
                initial={{ width: 0 }}
                animate={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          {/* Questions */}
          <AnimatePresence mode="wait">
            {/* Question 1 */}
            {currentQuestion === 1 && (
              <motion.div
                key="q1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
                  What goals should Facebook fulfill?
                </h1>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8">
                  {question1Options.map((option) => {
                    const Icon = option.icon;
                    const isSelected = selectedGoals.includes(option.id);
                    return (
                      <button
                        key={option.id}
                        onClick={() => toggleGoalSelection(option.id)}
                        className={`group relative bg-card hover:bg-card/80 border-2 rounded-2xl p-4 sm:p-6 pr-12 sm:pr-14 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left ${
                          isSelected ? 'border-primary shadow-lg' : 'border-border hover:border-primary'
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-4">
                          <Icon className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 ${option.color}`} />
                          <span className="text-base sm:text-lg font-medium text-foreground">
                            {option.label}
                          </span>
                        </div>
                        <div className={`absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-all ${
                          isSelected
                            ? 'border-primary bg-primary'
                            : 'border-border group-hover:border-primary'
                        }`}>
                          {isSelected && (
                            <svg className="w-full h-full text-primary-foreground p-0.5 sm:p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Next Question Button */}
                <div className="flex justify-center">
                  <button
                    onClick={handleNextQuestion}
                    disabled={selectedGoals.length === 0}
                    className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      selectedGoals.length > 0
                        ? 'bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl hover:scale-105'
                        : 'bg-secondary text-muted-foreground cursor-not-allowed'
                    }`}
                  >
                    Next Question
                  </button>
                </div>
              </motion.div>
            )}

            {/* Question 2 */}
            {currentQuestion === 2 && (
              <motion.div
                key="q2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
                  What&apos;s the price range of your products?
                </h1>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {question2Options.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(option.id)}
                        className="group flex flex-col overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className={`w-full aspect-square ${option.bgColor} flex items-center justify-center`}>
                          <Icon className={`w-16 h-16 ${option.iconColor}`} strokeWidth={1.5} />
                        </div>
                        <div className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 transition-colors">
                          {option.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Question 3 */}
            {currentQuestion === 3 && (
              <motion.div
                key="q3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
                  Which position best describes your role?
                </h1>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {question3Options.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(option.id)}
                        className="group flex flex-col overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className={`w-full aspect-square ${option.bgColor} relative overflow-hidden flex items-center justify-center`}>
                          <Icon className={`w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${option.iconColor}`} strokeWidth={1.5} />
                        </div>
                        <div className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 sm:py-4 text-sm sm:text-base transition-colors">
                          {option.label}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Question 4 */}
            {currentQuestion === 4 && (
              <motion.div
                key="q4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
                  What is your monthly ad budget?
                </h1>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
                  {question4Options.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleAnswer(option.id)}
                        className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-4 justify-center"
                      >
                        <Icon className={`w-7 h-7 ${option.iconColor}`} strokeWidth={2} />
                        <span className="text-lg font-semibold">
                          {option.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function AdFunnelPage() {
  return <AdFunnelContent />;
}
