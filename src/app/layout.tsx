import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode}>) => (
  <html lang="ja">
  <body className={`${geistSans.variable} ${geistMono.variable}`}>
    <header>
      <Link href={"/"}>
        <h1>PhotoMap</h1>
      </Link>
    </header>
    <main>
      {children}
    </main>
  </body>
  </html>
);
export default RootLayout;
