import { type LoaderFunction } from "@remix-run/node";
import { ROUTE_FRAGRMENTS, SITE_URL } from "~/configs/sys";


export const loader: LoaderFunction = async () => {
    const { WELCOME, STUFF, WORK } = ROUTE_FRAGRMENTS
    const experimentsPathFragments = ["inzh", "rxsearch", "people-nature-stones", "msaidx", "disruption-department", "diplomacy-game", "ecsmap", "clinic", "opendata-sg"]
    let experimentsRoute = '';

    for (let i = 0; i < experimentsPathFragments.length; i += 1) {
        experimentsRoute += `<url><loc>${SITE_URL}/${STUFF}/${experimentsPathFragments[i]}</loc></url>`
    }

    const urlSet = `<url><loc>${SITE_URL}/${WELCOME}</loc></url><url><loc>${SITE_URL}/${WORK}</loc></url><url><loc>${SITE_URL}/${STUFF}</loc></url>${experimentsRoute}`
    const markup = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

    return new Response(markup, {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "x-content-type-options": "nosniff",
            "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
        },
    });
}