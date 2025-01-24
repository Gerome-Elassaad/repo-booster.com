// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '@nuxtjs/seo',
    '@zadigetvoltaire/nuxt-gtm'
  ],

  devtools: {
    enabled: true
  },

  colorMode: {
    disableTransition: true
  },

  routeRules: {
    '/api/search.json': { prerender: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/docs'
      ],
      crawlLinks: true
    }
  },

  typescript: {
    strict: false
  },

  hooks: {
    'components:extend': (components) => {
      const globals = components.filter(c => ['UButton'].includes(c.pascalName))

      globals.forEach(c => c.global = true)
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  gtm: {
    id: 'GTM-56T26PH5',
    queryParams: {
      gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
      gtm_preview: 'env-4',
      gtm_cookies_win: 'x',
    },
    defer: false,
    compatibility: false,
    nonce: '2726c7f26c',
    enabled: true,
    debug: false,
    loadScript: true,
    enableRouterSync: true,
    ignoredViews: ['homepage'],
    trackOnNextTick: false,
    devtools: false,
  },

  runtimeConfig: {
    public: {
      gtm: {
        id: 'GTM-56T26PH5',
        queryParams: {
          gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
          gtm_preview: 'env-4',
          gtm_cookies_win: 'x',
        },
        defer: false,
        compatibility: false,
        nonce: '2726c7f26c',
        enabled: true,
        debug: false,
        loadScript: true,
        enableRouterSync: true,
        ignoredViews: ['homepage'],
        trackOnNextTick: false,
        devtools: false,
      }
    }
  }
})
