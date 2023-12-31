import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import Head from "next/head";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Terribly Tiny Tales - Assignment",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>

      <StyledComponentsRegistry>
        <link rel="icon" href="/ttt (1).svg" type="image/svg+xml"></link>
        <body className={inter.className}>{children}</body>
      </StyledComponentsRegistry>
    </html>
  );
}
