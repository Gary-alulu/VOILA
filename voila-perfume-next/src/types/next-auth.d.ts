import 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      isProfileComplete?: boolean;
    } & DefaultSession['user'];
  }

  interface JWT {
    id: string;
    isProfileComplete?: boolean;
}