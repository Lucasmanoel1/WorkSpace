// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prismaAuth } from "./prisma-auth";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET!,    // TOP-LEVEL
  database: prismaAdapter(prismaAuth, { provider: "postgresql" }),
  emailAndPassword: { enabled: true, requireEmailVerification: false },
  session: {
    // sem cookie aqui — usa defaults
  },
});
