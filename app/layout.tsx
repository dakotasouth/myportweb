import NavBar from "./NavBar";
import './globals.css';

export default function RootLayout({ children } : { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className="font-inter bg-black text-white">
            <NavBar />
            <main className="flex justify-center p-8 min-h-screen">
                {children}
            </main>
        </body>
      </html>
    );
  }