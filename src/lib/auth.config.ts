import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";


export default {
  secret: process.env.AUTH_SECRET,  //exiger en production non en local
    // debug: true, // <-- active les logs détaillés
  providers: [
    GitHub({
    clientId: process.env.AUTH_GITHUB_ID,
    clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ]
  
} satisfies NextAuthConfig

// console.log("process.env.NEXTAUTH_TRUST_HOST", process.env.AUTH_TRUST_HOST);
