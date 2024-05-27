/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        text: "rgba(var(--text))",
        headBackground: "var(--head-background)",
        cardBackground: "rgba(var(--card-background))",
        sidebarBackground: "rgba(var(--sidebar-background))",
        commentContainer: "rgba(var(--comment-container))",
        chatButton: "var(--chat-btn)",
      },
    },
  },
  plugins: [],
};
