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

// Runs before first paint so the stored theme is applied without a flash of
// the wrong palette. Kept tiny and dependency-free on purpose.
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    document.documentElement.dataset.theme = stored || (prefersLight ? 'light' : 'dark');
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={inter.variable}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
