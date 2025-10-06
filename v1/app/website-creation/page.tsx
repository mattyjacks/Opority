"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { AnimatedGradientBackground } from "@/components/animated-gradient-bg";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

type FormData = {
  package: string;
  hasExistingWebsite: string; // "yes" or "no"
  existingWebsiteUrl: string;
  websitePurpose: string;
  otherPurpose: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  postcode: string;
  websiteUrl: string;
  logoDesign: boolean;
  monthlySEO: boolean;
  thirdPartyIntegration: boolean;
};

export default function WebsiteCreationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    package: "",
    hasExistingWebsite: "",
    existingWebsiteUrl: "",
    websitePurpose: "",
    otherPurpose: "",
    name: "",
    email: "",
    phone: "",
    companyName: "",
    postcode: "",
    websiteUrl: "",
    logoDesign: false,
    monthlySEO: false,
    thirdPartyIntegration: false,
  });

  const [urlError, setUrlError] = useState("");
  const [purposeError, setPurposeError] = useState("");

  // SQL injection prevention - sanitize input
  const sanitizeInput = (input: string): string => {
    // Remove common SQL injection patterns
    const sanitized = input
      .replace(/['";\\]/g, '') // Remove quotes and backslashes
      .replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi, '') // Remove SQL keywords
      .trim();
    return sanitized;
  };

  // Validate URL with https:// requirement
  const validateUrl = (url: string): boolean => {
    if (!url) return true; // Empty is ok if not required

    const sanitized = sanitizeInput(url);

    // Check if it starts with https://
    if (!sanitized.startsWith('https://')) {
      setUrlError('URL must start with https://');
      return false;
    }

    // Basic URL pattern validation
    const urlPattern = /^https:\/\/[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+$/;
    if (!urlPattern.test(sanitized)) {
      setUrlError('Please enter a valid URL');
      return false;
    }

    setUrlError('');
    return true;
  };

  const selectPackage = (pkg: string) => {
    setFormData({ ...formData, package: pkg });
    setStep(2); // Go to add-ons
  };

  const handleStep1Next = () => {
    // Validate existing website URL if "yes" is selected
    if (formData.hasExistingWebsite === "yes") {
      if (!formData.existingWebsiteUrl) {
        setUrlError("Please enter your website URL");
        return;
      }
      if (!validateUrl(formData.existingWebsiteUrl)) {
        return;
      }
    }

    // Validate website purpose
    if (!formData.websitePurpose) {
      setPurposeError("Please select a website purpose");
      return;
    }

    // Validate "other" purpose if selected
    if (formData.websitePurpose === "other" && !formData.otherPurpose.trim()) {
      setPurposeError("Please describe your website purpose");
      return;
    }

    setPurposeError("");
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setStep(4); // Go to confirmation
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Marquee Section */}
      <Marquee text="Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025" />
      
      {/* Hero Section */}
      <section className="relative bg-background py-12 overflow-hidden">
        <div className="absolute inset-0">
          <AnimatedGradientBackground />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-slide-up">
            Web <span className="dark:text-gradient-purple text-gradient-blue">design</span> quote
          </h1>
          <p className="text-lg text-muted-foreground animate-slide-up" style={{animationDelay: "0.1s"}}>
            Fast, Free & Simple – Done in 3 Easy Steps
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-6 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex-1">
              <div className={`text-center ${
                step >= 1 ? "text-primary font-semibold" : "text-muted-foreground"
              }`}>
                <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center border-2 ${
                  step >= 1 ? "bg-primary text-primary-foreground border-primary" : "border-border"
                }`}>
                  1
                </div>
                <p className="text-sm">Design</p>
              </div>
            </div>
            <div className="flex-1">
              <div className={`text-center ${
                step >= 2 ? "text-primary font-semibold" : "text-muted-foreground"
              }`}>
                <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center border-2 ${
                  step >= 2 ? "bg-primary text-primary-foreground border-primary" : "border-border"
                }`}>
                  2
                </div>
                <p className="text-sm">Add-ons</p>
              </div>
            </div>
            <div className="flex-1">
              <div className={`text-center ${
                step >= 3 ? "text-primary font-semibold" : "text-muted-foreground"
              }`}>
                <div className={`w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center border-2 ${
                  step >= 3 ? "bg-primary text-primary-foreground border-primary" : "border-border"
                }`}>
                  3
                </div>
                <p className="text-sm">Your Details</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Design Questions */}
      {step === 1 && (
        <section className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4">
            {/* Benefits with Icons */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-center mb-8">With an Opority website you&apos;ll receive:</h3>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Unlimited support</h4>
                  <p className="text-sm text-muted-foreground">
                    Full training and lifetime support
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Free domain</h4>
                  <p className="text-sm text-muted-foreground">
                    .co.uk or .com domain for life
                  </p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="font-bold mb-2">Complete security</h4>
                  <p className="text-sm text-muted-foreground">
                    24/7 monitoring and spam filtering
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Tell us more about your project
              </h2>

              <div className="bg-card border border-border rounded-xl p-8 space-y-8">
              {/* Existing Website Question */}
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Do you have an existing website that needs to be enhanced?
                </Label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="hasExistingWebsite"
                      value="yes"
                      checked={formData.hasExistingWebsite === "yes"}
                      onChange={(e) => {
                        setFormData({ ...formData, hasExistingWebsite: e.target.value, existingWebsiteUrl: "" });
                        setUrlError("");
                      }}
                      className="w-4 h-4 text-primary"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="hasExistingWebsite"
                      value="no"
                      checked={formData.hasExistingWebsite === "no"}
                      onChange={(e) => {
                        setFormData({ ...formData, hasExistingWebsite: e.target.value, existingWebsiteUrl: "" });
                        setUrlError("");
                      }}
                      className="w-4 h-4 text-primary"
                    />
                    <span>No</span>
                  </label>
                </div>

                {formData.hasExistingWebsite === "yes" && (
                  <div className="mt-4">
                    <Label htmlFor="existingWebsiteUrl" className="mb-2">Website URL *</Label>
                    <Input
                      id="existingWebsiteUrl"
                      type="url"
                      placeholder="https://example.com"
                      value={formData.existingWebsiteUrl}
                      onChange={(e) => {
                        const sanitized = sanitizeInput(e.target.value);
                        setFormData({ ...formData, existingWebsiteUrl: sanitized });
                        setUrlError("");
                      }}
                      onBlur={() => {
                        if (formData.existingWebsiteUrl) {
                          validateUrl(formData.existingWebsiteUrl);
                        }
                      }}
                      className={`mt-2 ${urlError ? 'border-red-500' : ''}`}
                    />
                    {urlError && (
                      <p className="text-red-500 text-sm mt-2">{urlError}</p>
                    )}
                  </div>
                )}
              </div>

              {/* Website Purpose Question */}
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  What would you like your website to do for you? *
                </Label>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="websitePurpose"
                      value="simple"
                      checked={formData.websitePurpose === "simple"}
                      onChange={(e) => {
                        setFormData({ ...formData, websitePurpose: e.target.value, otherPurpose: "" });
                        setPurposeError("");
                      }}
                      className="w-4 h-4 text-primary mt-0.5"
                    />
                    <span>Just a simple site with my info and contacts</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="websitePurpose"
                      value="grow"
                      checked={formData.websitePurpose === "grow"}
                      onChange={(e) => {
                        setFormData({ ...formData, websitePurpose: e.target.value, otherPurpose: "" });
                        setPurposeError("");
                      }}
                      className="w-4 h-4 text-primary mt-0.5"
                    />
                    <span>Help my business grow and appear on Google</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="websitePurpose"
                      value="sell"
                      checked={formData.websitePurpose === "sell"}
                      onChange={(e) => {
                        setFormData({ ...formData, websitePurpose: e.target.value, otherPurpose: "" });
                        setPurposeError("");
                      }}
                      className="w-4 h-4 text-primary mt-0.5"
                    />
                    <span>Sell my products or services online</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="websitePurpose"
                      value="other"
                      checked={formData.websitePurpose === "other"}
                      onChange={(e) => {
                        setFormData({ ...formData, websitePurpose: e.target.value });
                        setPurposeError("");
                      }}
                      className="w-4 h-4 text-primary mt-0.5"
                    />
                    <span>Other</span>
                  </label>
                </div>

                {formData.websitePurpose === "other" && (
                  <div className="mt-4">
                    <Label htmlFor="otherPurpose" className="mb-2">Please describe your website purpose *</Label>
                    <Input
                      id="otherPurpose"
                      type="text"
                      placeholder="Tell us what you want your website to do..."
                      value={formData.otherPurpose}
                      onChange={(e) => {
                        const sanitized = sanitizeInput(e.target.value);
                        setFormData({ ...formData, otherPurpose: sanitized });
                        setPurposeError("");
                      }}
                      className={`mt-2 ${purposeError ? 'border-red-500' : ''}`}
                    />
                  </div>
                )}

                {purposeError && (
                  <p className="text-red-500 text-sm mt-2">{purposeError}</p>
                )}
              </div>
            </div>

            {/* Navigation Button */}
            <div className="mt-8">
              <button
                onClick={handleStep1Next}
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
              >
                Continue
              </button>
            </div>
            </div>
          </div>
        </section>
      )}

      {/* Step 2: Add-ons */}
      {step === 2 && (
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Additional services
            </h2>
            
            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <div className="flex items-start gap-4">
                <Checkbox
                  id="logoDesign"
                  checked={formData.logoDesign}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, logoDesign: checked as boolean })
                  }
                />
                <div className="flex-1">
                  <Label htmlFor="logoDesign" className="text-base font-semibold cursor-pointer">
                    Logo design
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    We can provide a FREE text-based logo. Advanced logo design also available.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Checkbox
                  id="monthlySEO"
                  checked={formData.monthlySEO}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, monthlySEO: checked as boolean })
                  }
                />
                <div className="flex-1">
                  <Label htmlFor="monthlySEO" className="text-base font-semibold cursor-pointer">
                    Monthly SEO
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    From just £50 per month.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Checkbox
                  id="thirdParty"
                  checked={formData.thirdPartyIntegration}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, thirdPartyIntegration: checked as boolean })
                  }
                />
                <div className="flex-1">
                  <Label htmlFor="thirdParty" className="text-base font-semibold cursor-pointer">
                    Integration with 3rd party systems
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    From £45 setup cost.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-3 border border-border rounded-full hover:bg-accent transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
              >
                Continue
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Step 3: Contact Details */}
      {step === 3 && (
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Your details
            </h2>
            
            {/* Package Information - Static Display */}
            <div className="mb-12">
              
              <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
                {/* Plus Package - Static */}
                <div className="bg-card border-2 border-border rounded-xl p-6 opacity-90">
                  <h3 className="text-xl font-bold mb-3">Plus Package</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    An easy starter website with added functionality.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>5 unique pages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Fully responsive design</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Unlimited support</span>
                    </li>
                  </ul>
                </div>

                {/* Max Package - Static */}
                <div className="bg-card border-2 border-primary rounded-xl p-6 relative">
                  <div className="bg-primary text-primary-foreground text-xs font-bold py-1 px-3 rounded-full inline-block mb-2">
                    POPULAR
                  </div>
                  <h3 className="text-xl font-bold mb-3">Max Package</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A powerful, feature-packed website solution
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>10 professional pages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Built-in blog for SEO</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Unlimited support</span>
                    </li>
                  </ul>
                </div>

                {/* Shop Package - Static */}
                <div className="bg-card border-2 border-border rounded-xl p-6 opacity-90">
                  <h3 className="text-xl font-bold mb-3">Shop Package</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    A fast, secure e-commerce store.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Unlimited products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Secure payment options</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>24/7 support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6 max-w-2xl mx-auto">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="postcode">Postcode *</Label>
                <Input
                  id="postcode"
                  type="text"
                  required
                  value={formData.postcode}
                  onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="websiteUrl">Current website URL (if applicable)</Label>
                <Input
                  id="websiteUrl"
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="mt-2"
                  placeholder="https://"
                />
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-border rounded-full hover:bg-accent transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
                >
                  Get Your Quote
                </button>
              </div>
            </form>
          </div>
        </section>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <section className="py-20 bg-background">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-card border border-border rounded-xl p-12">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✓</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Thank you!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your quote request has been received. We&apos;ll be in touch shortly to discuss your {formData.package} package and next steps.
              </p>
              <div className="bg-secondary/30 rounded-lg p-6 mb-8">
                <h3 className="font-semibold mb-4">Your Selected Package:</h3>
                <p className="text-2xl font-bold capitalize mb-4">{formData.package} Package</p>
                {(formData.logoDesign || formData.monthlySEO || formData.thirdPartyIntegration) && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-semibold mb-2">Additional Services:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {formData.logoDesign && <li>• Logo Design</li>}
                      {formData.monthlySEO && <li>• Monthly SEO</li>}
                      {formData.thirdPartyIntegration && <li>• 3rd Party Integration</li>}
                    </ul>
                  </div>
                )}
              </div>
              <Link
                href="/"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-semibold"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
