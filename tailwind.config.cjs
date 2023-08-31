const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono Variable", ...defaultTheme.fontFamily.sans],
        roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
        ["exo-2"]: ["'Exo 2 Variable'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
