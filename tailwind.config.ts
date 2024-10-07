import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        amareloEscuro: "var(--amareloEscuro)",
        laranjaPastel: "var(--laranjaPastel)",
        amareloPastel: "var(--amareloPastel)",
        white: "var(--white)",
        azul: "var(--azul)",
        black: "var(--black)",
        cinza: "var(--cinza)",
        cinzaPreto: "var(--cinzaPreto)"
      },
      fontSize: {
        large:"26px",
        medium: "24px",
        small: "16px"
      },
      fontFamily: 
      {
        comic : "var(--comic)" // no html tem que usar o nome robFont, nn o nome da variável de roboto
      }
    },
  },
  plugins: [],
};
export default config;
//scrool behaivor isnull