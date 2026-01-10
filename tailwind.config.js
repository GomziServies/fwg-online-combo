/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#f97316", // orange-500
                    dark: "#ea580c",    // deeper orange
                    light: "#ffedd5",   // light orange tint
                },
                text: {
                    DEFAULT: "#1f2933", // dark grey for body text
                    muted: "#6b7280",
                },
            },
            boxShadow: {
                card: "0 12px 30px rgba(15, 23, 42, 0.12)",
            },
            maxWidth: {
                content: "1120px",
            },
        },
        // Move fontFamily here (not in extend) so @apply works
        fontFamily: {
            heading: ["Poppins", "system-ui", "sans-serif"],
            body: ["Inter", "system-ui", "sans-serif"],
        },
    },
    plugins: [],
};