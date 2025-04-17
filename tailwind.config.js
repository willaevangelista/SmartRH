/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          azul: {
            escuro: '#0061FF',          // Azul-Escuro
            medio: '#0057E6',           // Azul-Médio (aprox. -10%)
            claro: '#005DF2',           // Azul-Claro (aprox. -4%)
          },
          preto: '#191D31',              // Preto
          cinza: {
            escuro: '#666876',          // Cinza-Escuro
            claro: '#8C8E98',           // Cinza-Claro
          },
        },
      },
    },
    plugins: [],
  }
  