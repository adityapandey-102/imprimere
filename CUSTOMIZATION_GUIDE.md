# Website Customization Guide

This guide walks you through customizing the template for your client's website.

## 📌 Quick Overview

The website has 8 main sections:
1. Navigation (Header)
2. Hero Section (Hero banner with CTA)
3. Product Showcase (3 product cards)
4. Certifications (6 certification badges)
5. Features (4 key features)
6. Sustainability (Environmental benefits)
7. Case Studies Carousel (Interactive slider)
8. Contact Form (Get inquiries)
9. Footer

## 🎯 Step-by-Step Customization

### Step 1: Update Brand Name

**Files to edit:**
- `src/components/Navigation.tsx` (line 10)
- `src/components/Footer.tsx` (line 15)
- `src/app/layout.tsx` (line 16)

**Example:**
```tsx
// Before
<h3 className="text-white font-bold text-lg mb-4">Your Brand</h3>

// After
<h3 className="text-white font-bold text-lg mb-4">Your Client Company</h3>
```

### Step 2: Replace Images

**All images currently use Unsplash placeholder URLs.**

#### Option A: Use your own images
1. Save your images to `public/images/`
2. Update the `src` in components

**File: `src/components/HeroSection.tsx` (line 15)**
```tsx
// Change from:
src="https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=500&fit=crop"

// To:
src="/images/your-hero-image.jpg"
```

#### Option B: Use different free stock photos
- **Unsplash**: https://unsplash.com (photos used now)
- **Pexels**: https://pexels.com
- **Pixabay**: https://pixabay.com
- **Placeholder.com**: https://placeholder.com

Just replace the URL.

### Step 3: Update Products

**File: `src/components/ProductShowcase.tsx`**

```tsx
const products = [
  {
    title: 'Your Product 1',
    description: 'Your product description goes here',
    image: '/images/product1.jpg',  // or Unsplash URL
    icon: '🎯',  // Change emoji as needed
  },
  {
    title: 'Your Product 2',
    description: 'Your product description goes here',
    image: '/images/product2.jpg',
    icon: '⚡',
  },
  {
    title: 'Your Product 3',
    description: 'Your product description goes here',
    image: '/images/product3.jpg',
    icon: '🔒',
  },
];
```

**Emoji options:** 🎯 ⚡ 🔒 💡 🚀 ✨ 🌟 💎 🏆

### Step 4: Update Certifications

**File: `src/components/Certifications.tsx`**

```tsx
const certifications = [
  {
    title: 'Your Certification 1',
    description: 'Certification description',
    icon: '🌲',
  },
  {
    title: 'Your Certification 2',
    description: 'Certification description',
    icon: '🌍',
  },
  // ... update all 6 items
];
```

**Emoji options:** 🌲 🌍 ♻️ 📦 🌱 🍃 🏆 ✅ 🎖️

### Step 5: Update Features

**File: `src/components/Features.tsx`**

```tsx
const features = [
  {
    title: 'Feature 1',
    description: 'Feature description',
    icon: '🎯',
  },
  {
    title: 'Feature 2',
    description: 'Feature description',
    icon: '⚡',
  },
  {
    title: 'Feature 3',
    description: 'Feature description',
    icon: '🔧',
  },
  {
    title: 'Feature 4',
    description: 'Feature description',
    icon: '🔒',
  },
];
```

### Step 6: Update Sustainability Section

**File: `src/components/Sustainability.tsx`**

```tsx
const sustainabilityItems = [
  {
    title: 'Sustainability Focus 1',
    description: 'Your description',
    image: '/images/sustainability1.jpg',
  },
  {
    title: 'Sustainability Focus 2',
    description: 'Your description',
    image: '/images/sustainability2.jpg',
  },
  {
    title: 'Sustainability Focus 3',
    description: 'Your description',
    image: '/images/sustainability3.jpg',
  },
];

// Also update the benefits list:
<li className="flex items-start">
  <span className="text-green-600 font-bold mr-3">✓</span>
  <span>Your benefit here</span>
</li>
```

### Step 7: Update Case Studies

**File: `src/components/CaseStudiesCarousel.tsx`**

```tsx
const caseStudies = [
  {
    id: 1,
    title: 'Case Study 1',
    description: 'Your case study description',
    image: '/images/case-study-1.jpg',
  },
  {
    id: 2,
    title: 'Case Study 2',
    description: 'Your case study description',
    image: '/images/case-study-2.jpg',
  },
  {
    id: 3,
    title: 'Case Study 3',
    description: 'Your case study description',
    image: '/images/case-study-3.jpg',
  },
];
```

### Step 8: Update Contact Information

**File: `src/components/Footer.tsx`**

