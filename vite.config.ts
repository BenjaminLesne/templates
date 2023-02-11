import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude, "**/e2e/**/*"],
  },
  plugins: [react()],
})
