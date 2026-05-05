# Component Reference Guide

Quick reference for all components in the project.

## 📍 Component Directory

All components are located in `src/components/`

## 🔍 Component Overview

### 1. Navigation.tsx
**What it does:** Top navigation bar with logo and menu

**Where it appears:** Fixed at the top of every page

**Key elements:**
- Logo/Brand name
- Navigation links (About, Design, Impact, Contact)
- Mobile hamburger menu
- Responsive design

**Customization points:**
- Line 10: Change "Your Brand"
- Lines 16-22: Update navigation links
- Line 1: Change styling/colors

**Example:**
```tsx
<Link href="/" className="text-2xl font-bold text-gray-800">
  Your Brand  <!-- Change this -->
</Link>
```

---

### 2. HeroSection.tsx
**What it does:** Large banner at top with headline and CTA buttons

**Where it appears:** Right after navigation

**Key elements:**
- Large headline
- Subheading
- Call-to-action buttons
- Hero image

**Customization points:**
- Line 7: Change headline
- Line 10: Change subheading
- Line 13-14: Update button text
- Line 15: Replace hero image

**Example:**
```tsx
<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
  Sustainable Solutions for Your Business  <!-- Change this -->
</h1>
```

---

### 3. ProductShowcase.tsx
**What it does:** Shows 3 main products/services in a grid

**Where it appears:** Below hero section

**Key elements:**
- 3 product cards
- Product image
- Product name
- Product description
- Product icon (emoji)

**Customization points:**
- Line 3: Update product array
  - `title`: Product name
  - `description`: What it does
  - `image`: Product image URL
  - `icon`: Change emoji

**Example:**
```tsx
const products = [
  {
    title: 'Your Product Name',
    description: 'Your product description goes here',
    image: 'https://unsplash.com/...',
    icon: '🎯',
  },
  // ... more products
];
```

**Emojis:** 🎯 ⚡ 🔒 💡 🚀 ✨ 🌟 💎 🏆

---

### 4. Certifications.tsx
**What it does:** Shows 6 certifications or badges

**Where it appears:** Below products

**Key elements:**
- 6 certification cards
- Certification name
- Description
- Icon (emoji)
- Green/teal background

**Customization points:**
- Line 3: Update certifications array
  - `title`: Certification name
  - `description`: What it means
  - `icon`: Change emoji

**Example:**
```tsx
const certifications = [
  {
    title: 'Your Certification',
    description: 'What this certification means',
    icon: '🌲',
  },
  // ... more certifications
];
```

**Emojis:** 🌲 🌍 ♻️ 📦 🌱 🍃 🏆 ✅ 🎖️

---

### 5. Features.tsx
**What it does:** Highlights 4 key features or benefits

**Where it appears:** Below certifications

**Key elements:**
- 4 feature cards in 2 columns
- Feature icon (emoji)
- Feature title
- Feature description
- Gray background with hover effect

**Customization points:**
- Line 3: Update features array
  - `title`: Feature name
  - `description`: Feature benefit
  - `icon`: Change emoji

**Example:**
```tsx
const features = [
  {
    title: 'Your Feature',
    description: 'What this feature does for customers',
    icon: '⚡',
  },
  // ... more features
];
```

---

### 6. Sustainability.tsx
**What it does:** Environmental impact section with benefits

**Where it appears:** Below features

**Key elements:**
- 3 sustainability focus areas with images
- Feature descriptions
- Benefits list with checkmarks
- Cost savings information box

**Customization points:**
- Line 3: Update sustainability items
  - `title`: Focus area name
  - `description`: What this means
  - `image`: Your image URL
- Line 27-45: Update benefits list

**Example:**
```tsx
const sustainabilityItems = [
  {
    title: 'Your Sustainability Focus',
    description: 'Your description here',
    image: 'https://unsplash.com/...',
  },
  // ... more items
];
```

---

### 7. CaseStudiesCarousel.tsx
**What it does:** Interactive carousel showing case studies

**Where it appears:** Below sustainability section

**Key elements:**
- Full-width image
- Carousel arrows (← →)
- Dot navigation indicators
- Text overlay on image
- Auto-swappable slides

**Customization points:**
- Line 7: Update caseStudies array
  - `title`: Case study title
  - `description`: What the case study achieved
  - `image`: Your image URL

**How to use:**
- Click left/right arrows to navigate
- Click dots to jump to specific slide
- Add/remove case studies by editing the array

**Example:**
```tsx
const caseStudies = [
  {
    id: 1,
    title: 'Your Case Study Title',
    description: 'What was achieved or learned',
    image: 'https://unsplash.com/...',
  },
  // ... more case studies
];
```

---

### 8. ContactForm.tsx
**What it does:** Contact form for visitors to submit inquiries

**Where it appears:** Second to last section, before footer

