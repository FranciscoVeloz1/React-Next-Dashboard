import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { auth } from "@services/api";

const options = {
  theme: "light",
  debug: true,
  session: {},
  jwt: {},
  providers: [
    CredentialsProvider({
      id: "templateLogin",
      name: "template",
      authorize: async (credentials) => {
        try {
          const res = await fetch(`${process.env.API_DEV}/auth/template`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });

          const user = await res.json();
          if (user) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signin",
  },
};

export default NextAuth(options);
