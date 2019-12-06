
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

],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    ['@nuxtjs/google-tag-manager', { id: 'UA-41622771-4', pageTracking: true, dev: false }],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    //publicPath: 'https://sugoidesune.github.io/readium/', might be necessary to change path of index.thml files
    extend (config, ctx) {
    }
  },
  router :{
    base: '/readium/'
  }
  generate: {
    dir: process.env.generateFolder || 'dist'
  }
};
