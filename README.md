## My Portfolio (Next.js 15 · App Router · TypeScript · SCSS)

Personal portfolio built with Next.js App Router, TypeScript, SCSS modules, and a lightweight carousel. It showcases projects, work experience, and contact links.

### Tech Stack

-   **Framework**: Next.js 15 (App Router)
-   **Language**: TypeScript
-   **UI**: SCSS Modules, Google Fonts (`Abril_Fatface`), MUI Icons
-   **Carousel**: `react-responsive-carousel`
-   **Images/Assets**: `public/images/**` (WebP)

### Key Features

-   **App Router structure** with `src/app/layout.tsx` and `src/app/page.tsx`.
-   **Global styles** in `src/app/globals.scss` and SCSS modules under `src/components/Layout/**`.
-   **Carousel component** `src/components/Carousel/MyCarousel.tsx` driven by data in `src/constants/demos.ts`.
-   **Icon abstraction** via `src/components/Icon/MyIcon.tsx` (MUI Icons).
-   **Path alias** `@/*` configured in `tsconfig.json`.
-   **SEO metadata & Open Graph** configured in `src/app/layout.tsx`.
-   **Auto-redirect on 404** using `src/app/not-found.tsx` to redirect to `/`.

---

## Getting Started

### Prerequisites

-   Node.js 18+ and npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
# visit http://localhost:3000
```

### Build

```bash
npm run build
```

### Start (Production)

```bash
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure (excerpt)

```
src/
  app/
    layout.tsx           # Root layout with fonts, SEO metadata, header/footer
    page.tsx             # Home page: intro, projects, work exp, contact
    globals.scss         # Global styles + carousel overrides
    not-found.tsx        # Redirects unknown routes to '/'
  components/
    Carousel/MyCarousel.tsx
    Icon/MyIcon.tsx
    Layout/
      MyHeader.tsx, MyFooter.tsx, *.module.scss
  constants/
    demos.ts             # Carousel data sources
  interfaces/
    *.ts                 # Component interfaces (e.g., CarouselItem, Icon)
public/
  images/**              # Web assets (og, fav, demos, etc.)
```

---

## Customization

-   **Content**: Update texts in `src/app/page.tsx`.
-   **Carousel items**: Edit `src/constants/demos.ts`; place images under `public/images/demo`.
-   **Styles**: Tweak `src/app/globals.scss` and layout SCSS modules in `src/components/Layout/**`.
-   **Icons**: Extend `src/components/Icon/MyIcon.tsx` for new icon names.
-   **SEO**: Adjust `metadata` in `src/app/layout.tsx` (title, description, Open Graph, icons).

---

## Deployment

The project is optimized for Vercel. After building, you can deploy with your preferred provider. For Vercel-specific guidance, see Next.js deployment docs.

---

## Scripts

-   `dev`: start development server
-   `build`: production build
-   `start`: run production server
-   `lint`: run ESLint

---
