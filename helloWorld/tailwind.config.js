/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'xs': '0 1px 2px rgba(17, 24, 39, 0.05)',
        'sm': '0 1px 3px rgba(17, 24, 39, 0.10), 0 1px 2px rgba(17, 24, 39, 0.06)',
        'md': '0 4px 8px -2px rgba(17, 24, 39, 0.06), 0 2px 4px -2px rgba(17, 24, 39, 0.06)',
        'lg': '0 12px 16px -4px rgba(17, 24, 39, 0.10), 0 4px 6px -2px rgba(17, 24, 39, 0.05)',
        'xl': '0 20px 24px -4px rgba(17, 24, 39, 0.10), 0 8px 8px -4px rgba(17, 24, 39, 0.04)',
        '2xl': '0 24px 48px -12px rgba(17, 24, 39, 0.20)',
    },

    colors: {
        nt: {
            white: "#FFFFFF",
            black: "000000",
            100: "#E5E5E5",
            300: "#D9D9D6",
            500: "#7C7C7C",
            700: "#444444",
            900: "#2C2C2C",
        },
        pm: {
            100: "#E6D8CC",
            300: "#C4A386",
            600: "#996830",
        },
      
    },
    gradient: {
      blueGreen: "linear-gradient(135deg, #2C68FF, #13A757)", 
    },
    fontFamily: {
      playfair: ['"Playfair Display"'],
      outfit: ['"Outfit"'],

    },
    fontSize: {
      "display-2xl-regular": ["72px", { lineHeight: "96px", letterSpacing: "-2.5%", fontWeight: "400", fontFamily: "Playfair Display" }],
      "display-2xl-medium": ["72px", { lineHeight: "96px", letterSpacing: "-2.5%", fontWeight: "500", fontFamily: "Playfair Display" }],
      "display-2xl-semibold": ["72px", { lineHeight: "96px", letterSpacing: "-2.5%", fontWeight: "600", fontFamily: "Playfair Display" }],
      "display-2xl-bold": ["72px", { lineHeight: "96px", letterSpacing: "-2.5%", fontWeight: "700", fontFamily: "Playfair Display" }],
      "display-2xl-italic": ["72px", { lineHeight: "96px", letterSpacing: "-2.5%", fontWeight: "400", fontStyle: "italic", fontFamily: "Playfair Display" }],

      "display-xl-regular": ["60px", { lineHeight: "72px", letterSpacing: "-2.5%", fontWeight: "400", fontFamily: "Playfair Display" }],
      "display-xl-medium": ["60px", { lineHeight: "72px", letterSpacing: "-2.5%", fontWeight: "500", fontFamily: "Playfair Display" }],
      "display-xl-semibold": ["60px", { lineHeight: "72px", letterSpacing: "-2.5%", fontWeight: "600", fontFamily: "Playfair Display" }],
      "display-xl-bold": ["60px", { lineHeight: "72px", letterSpacing: "-2.5%", fontWeight: "700", fontFamily: "Playfair Display" }],
      "display-xl-italic": ["60px", { lineHeight: "72px", letterSpacing: "-2.5%", fontWeight: "400", fontStyle: "italic", fontFamily: "Playfair Display" }],

      "display-lg-regular": ["48px", { lineHeight: "60px", letterSpacing: "0px", fontWeight: "400", fontFamily: "Playfair Display" }],
      "display-lg-medium": ["48px", { lineHeight: "60px", letterSpacing: "0px", fontWeight: "500", fontFamily: "Playfair Display" }],
      "display-lg-semibold": ["48px", { lineHeight: "60px", letterSpacing: "0px", fontWeight: "600", fontFamily: "Playfair Display" }],
      "display-lg-bold": ["48px", { lineHeight: "60px", letterSpacing: "0px", fontWeight: "700", fontFamily: "Playfair Display" }],
      "display-lg-italic": ["48px", { lineHeight: "60px", letterSpacing: "0px", fontWeight: "400", fontStyle: "italic", fontFamily: "Playfair Display" }],

      "display-md-regular": ["36px", { lineHeight: "48px", letterSpacing: "0px", fontWeight: "400", fontFamily: "Playfair Display" }],
      "display-md-medium": ["36px", { lineHeight: "48px", letterSpacing: "0px", fontWeight: "500", fontFamily: "Playfair Display" }],
      "display-md-semibold": ["36px", { lineHeight: "48px", letterSpacing: "0px", fontWeight: "600", fontFamily: "Playfair Display" }],
      "display-md-bold": ["36px", { lineHeight: "48px", letterSpacing: "0px", fontWeight: "700", fontFamily: "Playfair Display" }],
      "display-md-italic": ["36px", { lineHeight: "48px", letterSpacing: "0px", fontWeight: "400", fontStyle: "italic", fontFamily: "Playfair Display" }],

      "display-sm-regular": ["30px", { lineHeight: "40px", letterSpacing: "0px", fontWeight: "400", fontFamily: "Playfair Display" }],
      "display-sm-medium": ["30px", { lineHeight: "40px", letterSpacing: "0px", fontWeight: "500", fontFamily: "Playfair Display" }],
      "display-sm-semibold": ["30px", { lineHeight: "40px", letterSpacing: "0px", fontWeight: "600", fontFamily: "Playfair Display" }],
      "display-sm-bold": ["30px", { lineHeight: "40px", letterSpacing: "0px", fontWeight: "700", fontFamily: "Playfair Display" }],
      "display-sm-italic": ["30px", { lineHeight: "40px", letterSpacing: "0px", fontWeight: "400", fontStyle: "italic", fontFamily: "Playfair Display" }],

      "display-xs-regular": ["24px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "400", fontFamily: "Playfair Display" }],
      "display-xs-medium": ["24px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "500", fontFamily: "Playfair Display" }],
      "display-xs-semibold": ["24px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "600", fontFamily: "Playfair Display" }],
      "display-xs-bold": ["24px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "700", fontFamily: "Playfair Display" }],
      "display-xs-italic": ["24px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "400", fontStyle: "italic", fontFamily: "Playfair Display" }],

      "body-xl-light": ["20px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "300", fontFamily: "Outfit" }],
      "body-xl-regular": ["20px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "400", fontFamily: "Outfit" }],
      "body-xl-medium": ["20px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "500", fontFamily: "Outfit" }],
      "body-xl-semibold": ["20px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "600", fontFamily: "Outfit" }],
      "body-xl-bold": ["20px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "700", fontFamily: "Outfit" }],

      "body-lg-light": ["18px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "300", fontFamily: "Outfit" }],
      "body-lg-regular": ["18px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "400", fontFamily: "Outfit" }],
      "body-lg-medium": ["18px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "500", fontFamily: "Outfit" }],
      "body-lg-semibold": ["18px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "600", fontFamily: "Outfit" }],
      "body-lg-bold": ["18px", { lineHeight: "32px", letterSpacing: "0px", fontWeight: "700", fontFamily: "Outfit" }],

      "body-md-light": ["16px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "300", fontFamily: "Outfit" }],
      "body-md-regular": ["16px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "400", fontFamily: "Outfit" }],
      "body-md-medium": ["16px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "500", fontFamily: "Outfit" }],
      "body-md-semibold": ["16px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "600", fontFamily: "Outfit" }],
      "body-md-bold": ["16px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "700", fontFamily: "Outfit" }],

      "body-sm-light": ["14px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "300", fontFamily: "Outfit" }],
      "body-sm-regular": ["14px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "400", fontFamily: "Outfit" }],
      "body-sm-medium": ["14px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "500", fontFamily: "Outfit" }],
      "body-sm-semibold": ["14px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "600", fontFamily: "Outfit" }],
      "body-sm-bold": ["14px", { lineHeight: "24px", letterSpacing: "0px", fontWeight: "700", fontFamily: "Outfit" }],
      "body-sm-wider": ["14px", { lineHeight: "20px", letterSpacing: "5px", fontWeight: "400", fontFamily: "Outfit" }],
      "body-sm-widest": ["14px", { lineHeight: "24px", letterSpacing: "10px", fontWeight: "600", fontFamily: "Outfit" }],

      "body-xs-light": ["12px", { lineHeight: "16px", letterSpacing: "0px", fontWeight: "300", fontFamily: "Outfit" }],
      "body-xs-regular": ["12px", { lineHeight: "16px", letterSpacing: "0px", fontWeight: "400", fontFamily: "Outfit" }],
      "body-xs-medium": ["12px", { lineHeight: "16px", letterSpacing: "0px", fontWeight: "500", fontFamily: "Outfit" }],
      "body-xs-semibold": ["12px", { lineHeight: "16px", letterSpacing: "0px", fontWeight: "600", fontFamily: "Outfit" }],
      "body-xs-bold": ["12px", { lineHeight: "16px", letterSpacing: "0px", fontWeight: "700", fontFamily: "Outfit" }],
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

