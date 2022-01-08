module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './layouts/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        fontFamily: {
            'sans': ['Inter'],
            'montserrat': ['Montserrat'],
            'nulshock': ["Nulshock"]
        },
        letterSpacing: {
            '1': '0em',
            '2': '0.025em',
            '3': '0.05em',
            '4': '0.3em',
          },
    },
    plugins: [],
};
