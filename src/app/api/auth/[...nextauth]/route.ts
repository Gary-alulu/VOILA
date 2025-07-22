// ... existing code ...

callbacks: {
    async jwt({ token, user }) {
        if (user) {
            // Assuming your user object from the database has a 'role' property
            token.role = user.role;
        }
        return token;
    },
    async session({ session, token }) {
        if (token.role) {
            session.user.role = token.role;
        }
        return session;
    },
},

// ... existing code ...