import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="flex-1 py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to OPORITY. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data and tell you about 
                your privacy rights.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Data We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect, use, store and transfer different kinds of personal data about you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Identity Data (name, username)</li>
                <li>Contact Data (email address, telephone numbers)</li>
                <li>Technical Data (IP address, browser type)</li>
                <li>Usage Data (how you use our website)</li>
                <li>Marketing and Communications Data</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. How We Use Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will only use your personal data when the law allows us to. Most commonly, we will use your 
                personal data to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide our services to you</li>
                <li>Communicate with you about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Process payments and prevent fraud</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being 
                accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access 
                to your personal data to those employees, agents, contractors and other third parties who have a 
                business need to know.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will only retain your personal data for as long as necessary to fulfill the purposes we collected 
                it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under data protection laws, you have rights including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Right to access your personal data</li>
                <li>Right to correct your personal data</li>
                <li>Right to erase your personal data</li>
                <li>Right to object to processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may include links to third-party websites, plug-ins and applications. Clicking on those 
                links or enabling those connections may allow third parties to collect or share data about you.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us 
                through our website contact form or book a strategy call.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
