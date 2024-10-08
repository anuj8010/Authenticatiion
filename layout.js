import { Inter } from "next/font/google";
import "./globals.css";
import Sesionwrapper from "./signup/business/sesionwrapper";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Sesionwrapper>
      <body className={inter.className}>{children}</body>
      </Sesionwrapper>
    </html>
  );
}
