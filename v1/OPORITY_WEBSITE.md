# Opority Website - Version 1

## Overview

This is the new Opority marketing website built with Next.js 15, TypeScript, and Tailwind CSS. The website showcases Opority's services including web design, website creation, consulting, and Meta advertising (paid ads).

## Website Structure

### Pages Created

1. **Home Page** (`/`)
   - Hero section with award badge
   - "You Don't Need More Clicks" section
   - "Why Your Website Isn't Getting You Clients" section
   - FAQs
   - Multiple CTAs throughout
   - Based on: https://opority.framer.website

2. **Strategy Call** (`/strategy-call`)
   - Renamed from /contact as requested
   - Features Calendly integration link: https://calendly.com/arnoldkostecki/strategy-call
   - Discovery call information
   - Based on: https://opority.framer.website/contact

3. **Website Creation** (`/website-creation`)
   - Quick quote page with package selection
   - Three packages: Plus, Max, and Shop
   - Interactive package selection
   - Based on: https://itseeze.com/quick-quote/

4. **Web Design** (`/web-design`)
   - Bespoke web design services
   - Project showcase section
   - SEO and editing features
   - Process overview
   - Based on: https://itseeze.com/services/web-design/

5. **Consulting** (`/consulting`)
   - Social Media Management
   - 1:1 Coaching
   - Team Consultancy
   - "Why Opority?" section
   - Space for VSL videos (placeholder included)
   - Based on: https://www.reevesocialmedia.co.uk/services

6. **Paid Ads** (`/paid-ads`)
   - Meta Ads specialization (Facebook & Instagram)
   - Note: Adapted from Google Ads agency (Coder Agency) to Meta Ads focus
   - ROI focus with stats
   - Ad services breakdown
   - Based on: https://coderagency.co.uk/paid-ads/

7. **Team** (`/team`)
   - Team member profiles (placeholders for actual content)
   - Mission statement

8. **Privacy Policy** (`/privacy`)
   - GDPR compliant privacy policy
   - Company information

## Components

### Navigation (`components/navigation.tsx`)
- Sticky header with Opority branding
- Desktop navigation with dropdown for Solutions
- Mobile-responsive hamburger menu
- Links to all main pages

### Footer (`components/footer.tsx`)
- Company information
- Quick links to all pages
- Company number: 15783178
- Award badge text

## Design System

### Colors (Opority Theme)
The website uses a professional blue color scheme:

**Light Mode:**
- Primary: `hsl(222, 47%, 11%)` - Dark blue
- Secondary: `hsl(210, 40%, 96.1%)` - Light blue
- Accent colors in blue tones

**Dark Mode:**
- Primary: `hsl(0, 0%, 98%)` - White
- Background: `hsl(222, 47%, 11%)` - Dark blue
- Inverted color scheme for dark mode

### Typography
- Font: Geist Sans (from next/font/google)
- Responsive text sizing
- Clear hierarchy with bold headings

## Key Features

1. **Responsive Design** - Mobile-first approach
2. **Modern UI** - Clean, professional design with gradients and cards
3. **Interactive Elements** - Hover effects, smooth transitions
4. **SEO Optimized** - Proper meta tags and semantic HTML
5. **Conversion Focused** - Multiple CTAs throughout
6. **Accessibility** - Semantic HTML and ARIA labels

## Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The site will be available at http://localhost:3000

## Content Updates Needed

1. **Team Page**: Add actual team member photos, names, and bios
2. **Consulting Page**: Add VSL (Video Sales Letter) videos where placeholders exist
3. **Web Design Page**: Add actual project screenshots/case studies
4. **Home Page**: Add client logos for "Trusted By Many" section
5. **All Pages**: Review and refine copy as needed

## Important Notes

- **Calendly Link**: Integrated at `/strategy-call` with link to https://calendly.com/arnoldkostecki/strategy-call
- **Contact Renamed**: `/contact` is now `/strategy-call` as requested
- **Meta Ads Focus**: Paid ads page emphasizes Meta (Facebook/Instagram) advertising, not Google Ads
- **Opority Colors**: Professional blue theme applied throughout
- **Company Details**: Company Number 15783178 included in footer

## Navigation Structure

```
Home (/)
├── Solutions (Dropdown)
│   ├── Website Creation (/website-creation)
│   ├── Web Design (/web-design)
│   ├── Consulting (/consulting)
│   └── Paid Ads (/paid-ads)
├── Team (/team)
└── Contact Us (/strategy-call)

Footer Links:
├── Privacy Policy (/privacy)
└── All main service pages
```

## Next Steps

1. Add real content (team photos, project images, videos)
2. Test all CTAs and links
3. Add analytics tracking
4. Set up Calendly embed (currently using direct link)
5. Add client testimonials and logos
6. Review and optimize for SEO
7. Test on various devices and browsers

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible UI components
- **next-themes** - Dark mode support
- **React 19** - Latest React features

## Award Recognition

The website prominently features:
**"Rated Top 3 Advertising & Marketing StartUp in the East Of England 2025"**

This appears on the home page hero section and throughout the site.
