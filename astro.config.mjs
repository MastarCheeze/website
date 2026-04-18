// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Poppins",
      cssVariable: "--font-poppins",
      styles: ["normal", "italic"],
      weights: ["300 700"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Cascadia Code",
      cssVariable: "--font-cascadia-code",
      styles: ["normal", "italic"],
      weights: ["400"],
    },
  ],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
    },
  },
});
