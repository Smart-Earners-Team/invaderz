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
        "bg-imgAbout": "url('/bg/bg-home.jpg')",
        "bg-imgfooter": "url('/bg/bg-footer.webp')",
        // "bg-img2": "url('/howitwork.png')",
        // "bg-img3": "url('/benefitBg.png')",
      },
    },
  },
  plugins: [],
};
