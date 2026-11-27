/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "public-sans": ['"Public Sans"', "sans-serif"],
      },
      fontSize: {
        // Inter Black, interligne 20px, espacement +10 % (40px desktop, 32px mobile)
        logo: ["40px", { lineHeight: "20px", letterSpacing: "0.1em" }],
        "logo-sm": ["32px", { lineHeight: "20px", letterSpacing: "0.1em" }],
        // Public Sans SemiBold 24px, interligne 32px, espacement -0,6 %
        title: ["24px", { lineHeight: "32px", letterSpacing: "-0.006em" }],
      },
      spacing: {
        1.25: "5px",
        2.25: "9px",
        7.5: "30px",
        14.5: "58px",
        18: "72px",
        24.5: "98px",
        79.5: "318px",
      },
      colors: {
        primary: "#463ADD",
        secondary: "#EEF1FF",
        accent: "#FF00FB",
        background: "#FCFDFF",
        grey: {
          50: "#F9F9FB",
          100: "#F0F0F3",
          200: "#E7E8EC",
          300: "#E0E1E6",
          400: "#CDCED6",
          500: "#81828C",
          600: "#62636B",
          900: "#1E1F24",
        },
      },
    },
  },
  plugins: [],
};
