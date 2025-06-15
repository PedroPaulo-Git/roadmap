/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,ts,jsx,tsx,mdx}', // Simplifiquei para cobrir todos os arquivos na src
];
export const theme = {
  extend: {
    colors: {
      dashboardblack: '#D9D9D9',
      dashboardwhite: {
        100: '#D9D9D9' // Você quer usar isso para o texto claro
      },
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      },
      secondary: {
        50: '#f8fafc',
        500: '#64748b',
        600: '#475569',
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
  },
};
export const plugins = [];
