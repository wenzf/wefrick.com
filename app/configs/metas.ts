import metas from './metas.json';
import { SITE_URL } from './sys';

const commonMetaTags = [
    {
        property: 'og:locale',
        content: 'en'
    },
    {
        property: 'og:image',
        content: `${SITE_URL}/_static/icons/logo512x512.png`
    },
    {
        property: 'og:image:width',
        content: 512
    },
    {
        property: 'og:image:height',
        content: 512
    },
]

export { metas, commonMetaTags }