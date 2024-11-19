/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            fontSize: {
                base: '1rem',
            },
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
            },
            colors: {
                purple: {
                    100: 'hsl(254, 88%, 90%)',
                    500: 'hsl(256, 67%, 59%)',
                },
                yellow: {
                    100: 'hsl(31, 66%, 93%)',
                    500: 'hsl(39, 100%, 71%)',
                },
                black: {
                    900: 'hsl(0, 0%, 7%)',
                },
            },
        },
    },
    plugins: [],
};