**Key elements:**
- Name field
- Email field
- Subject field
- Message textarea
- Submit button
- Success message (shows after submit)

**Customization points:**
- Line 20: Update form submission handler
- Update form fields if needed

**Currently:** Logs to console (placeholder)

**To connect:**
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Send to your API/backend
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  if (response.ok) {
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  }
};
```

---

### 9. Footer.tsx
**What it does:** Bottom section with links and contact info

**Where it appears:** At the very bottom of every page

**Key elements:**
- Company name and description
- 4 column layout (About, Products, Contact)
- Links to different sections
- Social media links
- Contact information
- Copyright notice

**Customization points:**
- Line 15: Company name
- Line 20: Company description
- Line 24-48: Update footer links
- Line 80: Change email
- Line 83: Change phone number
- Line 89-99: Update social media links
- Line 103: Company address

**Example:**
```tsx
// Update email
<a href="mailto:your-email@company.com">
  your-email@company.com  <!-- Change this -->
</a>

// Update social media
<a href="https://linkedin.com/company/yourcompany">
  LinkedIn  <!-- Or any social media -->
</a>
```

---

## 🎨 Color Reference

All colors use Tailwind CSS classes:

| Element | Color Class | Where Used |
|---------|------------|-----------|
| Primary Button | `bg-blue-600` | Buttons, links |
| Primary Hover | `hover:bg-blue-700` | Button hover states |
| Sustainability Section | `bg-green-50` | Background |
| Text | `text-gray-900` | Main text |
| Subtext | `text-gray-600` | Descriptions |
| Muted | `text-gray-400` | Footer text |
| Icons | Various emoji | All sections |

### Change Color Scheme
To change primary color from blue to another color:
1. Search for `bg-blue-600` in all components
2. Replace with your color: `bg-red-600`, `bg-green-600`, `bg-purple-600`, etc.

---

## 📐 Layout Structure

```
Page Layout:
├── Navigation (Fixed at top)
├── HeroSection
├── ProductShowcase
├── Certifications
├── Features
├── Sustainability
├── CaseStudiesCarousel
├── ContactForm
└── Footer (Fixed at bottom)
```

---

## 🔄 Data Flow

```
Homepage (page.tsx)
    ↓
    Imports all components
    ↓
    Renders in order:
    - Navigation
    - HeroSection
    - ProductShowcase
    - Certifications
    - Features
    - Sustainability
    - CaseStudiesCarousel
    - ContactForm
    - Footer
```

---

## ✂️ Component Usage

### To use a component:
```tsx
// Import at top of file
import ComponentName from '@/components/ComponentName';

// Use in JSX
<ComponentName />
```

### To create a new page with specific components:
```tsx
// src/app/services/page.tsx
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import ContactForm from '@/components/ContactForm';

export default function Services() {
  return (
    <>
      <HeroSection />
      <Features />
      <ContactForm />
    </>
  );
}
```

---

## 🎯 Component States

### Navigation
- Default: Black text on white background
- Hover: Text turns blue
- Mobile: Menu appears when hamburger clicked

### Buttons
- Default: Blue background with white text
- Hover: Darker blue background
- Active: Even darker blue

### Forms
- Input default: White with gray border
- Input focus: Blue border
- Success: Green background message

### Carousel
- Current slide: Highlighted
- Dot indicators: Change color to show current slide
- Arrows: Clickable to navigate

---

## 📝 Adding Custom Content

### Add a new product:
1. Open `ProductShowcase.tsx`
2. Add new object to `products` array
3. Reload page

### Add a new case study:
1. Open `CaseStudiesCarousel.tsx`
2. Add new object to `caseStudies` array
3. Reload page

### Add a new page:
1. Create new file in `src/app/your-page/page.tsx`
2. Import components
3. Update Navigation links

---

## 🐛 Debugging Tips

**Images not showing?**
- Check browser console (F12)
- Verify image URL is correct
- Try using full URLs instead of relative paths
- Check image file exists in `public/` folder

**Form not submitting?**
- Check browser console for errors
- Verify API endpoint exists
- Test with Formspree for quick setup

**Styling issues?**
- Clear browser cache (Ctrl+Shift+Del)
- Restart dev server (npm run dev)
- Check Tailwind CSS classes are typed correctly

**Links not working?**
- Verify page files exist in `src/app/`
- Check href paths are correct
- Test in different browser

---

## 📚 Component Dependencies

| Component | Depends On |
|-----------|-----------|
| Navigation | React, Next.js Link |
| HeroSection | Next.js Image |
| ProductShowcase | Next.js Image |
| Certifications | None (self-contained) |
| Features | None (self-contained) |
| Sustainability | Next.js Image |
| CaseStudiesCarousel | React hooks (useState) |
| ContactForm | React hooks (useState) |
| Footer | Next.js Link |

---

This guide covers all components in the template. For more details, check inline comments in each component file!
