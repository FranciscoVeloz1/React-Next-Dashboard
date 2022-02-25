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
      id: "app-login",
      name: "template",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
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
          console.log(error);
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
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(profile);
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
};

export default NextAuth(options);
