// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Hagens | Teste Front-end',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
          charset: 'utf-8'
        }
      ],
    }
    },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-aos"],
  css: [
    'normalize.css/normalize.css',
    '@/assets/css/tailwind.css',
  ],
  components:true,
  googleFonts: {
    base64: true,
    fontsDir: 'assets/fonts',
    overwriting: true,
    families: {
      Montserrat: [400, 700],
    },
  },
  aos: {
    easing: 'ease',
    offset: 120,
    once: true,
    startEvent: 'DOMContentLoaded', 
  },

 
})