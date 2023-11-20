import type { Config } from 'tailwindcss'
import DaisyUI from 'daisyui'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [DaisyUI],
  daisyui: {
    themes: ['retro'],
  },
}
export default config
