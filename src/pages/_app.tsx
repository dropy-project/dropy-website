import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

// eslint-disable-next-line import/extensions
import 'assets/styles/globals.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => (
  <SessionProvider session={session}>
    <Component {...pageProps} />
  </SessionProvider>
);

export default MyApp;