```tsx
// Update email
<a href="mailto:your-email@company.com" className="hover:text-white transition">
  your-email@company.com
</a>

// Update phone
<a href="tel:+1234567890" className="hover:text-white transition">
  +1 (123) 456-7890
</a>

// Update social media links
<a href="https://linkedin.com/company/yourcompany" className="hover:text-white transition">
  LinkedIn
</a>
<a href="https://instagram.com/yourcompany" className="hover:text-white transition">
  Instagram
</a>
<a href="https://youtube.com/@yourcompany" className="hover:text-white transition">
  YouTube
</a>
```

### Step 9: Connect Contact Form

**File: `src/components/ContactForm.tsx`**

Currently, the form only logs to console. Connect it to your backend:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    // Send to your backend API
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      console.error('Form submission failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
```

Or use a third-party service like:
- **Formspree**: https://formspree.io
- **EmailJS**: https://www.emailjs.com
- **SendGrid**: https://sendgrid.com

### Step 10: Update SEO Metadata

**File: `src/app/layout.tsx`**

```tsx
export const metadata: Metadata = {
  title: "Your Client Company - Your Tagline",
  description: "Detailed description of your client's business and services. This shows up in search results.",
  keywords: ["keyword1", "keyword2", "keyword3"],
};
```

### Step 11: Customize Colors

All colors use Tailwind CSS classes. To change the color scheme:

**Key color classes:**
- `bg-blue-600` → Primary blue (change to `bg-red-600`, `bg-green-600`, etc.)
- `bg-green-50` → Sustainability section background
- `text-gray-900` → Main text color

**Example: Change primary color from blue to green**

1. Find all `bg-blue-600` or `text-blue-600`
2. Replace with `bg-green-600` or `text-green-600`

**Files to update:**
- `src/components/Navigation.tsx`
- `src/components/HeroSection.tsx`
- `src/components/ContactForm.tsx`
- `src/components/CaseStudiesCarousel.tsx`

### Step 12: Add More Pages

Create new pages by adding files to `src/app/`:

**Example: Create an About page**

```tsx
// src/app/about/page.tsx
export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">About Us</h1>
      <p className="text-lg text-gray-600">Your company story here...</p>
    </div>
  );
}
```

Then update `src/components/Navigation.tsx` to add the link:

```tsx
<Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
  About
</Link>
```

## 📋 Complete Customization Checklist

- [ ] Update brand name in Navigation, Footer, Layout
- [ ] Replace hero section image
- [ ] Update hero section headline and description
- [ ] Replace product images
- [ ] Update product titles and descriptions
- [ ] Add product icons (emojis)
- [ ] Update certifications (titles, descriptions, icons)
- [ ] Update features (titles, descriptions, icons)
- [ ] Update sustainability section text and images
- [ ] Update sustainability benefits list
- [ ] Update case studies (titles, descriptions, images)
- [ ] Update contact information (email, phone)
- [ ] Update social media links
- [ ] Connect contact form to backend
- [ ] Update metadata for SEO
- [ ] Test all links and forms
- [ ] Test on mobile devices
- [ ] Customize colors (if needed)
- [ ] Deploy to production

## 🔧 Testing Before Deployment

1. **Local Testing**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

2. **Production Build Test**
   ```bash
   npm run build
   npm start
   ```

3. **Check All**
   - Navigation links work
   - Images load properly
   - Forms are functional
   - Mobile menu works
   - Carousel navigation works
   - Contact form can be submitted

4. **Mobile Testing**
   - Test on iPhone/iPad
   - Test on Android devices
   - Check responsive layout
   - Test touch interactions

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- **AWS Amplify**: Deploy from GitHub
- **Netlify**: Drag and drop or connect GitHub
- **Docker**: Create containerized version

## 💡 Tips & Best Practices

1. **Image Optimization**
   - Compress images before uploading
   - Use WebP format when possible
   - Target these sizes:
     - Hero: 1200×600px
     - Products: 400×400px
     - Case studies: 800×600px

2. **Content Length**
   - Headlines: 5-10 words
   - Descriptions: 1-2 sentences
   - Benefits: Keep them concise

3. **Mobile First**
   - Always test on actual mobile devices
   - Touch targets should be 48×48px minimum
   - Test portrait and landscape modes

4. **Performance**
   - Keep image file sizes under 500KB
   - Monitor Core Web Vitals
   - Test with PageSpeed Insights

5. **Accessibility**
   - Test with keyboard navigation
   - Use alt text for all images
   - Test with screen readers

## ❓ Common Questions

**Q: Can I add more sections?**
A: Yes! Create a new component in `src/components/` and import it into `src/app/page.tsx`.

**Q: How do I change fonts?**
A: Edit `src/app/layout.tsx` and import different Google Fonts.

**Q: Can I use my own logo?**
A: Save it to `public/` and update the Navigation component.

**Q: How do I make the form actually work?**
A: Connect it to a backend API or use a service like Formspree.

---

**Need help?** Check the component files for inline comments. Each component is self-contained and easy to understand!
