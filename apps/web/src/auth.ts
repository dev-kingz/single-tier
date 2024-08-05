import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {loginSchema} from "./schemas";

export const {handlers, signIn, signOut, auth} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          if (credentials === null) return null;
          const {email, password} = await loginSchema.parseAsync(credentials);
          
          const response = await fetch(`${process.env.SERVER_URL}/auth/authenticator/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
          });

          if (response) {
            const user = await response.json();
            return user;
          } else {
            throw new Error("No user found");
          }
        } catch (error) {
          throw new Error(error as any);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({token, user}) {
      if (user)  return {...token, ...user};
      
      return token;
    },
    async session({token,session}) {
      session.user = token.user as any;
      session.tokens = token.tokens;

      return session;
  },
  },
});
