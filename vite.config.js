import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path"; // Correct import

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Set alias for "@/components/"
    },
  },
});
