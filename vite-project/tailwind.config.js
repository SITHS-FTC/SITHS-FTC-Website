export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
				fade: 'fadeIn 2.5s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
			},
      fontFamily:  {
        poppins: ['Poppins'],
        kanit: ['Kanit']
      },
      backgroundImage: {
        'triangles': "url('https://svgur.com/i/17LY.svg')"
      }
    },
  },
  plugins: [],
}