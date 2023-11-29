/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2563eb",
                "se-green": "#38CB89",
                "se-yellow": "#fbbf24",
                "se-red": "#f43f5e",
            },
            boxShadow: {
                "style-1": "rgba(0,0,0,0.1) 0px 4px 12px",
                "style-2": "rgba(149,157,165,0.2) 0px 8px 24px",
            },
        },
    },
    plugins: [],
};
