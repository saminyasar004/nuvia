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
				primary: "#B5A88A",
				secondary: "#eeebe3",
				background: "#f4f2ec",
				theme: "#517B62",
				accent: "#ECF2E9",
				foreground: "#1E1E1E",
				success: "#18CA05",
				danger: "#E90004",
				warning: "#FBB03B",

				_primary: "#9A70D3",
				_secondary: "#F0EAF8",
				_background: "#fff9e8",
				_accent: "#fdf3d3",
				_darkBlue: "#0f1e28",
				_woodGreen: "#3BA3A4",
			},
			backgroundImage: {
				"pattern-banner": "url('./assets/images/hero-bg-pattern.png')",
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
				marquee: {
					from: {
						transform: "translateX(0)",
					},
					to: {
						transform: "translateX(calc(-100% - var(--gap)))",
					},
				},
				"marquee-vertical": {
					from: {
						transform: "translateY(0)",
					},
					to: {
						transform: "translateY(calc(-100% - var(--gap)))",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				marquee: "marquee var(--duration) infinite linear",
				"marquee-vertical":
					"marquee-vertical var(--duration) linear infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
