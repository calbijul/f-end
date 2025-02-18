/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "elevation-1": "0 4px 45px 0 rgba(9, 18, 39, 0.05)",
        "elevation-2": "0 4px 60px 0 rgba(9, 18, 39, 0.10)",
        "elevation-3": "0 0 25px rgba(0, 0, 0, 0.12)",
        "elevation-4": "0 0 35px rgba(0, 0, 0, 0.15)",
    },
    colors: {
        // Neutral Colors
        nt: {
            white: "#FFFFFF",
            100: "#E5E5E5",
            300: "#D9D9D6",
            500: "#7C7C7C",
            700: "#444444",
            900: "#2C2C2C",
        },
        // Primary Colors
        pm: {
            50: "#E6D8CC",
            300: "#C4A386",
            600: "#996830",
        },
        // Secondary Colors
        sd: {
            50: "#FFEED6",
            500: "#FF8310",
        },
        // System Colors
        sys: {
            rd50: "#FFF1F6",
            rd600: "#FA1D6D",
            bl50: "#EAF6FF",
            bl600: "#1091EE",
            gr50: "#F0FAF6",
            gr600: "#13A757",
            pr50: "#F8F4FF",
            pr600: "#722DFC",
        },
    },
    gradient: {
      blueGreen: "linear-gradient(135deg, #2C68FF, #13A757)", 
    },
    fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        helvetica: ["helvetica"],
        heading: ["Roboto", "Arial", "sans-serif"],

    },
      fontSize: {
        h1: ["48px", { lineHeight: "50px", fontWeight: "500" }],
        h2: ["34px", { lineHeight: "42px", fontWeight: "500" }],
        h3: ["26px", { lineHeight: "34px", fontWeight: "500" }],
        h4: ["20px", { lineHeight: "28px", fontWeight: "500" }],
        h5: ["18px", { lineHeight: "26px", fontWeight: "500" }],
        h6: ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "body-big-reg": ["18px", { lineHeight: "26px", fontWeight: "400" }],
        "body-big-str": ["18px", { lineHeight: "26px", fontWeight: "500" }],

        "body-base-reg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-base-str": ["16px", { lineHeight: "24px", fontWeight: "500" }],

        "body-small-reg": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-small-str": ["14px", { lineHeight: "20px", fontWeight: "500" }],

        "caption-reg": ["12px", { lineHeight: "auto", fontWeight: "500" }],
        "caption-str": ["12px", { lineHeight: "auto", fontWeight: "700" }],
        "caption-all-caps": ["9px", { lineHeight: "auto", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase" }],
    },
    screens: {
      xs: '480px', 
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    },
  },
  plugins: [
  ],
}

