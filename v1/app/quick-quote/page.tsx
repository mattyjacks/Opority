"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Marquee } from "@/components/marquee";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

type FormData = {
  package: string;
  hasExistingWebsite: string; // "yes" or "no"
  existingWebsiteUrl: string;
  websitePurpose: string;
  otherPurpose: string;
  contentProvision: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  postcode: string;
  websiteUrl: string;
  notSure: boolean;
  logoDesign: boolean;
  monthlySEO: boolean;
  googleBusiness: boolean;
};

export default function WebsiteCreationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    package: "",
    hasExistingWebsite: "",
    existingWebsiteUrl: "",
    websitePurpose: "",
    otherPurpose: "",
    contentProvision: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    postcode: "",
    websiteUrl: "",
    notSure: false,
    logoDesign: false,
    monthlySEO: false,
    googleBusiness: false,
  });

  const [urlError, setUrlError] = useState("");
  const [purposeError, setPurposeError] = useState("");
  const [contentError, setContentError] = useState("");

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  // SQL injection prevention - sanitize input
  const sanitizeInput = (input: string): string => {
    // Remove common SQL injection patterns
    const sanitized = input
      .replace(/['";\\]/g, '') // Remove quotes and backslashes
      .replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi, ''); // Remove SQL keywords
    return sanitized;
  };

  // Lighter sanitization for name fields (allow spaces and common characters)
  const sanitizeNameInput = (input: string): string => {
    // Only remove dangerous SQL characters, allow spaces and letters
    const sanitized = input
      .replace(/['";\\<>]/g, '') // Remove quotes, backslashes, and HTML brackets
      .replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi, ''); // Remove SQL keywords
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

    // Validate content provision
    if (!formData.contentProvision) {
      setContentError("Please select a content provision option");
      return;
    }

    setPurposeError("");
    setContentError("");
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    // Redirect to strategy-call page with pre-filled data as URL parameters
    const params = new URLSearchParams({
      name: formData.firstName,
      email: formData.email,
      phone: formData.phone,
      package: formData.websitePurpose === "simple" ? "Base Package" :
               formData.websitePurpose === "grow" ? "Plus Package" :
               formData.websitePurpose === "sell" ? "Max Package" : "",
      addons: [
        formData.notSure ? "Not sure" : "",
        formData.logoDesign ? "Website maintenance" : "",
        formData.monthlySEO ? "Monthly SEO" : "",
        formData.googleBusiness ? "Google Business Optimisation" : ""
      ].filter(Boolean).join(", ")
    });

    window.location.href = `/strategy-call?${params.toString()}`;
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Marquee Section */}
      <Marquee text="Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025" />
      

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
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Tell us more about your project
              </h2>

              <div className="bg-card border border-border rounded-xl p-8 space-y-8">
              {/* Existing Website Question */}
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Do you have a site that could use some refreshing?
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
                      className="w-4 h-4 rounded-full accent-primary focus:outline-none"
                    />
                    <span className="text-base">Yes</span>
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
                      className="w-4 h-4 rounded-full accent-primary focus:outline-none"
                    />
                    <span className="text-base">No</span>
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
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="websitePurpose"
                      value="simple"
                      checked={formData.websitePurpose === "simple"}
                      onChange={(e) => {
                        setFormData({ ...formData, websitePurpose: e.target.value, otherPurpose: "" });
                        setPurposeError("");
                      }}
                      className="w-4 h-4 rounded-full accent-primary focus:outline-none"
                    />
                    <span className="text-base">An easy starter site for my contact details</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="websitePurpose"
                      value="grow"
                      checked={formData.websitePurpose === "grow"}
                      onChange={(e) => {
                        setFormData({ ...formData, websitePurpose: e.target.value, otherPurpose: "" });
                        setPurposeError("");
                      }}
                      className="w-4 h-4 rounded-full accent-primary focus:outline-none"
                    />
                    <span className="text-base">To promote my business and appear in search results</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="websitePurpose"
                      value="sell"
                      checked={formData.websitePurpose === "sell"}
                      onChange={(e) => {
                        setFormData({ ...formData, websitePurpose: e.target.value, otherPurpose: "" });
                        setPurposeError("");
                      }}
                      className="w-4 h-4 rounded-full accent-primary focus:outline-none"
                    />
                    <span className="text-base">I want to sell my products / services online</span>
                  </label>
                </div>

                {purposeError && (
                  <p className="text-red-500 text-sm mt-2">{purposeError}</p>
                )}
              </div>

              {/* Content Provision Question */}
              <div>
                <Label htmlFor="contentProvision" className="text-base font-semibold mb-4 block">
                  What content are you able to provide for us? *
                </Label>
                <Select
                  value={formData.contentProvision}
                  onValueChange={(value) => {
                    setFormData({ ...formData, contentProvision: value });
                    setContentError("");
                  }}
                >
                  <SelectTrigger id="contentProvision" className={`w-full !w-full min-w-0 ${contentError ? 'border-red-500' : ''}`}>
                    <SelectValue placeholder="- Please select -" className="truncate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">I can provide all my content</SelectItem>
                    <SelectItem value="some">I can provide some of the content</SelectItem>
                    <SelectItem value="none">I&apos;d like you to provide the content for me</SelectItem>
                  </SelectContent>
                </Select>

                {contentError && (
                  <p className="text-red-500 text-sm mt-2">{contentError}</p>
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
        </section>
      )}

      {/* Step 2: Add-ons */}
      {step === 2 && (
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-muted-foreground">
              Please choose any additional services you would like to add to your website quotation:
            </h2>

            <div className="bg-card border border-border rounded-xl p-8 space-y-6">
              <div className="flex items-center gap-4">
                <Checkbox
                  id="monthlySEO"
                  checked={formData.monthlySEO}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, monthlySEO: checked as boolean, notSure: false })
                  }
                />
                <Label htmlFor="monthlySEO" className="text-base text-muted-foreground cursor-pointer">
                  Monthly Search Engine Optimisation (SEO)
                </Label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox
                  id="logoDesign"
                  checked={formData.logoDesign}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, logoDesign: checked as boolean, notSure: false })
                  }
                />
                <Label htmlFor="logoDesign" className="text-base text-muted-foreground cursor-pointer">
                  Website maintenance
                </Label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox
                  id="googleBusiness"
                  checked={formData.googleBusiness}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, googleBusiness: checked as boolean, notSure: false })
                  }
                />
                <Label htmlFor="googleBusiness" className="text-base text-muted-foreground cursor-pointer">
                  Google Business Optimisation
                </Label>
              </div>

              <div className="flex items-center gap-4">
                <Checkbox
                  id="notSure"
                  checked={formData.notSure}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      notSure: checked as boolean,
                      logoDesign: false,
                      monthlySEO: false,
                      googleBusiness: false
                    })
                  }
                />
                <Label htmlFor="notSure" className="text-base text-muted-foreground cursor-pointer">
                  Not sure at this stage
                </Label>
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
            {/* Pricing Display Section */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-6">Your Selected Package</h3>

              {/* Package Pricing Card - All-in-One */}
              {(() => {
                const basePrice = formData.websitePurpose === "simple" ? 397 :
                                 formData.websitePurpose === "grow" ? 597 : 797;
                const oneTimeTotal = basePrice + (formData.googleBusiness ? 97 : 0);
                const monthlyTotal = (formData.logoDesign ? 147 : 0) + (formData.monthlySEO ? 197 : 0);
                const grandTotal = oneTimeTotal + monthlyTotal;

                return (
                  <div className="bg-primary/5 border-2 border-primary rounded-lg p-4 sm:p-6 md:p-8">
                    {/* Package Header with Icon */}
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                          {formData.websitePurpose === "simple" && "Base Package"}
                          {formData.websitePurpose === "grow" && "Plus Package"}
                          {formData.websitePurpose === "sell" && "Max Package"}
                        </h4>
                      </div>

                      {/* Package Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-primary/10 rounded-full flex items-center justify-center">
                          {formData.websitePurpose === "simple" && (
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          )}
                          {formData.websitePurpose === "grow" && (
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          )}
                          {formData.websitePurpose === "sell" && (
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L7 7H17L12 2Z" />
                              <path d="M7 7L2 12L12 22L22 12L17 7H7Z" opacity="0.8" />
                              <path d="M7 7L12 22L17 7H7Z" opacity="0.4" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Base Package Price */}
                    <div className="mb-6 pb-6 border-b border-primary/20">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm sm:text-base text-muted-foreground font-medium">Base package price:</span>
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                          £{basePrice}
                        </span>
                      </div>
                    </div>

                    {/* Additional Services Section */}
                    {(formData.logoDesign || formData.monthlySEO || formData.googleBusiness) && (
                      <div className="mb-6 pb-6 border-b border-primary/20">
                        <h4 className="text-sm sm:text-base font-semibold mb-4 text-foreground">Additional Services:</h4>
                        <div className="space-y-3">
                          {formData.logoDesign && (
                            <div className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm sm:text-base font-medium text-foreground">Website maintenance</p>
                                <p className="text-xs sm:text-sm text-muted-foreground">£147/month</p>
                              </div>
                            </div>
                          )}
                          {formData.monthlySEO && (
                            <div className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm sm:text-base font-medium text-foreground">Monthly SEO</p>
                                <p className="text-xs sm:text-sm text-muted-foreground">£197/month</p>
                              </div>
                            </div>
                          )}
                          {formData.googleBusiness && (
                            <div className="flex items-start gap-3">
                              <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm sm:text-base font-medium text-foreground">Google Business Optimisation</p>
                                <p className="text-xs sm:text-sm text-muted-foreground">£97 one-time</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Totals Section */}
                    <div className="space-y-4">
                      <h4 className="text-sm sm:text-base font-semibold text-foreground">Pricing Summary:</h4>

                      {/* One-time Total */}
                      <div className="flex items-center justify-between gap-4 bg-background/50 rounded-lg p-3 sm:p-4">
                        <span className="text-sm sm:text-base font-semibold text-foreground">One-time Total:</span>
                        <span className="text-xl sm:text-2xl font-bold text-primary">£{oneTimeTotal}</span>
                      </div>

                      {/* Monthly Total */}
                      {monthlyTotal > 0 && (
                        <div className="flex items-center justify-between gap-4 bg-background/50 rounded-lg p-3 sm:p-4">
                          <span className="text-sm sm:text-base font-semibold text-foreground">Monthly Total:</span>
                          <span className="text-xl sm:text-2xl font-bold text-primary">£{monthlyTotal}<span className="text-sm font-normal">/mo</span></span>
                        </div>
                      )}

                      {/* Grand Total - Most Prominent */}
                      {monthlyTotal > 0 && (
                        <div className="flex items-center justify-between gap-4 bg-primary/10 rounded-lg p-4 sm:p-5 mt-4 border-2 border-primary/30">
                          <div className="flex flex-col">
                            <span className="text-base sm:text-lg font-bold text-foreground">Total Quote</span>
                            <span className="text-xs sm:text-sm text-muted-foreground">(First Payment)</span>
                          </div>
                          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">£{grandTotal}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Your details
            </h2>

            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6 max-w-2xl mx-auto">
              <div>
                <Label htmlFor="firstName">Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => {
                    const sanitized = sanitizeNameInput(e.target.value);
                    setFormData({ ...formData, firstName: sanitized });
                  }}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => {
                    // For phone, allow numbers, spaces, +, -, (, )
                    const sanitized = e.target.value.replace(/[^0-9\s\+\-\(\)]/g, '');
                    setFormData({ ...formData, phone: sanitized });
                  }}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => {
                    // Email sanitization - remove dangerous characters but keep @ and .
                    const sanitized = e.target.value.replace(/['";\\<>]/g, '');
                    setFormData({ ...formData, email: sanitized });
                  }}
                  className="mt-2"
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
                {(formData.notSure || formData.logoDesign || formData.monthlySEO || formData.googleBusiness) && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm font-semibold mb-2">Additional Services:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {formData.notSure && <li>• Not sure at this stage</li>}
                      {formData.logoDesign && <li>• Website maintenance</li>}
                      {formData.monthlySEO && <li>• Monthly Search Engine Optimisation (SEO)</li>}
                      {formData.googleBusiness && <li>• Google Business Optimisation</li>}
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
