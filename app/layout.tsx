

import AuthContext from './AuthContext';
import NavBar from "./NavBar";
import './globals.css';



export default async function RootLayout({ children } : { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className="text-white bg-black font-sfpro">
          <AuthContext>
            <NavBar /> 
            <main className="min-w-0 p-10 m-auto max-w-prose">
                {children}
            </main>
          </AuthContext>
        </body>
      </html>
    )
  };