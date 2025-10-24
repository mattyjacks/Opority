"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LogoCarousel } from "@/components/logo-carousel";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { User, Mail, CheckCircle2, ChevronDown } from "lucide-react";
import Link from "next/link";

function BookingContent() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // FAQ data
  const faqs = [
    {
      question: "What services does OPORITY offer?",
      answer: "We specialize in web design, website creation, digital marketing consulting, and social media management. Our bespoke solutions help businesses grow their online presence and convert visitors into customers."
    },
    {
      question: "How can digital marketing benefit my business?",
      answer: "Digital marketing helps you reach your target audience more effectively, increase brand awareness, generate quality leads, and drive conversions. We create customized strategies that align with your business goals and deliver measurable results."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is customized based on your specific needs and project scope. We offer flexible packages for web design, ongoing marketing support, and consulting services. Book a free strategy call to discuss your requirements and receive a tailored quote."
    },
    {
      question: "How do you measure the success of your campaigns?",
      answer: "We track key performance indicators (KPIs) such as website traffic, conversion rates, lead generation, engagement metrics, and ROI. You'll receive regular reports with actionable insights to demonstrate the impact of our work on your business growth."
    },
    {
      question: "How long does it take to see results?",
      answer: "Results vary depending on the service. Website projects typically take 4-8 weeks. For marketing campaigns, you may see initial results within the first month, with significant growth occurring over 3-6 months as strategies are optimized and refined."
    }
  ];

  // Get answers from URL params
  const q1 = searchParams.get('q1') || '';
  const q2 = searchParams.get('q2') || '';
  const q3 = searchParams.get('q3') || '';
  const q4 = searchParams.get('q4') || '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !agreedToTerms) {
      alert("Please fill in all fields and agree to the terms.");
      return;
    }
    setShowCalendly(true);
  };

  // Build Calendly URL with prefilled data
  const calendlyParams = new URLSearchParams();
  if (name) calendlyParams.set('name', name);
  if (email) calendlyParams.set('email', email);
  
  // Add custom fields with quiz answers
  const quizAnswers = `Goals: ${q1} | Price: ${q2} | Role: ${q3} | Budget: ${q4}`;
  if (quizAnswers) calendlyParams.set('a1', quizAnswers); // Notes field
  
  const calendlyUrl = `https://calendly.com/arnoldkostecki/strategy-call?${calendlyParams.toString()}`;

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 py-12 md:py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s Map Out How You&apos;ll Get More Clients From Facebook
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            {/* Name Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                placeholder="E-mail address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary/20"
                required
              />
              <label htmlFor="terms" className="text-sm text-muted-foreground">
                I have read and agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!name || !email || !agreedToTerms}
              className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                name && email && agreedToTerms
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground hover:shadow-xl hover:scale-[1.02]'
                  : 'bg-secondary text-muted-foreground cursor-not-allowed'
              }`}
            >
              Choose a preferred date now
            </button>
          </form>
        </div>

        {/* Logo Carousel - Full width outside container */}
        <LogoCarousel />
      </section>

      {/* Next Steps Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider">
              These are your next Steps
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to Move Forward?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-500">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Book Your Free Strategy Call
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Grab a time that works best for you. We&apos;ll chat about your goals, what you&apos;re currently doing to get clients, and whether our system makes sense for your business.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-500">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Custom Growth Plan
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                After the call, our team reviews your socials, offer, and website then builds a personalised plan showing exactly how to start attracting more qualified leads.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-blue-500">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                Launch & Scale
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed">
                Once you&apos;re ready, we&apos;ll help you roll out your campaign, refine your funnel, and scale your results so you can grow consistently month after month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-3 text-sm uppercase tracking-wider">
              Need help?
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-secondary/50 transition-colors"
                >
                  <span className="font-semibold text-foreground text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 p-4 md:p-6">
          <div className="relative w-full max-w-4xl h-[85vh] md:h-[90vh]">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute -top-10 md:-top-12 right-0 text-white hover:text-primary transition-colors z-10 bg-black/40 hover:bg-black/60 rounded-full p-2"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-card rounded-xl md:rounded-2xl overflow-hidden shadow-2xl h-full">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                title="Schedule a Strategy Call"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
