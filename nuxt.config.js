

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Readium' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nunito:200,300,400,600,700&display=swap' },
    ],
    script: [
      {src: 'https://kit.fontawesome.com/5b47744dec.js', crossorigin:'anonymous'},
      {src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',"data-ad-client": "ca-pub-2646446150472469",async: true }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
 buildModules: [
  '@nuxtjs/axios',
],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    ['@nuxtjs/google-gtag', { id: 'UA-41622771-4', debug: true, config: {send_page_view: true} }],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend (config, ctx) {
    // }
  },
  router :{
    base: process.env.NODE_ENV === "development" ? '/' : '/readium/'
  },
  generate: {
    dir: process.env.generateFolder || 'dist'
  }
};
