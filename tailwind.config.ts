import { Config } from 'tailwindcss';

const config: Config = {
  content:[
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      //Using CSS variables via HSL, which is recommended for easy tweaking
      colors: {
        bg: {
          DEFAULT: "hsl(var(--bg))",
          subtle: "hsl(var(--bg-subtle))"
        },
        surface:{
          DEFAULT: "hsl(var(--surface))",
          elevated: "hsl(var(--surface-elevated))",
        },
         // Text
        text: {
          DEFAULT: "hsl(var(--text))",
          muted:"hsl(var(--text-muted))",
          subtle:"hsl(var(--text-subtle))"
        },
        //Borders and separators
        border:{
          DEFAULT:"hsl(var(--border))",
          strong:"hsl(var(--border-strong))"
        },
        brand:{
          DEFAULT: "hsl(var(--brand))",
          fg: "hsl(var(--brand-fg))"
        },
        success:{
          DEFAULT: "hsl(var(--success))",
          fg: "hsl(var(--success-fg))"
        },
        warning:{
          DEFAULT: "hsl(var(--warning))",
          fg: "hsl(var(--warning-fg))"
        },
        danger:{
          DEFAULT: "hsl(var(--danger))",
          fg: "hsl(var(--danger-fg))"
        },

        //Focus ring color
        ring: "hsl(var(--ring))",

        borderRadius:{
          //Tokenized border radius
          sm: "calc(var(--radius) - 4px)",
          md: "calc(var(--radius) - 2px)",
          lg: "var(--radius)",
          xl: "calc(var(--radius) + 4px)"
        },
        
        boxShadow: {
          //optional: unify elevation
          soft: "0 1px 2px hsl(var(--shadow)/0.25), 0 8px 24px hsl(var(--shadow)/0.15)"
        }
      },
    },
  },
  plugins:[]
};

export default config;