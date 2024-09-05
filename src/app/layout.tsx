import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import favicon from "../../public/favicon.ico"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QuickbetMovies",
  description: "QuickbetMovies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src}/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
