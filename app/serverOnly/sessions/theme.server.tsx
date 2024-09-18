import { createCookieSessionStorage } from '@remix-run/node'

import invariant from "tiny-invariant";
import { Theme, isTheme } from '~/utils/provider/theme-provider';
// import { Theme, isTheme } from '../provider/theme-provider';

invariant(process.env.SESSION_SECRET);

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    secure: true,
    secrets: [process.env.SESSION_SECRET],
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
  },
})

async function getThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get('Cookie'))
  return {
    getTheme: () => {
      const themeValue = session.get('theme');


      // light as default if no preferences
      return isTheme(themeValue) ? themeValue : Theme.DARK;
      // return themeValue;
    },
    setTheme: (theme: Theme) => session.set('theme', theme),
    commit: () =>
      themeStorage.commitSession(session, { expires: new Date('2111-11-11') }),
  }
}

export { getThemeSession }