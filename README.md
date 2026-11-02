# Aayush Tyagi — Portfolio

A responsive React + TypeScript portfolio with a layered interactive 3D workspace, scroll reveals, custom project interface studies, and filterable selected work.

## Develop

```sh
npm install
npm run dev
```

## Verify and build

```sh
npx tsc --noEmit
npm run build
```

Deploy the generated `dist/` directory through the existing hosting provider for aayushtyagi.live.

## Update projects and links

Edit `src/content.ts`. It holds the public contact/social links and project list. Each project supports a `github` URL and an optional `live` URL. The project arrow uses the live URL first, then GitHub, and otherwise opens an email request for details. No placeholder project links are published in the active page.

Memory AI and ResQRoute are featured first, with descriptions based on their repository README and source. Project visuals are labelled concept previews, not screenshots. Original projects remain in the work collection.

## Motion and accessibility

- The workspace responds to pointer movement and includes a pause control.
- The hero links directly to the featured Memory AI and ResQRoute repositories.
- Reduced-motion preferences disable continuous animation and smooth scrolling.
- The hero uses CSS perspective and Framer Motion without requiring WebGL or model downloads.
- Native pointer, keyboard focus indicators, skip navigation, labelled controls, and responsive mobile navigation are retained.
- The contact form submits directly to the original Formspree endpoint (`xkoayjdn`), with sending, success, and error states plus a verification fallback. Override the endpoint with `VITE_FORMSPREE_KEY` or `VITE_FORMSPREE_FORM_ID` in Vercel environment settings. Direct email and copy-email links are also available.

## Main files

- `src/App.tsx`: page layout, project filtering, contact interactions.
- `src/content.ts`: projects and social links.
- `src/components/ContactForm.tsx`: inline email delivery through Formspree.
- `src/components/HeroWorkspace.tsx`: layered project previews, floating motion, and spring-based pointer tilt.
- `src/index.css`: theme, layout, interface studies, responsive rules.

The previous section components and video assets remain in the repository for reference; the redesigned page uses the files listed above.
