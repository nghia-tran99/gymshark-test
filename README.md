# Gymshark Test Storefront (Next.js 15 + Tailwind CSS)

A standalone prototype testing the Gymshark-inspired e-commerce architecture designed to deploy seamlessly to Vercel.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS (Gymshark dark aesthetic)
- **Icons**: Lucide React
- **Hosting Target**: Vercel

---

## Deploy to Vercel (Recommended Cloud Path)

Because Vercel builds your project in its own cloud container, you do not even need Node.js installed locally.

### Step 1: Initialize Git and Push to GitHub
Inside this folder (`gymshark-test`):
```bash
git init
git add .
git commit -m "feat: initial gymshark storefront prototype"
```

Create a new repository on GitHub (or use the GitHub CLI already installed on your Mac):
```bash
gh repo create gymshark-test --public --source=. --remote=origin --push
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** → **"Project"**.
3. Import your `gymshark-test` repository from GitHub.
4. Leave all default settings (Framework Preset will automatically say **Next.js**).
5. Click **"Deploy"**.
6. Within 60 seconds, your site will be live with a free `*.vercel.app` URL!

---

## Local Development (Optional)

If you want to run the project locally on your Mac:

1. Install Node.js via Homebrew:
   ```bash
   brew install node
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure
```text
gymshark-test/
├── app/
│   ├── globals.css          # Tailwind base & dark theme variables
│   ├── layout.tsx           # Global header with Gymshark navigation & announcement bar
│   └── page.tsx             # Hero banner, brand props, and 3-column product grid
├── components/
│   ├── product/
│   │   └── product-card.tsx # Image hover flip, size pills, and quick-add actions
│   └── ui/
│       └── button.tsx       # Gymshark high-contrast button primitives
├── lib/
│   └── mock-data.ts         # Mock fitness catalog with Unsplash imagery
├── next.config.mjs          # Image domain allowlist
├── tailwind.config.ts       # Custom gymshark colors
└── package.json             # Dependencies
```
