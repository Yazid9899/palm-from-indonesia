# Palm From Indonesia
*Showcasing Indonesian agricultural exports for global buyers.*

## What This App Does
Palm From Indonesia is a marketing and inquiry web app for PT. Dua Zamrud Khatulistiwa. It helps potential buyers explore export products (vanilla, coconut derivatives, palm sugar, and spices), review product specs, and submit quote/sample requests through a contact form.

## Key Features
- Modern landing page with export value proposition, company profile, certifications, and buyer testimonials
- Product catalog at `/products` with dynamic detail pages at `/products/[slug]`
- Centralized product content and metadata in `constants/data.ts`
- Contact page with form validation and API-based email delivery
- Responsive navigation with desktop dropdown + mobile menu
- Built with Next.js App Router, TypeScript, and Tailwind CSS

## How It Works
High-level flow:

```text
User visits website
  -> App Router pages render UI sections (home/products/contact)
  -> Product data is read from constants/data.ts
  -> User submits contact form on /contact
  -> POST /api sends email via Nodemailer (Gmail SMTP)
  -> Inquiry is delivered to sales@palmfromindonesia.com
```

Project structure:

```text
app/
  page.tsx                 # Home page
  products/page.tsx        # Product listing
  products/[slug]/page.tsx # Dynamic product detail
  contact/page.tsx         # Inquiry form page
  api/route.ts             # Contact form email endpoint
components/
  Navbar.tsx
  Footer.tsx
constants/
  data.ts                  # Product/catalog/content data
  type.ts                  # TypeScript interfaces
```

## Installation
### Requirements
- Node.js 20+ (LTS recommended)
- npm

### Setup
```bash
# 1) Install dependencies
npm install

# 2) Create .env.local (see Configuration section below)

# 3) Run local server
npm run dev
```

Open `http://localhost:3000`.

## How To Use
1. Visit `/` to review brand profile, featured products, certifications, and testimonials.
2. Open `/products` to browse the full catalog.
3. Open a product detail page (for example `/products/vanilla`) to see variants, profiles, and specifications.
4. Go to `/contact` and submit the inquiry form to send a message to the sales mailbox.

Example API request:

```bash
curl -X POST http://localhost:3000/api \
  -H "Content-Type: application/json" \
  -d '{
    "firstName":"Jane",
    "lastName":"Buyer",
    "companyName":"Acme Foods",
    "email":"jane@example.com",
    "phone":"+1-555-1234",
    "address":"New York, USA",
    "message":"Requesting vanilla sample and MOQ details."
  }'
```

## Configuration
Create `.env.local` in the project root:

```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASS=your-gmail-app-password
```

Environment variables used:
- `EMAIL_USER`: Sender account used by Nodemailer
- `EMAIL_PASS`: App password for the sender account

Notes:
- The recipient address is currently hardcoded to `sales@palmfromindonesia.com` in `app/api/route.ts`.
- For Gmail, use an App Password (not your normal login password).

## How To Test
Automated tests are not configured yet in this project.

Use these checks instead:

```bash
# Production build check
npm run build
```

Manual smoke test:
- Verify `/`, `/products`, `/products/[slug]`, and `/contact` load correctly
- Submit the contact form and confirm email delivery
- If you add linting, migrate ESLint config to the current format before enabling it in CI

## Contributing
- Create a feature branch from `main`
- Keep changes focused and typed (TypeScript)
- Run `npm run build` before opening a PR
- Include a short description of UI/behavior changes in your PR

## License
No license file is currently included in this repository.

Until a license is added, the code is effectively "all rights reserved" by default.
