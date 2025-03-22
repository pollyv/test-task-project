export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: ['@pinia/nuxt'],
  css: ['~/assets/scss/main.scss'],
  typescript: {
    strict: true,
  },
  nitro: {
    preset: 'node-server',
  },
});