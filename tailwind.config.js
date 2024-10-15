/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // 自定义滚动条隐藏类
      scrollbar: {
        hide: {
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none", // IE and Edge
          "scrollbar-width": "none", // Firefox
        },
      },
    },
  },
  plugins: [],
};
