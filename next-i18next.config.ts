import type { UserConfig } from 'next-i18next'
const config: UserConfig = {
    i18n: {
        locales: ['en', 'de', 'fr'],
        defaultLocale: 'en',
    },  
    reloadOnPrerender: process.env.NODE_ENV === 'development',
}

export default config