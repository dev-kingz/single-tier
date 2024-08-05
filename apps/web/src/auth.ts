import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {loginSchema} from "./schemas";
import {JWT} from "next-auth/jwt";
import {z} from "zod";

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

    if (!res.ok) {
      throw new Error("Failed to refresh token");
    }

    const response = await res.json();
    return {...token, tokens: response};
  } catch (error) {
    console.error("Error refreshing token:", error);
    throw new Error("Authentication error");
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
        stayLoggedIn: {},
      },
      authorize: async (credentials) => {
        try {
          if (credentials === null) return null;

          // Convert stayLoggedIn to boolean
          const stayLoggedIn = credentials.stayLoggedIn === "true";

          const {email, password} = await loginSchema.parseAsync({
            ...credentials,
            stayLoggedIn,
          });

          // const validatiedCredentials = loginSchema.parse(credentials);
          const res = await fetch(`${process.env.SERVER_URL}/auth/authenticator/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password, stayLoggedIn}),
          });

          if (!res.ok) {
            throw new Error("Invalid credentials");
          }

          const user = await res.json();
          return user || null;
        } catch (error) {
          console.error("Error during authorization:", error);
          throw new Error("Authentication error");
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
