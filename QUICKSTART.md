# ⚡ Quick Start Checklist

Use this checklist to quickly customize the template for your client.

## 🚀 Get Running (5 minutes)

- [x] Project created ✓
- [x] Dev server running ✓
- [ ] Open http://localhost:3000 in browser

## 🎨 Essential Customizations (30 minutes)

### 1. Update Brand Name (5 min)
- [ ] Open `src/components/Navigation.tsx`
  - Line 10: Change `"Your Brand"` to client's company name
- [ ] Open `src/components/Footer.tsx`
  - Line 15: Change company name
- [ ] Open `src/app/layout.tsx`
  - Line 16: Update title metadata

### 2. Replace Hero Image (5 min)
- [ ] Save your hero image to `public/images/hero.jpg`
- [ ] Open `src/components/HeroSection.tsx`
  - Line 15: Replace Unsplash URL with `/images/hero.jpg`

### 3. Update Products (10 min)
- [ ] Open `src/components/ProductShowcase.tsx`
- [ ] Update 3 products:
  - `title`: Product name
  - `description`: Product description
  - `image`: Your image URL or path
  - `icon`: Change emoji

### 4. Update Certifications (5 min)
- [ ] Open `src/components/Certifications.tsx`
- [ ] Update 6 certifications:
  - `title`: Certification name
  - `description`: What it means
  - `icon`: Change emoji

### 5. Update Contact Info (5 min)
- [ ] Open `src/components/Footer.tsx`
- [ ] Update:
  - Email address (line ~80)
  - Phone number (line ~83)
  - Social media links (lines ~89-99)

## 🎁 Optional Customizations (30 minutes)

### 6. Update Features
- [ ] Open `src/components/Features.tsx`
- [ ] Update 4 features with your own

### 7. Update Sustainability
- [ ] Open `src/components/Sustainability.tsx`
- [ ] Update 3 sustainability focus areas
- [ ] Update benefits list

### 8. Update Case Studies
- [ ] Open `src/components/CaseStudiesCarousel.tsx`
- [ ] Update 3 case studies

### 9. Update SEO
- [ ] Open `src/app/layout.tsx`
- [ ] Update title and description (lines 14-17)

## 🔗 Connect Contact Form (30 minutes)

- [ ] Choose form handler:
  - Formspree (easiest): https://formspree.io
  - EmailJS: https://www.emailjs.com
  - Your own backend API
- [ ] Update `src/components/ContactForm.tsx`
  - Replace console.log with API call
- [ ] Test form submission

## 📱 Testing & QA (15 minutes)

- [ ] Test on desktop browser
- [ ] Test on mobile phone
- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Test carousel navigation
- [ ] Check all images load
- [ ] Verify colors match brand

## 🚀 Ready to Deploy!

### Local Build Test
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Or Deploy to:
- [ ] AWS Amplify
- [ ] Netlify
- [ ] Your own hosting

---

## 📂 File Reference

| Section | File | Line |
|---------|------|------|
| Brand Name | Navigation.tsx | 10 |
| Brand Name | Footer.tsx | 15 |
| Hero Image | HeroSection.tsx | 15 |
| Products | ProductShowcase.tsx | 3 |
| Certifications | Certifications.tsx | 3 |
| Features | Features.tsx | 3 |
| Sustainability | Sustainability.tsx | 3 |
| Case Studies | CaseStudiesCarousel.tsx | 7 |
| Contact Info | Footer.tsx | 80-99 |
| Contact Form | ContactForm.tsx | 20 |
| SEO Metadata | layout.tsx | 14-17 |

## 💾 Saving Changes

After editing files:
1. Save the file (Ctrl+S)
2. Next.js auto-refreshes the page
3. Check http://localhost:3000
4. Repeat steps 1-3 until happy

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
# Kill the process and restart
npm run dev
```

**Images not loading?**
- Check the URL is correct
- Verify image exists in `public/` folder
- Try using full Unsplash URLs instead

**Build fails?**
```bash
npm install  # Reinstall dependencies
npm run build  # Try building again
```

**Form not working?**
- Check browser console for errors
- Verify API endpoint is correct
- Test with Formspree for quick setup

## 📚 Need More Help?

- Check `README.md` for full documentation
- Read `CUSTOMIZATION_GUIDE.md` for detailed instructions
- Check component files for inline comments
- Visit `https://nextjs.org/docs` for Next.js help

---

## ✅ Final Checklist Before Going Live

- [ ] All brand information updated
- [ ] All images replaced with client's images
- [ ] All text content updated
- [ ] Contact form connected to email service
- [ ] Mobile responsive verified
- [ ] All links tested
- [ ] SEO metadata updated
- [ ] Built and tested locally
- [ ] Deployed to hosting
- [ ] Final quality check on live site

🎉 **You're ready to launch!**
