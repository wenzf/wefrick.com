import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import {   NonFlashOfWrongThemeEls, ThemeProvider, useTheme } from "./utils/provider/theme-provider";
import { getThemeSession } from "./serverOnly/sessions/theme.server";
import styles from './css/index.css';
import { getUscoItem, uploadUsco } from "./serverOnly/dynamoDB/db.server";
import { init19x19 } from "./configs/intiBoards";

import GolGrid from "./components/GolGrid";
import Header from "./components/Header";
import { NonceContext } from "./utils/provider/NonceContext";
import { useContext } from "react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles }
];


export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const res = await getUscoItem('grid');

  if (!res?.grid) {
    await uploadUsco({ pk: 'grid', grid: init19x19 })
  }

  const data = {
    theme: themeSession.getTheme(),
    grid: res?.grid ? res.grid : init19x19
  }



  return json({
    ...data
  })
}


function App() {
  const loaderData = useLoaderData<typeof loader>();
  const [theme] = useTheme();
  const cspNonce = useContext(NonceContext);
  return (
    <html className={`${theme ?? ""}`} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/_static/favicon.ico" />
        <link rel="preload" as="font" href="/_static/fonts/Montserrat-Light.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="font" href="/_static/fonts/Montserrat-Medium.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="manifest" href="/_static/manifest.json" />
        <meta name="theme-color" content="#b2dd3c" />
        <meta name="msvalidate.01" content="6DCCF2846BD9A91B5A8764CF0F5C1E76" />
        <meta name="yandex-verification" content="d925384339661f7d" />
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls nonce={cspNonce} ssrTheme={Boolean(loaderData.theme)} />

      </head>
      <body>
        <Header />
        <Outlet />
        <GolGrid initPopulation={loaderData.grid} />
        <ScrollRestoration nonce={cspNonce} />
        <Scripts nonce={cspNonce} />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const { theme } = useLoaderData<typeof loader>()



  return (
    <ThemeProvider specifiedTheme={theme}>
      <App />
    </ThemeProvider>
  )

}