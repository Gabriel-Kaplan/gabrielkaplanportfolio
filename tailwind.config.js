module.exports = {
  content: [
    "./path/to/your/files/**/*.{html,js,jsx,ts,tsx}", // Adjust based on where your files are located
  ],
  theme: {
    extend: {
      colors: {
        background: "#000", // For global background color
        foreground: "#000000",
        link: "#00B4D8", // Custom link color
        linkHover: "#0098C7", // Hover state for links
      },
    },
  },
  plugins: [],
};
