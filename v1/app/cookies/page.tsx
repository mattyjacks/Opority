import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Cookie Policy
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                They are widely used to make websites work more efficiently and provide information to the owners of the site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This Cookie Policy explains what cookies are, how we use them on the OPORITY website, and how you can
                control their use.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly, including user authentication and session management</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous information</li>
                <li><strong>Functionality Cookies:</strong> Enable enhanced functionality and personalization, such as remembering your preferences</li>
                <li><strong>Marketing Cookies:</strong> Track your browsing habits to deliver relevant advertising</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. Specific Cookies We Use</h2>

              <div className="space-y-6 mt-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Authentication & Session Management (Supabase)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We use Supabase for user authentication and session management. These cookies are essential for:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Keeping you logged in during your visit</li>
                    <li>Managing your user session securely</li>
                    <li>Remembering your authentication state</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Cookie Names:</strong> sb-*-auth-token, sb-*-auth-token-code-verifier<br />
                    <strong>Purpose:</strong> Strictly necessary for authentication<br />
                    <strong>Duration:</strong> Session-based and persistent (up to 1 year)<br />
                    <strong>Type:</strong> First-party
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Appointment Booking (Calendly)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We use Calendly to enable you to book strategy calls with our team. Calendly may set cookies to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Remember your booking preferences</li>
                    <li>Enable the booking widget functionality</li>
                    <li>Track booking conversions and analytics</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Service Provider:</strong> Calendly LLC<br />
                    <strong>Purpose:</strong> Functionality and analytics<br />
                    <strong>Type:</strong> Third-party<br />
                    <strong>More info:</strong> <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Calendly Privacy Policy</a>
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Website Performance (Next.js)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    Our website is built with Next.js, which may use cookies for:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Optimizing page load performance</li>
                    <li>Managing application state</li>
                    <li>Error tracking and diagnostics</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Purpose:</strong> Performance and functionality<br />
                    <strong>Duration:</strong> Session-based<br />
                    <strong>Type:</strong> First-party
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Advertising & Analytics (Meta Pixel)</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    As a Meta advertising agency, we may use Meta Pixel (Facebook Pixel) to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                    <li>Measure the effectiveness of our advertising campaigns</li>
                    <li>Understand how visitors interact with our website</li>
                    <li>Build custom audiences for advertising</li>
                    <li>Track conversions from ads</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Service Provider:</strong> Meta Platforms, Inc.<br />
                    <strong>Cookie Names:</strong> _fbp, fr, and others<br />
                    <strong>Purpose:</strong> Marketing and analytics<br />
                    <strong>Duration:</strong> Up to 90 days<br />
                    <strong>Type:</strong> Third-party<br />
                    <strong>More info:</strong> <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Meta Privacy Policy</a>
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">Theme Preference</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We remember your dark mode/light mode preference using a cookie.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Purpose:</strong> Functionality<br />
                    <strong>Duration:</strong> Persistent (1 year)<br />
                    <strong>Type:</strong> First-party
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences
                by using the following methods:
              </p>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Browser Settings</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Most web browsers allow you to control cookies through their settings. However, please note that if
                    you limit the ability of websites to set cookies, you may affect your overall user experience, as some
                    features may not function properly.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-2">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Third-Party Opt-Out</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For advertising cookies, you can opt out through:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-2">
                    <li><a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Facebook Ad Preferences</a></li>
                    <li><a href="https://www.youronlinechoices.com/uk/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Your Online Choices (EU)</a></li>
                    <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Network Advertising Initiative (US)</a></li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Essential Cookies Notice</h2>
              <p className="text-muted-foreground leading-relaxed">
                Please note that blocking or deleting cookies may prevent you from using certain features of our website,
                particularly:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Logging in to your account</li>
                <li>Booking strategy calls through Calendly</li>
                <li>Maintaining your session preferences</li>
                <li>Accessing protected areas of the website</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Updates to This Cookie Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. We encourage you to review this Cookie Policy periodically
                to stay informed about our use of cookies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The &ldquo;Last updated&rdquo; date at the top of this page indicates when this Cookie Policy was last revised.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li><strong>Company:</strong> OPORITY LIMITED</li>
                <li><strong>Company Number:</strong> 15783178</li>
                <li><strong>Registered in:</strong> England and Wales</li>
                <li><strong>Contact:</strong> Visit our <a href="/strategy-call" className="text-primary hover:underline">Strategy Call</a> page to book a consultation</li>
              </ul>
            </section>

            <section className="space-y-4 border-t pt-6 mt-8">
              <h2 className="text-2xl font-bold text-foreground">Additional Resources</h2>
              <p className="text-muted-foreground leading-relaxed">
                For more information about online privacy and cookies, you may wish to visit:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li><a href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UK ICO - Cookies Guidance</a></li>
                <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">All About Cookies</a></li>
                <li><a href="https://gdpr.eu/cookies/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GDPR & Cookies</a></li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
