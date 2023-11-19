import Link from "next/link";
import NavBar from "../components/navbar";
import { orbitron, exo } from "./fonts";
import "./globals.css";

export const metadata = {
  title: {
    template: `%s | Indie Gamer`,
    default: "Indie Gamer",
  },
  description: "The best indie games, reviewed for you",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${exo.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>

        <footer className="border-t py-3 text-center text-xs text-slate-500 ">
          Game data and images courtesy of{" "}
          <a
            className="text-orange-800 hover:underline"
            href="https://rawg.io/"
            target="_blank"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
