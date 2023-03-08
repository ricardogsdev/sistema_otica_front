import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  // base: '/valex-ts/preview/', use while make it live give a valid base path instade of the dummy path.
  
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 3000, // you can replace this port with any port
  },
  define: {
    'process.env': {}
  },

  build: {
    chunkSizeWarningLimit: 5000,
  }

})

