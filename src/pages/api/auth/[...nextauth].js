import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { auth } from "@services/api";

const options = {
  theme: {
    colorScheme: "auto",
    brandColor: "#89cfe0",
  },
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
          console.log(credentials);
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
};

export default NextAuth(options);
