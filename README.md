# Your Brand - Website Template

A modern, fully responsive Next.js website template built with TypeScript and Tailwind CSS. This template replicates the UI/UX structure of a premium sustainable business website with placeholder content and free stock images.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth transitions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Component-Based**: Reusable, well-organized React components
- **TypeScript**: Full type safety throughout the project
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Image Optimization**: Next.js Image component with lazy loading
- **SEO Ready**: Proper metadata and semantic HTML

## 📋 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navigation and Footer
│   ├── page.tsx            # Home page combining all sections
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── Navigation.tsx      # Top navigation with mobile menu
│   ├── HeroSection.tsx     # Hero banner with CTA buttons
│   ├── ProductShowcase.tsx # Product showcase with 3 items
│   ├── Certifications.tsx  # Certifications/badges grid
│   ├── Features.tsx        # Key features list
│   ├── Sustainability.tsx  # Environmental impact section
│   ├── CaseStudiesCarousel.tsx # Interactive carousel
│   ├── ContactForm.tsx     # Contact form with validation
│   └── Footer.tsx          # Footer with links and info
└── public/                 # Static assets
```

## 🎨 Included Components

- **Navigation**: Fixed header with responsive menu
- **Hero Section**: Large impact banner with CTAs
- **Product Showcase**: 3-column product grid
- **Certifications**: Badge/certification cards (6 items)
- **Features**: Key highlights section (4 items)
- **Sustainability**: Environmental impact focus (3 areas)
- **Case Studies Carousel**: Interactive image carousel with navigation
- **Contact Form**: Functional contact form with validation
- **Footer**: Multi-column footer with links and info

## 🚀 Quick Start

### Installation

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

Visit `http://localhost:3000`

## 📝 Customization Guide

### 1. Update Brand Name
Edit these files and replace "Your Brand":
- [src/components/Navigation.tsx](src/components/Navigation.tsx)
- [src/components/Footer.tsx](src/components/Footer.tsx)
- [src/app/layout.tsx](src/app/layout.tsx)

### 2. Replace Images

All images currently use Unsplash placeholder URLs. Replace them:

**Option A**: Use your own images
1. Save images to `public/images/` folder
2. Update image `src` in components:
```tsx
// Change from:
src="https://images.unsplash.com/..."

// To:
src="/images/your-image.jpg"
```

**Option B**: Use different free image sources
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Pixabay: https://pixabay.com

### 3. Update Products
Edit [src/components/ProductShowcase.tsx](src/components/ProductShowcase.tsx):
```tsx
const products = [
  {
    title: 'Your Product 1',
    description: 'Your description here',
    image: 'your-image-url',
    icon: '🎯',
  },
];
```

### 4. Update Certifications
Edit [src/components/Certifications.tsx](src/components/Certifications.tsx):
```tsx
const certifications = [
  {
    title: 'Certification Name',
    description: 'Your description',
    icon: '🏆',
  },
];
```

### 5. Update Features
Edit [src/components/Features.tsx](src/components/Features.tsx):
```tsx
const features = [
  {
    title: 'Feature Title',
    description: 'Feature description',
    icon: '⚡',
  },
];
```

### 6. Update Contact Info
Edit [src/components/Footer.tsx](src/components/Footer.tsx):
- Email address
- Phone number
- Social media links
- Office location

### 7. Connect Contact Form
Currently logs to console. Connect to your backend in [src/components/ContactForm.tsx](src/components/ContactForm.tsx):

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Send to your API endpoint
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

### 8. Update Metadata
Edit [src/app/layout.tsx](src/app/layout.tsx) for SEO:
```tsx
export const metadata: Metadata = {
  title: "Your Company - Your Tagline",
  description: "Your company description",
};
```

## 🎨 Color Customization

All colors use Tailwind CSS. Key colors to customize:
- **Blue** (`bg-blue-600`): Primary action color
- **Green** (`bg-green-50`): Sustainability section
- **Gray** (`text-gray-*`): Text and backgrounds

Edit component files to change colors throughout.

## 📄 Add More Pages

Create new pages in `src/app/`:

```tsx
// src/app/about/page.tsx
export default function About() {
  return <div>About page content</div>;
}
```

Then update navigation links.

## 📱 Responsive Design

The template is mobile-first and responsive at all breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
- AWS Amplify
- Netlify
- Docker
- Any Node.js hosting

## ✅ Customization Checklist

- [ ] Update company name/branding
- [ ] Replace placeholder images
- [ ] Update product information
- [ ] Update certifications/badges
- [ ] Update features list
- [ ] Update sustainability information
- [ ] Update case studies
- [ ] Update contact information
- [ ] Update footer links
- [ ] Connect contact form
- [ ] Update metadata/SEO
- [ ] Test on mobile
- [ ] Deploy to production

## 📚 Tech Stack

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first styling
- **React Hooks**: State management

## 💡 Best Practices

1. **Images**: Optimize images for web (compress, right size)
2. **Mobile**: Always test on real mobile devices
3. **Performance**: Monitor Core Web Vitals
4. **Accessibility**: Test with keyboard and screen readers
5. **Analytics**: Add Google Analytics or similar
6. **Content**: Keep information up-to-date

## 📖 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Docs](https://react.dev)

---

**Need help?** Check component files for inline comments. Each component is self-contained and easy to modify!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
