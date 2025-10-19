import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 py-12 md:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">1. Introduction and Acceptance</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to OPORITY LIMITED (Company Number: 15783178), a company registered in England and Wales.
                These Terms of Service (&quot;Terms&quot;) govern your use of our website and services, including web design,
                website creation, consulting, and Meta advertising services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using our website (https://opority.com) and our services, you agree to be bound by these
                Terms. If you disagree with any part of these Terms, you do not have permission to access our website or
                use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use our services, whether as a guest
                or registered user.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">2. Description of Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                OPORITY provides the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Web Design Services:</strong> Custom bespoke web design and development</li>
                <li><strong>Website Creation:</strong> Package-based website creation services (Base, Plus, Max packages)</li>
                <li><strong>Consulting Services:</strong> Business growth consulting including social media management, 1:1 coaching, and team consultancy</li>
                <li><strong>Meta Advertising Services:</strong> Facebook and Instagram advertising campaign management</li>
                <li><strong>Strategy Calls:</strong> Complimentary strategy consultations via Calendly booking</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without
                prior notice.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">3. User Accounts and Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                Certain features of our website may require you to create an account. When creating an account, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Maintain the security of your password and accept all risks of unauthorized access</li>
                <li>Immediately notify us of any unauthorized use of your account</li>
                <li>Be responsible for all activities that occur under your account</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your account if any information provided proves to be
                inaccurate, false, or misleading.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">4. Service Agreements and Contracts</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you engage our services, the following terms apply:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Quotations:</strong> All quotations are valid for 30 days unless otherwise stated</li>
                <li><strong>Acceptance:</strong> A binding contract is formed when you accept our proposal or pay a deposit</li>
                <li><strong>Scope of Work:</strong> All projects will have a clearly defined scope of work documented in writing</li>
                <li><strong>Project Timeline:</strong> Timelines are estimates and may vary based on project complexity and client responsiveness</li>
                <li><strong>Client Responsibilities:</strong> You agree to provide timely feedback, content, and materials necessary for project completion</li>
                <li><strong>Revisions:</strong> Revision limits and processes will be specified in individual service agreements</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">5. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                The following payment terms apply to all services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Currency:</strong> All prices are quoted in British Pounds (GBP) unless otherwise stated</li>
                <li><strong>Deposits:</strong> A non-refundable deposit (typically 50%) is required before work commences</li>
                <li><strong>Payment Schedule:</strong> Payment schedules will be outlined in individual service agreements</li>
                <li><strong>Final Payment:</strong> Final payment is due before delivery of final files or project launch</li>
                <li><strong>Late Payments:</strong> Late payments may incur interest charges and result in suspension of services</li>
                <li><strong>Refunds:</strong> Deposits are non-refundable; refund policies for other payments will be specified in service agreements</li>
                <li><strong>Additional Work:</strong> Any work beyond the agreed scope will be quoted and invoiced separately</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">6. Intellectual Property Rights</h2>

              <div className="space-y-3 mt-3">
                <h3 className="text-xl font-semibold text-foreground">6.1 Client-Owned Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You retain all rights to content you provide to us, including but not limited to text, images, logos,
                  and brand materials. You grant us a license to use this content solely for the purpose of delivering
                  our services.
                </p>

                <h3 className="text-xl font-semibold text-foreground">6.2 OPORITY-Created Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, you will own the final deliverables created specifically for you. However, we retain
                  the right to use the work in our portfolio and marketing materials unless otherwise agreed in writing.
                </p>

                <h3 className="text-xl font-semibold text-foreground">6.3 Pre-existing Materials</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We retain all rights to our pre-existing materials, methodologies, frameworks, and tools. Any third-party
                  components (fonts, stock images, etc.) are subject to their respective licenses.
                </p>

                <h3 className="text-xl font-semibold text-foreground">6.4 Website Content</h3>
                <p className="text-muted-foreground leading-relaxed">
                  All content on our website, including text, graphics, logos, images, and software, is the property of
                  OPORITY or its content suppliers and is protected by UK and international copyright laws.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">7. Permitted Use and Restrictions</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may use our website and services for lawful purposes only. You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Violate any laws in your jurisdiction (including but not limited to copyright laws)</li>
                <li>Transmit any viruses, malware, or other malicious code</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Copy, reproduce, or redistribute our website content without permission</li>
                <li>Use automated systems (bots, scrapers) to access our website</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Harass, abuse, or harm another person or entity</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">8. Third-Party Services and Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website and services may contain links to third-party websites or integrate third-party services,
                including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Calendly (appointment booking)</li>
                <li>Supabase (authentication and database)</li>
                <li>Meta Platforms (advertising services)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We are not responsible for the content, privacy policies, or practices of third-party websites or
                services. Your use of third-party services is at your own risk and subject to their terms and conditions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">9. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                Both parties agree to keep confidential any proprietary or sensitive information disclosed during the
                course of our business relationship. This obligation survives the termination of any service agreement.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Confidential information does not include information that: (a) is or becomes publicly available through
                no breach of this agreement; (b) was rightfully in the receiving party&apos;s possession before disclosure;
                or (c) is required to be disclosed by law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">10. Warranties and Disclaimers</h2>

              <div className="space-y-3 mt-3">
                <h3 className="text-xl font-semibold text-foreground">10.1 Our Warranties</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We warrant that we will perform our services with reasonable care and skill in accordance with
                  industry standards.
                </p>

                <h3 className="text-xl font-semibold text-foreground">10.2 Disclaimer of Warranties</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Except as expressly stated, our website and services are provided &quot;as is&quot; without warranties of any
                  kind, either express or implied, including but not limited to implied warranties of merchantability,
                  fitness for a particular purpose, or non-infringement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Our website will be uninterrupted, secure, or error-free</li>
                  <li>The results obtained from using our services will meet your requirements</li>
                  <li>Any errors in our services will be corrected</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">10.3 Results Disclaimer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While we strive for excellence, we cannot guarantee specific results from our marketing, advertising,
                  or consulting services. Results may vary based on numerous factors outside our control.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">11. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, OPORITY shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Loss of profits or revenue</li>
                <li>Loss of business opportunities</li>
                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Cost of substitute services</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Our total liability for any claims arising from our services shall not exceed the total amount paid by
                you to us for the specific service giving rise to the claim during the 12 months preceding the claim.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nothing in these Terms excludes or limits our liability for: (a) death or personal injury caused by
                negligence; (b) fraud or fraudulent misrepresentation; or (c) any other liability that cannot be
                excluded or limited under UK law.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">12. Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify, defend, and hold harmless OPORITY, its directors, employees, agents, and
                contractors from and against any claims, liabilities, damages, losses, and expenses (including reasonable
                legal fees) arising out of or in any way connected with:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights, including intellectual property rights</li>
                <li>Content or materials you provide to us</li>
                <li>Your use of our services</li>
                <li>Your violation of any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">13. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your access to our website and services at any time,
                without notice, for any reason, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Breach of these Terms</li>
                <li>Non-payment of fees</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Request by law enforcement or government agencies</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Upon termination, your right to use our services will immediately cease. Provisions that by their nature
                should survive termination shall survive, including intellectual property rights, warranty disclaimers,
                indemnification, and limitations of liability.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">14. Privacy and Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of our website and services is also governed by our{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>, which explains
                how we collect, use, and protect your personal data in accordance with UK GDPR and Data Protection Act 2018.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We also use cookies and similar technologies as described in our{" "}
                <Link href="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">15. Force Majeure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable
                control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or
                military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation,
                facilities, fuel, energy, labor, or materials.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">16. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of material changes by
                updating the &quot;Last updated&quot; date at the top of this page. Your continued use of our website and
                services after changes become effective constitutes acceptance of the revised Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                It is your responsibility to review these Terms periodically. If you do not agree to the modified Terms,
                you must stop using our website and services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">17. Entire Agreement</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms, together with our Privacy Policy and any specific service agreements, constitute the entire
                agreement between you and OPORITY concerning your use of our website and services, superseding any prior
                agreements or understandings.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">18. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such
                unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole. Such
                provisions shall be deleted without affecting the remaining provisions.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">19. Waiver</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
                rights. Any waiver of any provision of these Terms will be effective only if in writing and signed by us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">20. Assignment</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may not assign or transfer these Terms or any rights granted hereunder without our prior written
                consent. We may assign our rights and obligations under these Terms without restriction.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">21. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of England and Wales, without
                regard to its conflict of law provisions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You agree to submit to the exclusive jurisdiction of the courts of England and Wales for the resolution
                of any disputes arising out of or relating to these Terms or your use of our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">22. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Before initiating any legal proceedings, you agree to first attempt to resolve any dispute informally by
                contacting us. We will attempt to resolve the dispute informally through good faith negotiations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If we cannot resolve the dispute within 30 days, either party may pursue formal legal remedies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">23. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions or concerns about these Terms of Service, please contact us:
              </p>
              <ul className="list-none space-y-2 text-muted-foreground">
                <li><strong>Company Name:</strong> OPORITY LIMITED</li>
                <li><strong>Company Number:</strong> 15783178</li>
                <li><strong>Registered in:</strong> England and Wales</li>
                <li><strong>Award:</strong> Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025</li>
                <li><strong>Contact Method:</strong> <Link href="/strategy-call" className="text-primary hover:underline">Book a Strategy Call</Link></li>
              </ul>
            </section>

            <section className="bg-primary/5 border-l-4 border-primary p-4 rounded-r mt-8">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> These Terms of Service were last updated on the date shown at the top of this page.
                By using our website and services, you acknowledge that you have read, understood, and agree to be bound
                by these Terms.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
