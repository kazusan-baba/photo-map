import type { Metadata } from "next";
import {AppRouterCacheProvider} from "@mui/material-nextjs/v15-appRouter"
import localFont from "next/font/local";
import Link from "next/link";
import { Link as MuiLink } from "@mui/material";

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

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="ja">
  <body className={`${geistSans.variable} ${geistMono.variable}`}>
    <AppRouterCacheProvider>
      <header>
				<MuiLink
					component={Link}
					variant={"h1"}
					href={"/"}
					underline={"none"}
					sx={{p: 2}}
				>
					PhotoMap
				</MuiLink>
      </header>
      <main>
        {children}
      </main>
    </AppRouterCacheProvider>
  </body>
  </html>
);
export default RootLayout;
