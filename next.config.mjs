/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` emits plain HTML/CSS/JS into ./out,
  // which can be served from GitHub Pages, Vercel, Netlify — anywhere.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
