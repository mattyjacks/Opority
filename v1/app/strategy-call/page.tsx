import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function StrategyCallPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="flex-1 py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Book a Discovery Call with our Director.
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              We offer an initial 30 free minute consultation with our Director, allowing us to learn more about your business, 
              your goals and even if we can help you get more quotes.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">On the call, we'll ask questions like:</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">•</span>
                <span className="text-lg">How are you currently getting quotes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">•</span>
                <span className="text-lg">How long has the business been running?</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3 text-xl">•</span>
                <span className="text-lg">What's stopping you from getting more quotes?</span>
              </li>
            </ul>
            
            <p className="text-lg text-muted-foreground mb-8">
              To start the process, just use our calendar to book a call.
            </p>

            {/* Calendly Embed */}
            <div className="bg-background border border-border rounded-xl p-6">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-semibold mb-4">Schedule Your Strategy Call</p>
                  <a 
                    href="https://calendly.com/arnoldkostecki/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105"
                  >
                    Book on Calendly
                  </a>
                  <p className="text-sm text-muted-foreground mt-4">
                    Click to open our booking calendar
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              Have questions before booking? Feel free to reach out to us directly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
