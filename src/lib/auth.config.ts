import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: any }): Promise<JWT> {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }): Promise<Session> {
      if (token) {
        session.user.userId = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },

    authorized({ auth, request }: { auth: Session | null; request: NextRequest }) {
      // console.log(auth);
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl.pathname?.startsWith("/admin");
      const isOnBlogPage = request.nextUrl.pathname?.startsWith("/blog");
      const isOnLoginPage = request.nextUrl.pathname?.startsWith("/login");

      // 관리자 부분
      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // 블로그 부분은 유저만 접근 가능
      if (isOnBlogPage && !user) {
        return false;
      }

      // 로그인 한부분만 가능
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
