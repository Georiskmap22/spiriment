// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // vgsap: {
  //   presets: [],
  //   breakpoint: 768,
  //   scroller: '',
  //   composable: true
  // },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    'v-gsap-nuxt',
    '@pinia/nuxt'
  ],
  pinia: {
    /**
     * Automatically add stores dirs to the auto imports. This is the same as
     * directly adding the dirs to the `imports.dirs` option. If you want to
     * also import nested stores, you can use the glob pattern `./stores/**`
     * (on Nuxt 3) or `app/stores/**` (on Nuxt 4+)
     *
     * @default `['stores']`
     */
      storesDirs: []
    },
    app: {
    head: {
      titleTemplate: 'Spiriment',
      meta: [
        // Primary Meta
        {
          name: 'description',
          content: 'Spiriment — Grow in Faith. Together. Build lasting spiritual habits, study the Bible in a way that transforms your daily life, and connect with trusted Christian mentors.'
        },
        {
          name: 'keywords',
          content: 'spiriment, christian mentorship app, bible study app, spiritual growth, mentor matching, faith community, daily bible habits, christian app, spiritual accountability, bible reading tracker'
        },

        // Open Graph (Facebook/LinkedIn)
        {
          property: 'og:title',
          content: 'Spiriment | Grow in Faith. Together.'
        },
        {
          property: 'og:description',
          content: 'Spiriment — Build lasting spiritual habits, study the Bible in a transformative way, and connect with trusted Christian mentors. Your personalized faith growth journey starts here.'
        },
        {
          property: 'og:image',
          content: 'https://www.spiriment.com/images/productImage.png'
        },
        {
          property: 'og:url',
          content: 'https://www.spiriment.com'
        },
        {
          property: 'og:type',
          content: 'website'
        },

        // Twitter Card
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          name: 'twitter:title',
          content: 'Spiriment | Christian Mentorship & Bible Study App'
        },
        {
          name: 'twitter:description',
          content: 'Spiriment — Build lasting spiritual habits, study the Bible in a transformative way, and connect with trusted Christian mentors.'
        },
        {
          name: 'twitter:image',
          content: 'https://www.spiriment.com/images/productImage.png'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/icons/logoDark.svg'
        },
        {
          rel: 'preload',
          as: 'image',
          href: '/images/productImage.png'
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Spiriment",
            "description": "A Christian mentorship and Bible study platform helping users grow in faith through personalized study paths, mentor matching, and accountability tools.",
            "url": "https://www.spiriment.com",
            "logo": "https://www.spiriment.com/icons/logoDark.svg",
            "email": "hello@spiriment.org",
            "sameAs": [],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Spiritual Growth Services",
              "itemListElement": [
                { "@type": "Offer", "name": "Bible Study & Habit Tracking" },
                { "@type": "Offer", "name": "Christian Mentor Matching" },
                { "@type": "Offer", "name": "One-on-One Mentorship Sessions" },
                { "@type": "Offer", "name": "Group Mentorship Sessions" },
                { "@type": "Offer", "name": "Personalized Spiritual Growth Paths" }
              ]
            },
            "applicationCategory": "LifestyleApplication",
            "operatingSystem": "iOS, Android"
          })
        }
      ]
    }
  }
})