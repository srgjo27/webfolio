
import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Space Grotesk"', 'sans-serif'],
        headline: ['"Space Grotesk"', 'sans-serif'],
        code: ['"Source Code Pro"', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'status-blink': {
          '50%': {
            opacity: '0.2',
          },
        },
        'pulse-slow': {
          '50%': { opacity: '0.15' },
        },
        'binary-fall': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(100vh)' },
        },
        'cyber-glow': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 3px hsl(var(--primary) / 0.6))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 8px hsl(var(--primary)))',
          },
        },
        'drip': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(20px)', opacity: '0' },
        },
        'drip-long': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '30%': { opacity: '0.7' },
          '100%': { transform: 'translateY(300px)', opacity: '0' },
        },
        'chevron-move': {
          '0%': { transform: 'translateX(-0.3rem)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(0.3rem)', opacity: '0' },
        },
        'cyber-pulse': {
          '0%, 100%': {
            transform: 'translateY(0)',
            filter: 'drop-shadow(0 0 3px hsl(var(--primary) / 0.4))'
          },
          '50%': {
            transform: 'translateY(-4px)',
            filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.8))'
          },
        },
        'emoji-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-4px) rotate(-3deg)' },
          '50%': { transform: 'translateY(0px) rotate(0deg)' },
          '75%': { transform: 'translateY(4px) rotate(3deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'status-blink': 'status-blink 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-slow': 'pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'binary-fall': 'binary-fall linear infinite',
        'cyber-glow': 'cyber-glow 3.5s ease-in-out infinite',
        'drip': 'drip 2s ease-out infinite',
        'drip-long': 'drip-long ease-in infinite',
        'chevron-move': 'chevron-move 2s ease-in-out infinite',
        'cyber-pulse': 'cyber-pulse 5s ease-in-out infinite',
        'emoji-float': 'emoji-float 5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
