/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const typography = require("@tailwindcss/typography");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          background: colors.zinc[950],
          primary: colors.orange[700],
          hover: colors.orange[800],
          accent: colors.orange[600],
          borderDark: colors.zinc[800],
          borderLight: colors.slate[500],
        },
        text: {
          base: colors.white,
          muted: "rgba(255, 255, 255, 0.7)",
          light: "rgba(255, 255, 255, 0.5)",
          contrast: colors.black,
        },
      },
      
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },

      typography: (theme) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.text.muted"),
            "--tw-prose-headings": theme("colors.text.base"),
            "--tw-prose-lead": theme("colors.text.muted"),
            "--tw-prose-links": theme("colors.brand.primary"),
            "--tw-prose-bold": theme("colors.text.base"),
            "--tw-prose-counters": theme("colors.text.muted"),
            "--tw-prose-bullets": theme("colors.text.muted"),
            "--tw-prose-hr": theme("colors.brand.borderDark"),
            "--tw-prose-quotes": theme("colors.text.base"),
            "--tw-prose-quote-borders": theme("colors.brand.borderDark"),
            "--tw-prose-captions": theme("colors.text.muted"),
            "--tw-prose-code": theme("colors.text.base"),
            "--tw-prose-pre-code": theme("colors.text.base"),
            "--tw-prose-pre-bg": theme("colors.brand.borderDark"),
            "--tw-prose-th-borders": theme("colors.brand.borderDark"),
            "--tw-prose-td-borders": theme("colors.brand.borderDark"),
          },
        },
      }),
    },
  },

  plugins: [typography],
};