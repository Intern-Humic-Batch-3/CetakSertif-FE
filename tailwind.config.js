const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      // Colors
      colors: {
        // Brand Colors
        "brand-primary": "#AD141A",
        "brand-secondary": "#E61A22",
        "brand-card": "#FCE8E8",
        "brand-light": "#FFF5F5",

        // Neutral Colors
        "neutral-600": "#101828",
        "neutral-500": "#4F5F79",
        "neutral-400": "#98A2B3",
        "neutral-300": "#CAD0DA",
        "neutral-200": "#F3F5F7",
        "neutral-100": "#FFFFFF",

        // State Colors
        success: "#2EBE52",
        warning: "#F79009",
        error: "#F04438",
        info: "#0091EA",
      },

      // Font Sizes
      fontSize: {
        // Body Text
        "body-sm": ["10px", "120%"],
        "body-md": ["13px", "120%"],
        "body-lg": ["16px", "120%"],

        // Headings
        h1: ["61px", "120%"],
        h2: ["49px", "120%"],
        h3: ["39px", "120%"],
        h4: ["31px", "120%"],
        h5: ["25px", "120%"],
        h6: ["20px", "120%"],
      },

      // Font Family
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
