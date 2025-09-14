'use client'

import {signIn} from "next-auth/react"

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Connexion</h2>
        <button
          onClick={() => signIn("github" , {redirectTo: "/dashboard"})}
          className="flex items-center justify-center w-full mb-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition cursor-pointer"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
          Se connecter avec GitHub
        </button>
        <button
          onClick={() => signIn("google", {redirectTo: "/dashboard"})}
          className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:bg-gray-100 transition  cursor-pointer"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
            <g>
              <path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.2 3.23l6.86-6.86C35.68 2.13 30.13 0 24 0 14.82 0 6.73 5.8 2.69 14.09l7.98 6.19C12.13 13.13 17.56 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.43-4.74H24v9.01h12.41c-.54 2.91-2.18 5.38-4.65 7.04l7.19 5.59C43.93 37.13 46.1 31.36 46.1 24.55z"/>
              <path fill="#FBBC05" d="M10.67 28.28a14.5 14.5 0 0 1 0-8.56l-7.98-6.19A23.97 23.97 0 0 0 0 24c0 3.82.92 7.43 2.69 10.66l7.98-6.19z"/>
              <path fill="#EA4335" d="M24 48c6.13 0 11.28-2.03 15.04-5.53l-7.19-5.59c-2 1.34-4.56 2.13-7.85 2.13-6.44 0-11.87-3.63-14.33-8.89l-7.98 6.19C6.73 42.2 14.82 48 24 48z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </g>
          </svg>
          Se connecter avec Google
        </button>
      </div>
    </div>
  )
}

export default Login