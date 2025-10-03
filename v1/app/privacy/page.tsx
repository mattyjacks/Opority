import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      <section className="flex-1 py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-6">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                OPORITY Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how 
                we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Personal Data: Name, email address, phone number, and business information you provide when contacting us</li>
                <li>Usage Data: Information about how you use our website, including pages visited and time spent</li>
                <li>Cookies and Tracking: We use cookies and similar tracking technologies to track activity on our website</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Communicate with you about our services</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Process your transactions and manage your requests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy or as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Under GDPR, you have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-muted-foreground mb-2">
                  <strong>OPORITY Ltd</strong>
                </p>
                <p className="text-muted-foreground mb-2">
                  Company Number: 15783178
                </p>
                <p className="text-muted-foreground">
                  For privacy inquiries, please use our contact form or book a call with our team.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
