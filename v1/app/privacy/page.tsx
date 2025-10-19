import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

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
                OPORITY LIMITED (Company Number: 15783178) (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting
                and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your personal data when you visit our website or use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This policy is issued in accordance with the UK General Data Protection Regulation (UK GDPR) and the
                Data Protection Act 2018. We are the data controller for the purposes of data protection law.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy,
                please do not access our website or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may collect and process the following categories of personal data about you:
              </p>

              <div className="space-y-3 mt-3">
                <h3 className="text-xl font-semibold text-foreground">2.1 Identity Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>First name and last name</li>
                  <li>Username or similar identifier</li>
                  <li>Job title and company name (for business clients)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">2.2 Contact Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Email address</li>
                  <li>Telephone number</li>
                  <li>Mailing address (if applicable)</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">2.3 Technical Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device type and operating system</li>
                  <li>Time zone setting and location</li>
                  <li>Browser plug-in types and versions</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">2.4 Usage Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Information about how you use our website and services</li>
                  <li>Pages visited and features used</li>
                  <li>Time spent on pages</li>
                  <li>Links clicked and search terms entered</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">2.5 Marketing and Communications Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Your preferences in receiving marketing from us</li>
                  <li>Your communication preferences</li>
                  <li>Survey responses and feedback</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">2.6 Financial Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Payment card details (processed securely by our payment providers)</li>
                  <li>Billing address</li>
                  <li>Invoice history</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">2.7 Project and Service Data</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Information you provide when requesting services or quotes</li>
                  <li>Project brief details and requirements</li>
                  <li>Content and materials you provide for projects</li>
                  <li>Communications related to service delivery</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. How We Collect Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect data through various methods:
              </p>

              <div className="space-y-3 mt-3">
                <h3 className="text-xl font-semibold text-foreground">3.1 Direct Interactions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You provide data when you:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Fill out forms on our website</li>
                  <li>Create an account</li>
                  <li>Request quotes or information</li>
                  <li>Book a strategy call via Calendly</li>
                  <li>Subscribe to newsletters or marketing</li>
                  <li>Enter competitions or promotions</li>
                  <li>Provide feedback or contact us</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">3.2 Automated Technologies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We automatically collect data when you interact with our website using:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Cookies and similar tracking technologies</li>
                  <li>Server logs</li>
                  <li>Web analytics tools</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  For more information about cookies, please see our{" "}
                  <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
                </p>

                <h3 className="text-xl font-semibold text-foreground">3.3 Third-Party Sources</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We may receive data from:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Analytics providers (e.g., website performance data)</li>
                  <li>Advertising networks (e.g., Meta Platforms)</li>
                  <li>Search information providers</li>
                  <li>Publicly available sources</li>
                </ul>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. How We Use Your Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will only use your personal data when the law allows us to. The lawful bases we rely on include:
              </p>

              <div className="space-y-3 mt-3">
                <h3 className="text-xl font-semibold text-foreground">4.1 Contract Performance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To perform our contract with you, including:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Providing web design, website creation, or consulting services</li>
                  <li>Managing Meta advertising campaigns</li>
                  <li>Processing payments</li>
                  <li>Managing your account and requests</li>
                  <li>Communicating with you about services</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">4.2 Legitimate Interests</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To pursue our legitimate business interests, including:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Improving our website and services</li>
                  <li>Analyzing website usage and user behavior</li>
                  <li>Marketing our services to existing clients</li>
                  <li>Network and information security</li>
                  <li>Preventing fraud and unauthorized access</li>
                  <li>Portfolio development and case studies</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">4.3 Legal Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To comply with legal obligations, including:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Tax and accounting requirements</li>
                  <li>Responding to legal requests</li>
                  <li>Regulatory compliance</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">4.4 Consent</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Where you have given consent, including:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Sending marketing communications</li>
                  <li>Using certain cookies and tracking technologies</li>
                  <li>Sharing your testimonials or case studies</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed text-sm mt-2">
                  You have the right to withdraw consent at any time by contacting us or using the unsubscribe link
                  in marketing emails.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Third-Party Services and Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use third-party service providers to help us deliver our services. We may share your data with:
              </p>

              <div className="space-y-3 mt-3">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Supabase (Authentication & Database)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We use Supabase for user authentication and database services. Your account credentials and
                    profile data are stored securely on Supabase servers.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Privacy Policy: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://supabase.com/privacy</a>
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Calendly (Appointment Booking)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We use Calendly to enable strategy call bookings. When you book an appointment, your name, email,
                    and scheduling preferences are shared with Calendly.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Privacy Policy: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://calendly.com/privacy</a>
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Meta Platforms (Advertising & Analytics)</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We use Meta Pixel (Facebook Pixel) for advertising analytics and campaign optimization. This
                    service collects data about your website interactions and browsing behavior.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Privacy Policy: <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://www.facebook.com/privacy/policy</a>
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Payment Processors</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We use secure third-party payment processors to handle transactions. We do not store full payment
                    card details on our servers.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Hosting and Infrastructure Providers</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our website is hosted on secure servers provided by third-party hosting companies. These
                    providers have access to technical data necessary for website operation.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-4">
                We require all third-party service providers to respect the security of your personal data and to
                treat it in accordance with the law. We only permit them to process your data for specified purposes
                and in accordance with our instructions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. International Data Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some of our third-party service providers are based outside the UK or process data outside the UK.
                When we transfer your data outside the UK, we ensure appropriate safeguards are in place, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Transferring data to countries with adequacy decisions from the UK government</li>
                <li>Using standard contractual clauses approved by the UK authorities</li>
                <li>Ensuring the service provider has appropriate certifications or binding corporate rules</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You can request more information about the specific safeguards used by contacting us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We have implemented appropriate technical and organizational measures to protect your personal data,
                including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure authentication via Supabase</li>
                <li>Access controls and authorization mechanisms</li>
                <li>Regular security assessments and updates</li>
                <li>Secure backup and recovery procedures</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                While we implement strong security measures, please be aware that no method of transmission over the
                internet or electronic storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will retain your personal data only for as long as necessary to fulfill the purposes for which it
                was collected, including for legal, accounting, or reporting requirements.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Retention periods vary depending on the type of data and purpose:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Account data:</strong> Retained while your account is active and for 12 months after closure</li>
                <li><strong>Service and project data:</strong> Retained for 6 years after project completion (legal requirement)</li>
                <li><strong>Financial records:</strong> Retained for 6 years (HMRC requirement)</li>
                <li><strong>Marketing data:</strong> Retained until you unsubscribe or for 2 years of inactivity</li>
                <li><strong>Website analytics:</strong> Typically retained for 14-26 months</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                When data is no longer needed, we will securely delete or anonymize it.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. Your Legal Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under UK data protection law, you have the following rights:
              </p>

              <div className="space-y-3 mt-3">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Right of Access</h3>
                  <p className="text-muted-foreground text-sm">
                    Request a copy of your personal data we hold (Subject Access Request).
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Right to Rectification</h3>
                  <p className="text-muted-foreground text-sm">
                    Request correction of incomplete or inaccurate personal data.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Right to Erasure</h3>
                  <p className="text-muted-foreground text-sm">
                    Request deletion of your personal data in certain circumstances (right to be forgotten).
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Right to Restrict Processing</h3>
                  <p className="text-muted-foreground text-sm">
                    Request restriction of processing your personal data in certain circumstances.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Right to Data Portability</h3>
                  <p className="text-muted-foreground text-sm">
                    Request transfer of your personal data to another organization or to you in a machine-readable format.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Right to Object</h3>
                  <p className="text-muted-foreground text-sm">
                    Object to processing of your personal data based on legitimate interests or for direct marketing.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Right to Withdraw Consent</h3>
                  <p className="text-muted-foreground text-sm">
                    Withdraw consent where we rely on consent as the legal basis for processing.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-semibold text-foreground">Right to Lodge a Complaint</h3>
                  <p className="text-muted-foreground text-sm">
                    Lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe your rights
                    have been violated.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the details in Section 12. We will respond
                to your request within one month (may be extended by two months for complex requests).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You will not have to pay a fee to access your personal data or exercise your other rights. However,
                we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">10. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and store certain
                information. This includes essential cookies for functionality, performance cookies for analytics,
                and marketing cookies for advertising.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For detailed information about the cookies we use and your choices, please see our{" "}
                <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">11. Marketing Communications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may send you marketing communications about our services if:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>You have requested information from us or purchased services from us</li>
                <li>You have opted in to receive marketing communications</li>
                <li>You have not opted out of receiving marketing communications</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                You can unsubscribe from marketing communications at any time by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Clicking the &quot;unsubscribe&quot; link in any marketing email</li>
                <li>Contacting us directly</li>
                <li>Updating your account preferences (if you have an account)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Please note that even if you opt out of marketing, we may still send you service-related communications
                (e.g., invoices, project updates, account notifications).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, wish to exercise your data protection rights,
                or have concerns about how we handle your personal data, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-3">
                <li><strong>Company Name:</strong> OPORITY LIMITED</li>
                <li><strong>Company Number:</strong> 15783178</li>
                <li><strong>Registered in:</strong> England and Wales</li>
                <li><strong>Contact:</strong> <Link href="/strategy-call" className="text-primary hover:underline">Book a Strategy Call</Link></li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">13. Supervisory Authority</h2>
              <p className="text-muted-foreground leading-relaxed">
                You have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) if
                you believe we have not handled your personal data in accordance with data protection law.
              </p>
              <ul className="list-none space-y-2 text-muted-foreground mt-3">
                <li><strong>Information Commissioner&apos;s Office (ICO)</strong></li>
                <li>Wycliffe House, Water Lane</li>
                <li>Wilmslow, Cheshire SK9 5AF</li>
                <li>Telephone: 0303 123 1113</li>
                <li>Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ico.org.uk</a></li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">14. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                legal requirements, or other factors. We will notify you of any material changes by:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Updating the &quot;Last updated&quot; date at the top of this page</li>
                <li>Posting a notice on our website</li>
                <li>Sending you an email notification (if we have your email address)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect
                your personal data.
              </p>
            </section>

            <section className="bg-primary/5 border-l-4 border-primary p-4 rounded-r mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Important:</strong> By using our website and services, you acknowledge that you have read
                and understood this Privacy Policy and consent to the collection, use, and disclosure of your personal
                data as described herein. For more information about cookies, please see our{" "}
                <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>. For terms of
                service, please see our{" "}
                <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
