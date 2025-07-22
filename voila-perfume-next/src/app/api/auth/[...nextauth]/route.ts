import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await dbConnect();
        console.log('Attempting to authorize user:', credentials?.email);

        // Proceed with regular email/password authentication
        const user = await User.findOne({ email: credentials?.email });

        if (!user) {
          console.log('User not found for email:', credentials?.email);
          return null;
        }

        const isPasswordValid = await bcrypt.compare(
          credentials?.password || '',
          user.password
        );

        if (!isPasswordValid) {
          console.log('Invalid password for user:', credentials?.email);
          return null;
        }
        console.log('User authorized successfully:', user.email);

        return { id: user._id.toString(), name: user.name, email: user.email, isProfileComplete: user.isProfileComplete, role: user.role };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isProfileComplete = (user as any).isProfileComplete;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.isProfileComplete = (token as any).isProfileComplete;
      session.user.role = (token as any).role;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
