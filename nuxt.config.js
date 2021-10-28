export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: '0' // default: localhost
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mitchell Barton',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Mitchell Barton is an artist working in Salt Lake City, Utah, USA.' },
      { name: 'format-detection', content: 'telephone=no' },
      { 
        name: 'keywords', 
        name: 'keywords', 
        content: 'Mitchell, Barton, Artist, Art, Salt Lake City, Utah, USA, Photography, Sculpture, Drawing, Collage, Painting, Video, Web Development, Coding, Contemporary, Digital' 
      },
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/src/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    ['nuxt-lazy-load', {
      observerConfig: {
        rootMargin: '0px 0px 50% 0px',
        threshold: 0
      }
    }]
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    },
    icon: {
      fileName: 'favicon.png'
    }
  },

  prismic: {
    endpoint: 'https://mitchell-barton.prismic.io/api/v2',
    modern: true
  },

  googleAnalytics: {
    id: 'UA-61480746-1'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
