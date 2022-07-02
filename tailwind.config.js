/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                Spartan: ['League Spartan', 'Roboto'],
            },
            colors: {
                darkGray: 'hsl(0, 0%, 63%)',
                veryDarkGray: 'hsl(0, 0%, 27%)',
            },
            spacing: {
                13: '3.25rem',
                18: '4.5rem',
                '30%': '30%',
            },
            letterSpacing: {
                extraBig: '0.82em',
                negative04: '-0.04em',
                positive42: '0.42em',
            },
            maxWidth: {
                1440: '1440px',
            },
        },
    },
    plugins: [],
};
