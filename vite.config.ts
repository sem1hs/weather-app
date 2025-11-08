import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tailwindcss(),
    tanstackStart({
      // prerender: {
      //   enabled: true, // Prerendering’i aç
      //   autoSubfolderIndex: true, // /page/index.html şeklinde kaydet
      //   autoStaticPathsDiscovery: true, // Sayfalardaki statik yolları otomatik bul
      //   concurrency: 14, // Aynı anda kaç prerender işini çalıştıracağını belirle
      //   crawlLinks: true, // Sayfalardaki linkleri takip edip onları da prerender et
      //   filter: ({ path }) => !path.startsWith("/do-not-render-me"), // İstenmeyen sayfaları hariç tut
      //   retryCount: 2, // Başarısız prerender denemesi sayısı
      //   retryDelay: 1000, // Retry arası bekleme süresi (ms)
      //   maxRedirects: 5, // Maksimum yönlendirme sayısı
      //   failOnError: true, // Hata olursa işlemi durdur
      //   onSuccess: ({ page }) => {
      //     console.log(`Rendered ${page.path}!`);
      //   }, // Başarı callback
      // },
    }),
    viteReact(),
  ],
});

export default config;
