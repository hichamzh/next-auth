import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <header className="mb-10 mt-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-green-800 mb-2">
          Bienvenue sur MonApp
        </h1>
        <p className="text-green-700 text-lg">
          Votre tableau de bord moderne avec Next.js & NextAuth
        </p>
      </header>
      <main className="flex flex-col items-center gap-8">
        <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center w-full max-w-md border border-green-200">
          <h2 className="text-2xl font-semibold mb-4 text-green-900">
            Accéder à votre espace
          </h2>
          <p className="mb-6 text-green-700 text-center">
            Connectez-vous pour accéder à votre tableau de bord personnalisé.
          </p>
          <p className="mb-4 text-green-500 text-center text-sm">
            <strong>Note :</strong> Ceci est une simple découverte de NextAuth.
            Aucune donnée personnelle n'est utilisée ou stockée.
          </p>
          <Link
            href="/dashboard"
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold shadow"
          >
            Accéder au tableau de bord
          </Link>
        </div>
      </main>
      <footer className="mt-16 text-green-400 text-sm">
        © {new Date().getFullYear()} MonApp. Propulsé par Next.js & NextAuth.
      </footer>
    </div>
  );
}
