# 🚀 Webfolio - Personal Portfolio

A modern, interactive portfolio website showcasing a full-stack developer's journey with a unique cyberpunk-inspired design and dynamic animations.

## 📋 Overview

Webfolio is a comprehensive personal portfolio built with **Next.js 15** and **TypeScript**, featuring an immersive user experience with:

- **Cyberpunk aesthetic** with binary rain background effects
- **Interactive entry gate** for engaging user onboarding
- **Dual hexagon sidebar navigation** with smooth animations
- **Responsive design** optimized for all devices
- **Real-time guestbook** powered by Firebase
- **GSAP animations** for fluid transitions
- **Modern UI components** built with Radix UI and Tailwind CSS

## 🛠️ Tech Stack

### Frontend Framework

- **Next.js 15.3.3** - React framework with App Router
- **TypeScript 5** - Type-safe development
- **React 18** - UI library

### Styling & Design

- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Radix UI** - Headless UI components
- **Lucide React** - Modern icon library
- **FontAwesome** - Additional icon set
- **Custom CSS** - Cyberpunk animations and effects

### Animations

- **GSAP 3.12.5** - Professional-grade animations
- **@gsap/react** - React GSAP integration
- **CSS Animations** - Custom keyframes for effects

### Backend & Database

- **Firebase 11.9.1** - Backend as a service
- **Firestore** - NoSQL database for guestbook

### Development Tools

- **PostCSS** - CSS processing
- **ESLint** - Code linting
- **Tailwind Merge** - Utility class optimization

## ✨ Features

### 🎨 Visual Design

- **Binary rain background** with falling code animation
- **Hexagonal navigation** with hover effects
- **Cyberpunk color scheme** (green accents on dark theme)
- **Responsive layout** with mobile-first approach

### 🧭 Navigation

- **Dual sidebar design** (left & right hexagon menus)
- **Bottom navigation** for mobile devices
- **Smooth page transitions** with GSAP
- **Active state indicators**

### 📱 Pages & Sections

- **Home** - Profile overview with tech stack showcase
- **Experience** - Professional work history
- **Education** - Academic background
- **Projects** - Portfolio showcase with detailed modals
- **Contact** - Multiple contact methods
- **Guestbook** - Interactive visitor messages

### 🔥 Interactive Elements

- **Entry gate animation** on first visit
- **Scrambling text effects** for dynamic content
- **Hover animations** on all interactive elements
- **Real-time guestbook** with Firebase integration
- **Modal dialogs** for project details

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/srgjo27/webfolio.git
cd webfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── contact/           # Contact page
│   ├── education/         # Education page
│   ├── experience/        # Experience page
│   ├── guestbook/         # Guestbook with Firebase
│   ├── projects/          # Projects showcase
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components
│   │   ├── binary-background.tsx
│   │   ├── bottom-nav.tsx
│   │   ├── entry-gate.tsx
│   │   ├── sidebar.tsx
│   │   └── ...
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
│   ├── firebase.ts        # Firebase configuration
│   ├── icons.ts           # Icon definitions
│   └── utils.ts           # Helper functions
└── public/               # Static assets
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🎯 Key Components

### Layout Components

- **BinaryBackground** - Animated falling binary rain
- **EntryGate** - Interactive entrance animation
- **Sidebar** - Hexagonal navigation system
- **BottomNav** - Mobile navigation

### UI Components

- **ScramblingText** - Typewriter effect animation
- **Card Components** - Modern card layouts
- **Dialog/Modal** - Project detail overlays
- **Form Components** - Guestbook interactions

## 🌟 Performance Features

- **Next.js App Router** for optimal routing
- **Turbopack** for faster development builds
- **Image optimization** with Next.js Image component
- **Code splitting** for efficient loading
- **SSR/SSG** capabilities where appropriate

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoint system** using Tailwind CSS
- **Adaptive navigation** (sidebar → bottom nav)
- **Touch-friendly** interactions

## 🔒 Security & Privacy

- **Environment variables** for sensitive data
- **Firebase security rules** for data protection
- **Input validation** for forms
- **XSS protection** with proper sanitization

## 🚀 Deployment

The project is optimized for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **Firebase Hosting**
- **Any Node.js hosting provider**

### Deploy on Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 👤 Author

**Josua Siregar**

- 🌐 Portfolio: [webfolio.vercel.app](https://your-domain.com)
- 💼 LinkedIn: [linkedin.com/in/josua-siregar](https://linkedin.com/in/josua-siregar)
- 📧 Email: josuasiregar0103@gmail.com
- 🐙 GitHub: [github.com/srgjo27](https://github.com/srgjo27)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/srgjo27/webfolio/issues).

## ⭐ Show Your Support

Give a ⭐️ if this project helped you or if you found it interesting!
