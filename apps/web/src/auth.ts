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
          console.log("inside authorize", email, password);

          const user = await fetch(`${process.env.SERVER_URL}/api/auth/login`, {

          if (user) {
            const isMatched = true;

            if (isMatched) {
              return user;
            } else {
              throw new Error("Invalid credentials");
            }
          } else {
            throw new Error("No user found");
          }
        } catch (error) {
          throw new Error(error as any);
        }
      },
    }),
  ],
});
