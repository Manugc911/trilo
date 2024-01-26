import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trilo",
  description: "Task Manager application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="flex justify-center mt-3">
        <h1 className="text-4xl tracking-widest">Trilo</h1>
        </header>
        {children}
        <footer>
          My footer
        </footer>
        </body>
    </html>
  );
}
