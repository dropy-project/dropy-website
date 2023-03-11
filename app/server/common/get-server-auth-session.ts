/* eslint-disable camelcase */
import { type GetServerSidePropsContext } from 'next';
import { unstable_getServerSession } from 'next-auth';

import { authOptions } from '../..//api/auth/[...nextauth]';

/**
 * Wrapper for unstable_getServerSession https://next-auth.js.org/configuration/nextjs
 * See example usage in trpc createContext or the restricted API route
 */
export const getServerAuthSession = async (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
// eslint-disable-next-line no-return-await
}) => await unstable_getServerSession(ctx.req, ctx.res, authOptions);
