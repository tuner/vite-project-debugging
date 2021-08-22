import { defineConfig } from 'vite'

export default defineConfig({
  build: {
	  // This has no effect during unbundled development, right?
	  sourcemap: true
  }
})
