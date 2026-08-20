# saadqureshea.github.io

My personal portfolio — [saadqureshea.github.io](https://saadqureshea.github.io)

Built with **Next.js** (static export) and **Tailwind CSS**. Deployed to GitHub
Pages automatically on every push to `main` via GitHub Actions.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # static site written to ./out
```

## Editing content

All copy and project data lives in [`app/data.js`](app/data.js) — profile,
projects, skills, and education are plain objects, so updating the site
doesn't mean touching component markup.

## Structure

```
app/
├── data.js         all site content
├── layout.js       fonts + metadata
├── page.js         section composition
└── globals.css     design tokens and utilities
components/
├── Nav.jsx
├── Hero.jsx
├── About.jsx
├── Work.jsx            project case studies
├── ProjectPreview.jsx  rendered UI mockups per project
├── Skills.jsx
├── Contact.jsx
├── Section.jsx
└── Reveal.jsx          scroll-reveal wrapper
```
