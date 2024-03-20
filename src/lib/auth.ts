import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";

const login = async (credentials: any) => {
  try {
    connectToDb();

    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      throw new Error("잘못된 로그인 입니다.");
    }

    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

    if (!isPasswordCorrect) {
      throw new Error("잘못된 로그인 입니다.");
    }

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("로그인에 실패했습니다.!");
  }
};

export const {
  handlers: { POST, GET },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(profile);
      if (account?.provider === "github") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile?.email });

          if (!user) {
            const newUser = new User({
              username: profile?.login,
              email: profile?.email,
              image: profile?.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
});
