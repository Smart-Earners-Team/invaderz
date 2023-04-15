/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // "bg-img": "url('/headBg.png')",
        // "bg-img1": "url('/aboutBg.png')",
        // "bg-img2": "url('/howitwork.png')",
        // "bg-img3": "url('/benefitBg.png')",
      },
    },
  },
  plugins: [],
};
