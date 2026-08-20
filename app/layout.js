import { Inter } from "next/font/google";
import { profile } from "./data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.subhead,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.subhead,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
