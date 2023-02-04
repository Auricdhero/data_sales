// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          charset: 'utf-16',
          viewport: 'width=500, initial-scale=1',
          title: 'Data Sales',
          meta: [
            // <meta name="description" content="My amazing site">
            { name: 'description', content: 'My amazing site.' }
          ],
        },
        pageTransition: { name: 'page', mode: 'out-in' }
      },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
