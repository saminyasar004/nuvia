import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "700px",
				"3xl": "1000px",
				"4xl": "1200px",
				"5xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
			},
			colors: {
				primary: "#9A70D3",
				secondary: "#F0EAF8",
				background: "#fff9e8",
				foreground: "#1E1E1E",
				accent: "#fdf3d3",
				darkBlue: "#0f1e28",
				danger: "#E90004",
				success: "#18CA05",
				warning: "#FBB03B",
				woodGreen: "#3BA3A4",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
