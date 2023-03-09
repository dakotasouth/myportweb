import NavBar from "./NavBar";
import './globals.css';

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className="text-white bg-black font-inter">
            <NavBar />
            <main className="min-w-0 p-10 m-auto max-w-prose">
                {children}
            </main>
        </body>
      </html>
    );
  }