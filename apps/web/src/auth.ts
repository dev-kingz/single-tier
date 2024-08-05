import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {loginSchema} from "./schemas";
import {JWT} from "next-auth/jwt";

async function refreshToken(token: JWT): Promise<JWT> {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/auth/authenticator/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.tokens.refreshToken}`,
      },
      body: JSON.stringify({stayLoggedIn: token.tokens.stayLoggedIn}),
    });

    const response = await res.json();

    return {
      ...token,
      tokens: response,
    };
  } catch (error) {
    throw new Error(error as any);
  }
}

export const {handlers, signIn, signOut, auth} = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
        stayLoggedIn: {type: "boolean"},
      },
      authorize: async (credentials) => {
        try {
          if (credentials === null) return null;
          const {email, password, stayLoggedIn} = await loginSchema.parseAsync(credentials);

          const response = await fetch(`${process.env.SERVER_URL}/auth/authenticator/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password, stayLoggedIn}),
          });

          if (!response.ok) {
            throw new Error("Invalid credentials");
          }

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
      if (user) return {...token, ...user};

      if (new Date().getTime() < token.tokens.expiresIn - 5 * 60 * 1000) {
        return token; // Consider a buffer of 5 minutes
      }
      
      return await refreshToken(token);
    },
    async session({token, session}) {
      session.user = token.user as any;
      session.tokens = token.tokens;

      return session;
    },
  },
});
