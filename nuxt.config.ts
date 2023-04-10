// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Star Wars in Details",
            link: [
                {
                    rel: "icon",
                    type: "image/x-icon",
                    href: "public/favicon.ico",
                },
            ],
        },
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: [
        "primevue/resources/themes/tailwind-light/theme.css",
        "primevue/resources/primevue.css",
        "primeicons/primeicons.css",
        "@/assets/css/tailwind.css",
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    ssr: false,
    build: {
        transpile: ["primevue"],
    },
});
