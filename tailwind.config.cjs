/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}', './data/sessions.ts'],
  theme: {
		extend: {
      screens: {
        'prose': '80ch', // max-w-prose
        'md': '640px', // tablet
        'lg': '1024px', // computer
        'xl': '1280px', // large computer
      },
      maxWidth: {
        'md': '640px',
        'lg': '1024px',
        'xl': '1280px',
        'prose': '80ch', // max-w-prose
      },
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
				marker: ["Permanent Marker", "cursive"],
			},
			colors: {
				"picton-blue": {
					50: "#f2fbff",
					100: "#e6f8ff",
					200: "#bfedff",
					300: "#99e2ff",
					400: "#4dcdff",
					500: "#00b7ff",
					600: "#00a5e6",
					700: "#0089bf",
					800: "#006e99",
					900: "#005a7d",
				},
				"violet-red": {
					50: "#fff5f9",
					100: "#ffebf2",
					200: "#ffcde0",
					300: "#ffafcd",
					400: "#ff74a7",
					500: "#ff3881",
					600: "#e63274",
					700: "#bf2a61",
					800: "#99224d",
					900: "#7d1b3f",
				},
				'sun': {
          50: "#fffbf3",
					100: "#fff7e8",
					200: "#ffebc5",
					300: "#ffdfa3",
					400: "#ffc75d",
					500: "#ffaf18",
					600: "#e69e16",
					700: "#bf8312",
					800: "#99690e",
					900: "#7d560c",
				},
				"electric-violet": {
					50: "#f9f4ff",
					100: "#f3e9ff",
					200: "#e1c7ff",
					300: "#cfa5ff",
					400: "#ab62ff",
					500: "#871EFF",
					600: "#7a1be6",
					700: "#6517bf",
					800: "#511299",
					900: "#420f7d",
				},
        'fern': {
          '50': '#f7fbf8', 
          '100': '#f0f7f1', 
          '200': '#d9ecdb', 
          '300': '#c2e0c6', 
          '400': '#95c99b', 
          '500': '#67b270', 
          '600': '#5da065', 
          '700': '#4d8654', 
          '800': '#3e6b43', 
          '900': '#325737'
        }
			},
			backgroundImage: {
        // https://uigradients.com/#Mild
				'ci1': "linear-gradient(to right, #67b26f, #4ca2cd)",
				// https://uigradients.com/#ViceCity
				'ci2': "linear-gradient(to right, #3494e6, #ec6ead)",
				// https://uigradients.com/#CrimsonTide
				'ci3': "linear-gradient(to right, #642B73, #C6426E)",
				// https://uigradients.com/#Dania
				'iv': "linear-gradient(to right, #be93c5, #7bc6cc)",
				// https://uigradients.com/#HarmonicEnergy
				'shift-share': "linear-gradient(to right, #8a2387, #e94057, #f27121)",
				// https://uigradients.com/#PunYeta (modified)
				'design': "linear-gradient(to right, #108dc7, #60E9A7)",
				// https://uigradients.com/#Sunkist
				'advanced-did': "linear-gradient(to right, #f2994a, #f2c94c)",
				// https://uigradients.com/#DirtyFog
				'applied': "linear-gradient(to right, #b993d6, #8ca6db)",
				// https://uigradients.com/#PurpleBliss
				'ml': "linear-gradient(to right, #61055c, #0b8793)",
				// https://uigradients.com/#Turquoiseflow
				'ml-het-effects': "linear-gradient(to right, #136a8a, #267871)",
				// https://uigradients.com/#Lush
				'synth-and-clust': "linear-gradient(to right, #56ab2f, #a8e063)",
				// https://uigradients.com/#SteelGrey
				'rdd': "linear-gradient(to right, #1F1C2C, #928DAB)",
				// https://uigradients.com/#Delicate
				'experiment': "linear-gradient(to right, #ff5e62, #ff9966)",
				// https://uigradients.com/#UndertheLake
				'frontiers': "linear-gradient(to right, #093028, #237A57)",
				// https://uigradients.com/#PinotNoir
				'empirical-bayes': "linear-gradient(to right, #4b6cb7, #182848)",
				// https://uigradients.com/#Lush (modified via HSL)
				'demand': "linear-gradient(to right, #2f93ac, #61e0dc)",
      }
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
