# AI Revenue Engine Landing Page

A modern, futuristic landing page for AI Revenue Engine - an AI automation company that builds systems to qualify leads, book appointments, and follow up automatically.

## 🚀 Features

- **Modern Design**: Black and purple futuristic 3D aesthetic with glassmorphism effects
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Performance Optimized**: Code splitting, lazy loading, and optimized animations
- **SEO Ready**: Comprehensive meta tags, Open Graph, Twitter Cards, and structured data
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Smooth Animations**: Framer Motion animations with scroll-triggered effects
- **Contact Form**: Web3Forms integration for form submissions
- **AI Demo Widget**: Integrated Vapi AI voice assistant widget

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Web3Forms** - Form submission service

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
├── public/
│   └── images/          # Static images (case study screenshots)
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── AIDemo.jsx
│   │   ├── CaseStudies.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navigation.jsx
│   │   ├── Pricing.jsx
│   │   ├── Resources.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Services.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## 🎨 Design System

### Colors
- **Primary Black**: `#000000`
- **Primary Purple**: `#9333EA`
- **Accent Purple Light**: `#C084FC`
- **Accent Purple Glow**: `#7C3AED`
- **Gray Text**: `#9CA3AF`
- **Dark Gray BG**: `#0F0F0F`

### Typography
- **Body Font**: Inter
- **Heading Font**: Poppins

## 🔧 Configuration

### Web3Forms
The contact form uses Web3Forms. Update the access key in `src/components/Contact.jsx`:
```javascript
formDataToSubmit.append('access_key', 'YOUR_ACCESS_KEY')
```

### Calendly Links
All "Book a Call" CTAs link to:
```
https://calendly.com/ai-poweredsolutions/30min
```

### Vapi AI Widget
The AI demo widget is configured in `src/components/AIDemo.jsx` and `index.html`.

## 📝 Content Updates

### Services
Edit `src/components/Services.jsx` to update service offerings.

### Pricing Tiers
Edit `src/components/Pricing.jsx` to modify pricing information.

### Case Studies
Edit `src/components/CaseStudies.jsx` to add/update case studies.

### Resources
Edit `src/components/Resources.jsx` to update free resources.

## 🚀 Deployment

### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Push to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Other Platforms
Build the project and upload the `dist` folder to your hosting provider.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔍 SEO

The site includes:
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data (JSON-LD)
- Semantic HTML
- Proper heading hierarchy

**Note**: Update the canonical URL and add an Open Graph image (`og-image.jpg`) before going live.

## 📄 License

Private project - All rights reserved

## 👥 Contact

- **Email**: lubosikongwa@icloud.com
- **LinkedIn**: [Lubosi Kongwa](https://www.linkedin.com/in/lubosi-kongwa-a9abb9244/)

---

Built with ❤️ using AI (obviously)
