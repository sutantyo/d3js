import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	base: "/d3js/",
	server: {
		proxy: {
			'/api': {
				target: 'https://d3js-in-action-third-edition.github.io/',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/,'')
			}
		}	
	}
})
