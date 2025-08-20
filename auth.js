import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./db/prisma.js";
import { compareSync } from "bcryptjs";
import { authConfig } from "./auth.config.js";
import { cookies } from "next/headers";

const fullConfig = {
  ...authConfig,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findFirst({ where: { email: credentials.email } });
        if (!user?.password) return null;
        if (!compareSync(credentials.password, user.password)) return null;

        try {
          const cookieStore = await cookies();
          const sessionCartId = cookieStore.get("sessionCartId")?.value;
          if (sessionCartId) {
            const sessionCart = await prisma.cart.findFirst({ where: { sessionCartId } });
            if (sessionCart) {
              await prisma.cart.deleteMany({ where: { userId: user.id } });
              await prisma.cart.update({ where: { id: sessionCart.id }, data: { userId: user.id } });
            }
          }
        } catch {}

        return { id: user.id, name: user.name ?? null, email: user.email, role: user.role };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user = session.user || {};
      session.user.id = token.id;
      session.user.name = token.name;
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.role = user.role;
      }
      if (trigger === "update" && session?.name) token.name = session.name;
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(fullConfig);
