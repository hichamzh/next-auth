import NextAuth from "next-auth";
import authConfig from "./auth.config";

// handlers : gestionnaires d'API pour les routes d'authentification (API endpoints)
// signIn : fonction pour connecter un utilisateur
// signOut : fonction pour déconnecter un utilisateur
// auth : fonction pour récupérer la session utilisateur côté serveur
export const { handlers, signIn, signOut, auth } = NextAuth({
    session: { strategy: "jwt" },
  ...authConfig,
});
