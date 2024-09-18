import { SITE_URL } from "~/configs/sys";


export const loader = () => {
  const robotText = `User-agent: *\nAllow: /\nSitemap:${SITE_URL}/sitemap.xml`
  return new Response(robotText, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    }
  });
};