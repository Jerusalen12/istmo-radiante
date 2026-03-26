import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Merge framer-motion and shared components into the vendor chunk
          // to eliminate extra requests in the critical chain
          if (id.includes("node_modules")) {
            return "vendor";
          }
          // Keep shared components (SEOHead, Layout, etc.) in the entry chunk
          if (
            id.includes("SEOHead") ||
            id.includes("Layout.tsx") ||
            id.includes("Navbar.tsx") ||
            id.includes("Footer.tsx") ||
            id.includes("WhatsAppButton")
          ) {
            return "vendor";
          }
        },
      },
    },
  },
}));