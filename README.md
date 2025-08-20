# 🛍️ Ideal Mobile Detailing (Next.js Rewrite)

> **Status:** 🚧 In Progress — Started on `2025-08-12`  
> This is my ongoing rewrite of a previously built React e-commerce app, rebuilt in Next.js for performance, SEO, and scalability improvements.

---

## 📌 Project Overview

This is a **Next.js** version of my original **React e-commerce application**.  
The goal is to take the existing functionality and improve it with:

- Server-Side Rendering (SSR) & Static Site Generation (SSG)
- Tailwind CSS for styling
- Better project structure & maintainability
- Improved SEO performance
- Cleaner developer experience

---

## 🛠️ Tech Stack

- **Framework:** Next.js (v15+)
- **Styling:** Tailwind CSS
- **Language:** Javascript
- **Backend:** _(Prisma + PostgreSQL)_
- **Deployment:** Vercel

---

## 📂 Planned Project Structure

```plaintext
project/
  ├─ app/              # App Router pages & layouts
  ├─ components/       # UI components
  ├─ styles/           # Global styles
  ├─ lib/              # Utility functions & API helpers
  ├─ public/           # Static assets
  ├─ README.md
  └─ package.json
```

---

## 🎯 Goals for This Rewrite

- Maintain all **core features** from the original React app
- Add Admin Dashboard
- Add Customer Dashboard
- Improve page load performance with SSR/ISR
- Use **Next.js routing** instead of React Router
- Set up a **component library** for reusable UI
- Implement proper SEO metadata handling
- Make the codebase easy to extend for future features

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/your-repo-name.git

# Install dependencies
npm install

# Run the dev server
npm run dev

# Create new prisma database migration
npx prisma migrate dev --name "mirgration-name"

#Add Shadcn components
npx shadcn@latest add dropdown-menu

```

---

## 📅 Roadmap

- [ ] Migrate homepage
- [ ] Migrate service listing
- [ ] Add service detail pages
- [ ] Add Gallery Page
- [ ] Add checkout flow
- [ ] Set up authentication
- [ ] Add Admin Dashboard
- [ ] Add Customer Dashboard
- [ ] Deploy to Vercel

## 📝To Do

- [ ] Update Left Drawer
- [ ] Add Admin Gallery Image form
- [ ] Add Google Map and Reviews
