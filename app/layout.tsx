import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Assistants API Quickstart",
  description:
    "A quickstart unanchacc-gpt template using the Assistants API with OpenAI",
  icons: {
    icon: "/unanchaccgpt.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
        <img className="logo" src="/unanchaccgpt.svg" alt="OpenAI Logo" />
      </body>
    </html>
  );
}
